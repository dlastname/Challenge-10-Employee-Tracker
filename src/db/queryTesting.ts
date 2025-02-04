// !THIS FILE HAS NO FUNCTIONAL PURPOSE, IT'S ONLY TO CALL WHEN TESTING NEW QUERIES

import { pool } from "./connection.js";

import { viewAllDepartments, viewAllRoles, viewAllEmployees } from "./db.js";

const testQueries = async () => {
  try {
    const departments = await viewAllDepartments();
    console.log("Departments: ", departments);

    const roles = await viewAllRoles();
    console.log("Roles: ", roles);

    const employees = await viewAllEmployees();
    console.log("Employees: ", employees);
  } catch (err) {
    console.error("Error testing queries:", err);
  } finally {
    await pool.end();
  }
};

testQueries();