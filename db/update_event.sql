update event_details 
set title=${title}, start=${start}, end_2=${end}
where event_id = ${id}
RETURNING event_id;