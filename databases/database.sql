CREATE DATABASE IF NOT EXISTS rankingapp;

USE rankingapp;

-- Crear la tabla personas
CREATE TABLE personas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL DEFAULT 'sin datos',
    apellido VARCHAR(50) NOT NULL DEFAULT 'sin datos',
    dni VARCHAR(20) UNIQUE NOT NULL DEFAULT 'sin datos',
    commitid INT DEFAULT NULL,  
    contraseña VARCHAR(255) NOT NULL DEFAULT 'sin datos',
    correo VARCHAR(100) UNIQUE NOT NULL DEFAULT 'sin datos',
    username VARCHAR(50) UNIQUE NOT NULL DEFAULT 'sin datos',
    rol VARCHAR(20) NOT NULL DEFAULT 0,
    rankg INT DEFAULT 0
);

-- Crear la tabla repositorios
CREATE TABLE repositorios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    persona_id INT,
    FOREIGN KEY (persona_id) REFERENCES personas(id)
);

-- Crear la tabla commit
CREATE TABLE commit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL DEFAULT 'sin datos',
    mensaje TEXT,
    repositorio_id INT,
    FOREIGN KEY (repositorio_id) REFERENCES repositorios(id)
);
