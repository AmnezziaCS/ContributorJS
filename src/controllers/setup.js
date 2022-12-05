const fs = require("fs");
const gitConfig = require("../commands/gitConfig");
const gitInit = require("../commands/gitInit");
const deleteFolderRecursive = require("../utils/deleteFolderRecursive");

const dir = `./tmp/`;

function setup() {
  gitConfig();

  if (fs.existsSync(dir)) {
    deleteFolderRecursive(dir);
    console.log(`Deleted contents of ${dir}`);
  }
  fs.mkdirSync(dir);

  gitInit();
  fs.writeFileSync(
    `${dir}/readme.md`,
    ``,
    {
      encoding: "utf8",
      flag: "a",
      mode: 0o666,
    },
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  return;
}

module.exports = setup;
