insert into event_details
(title, start, end_2)
VALUES
(${title}, ${start}, ${end})
RETURNING event_id;