// inquirerPrompts.ts
import inquirer from "inquirer";
import {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
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

// Handler for viewing all employees
const handleAddDepartment = async () => {
  const { department } = await inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "Enter department name",
    },
  ]);

  await addDepartment(department);
  console.log(`Department ${department} has been added!`);
  mainMenu();
};

// Handler for adding a role
const handleAddRole = async () => {
  const { title, salary, department } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter title name",
    },
    {
      type: "number",
      name: "salary",
      message: "Enter salary",
    },
    {
      type: "number",
      name: "department",
      message: "Enter department number",
    },
  ]);

  await addRole(title, salary, department);
  console.log(`Department ${department} has been added!`);
  mainMenu();
};

// Handler for adding an employee
const handleAddEmployee = async () => {
  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter the employee's first name:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the employee's last name:",
    },
    {
      type: "number",
      name: "roleId",
      message: "Enter the role ID for the employee:",
    },
    {
      type: "number",
      name: "managerId",
      message:
        "Enter the manager ID for the employee (or leave blank if none):",
    },
  ]);
  await addEmployee(firstName, lastName, roleId, managerId || null);
  console.log(`Employee "${firstName} ${lastName}" added successfully!`);
  mainMenu();
};

// Handler for updating an employee's role
const handleUpdateEmployeeRole = async () => {
  const { employeeId, roleId } = await inquirer.prompt([
    {
      type: "number",
      name: "employeeId",
      message: "Enter the ID of the employee to update:",
    },
    {
      type: "number",
      name: "roleId",
      message: "Enter the new role ID for the employee:",
    },
  ]);
  await updateEmployeeRole(employeeId, roleId);
  console.log(`Employee role updated successfully!`);
  mainMenu();
};
export { mainMenu };
