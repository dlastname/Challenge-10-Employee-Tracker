import { pool } from "./connection.js";

// This file is only for making changes to the database and showing database selections. To view the inquiry prompts check inquirerPrompts.ts

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
// Adding a department
const addDepartment = async (name: string) => {
  const query = `INSERT INTO department (name) VALUES ($1)`;
  await pool.query(query, [name]);
  console.log("Done!");
};
// Adding a role
const addRole = async (title: string, salary: number, department: number) => {
  const query = `INSERT INTO role (title, salary, department) VALUES ($1, $2, $3)`;
  await pool.query(query, [title, salary, department]);
  console.log("Done!");
};
// Adding an employee
const addEmployee = async (
  first_name: string,
  last_name: string,
  role_id: number,
  manager_id: number | null
) => {
  const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`;
  await pool.query(query, [first_name, last_name, role_id, manager_id]);
  console.log("Done!");
};
// Updating an employee
const updateEmployeeRole = async (employeeId: number, roleId: number) => {
  const query = "UPDATE employees SET role_id = $1 WHERE id = $2";
  await pool.query(query, [roleId, employeeId]);
};

export {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
