const { execSync } = require("child_process");

function gitInit() {
  execSync("git init -b main", { cwd: `./tmp` });
  execSync(`git config core.autocrlf false`, {
    cwd: `./tmp`,
  });
  return console.log(`Successfully initialized the repo.`);
}

module.exports = gitInit;
