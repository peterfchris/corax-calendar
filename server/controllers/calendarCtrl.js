module.exports = {
  createEvent: (req, res) => {
    const {
      title,
      start,
      end,
      hearingDueDate,
      hearingTitle,
      motionDate,
      responseDate,
      replyDate
    } = req.body;

    const newMotionDate = motionDate.replace("T00", "T12");
    const newResponseDate = responseDate.replace("T00", "T12");
    const newReplyDate = replyDate.replace("T00", "T12");

    const db = req.app.get("db");
    db.create_event({
      title,
      start,
      end
    })
      .then(eventId => {
        return db.create_event_hearing({
          event_id: eventId[0].event_id,
          hearing_title: hearingTitle,
          hearing_due_date: hearingDueDate
        });
      })
      .then(hearingId => {
        return db.create_event_motion({
          hearing_id: hearingId[0].hearing_id,
          motion_title: `Motion to ${hearingTitle}`,
          motion_due_date: newMotionDate,
          response_title: `Response to ${hearingTitle}`,
          response_due_date: newResponseDate,
          reply_title: `Reply to ${hearingTitle}`,
          reply_due_date: newReplyDate
        });
      })
      .then(() => res.status(200).send("event created"))
      .catch(err => console.log(err));
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
        return db.get_motions()
      })
      
      .then(motions => {
        allEvents = [...allEvents, ...motions];
        return db.get_replies()
      })
      .then(replies => {
        allEvents = [...allEvents, ...replies]
        return db.get_responses()
      })
      .then(responses => {
        allEvents = [...allEvents, ...responses];
        return db.get_hearings()
      })
      .then(hearings => {
        allEvents = [...allEvents, ...hearings];
        res.status(200).send(allEvents);
      })
      .catch(err => console.log(err));    
  },

  updateEvent: (req, res) => {
    const { title, start, startDate, endDate, end } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");
    const newStartDate = `${startDate}T${start}:00`;
    const newEndDate = `${endDate}T${end}:00`;

    db.update_event({
      title,
      start: newStartDate,
      end: newEndDate,
      id
    })
      .then(dbRes => {
        res.status(200).send("event updated");
      })
      .catch(err => console.log(err));
  },

  deleteEvent: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_calendar_event({ id })
      .then(dbRes => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  }
};
