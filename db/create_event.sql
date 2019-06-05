insert into event_details
(event_name, start_time, start_date, end_time, end_date)
VALUES
(${event_name}, ${start_time}, ${start_date}, ${end_time}, ${end_date})
RETURNING event_id;