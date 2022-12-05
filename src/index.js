require("dotenv").config();

const contributionsCreate = require("./controllers/contributionsCreate");
const contributionsPush = require("./controllers/contributionsPush");
const setup = require("./controllers/setup");
const finalConsoleLog = require("./finalConsoleLog");

try {
  if (!process.env.GIT_USER_EMAIL) {
    throw "No git login email provided, see .env";
  }
  if (!process.env.TARGET_FOLDER_PATH) {
    throw "No target folder path provided, see .env";
  }
  setup();
  contributionsCreate();
  if (!process.env.GIT_REPOSITORY) {
    return console.log(
      `Changes have been commited to the folder ${process.env.TARGET_FOLDER_PATH}. Have fun pushing !`
    );
  }
  contributionsPush();
  return finalConsoleLog();
} catch (error) {
  console.log(
    `Something went wrong. Please ensure that everything is correct.\n${error}`
  );
  process.exit();
}
