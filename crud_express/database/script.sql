-- HOSPITAL DB

-- source script.sql;

DROP DATABASE controle_atendimento;
CREATE DATABASE IF NOT EXISTS controle_atendimento;
USE controle_atendimento;

-- ======================================================================================

-- TABELA ATENDIMENTOS
CREATE TABLE IF NOT EXISTS atendimentos ( 
    id INT NOT NULL auto_increment, 
    DATA DATE,
    servico VARCHAR(100),
    cliente VARCHAR(100),
    STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo",
    PRIMARY KEY (id)
);

-- ======================================================================================

-- INSERIR DADOS ATENDIMENTOS
INSERT INTO atendimentos (DATA, servico, cliente) VALUES
('2024-06-13', 'corte cabelo', 'ronaldo'),
('2024-06-17', 'manicuri', 'fenomeno');

-- ======================================================================================

SHOW TABLES;

SELECT * FROM atendimentos;

