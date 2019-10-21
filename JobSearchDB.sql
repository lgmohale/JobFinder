-- Create a table for jobs

CREATE TABLE jobs(
    job_id BIGSERIAL NOT NULL PRIMARY KEY,
    job_title VARCHAR (150) NOT NULL,
    company_name VARCHAR (150) NOT NULL,
    company_website VARCHAR (150) NOT NULL,
    company_email VARCHAR (150) NOT NULL,
    company_phone VARCHAR (10),
    company_description text NOT NULL,
    job_type VARCHAR (150),
    job_location VARCHAR (150) NOT NULL,
    job_resp text NOT NULL,
    job_req text NOT NULL,
    job_budget VARCHAR (20),
    created_at DATE,
    updated_at DATE
);