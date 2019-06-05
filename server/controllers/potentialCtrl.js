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
        }).catch(err => console.log(err));
        res.status(200).send("new potential");
      },
      
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
}