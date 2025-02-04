import { pool } from "./connection.js";

// This file is only for making changes to the database and showing database selections. To view the inquiry prompts check ...

// Viewing all departments
const viewAllDepartments = async () => {
  const query = `SELECT * FROM department`;
  const result = await pool.query(query);
  return result.rows;
};

// Viewing all roles
const viewAllRoles = async () => {
  const query = `SELECT 
      role.id, 
      role.title,
      role.salary, 
      department.name AS department 
    FROM
      role
    JOIN
      department ON role.department = department.id`;
  const result = await pool.query(query);
  return result.rows;
};

// Viewing all employees
const viewAllEmployees = async () => {
  const query = `SELECT
    employee.id,
    employee.first_name,
    employee.last_name,
    role.title AS title,
    manager.first_name AS manager_first_name,
    manager.last_name AS manager_last_name
FROM
    employee
JOIN
    role ON employee.role_id = role.id
LEFT JOIN
    employee AS manager ON employee.manager_id = manager.id;`;
  const result = await pool.query(query);
  return result.rows;
};
// Adding a role

// Adding an employee

// Updating an employee

export {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  //     addDepartment,
  //     addRole,
  //     addEmployee,
  //     updateEmployeeRole,
};
