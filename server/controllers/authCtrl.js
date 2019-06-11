const bcrypt = require('bcryptjs')

module.exports = {

    register: async (req, res) => {
        const {
          admin_first_name,
          admin_last_name,
          admin_email,
          username,
          password
        } = req.body;
        const db = req.app.get("db");
        const { session } = req;
        const adminFound = await db.check_admin_email({ admin_email });
        if (adminFound[0]) return res.status(409).send("Email already exists");
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const createdAdmin = await db.register_admin({
          admin_first_name,
          admin_last_name,
          admin_email,
          username,
          password: hash
        });
        session.admin = {
          id: createdAdmin[0].login_id,
          firstname: createdAdmin[0].admin_first_name,
          lastname: createdAdmin[0].admin_last_name,
          email: createdAdmin[0].admin_email,
          username: createdAdmin[0].username
        };
        res.status(200).send(session.admin);
      },
    
      login: async (req, res) => {
        const db = req.app.get("db");
        const { session } = req;
        const {admin_email, password} = req.body
        console.log('admin_email', admin_email)
        const adminFound = await db.check_admin_email({admin_email})
        console.log('adminFound', adminFound)
        if(!adminFound[0]) return res.status(404).send(`Admin does not exist`)
        const authenticated = bcrypt.compareSync(password, adminFound[0].password)
        if (authenticated) {
            session.admin = {
              id: adminFound[0].admin_id, 
              email: adminFound[0].admin_email,
            }
            res.status(200).send(session.admin)
        } else {
            res.status(401).send(`Incorrect username or password`)
        }
      },
    
      getAdmin: (req, res) => {
        if (req.session.admin) return res.status(200).send(req.session.admin);
      },
    
      logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
      }
      
}