-- SELECT * from motions
-- join responses on motions.hearing_id = responses.hearing_id
-- join replies on responses.hearing_id = replies.hearing_id
-- join hearing on replies.hearing_id = hearing.hearing_id
-- join event_details on hearing.event_id = event_details.event_id;

select event_details.event_id as id, title, start, end_2 as end from event_details;
