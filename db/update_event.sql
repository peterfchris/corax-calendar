update event_details 
set event_name=${event_name}, start_time=${start_time}, start_date=${start_date}, end_time=${end_time}, end_date=${end_date}
where event_id = ${id}
RETURNING event_id;