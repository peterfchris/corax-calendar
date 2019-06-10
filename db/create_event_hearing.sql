insert into hearing
(hearing_title, hearing_due_date, event_id)
values 
(${hearing_title}, ${hearing_due_date}, ${event_id})
returning hearing_id