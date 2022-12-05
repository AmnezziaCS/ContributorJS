const { execSync } = require("child_process");

function gitConfig() {
  execSync(`git config --global user.email ${process.env.GIT_USER_EMAIL}`);
  return console.log(
    `Git email successfully set to ${process.env.GIT_USER_EMAIL} .`
  );
}

module.exports = gitConfig;
