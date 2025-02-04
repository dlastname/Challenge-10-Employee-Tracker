-- Insert departments
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

-- Insert roles
INSERT INTO
    role (title, salary, department)
VALUES
    -- role_id = 1
    ('Emperor', 1000000000.00, 4),
    -- role_id = 2
    ('Software Engineer', 90000.00, 1),
    -- role_id = 3
    ('Senior Software Engineer', 120000.00, 1),
    -- role_id = 4
    ('HR Manager', 75000.00, 2),
    -- role_id = 5
    ('HR Associate', 50000.00, 2),
    -- role_id = 6
    ('Financial Analyst', 70000.00, 3),
    -- role_id = 7
    ('Accountant', 65000.00, 3),
    -- role_id = 8
    ('Marketing Manager', 85000.00, 4),
    -- role_id = 9
    ('Marketing Specialist', 55000.00, 4),
    -- role_id = 10
    ('Sales Lead', 80000.00, 5),
    -- role_id = 11
    ('Sales Representative', 60000.00, 5);

-- Insert employees
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    -- Johnny Silverhand is a Software Engineer with no manager.
    ('Johnny', 'Silverhand', 2, NULL),
    -- V is a Senior Software Engineer, managed by Johnny Silverhand.
    ('V', 'Smith', 3, 1),
    -- Leia Organa is an HR Manager with no manager.
    ('Leia', 'Organa', 4, NULL),
    -- Finn is an HR Associate, managed by Leia Organa.
    ('Finn', 'Human', 5, 3),
    -- Tony Stark is a Sales Lead with no manager.
    ('Tony', 'Stark', 10, NULL),
    -- Peter Parker is a Sales Representative, managed by Tony Stark.
    ('Peter', 'Parker', 11, 5),
    -- Sora is a Marketing Manager with no manager.
    ('Sora', 'Keyblade', 8, NULL),
    -- Riku is a Marketing Specialist, managed by Sora.
    ('Riku', 'Darkness', 9, 7),
    -- Kevin Flynn is a Financial Analyst with no manager.
    ('Kevin', 'Flynn', 6, NULL),
    -- CLU is an Accountant, managed by Kevin Flynn.
    ('CLU', 'Flynn', 7, 9),
    -- Add Sheev Palpatine as an Emperor and his own manager.
    ('Sheev', 'Palpatine', 1, NULL);

-- Set Sheev Palpatine as his own manager (manager_id = id of Sheev).
UPDATE employee
SET manager_id = (SELECT id FROM employee WHERE first_name = 'Sheev' AND last_name = 'Palpatine')
WHERE first_name = 'Sheev' AND last_name = 'Palpatine';

-- Set Sheev Palpatine as manager for all employees who do not have a manager.
UPDATE employee
SET manager_id = (SELECT id FROM employee WHERE first_name = 'Sheev' AND last_name = 'Palpatine')
WHERE manager_id IS NULL;