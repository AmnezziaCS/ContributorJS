const { execSync } = require("child_process");

function gitAdd() {
  execSync(`git add ${process.env.TARGET_FOLDER_PATH}/readme.md`, {
    cwd: process.env.TARGET_FOLDER_PATH,
  });
  return console.log(`Changes added successfully.`);
}

module.exports = gitAdd;
