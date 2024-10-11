import { gitAdd, gitCommit } from '../gitCommands';

const fs = require('fs');

const weekend = [0, 6];
const maxCommitsPerDay = process.env.MAX_COMMITS_PER_DAY
    ? parseInt(process.env.MAX_COMMITS_PER_DAY)
    : 6;

export const createContributions = () => {
    const currentDate = new Date();
    const startingDate = new Date(
        currentDate.setFullYear(currentDate.getFullYear() - 1),
    );

    let currentDateCopy = new Date(startingDate);
    while (currentDateCopy <= currentDate) {
        if (
            process.env.COMMIT_ON_WEEKENDS === 'true' ||
            !weekend.includes(currentDateCopy.getDay())
        ) {
            const randomCommits = Math.floor(Math.random() * maxCommitsPerDay);
            for (let i = 0; i < randomCommits; i++) {
                changeFile(new Date(currentDateCopy));
            }
        }
        currentDateCopy.setDate(currentDateCopy.getDate() + 1);
    }
};

const changeFile = (commitDate: Date) => {
    const commitMessageDate = commitDate.toLocaleDateString();

    fs.appendFileSync(
        `./tmp/readme.md`,
        `${commitDate}\n\n`,
        (err: Error | null) => {
            if (err) {
                throw err;
            }
        },
    );
    gitAdd();
    gitCommit(commitMessageDate, commitDate.toISOString());
    return;
};
