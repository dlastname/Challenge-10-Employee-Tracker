// index.ts
import { connectToDb } from './db/connection.js';
import { mainMenu } from './db/inquirerPrompts.js';

const startApp = async () => {
  await connectToDb();
  mainMenu();
};

startApp();