function finalConsoleLog() {
  return console.log(
    `\n\n\n\nChanges have been pushed to your remote repository. You can now look at your Git graph to see the results.\n\n- Note that you can switch the repository to private at any time and that it will keep it's contents.\n- Also note that deleting that said repository will remove the activity from your profile.\n\n\n\n`
  );
}

module.exports = finalConsoleLog;
