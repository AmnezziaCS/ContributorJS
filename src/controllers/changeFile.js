const fs = require("fs");
const gitAdd = require("../commands/gitAdd");
const gitCommit = require("../commands/gitCommit");

function changeFile(commitDate) {
  const commitMessageDate = commitDate.toLocaleDateString();

  fs.appendFileSync(
    `${process.env.TARGET_FOLDER_PATH}/readme.md`,
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
