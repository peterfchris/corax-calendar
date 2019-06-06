update event_details 
set title=${title}, start=${start=}, end=${end}
where event_id = ${id}
RETURNING event_id;