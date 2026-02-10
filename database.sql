CREATE DATABASE IF NOT EXISTS meu_projeto_ts;
USE meu_projeto_ts;

CREATE TABLE IF NOT EXISTS user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (name, email, password, date) VALUES 
('Usuario Teste', 'teste@email.com', 'senha123', NOW()),
('Outro Usuario', 'outro@email.com', 'senha456', '2024-01-01 12:00:00');
