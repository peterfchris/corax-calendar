select * from potential_clients
join event_details on potential_clients.event_id = event_details.event_id
where potential_clients.potential_email = ${potential_email};