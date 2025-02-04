import { pool } from "./connection";

// This file is only for making changes to the database and showing database selections. To view the inquiry prompts check ...

// Viewing all departments
const viewAllDepartments = async () => {
  const query = "SELECT * FROM department";
  const result = await pool.query(query);
  return result.rows;
};
// Viewing all roles
const viewAllRoles = async () => {
  const query =
    "SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id";
};

// Viewing all employees

// Adding a role

// Adding an employee

// Updating an employee

export {
  viewAllDepartments,
  viewAllRoles,
  //     viewAllEmployees,
  //     addDepartment,
  //     addRole,
  //     addEmployee,
  //     updateEmployeeRole,
};
