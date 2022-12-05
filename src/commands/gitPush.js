const { execSync } = require("child_process");

function gitPush() {
  execSync(`git push -u origin main`, {
    cwd: `./tmp`,
  });
  return console.log(
    `Changes pushed successfully to ${process.env.GIT_REPOSITORY} .`
  );
}

module.exports = gitPush;
