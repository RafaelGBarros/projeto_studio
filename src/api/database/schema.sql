-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS studio_db;
USE studio_db;

-- Tabela de modalidades
CREATE TABLE IF NOT EXISTS modalidades (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de professores
CREATE TABLE IF NOT EXISTS professores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(20),
    biografia TEXT,
    foto VARCHAR(255),
    modalidade_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (modalidade_id) REFERENCES modalidades(id)
);

-- Tabela de cadastros (alunos)
CREATE TABLE IF NOT EXISTS cadastros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(20),
    data_nascimento DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de noticias/eventos
CREATE TABLE IF NOT EXISTS noticias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    conteudo TEXT,
    tipo ENUM('noticia', 'evento') NOT NULL,
    data_evento DATE,
    local_evento VARCHAR(200),
    imagem VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 