module.exports = {
    
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
  
  getEvent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const event = await db.get_event({ id }).catch(err => console.log(err));
    res.status(200).send(event);
  },
  
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
  
  deleteEvent: (req, res) => {
    const db = req.app.get("db");
    const { event_id } = req.params;
    db.delete_calendar_event({ event_id })
      .catch(err => console.log(err));
    res.sendStatus(200);
  }

}