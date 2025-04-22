CREATE DATABASE registration_db;
USE registration_db;

-- Table for Institute Types
CREATE TABLE institute_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL
);
INSERT INTO institute_types (type) VALUES ('School'), ('Playhouse'), ('College'), ('Competitive Exam Center');

-- Table for Standards
CREATE TABLE standards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    institute_type_id INT,
    FOREIGN KEY (institute_type_id) REFERENCES institute_types(id)
);
INSERT INTO standards (name, institute_type_id) VALUES 
('Pre-primary', 1), ('Higher Secondary', 1),
('LKG', 1), ('HKG', 1),
('9th', 1), ('10th', 1),
('Bachelor\'s', 3), ('Master\'s', 3);

-- Table for Subjects
CREATE TABLE subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    standard_id INT,
    FOREIGN KEY (standard_id) REFERENCES standards(id)
);
INSERT INTO subjects (name, standard_id) VALUES 
('English', 5), ('Math', 5),
('Science', 6), ('History', 6),
('Computer Science', 7), ('Physics', 8);

-- Table for Registrations
CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    institute_type_id INT,
    standard_id INT,
    subject_id INT,
    user_details JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (institute_type_id) REFERENCES institute_types(id),
    FOREIGN KEY (standard_id) REFERENCES standards(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);