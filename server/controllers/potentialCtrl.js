module.exports = {
    
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
        })
        .then(dbRes => {
          res.status(200).send(dbRes);
        })
        .catch(err => console.log(err));
      },
      
      createConsultation: async (req, res) => {
        const {
          potential_id,
          potential_first,
          potential_last,
          start,
          end
        } = req.body;
        const db = req.app.get("db");
        const potentialTitle = {title: `Potential Client Consultation - ${potential_first} ${potential_last}`}
        const {title} = potentialTitle
        await db.create_consultation({ title, start, end })
          .then(dbResponse => {
            const { event_id } = dbResponse[0];
            console.log(dbResponse);
            return db.update_consultation({
              potential_id,
              event_id
            });
          })
          .catch(err => {res.status(500).send(`System failure`)});
      }
}

// make a new method that contains create consultation, where on front end it will hit 
// with the update 