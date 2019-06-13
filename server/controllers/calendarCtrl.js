module.exports = {
  createEvent: (req, res) => {
    const { title, start, end } = req.body;
    const db = req.app.get("db");
    db.create_event({
      title,
      start,
      end
    })
    .then(() => res.status(200).send("event created"))
    .catch(err => console.log(err));
    },
    
    createHearing: (req, res) => {
      console.log('createHearing')
      const {
        title,
        start,
        end,
        motionDate,
        responseDate,
        replyDate
      } = req.body;
      
      const db = req.app.get("db");
      db.create_event({ title, start, end })
          .then(eventId => {
            return db.create_event_hearing({
              event_id: eventId[0].event_id,
              hearing_title: title,
              hearing_due_date: start
            });
          })
          .then(hearingId => {
            return db.create_event_motion({
              hearing_id: hearingId[0].hearing_id,
              motion_title: `Motion to ${title}`,
              motion_due_date: motionDate,
              response_title: `Response to ${title}`,
              response_due_date: responseDate,
              reply_title: `Reply to ${title}`,
              reply_due_date: replyDate
          });
        })
    .then(() => res.status(200).send('hearing created'))
    .catch(err => console.log(err))
  },

  getEvent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const event = await db
      .get_event({ id })
      .then(res => {
        res.status(200).send(event);
      })
      .catch(err => console.log(err));
  },

  getAllEvents: (req, res) => {
    const db = req.app.get("db");
    let allEvents = [];
    db.get_all_events()
      .then(events => {
        allEvents = [...events];
        return db.get_motions();
      })
      .then(motions => {
        allEvents = [...allEvents, ...motions];
        return db.get_replies();
      })
      .then(replies => {
        allEvents = [...allEvents, ...replies];
        return db.get_responses();
      })
      .then(responses => {
        allEvents = [...allEvents, ...responses];
        res.status(200).send(allEvents);
      })
      .catch(err => {res.status(500).send(`System failure`)});
  },

  updateEvent: (req, res) => {
    console.log(`this is ${req.body}`);
    const { title, start, startDate, endDate, end } = req.body;
    const { id } = req.params;
    const intId = +id;
    console.log("intId", intId);
    const db = req.app.get("db");
    const newStartDate = `${startDate}T${start}:00`;
    const newEndDate = `${endDate}T${end}:00`;
    db.update_event({
      title,
      start: newStartDate,
      end: newEndDate,
      id: intId
    })
      .then(dbRes => {
        res.status(200).send("event updated");
      })
      .catch(err => console.log(err));
  },

  deleteEvent: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_event_details({ id })
      .then(dbRes => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  },

  deleteHearing: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_hearing({ hearing_id: id })
      .then(motion => {
        return db.delete_motion({ hearing_id: id });
      })
      .then(response => {
        return db.delete_response({ hearing_id: id });
      })
      .then(reply => {
        return db.delete_reply({ hearing_id: id });
      })
      .then(dbRes => {
        res.sendStatus(200);
      });
  }
};
