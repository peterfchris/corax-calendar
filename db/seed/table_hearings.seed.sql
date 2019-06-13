CREATE TABLE hearings (
    hearing_id SERIAL PRIMARY KEY,
    hearing_title VARCHAR(250),
    hearing_due_date VARCHAR(250),
    event_id INTEGER 
);