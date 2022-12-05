const { execSync } = require("child_process");

function gitCommit(commitMessageDate, commitDate) {
  execSync(
    `git commit -m"doc(readme): ${commitMessageDate}" --date="${commitDate}"`,
    {
      cwd: `./tmp`,
    }
  );
  return console.log(`Changes successfully commited for ${commitDate}.`);
}

module.exports = gitCommit;
