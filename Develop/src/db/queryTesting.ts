import { pool } from "./connection";

import { viewAllDepartments, viewAllRoles } from "./db";

const testQueries = async () => {
  try {
    const departments = await viewAllDepartments();
    console.log("Departments: ", departments);

    const roles = await viewAllRoles();
    console.log("Roles: ", roles);
  } catch (err) {
    console.error("Error testing queries:", err);
  } finally {
    await pool.end();
  }
};

testQueries();