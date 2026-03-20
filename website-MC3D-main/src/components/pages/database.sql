DROP DATABASE IF EXISTS PrintClub;
CREATE DATABASE PrintClub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE PrintClub;

CREATE TABLE IF NOT EXISTS PrintSubmissions (
    submission_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    file_url VARCHAR(512),       -- optional URL from the form
    file_name VARCHAR(255),      -- optional uploaded file name
    material VARCHAR(100),
    printer VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    status ENUM('Pending','In Progress','Completed') NOT NULL DEFAULT 'Pending',
    submitted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS PrintQueueLog (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NOT NULL,
    action ENUM('Queued','Started','Finished','Canceled') NOT NULL,
    action_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES PrintSubmissions(submission_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
