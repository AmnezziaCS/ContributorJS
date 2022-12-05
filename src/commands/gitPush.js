const { execSync } = require("child_process");

function gitPush() {
  execSync(`git push -u origin main`, {
    cwd: process.env.TARGET_FOLDER_PATH,
  });
  return console.log(
    `Changes pushed successfully to ${process.env.GIT_REPOSITORY} .`
  );
}

module.exports = gitPush;
