const { execSync } = require("child_process");

function gitAdd() {
  execSync(`git add ./readme.md`, {
    cwd: `./tmp`,
  });
  return console.log(`Changes added successfully.`);
}

module.exports = gitAdd;
