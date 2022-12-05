const { execSync } = require("child_process");

function gitBranchAdd() {
  execSync(`git branch -M main`, {
    cwd: process.env.TARGET_FOLDER_PATH,
  });
  return console.log(`Branch successfully set to main.`);
}

module.exports = gitBranchAdd;
