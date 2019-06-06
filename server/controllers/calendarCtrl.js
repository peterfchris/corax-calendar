module.exports = {
    
    createEvent: (req, res) => {
    const { title, start, end } = req.body;
    const db = req.app.get("db");
    db.create_event({
      title, 
      start,
      end
    }).catch(err => console.log(err));
    res.status(200).send("event created");
  },
  
  getEvent: async (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    const event = await db.get_event({ id }).catch(err => console.log(err));
    res.status(200).send(event);
  },

  getAllEvents: async (req, res) => {
    const db = req.app.get("db")
    const allEvents = await db.get_all_events()
    .catch(err => console.log(err))
    res.status(200).send(allEvents)
  },
  
  updateEvent: (req, res) => {
    const { title, start, end } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");
    db.update_event({
      title,
      start,
      end,
      id
    }).catch(err => console.log(err));
    res.status(200).send("event updated");
  },
  
  deleteEvent: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_calendar_event({ id })
      .catch(err => console.log(err));
    res.sendStatus(200);
  }

}