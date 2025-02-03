INSERT INTO
    department (name)
VALUES
    -- ID: 1
    ('Engineering'),
    -- ID: 2
    ('Human Resources'),
    -- ID: 3
    ('Finance'),
    -- ID: 4
    ('Marketing'),
    -- ID: 5
    ('Sales');

INSERT INTO
    role (title, salary, department)
VALUES
    -- role_id = 1
    ('Software Engineer', 90000.00, 1),
    -- role_id = 2
    ('Senior Software Engineer', 120000.00, 1),
    -- role_id = 3
    ('HR Manager', 75000.00, 2),
    -- role_id = 4
    ('HR Associate', 50000.00, 2),
    -- role_id = 5
    ('Financial Analyst', 70000.00, 3),
    -- role_id = 6
    ('Accountant', 65000.00, 3),
    -- role_id = 7
    ('Marketing Manager', 85000.00, 4),
    -- role_id = 8
    ('Marketing Specialist', 55000.00, 4),
    -- role_id = 9
    ('Sales Lead', 80000.00, 5),
    -- role_id = 10
    ('Sales Representative', 60000.00, 5);

INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    -- Johnny Silverhand is a Software Engineer with no manager.
    ('Johnny', 'Silverhand', 1, NULL),
    -- V is a Senior Software Engineer, managed by Johnny Silverhand.
    ('V', 'Smith', 2, 1),
    -- Leia Organa is an HR Manager with no manager.
    ('Leia', 'Organa', 3, NULL),
    -- Finn is an HR Associate, managed by Leia Organa.
    ('Finn', 'Human', 4, 3),
    -- Tony Stark is a Sales Lead with no manager.
    ('Tony', 'Stark', 5, NULL),
    -- Peter Parker is a Sales Representative, managed by Tony Stark.
    ('Peter', 'Parker', 6, 5),
    -- Sora is a Marketing Manager with no manager.
    ('Sora', 'Keyblade', 7, NULL),
    -- Riku is a Marketing Specialist, managed by Sora.
    ('Riku', 'Darkness', 8, 7),
    -- Kevin Flynn is a Financial Analyst with no manager.
    ('Kevin', 'Flynn', 9, NULL),
    -- CLU is an Accountant, managed by Kevin Flynn.
    ('CLU', 'Flynn', 10, 9);