const fs = require("fs");
const gitAdd = require("../commands/gitAdd");
const gitCommit = require("../commands/gitCommit");

function changeFile(commitDate) {
  const commitMessageDate = commitDate.toLocaleDateString();

  fs.appendFileSync(
    `./tmp/readme.md`,
    `${commitDate}\n\n`,
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  gitAdd();
  gitCommit(commitMessageDate, commitDate);
  return;
}

module.exports = changeFile;
