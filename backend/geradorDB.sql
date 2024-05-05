-- Active: 1713480462502@@127.0.0.1@3306
CREATE DATABASE IF NOT EXISTS gerador_avaliacoes
    DEFAULT CHARACTER SET = 'utf8mb4';

USE gerador_avaliacoes;

CREATE TABLE IF NOT EXISTS log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    mensagem VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS tb_questionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tema VARCHAR(300),
    disciplina VARCHAR(100),
    escolaridade VARCHAR(100),
    dificuldade VARCHAR(100),
    exemplo VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS tb_avaliacao (
    id_questionario INT NOT NULL,
    id_enunciado INT NOT NULL,
    id_resposta INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_questionario, id_enunciado, id_resposta),
    CONSTRAINT fk_questionario FOREIGN KEY (id_questionario) REFERENCES tb_questionario(id),
    CONSTRAINT fk_enunciado FOREIGN KEY (id_enunciado) REFERENCES tb_enunciado(id),
    CONSTRAINT fk_resposta FOREIGN KEY (id_resposta) REFERENCES tb_resposta(id)
);

CREATE TABLE IF NOT EXISTS tb_enunciado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    enunciado VARCHAR(300)
)

CREATE TABLE IF NOT EXISTS tb_resposta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resposta VARCHAR(300)
);