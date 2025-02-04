// inquirerPrompts.ts
import inquirer from "inquirer";
import {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
//   addDepartment,
//   addRole,
//   addEmployee,
//   updateEmployeeRole,
} from "./db.js";

// Main menu prompt
const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
      ],
    },
  ]);

  switch (action) {
    case "View all departments":
      await handleViewAllDepartments();
      break;
    case "View all roles":
      await handleViewAllRoles();
      break;
    case "View all employees":
      await handleViewAllEmployees();
      break;
    case "Add a department":
      await handleAddDepartment();
      break;
    case "Add a role":
      await handleAddRole();
      break;
    case "Add an employee":
      await handleAddEmployee();
      break;
    case "Update an employee role":
      await handleUpdateEmployeeRole();
      break;
    case "Exit":
      process.exit();
  }
};

// Handler for viewing all departments
const handleViewAllDepartments = async () => {
  const departments = await viewAllDepartments();
  console.table(departments);
  mainMenu();
};

// Handler for viewing all roles
const handleViewAllRoles = async () => {
  const roles = await viewAllRoles();
  console.table(roles);
  mainMenu();
};

// Handler for viewing all employees
const handleViewAllEmployees = async () => {
  const employees = await viewAllEmployees();
  console.table(employees);
  mainMenu();
};

// Handler for adding a department
const handleAddDepartment = async () => {
  const department = await viewAllEmployees();
  


  mainMenu();
};

export { mainMenu };
