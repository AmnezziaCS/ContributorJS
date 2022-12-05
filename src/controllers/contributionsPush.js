const gitRemoteAdd = require("../commands/gitRemoteAdd");
const gitBranchAdd = require("../commands/gitBranchAdd");
const gitPush = require("../commands/gitPush");

function contributionsPush() {
  gitRemoteAdd();
  gitBranchAdd();
  gitPush();
}

module.exports = contributionsPush;
