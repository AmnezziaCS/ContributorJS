const { execSync } = require("child_process");

function gitRemoteAdd() {
  execSync(`git remote add origin ${process.env.GIT_REPOSITORY}`, {
    cwd: `./tmp`,
  });
  return console.log(
    `Remote repository successfully set to ${process.env.GIT_REPOSITORY} .`
  );
}

module.exports = gitRemoteAdd;
