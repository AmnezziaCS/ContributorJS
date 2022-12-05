const { execSync } = require("child_process");

function gitBranchAdd() {
  execSync(`git branch -M main`, {
    cwd: `./tmp`,
  });
  return console.log(`Branch successfully set to main.`);
}

module.exports = gitBranchAdd;
