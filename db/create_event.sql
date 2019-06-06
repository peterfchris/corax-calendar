insert into event_details
(title, start, end)
VALUES
(${title}, ${start}, ${end})
RETURNING event_id;