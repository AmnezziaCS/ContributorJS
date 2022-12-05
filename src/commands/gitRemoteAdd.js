const { execSync } = require("child_process");

function gitRemoteAdd() {
  execSync(`git remote add origin ${process.env.GIT_REPOSITORY}`, {
    cwd: process.env.TARGET_FOLDER_PATH,
  });
  return console.log(
    `Remote repository successfully set to ${process.env.GIT_REPOSITORY} .`
  );
}

module.exports = gitRemoteAdd;
