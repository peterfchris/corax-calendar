CREATE TABLE potential_clients (
    potential_id SERIAL PRIMARY KEY,
    potential_title VARCHAR(250),
    potential_start_date VARCHAR(250),
    potential_start_time VARCHAR(250),
    potential_end_date VARCHAR(250),
    potential_end_time VARCHAR(250),
    event_id integer
);