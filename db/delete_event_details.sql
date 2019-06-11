delete from event_details
where event_id = ${id};

-- delete from event_details
-- using potential_clients
-- where event_details.event_id = potential_clients.event_id
-- and event_id = ${id};