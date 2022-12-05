const changeFile = require("./changeFile");

const weekend = [0, 6];
const maxCommitsPerDay = process.env.MAX_COMMITS_PER_DAY ?? 6;

function contributionsCreate() {
  const currentDate = new Date();
  const startingDate = new Date(
    currentDate.setFullYear(currentDate.getFullYear() - 1)
  );
  var commitDate = startingDate;

  for (i = 0; i < 365; i++) {
    commitAmount = Math.floor(Math.random() * maxCommitsPerDay);
    if (process.env.COMMIT_ON_WEEKENDS === "YES" || !weekend.includes(commitDate.getDay())) {
      for (f = 0; f < commitAmount; f++) {
        changeFile(commitDate);
        commitDate.setSeconds(commitDate.getSeconds() + 1);
      }
    }
    commitDate.setDate(commitDate.getDate() + 1);
  }
}

module.exports = contributionsCreate;
