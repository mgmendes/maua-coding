CREATE DATABASE IF NOT EXISTS log
    DEFAULT CHARACTER SET = 'utf8mb4';

USE log;

CREATE TABLE IF NOT EXISTS registro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prompt_tokens INT,
    completion_tokens INT,
    total_tokens INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);