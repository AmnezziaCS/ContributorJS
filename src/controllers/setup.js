const fs = require("fs");
const gitConfig = require("../commands/gitConfig");
const gitInit = require("../commands/gitInit");

function setup() {
  gitConfig();
  gitInit();
  fs.writeFileSync(
    `${process.env.TARGET_FOLDER_PATH}/readme.md`,
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
