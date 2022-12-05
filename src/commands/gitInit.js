const { execSync } = require("child_process");

function gitInit() {
  execSync("git init -b main", { cwd: process.env.TARGET_FOLDER_PATH });
  execSync(`git config core.autocrlf false`, {
    cwd: process.env.TARGET_FOLDER_PATH,
  });
  return console.log(`Successfully initialized the repo.`);
}

module.exports = gitInit;
