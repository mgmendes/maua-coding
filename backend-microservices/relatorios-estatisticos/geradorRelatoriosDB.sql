CREATE DATABASE IF NOT EXISTS relatorio_estatistico
    DEFAULT CHARACTER SET = 'utf8mb4';

USE relatorio_estatistico;

CREATE TABLE IF NOT EXISTS registro_estatistico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    prompt_tokens INT,
    completion_tokens INT,
    total_tokens INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);