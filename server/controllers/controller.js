const bcrypt = require("bcryptjs");

module.exports = {
  // Admin Endpoints
  //Works
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
      username: createdAdmin[0].username
    };
    res.status(200).send(session.admin);
  },
//   Works
  login: async (req, res) => {
    const db = req.app.get("db");
    const { session } = req;
    const {admin_email, password} = req.body
    const adminFound = await db.check_admin_email({admin_email})
    if(!adminFound[0]) return res.status(401).send(`Admin does not exist`)

    const authenticated = bcrypt.compareSync(password, adminFound[0].password)
    if (authenticated) {
        session.admin = {id: adminFound[0].admin_id, admin_first_name: adminFound[0].admin_first_name}
        res.status(200).send(session.admin)
    } else {
        res.status(401).send(`Incorrect username or password`)
    }
  },
//  works
  getAdmin: (req, res) => {
    if (req.session.admin) return res.status(200).send(req.session.admin);
  },
//   Works
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
//   works
  createEvent: (req, res) => {
    const { event_name, start_time, start_date, end_time, end_date } = req.body;
    const db = req.app.get("db");
    db.create_event({
      event_name,
      start_time,
      start_date,
      end_time,
      end_date
    }).catch(err => console.log(err));
    res.status(200).send("event created");
  },
  //works
  getEvent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const event = await db.get_event({ id }).catch(err => console.log(err));
    res.status(200).send(event);
  },
  //works
  updateEvent: (req, res) => {
    const { event_name, start_time, start_date, end_time, end_date } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");
    db.update_event({
      event_name,
      start_time,
      start_date,
      end_time,
      end_date,
      id
    }).catch(err => console.log(err));
    res.status(200).send("event updated");
  },
//works
  deleteEvent: (req, res) => {
    const db = req.app.get("db");
    const { event_id } = req.params;
    db.delete_calendar_event({ event_id })
      .catch(err => console.log(err));
    res.sendStatus(200);
  },
  // Potential Client Controllers
  //Works
  createClient: (req, res) => {
    const {
      potential_first,
      potential_last,
      potential_email,
      potential_phone
    } = req.body;
    const db = req.app.get("db");
    db.create_potential_client({
      potential_first,
      potential_last,
      potential_email,
      potential_phone,
      event_id: null
    }).catch(err => console.log(err));
    res.status(200).send("new potential");
  },
  //Works
  createConsultation: (req, res) => {
    const {
      potential_first,
      potential_last,
      potential_email,
      potential_phone,
      event_name,
      start_time,
      start_date,
      end_time,
      end_date
    } = req.body;
    const db = req.app.get("db");
    db.create_event({ event_name, start_time, start_date, end_time, end_date })
      .then(dbResponse => {
        const { event_id } = dbResponse[0];
        console.log(event_id);
        return db.create_potential_client({
          potential_first,
          potential_last,
          potential_email,
          potential_phone,
          event_id
        });
      })
      .then(() => {
        return db.get_consultation({ potential_email });
      })
      .then(consultationData => {
        res.send(consultationData);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
