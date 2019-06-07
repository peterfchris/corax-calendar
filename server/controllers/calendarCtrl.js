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
    const db = req.app.get("db");
    const allEvents = await db.get_all_events().catch(err => console.log(err));
    res.status(200).send(allEvents);
  },

  updateEvent: (req, res) => {
    const { title, start, startDate, endDate, end } = req.body;
    const { id } = req.params;
    const db = req.app.get("db");
    // write logic to structure the times
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
    db.delete_calendar_event({ id }).catch(err => console.log(err));
    res.sendStatus(200);
  }
};
