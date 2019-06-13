CREATE TABLE motions (
    motion_id SERIAL PRIMARY KEY,
    motion_title VARCHAR(250),
    motion_due_date VARCHAR(250),
    hearing_id INTEGER REFERENCES hearings(hearing_id) ON DELETE CASCADE
);