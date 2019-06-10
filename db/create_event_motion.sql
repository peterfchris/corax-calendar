insert into motions
(motion_title, motion_due_date, hearing_id)
values 
(${motion_title}, ${motion_due_date}, ${hearing_id});

insert into responses
(response_title, response_due_date, hearing_id)
values 
(${response_title}, ${response_due_date}, ${hearing_id});

insert into replies
(reply_title, reply_due_date, hearing_id)
values 
(${reply_title}, ${reply_due_date}, ${hearing_id});