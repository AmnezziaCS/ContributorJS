import { execSync } from 'child_process';

export const gitAdd = () => {
    execSync(`git add ./readme.md`, {
        cwd: `./tmp`,
    });
};

export const gitCommit = (commitMessageDate: string, commitDate: string) => {
    execSync(
        `git commit -m"doc(readme): ${commitMessageDate}" --date="${commitDate}"`,
        {
            cwd: `./tmp`,
        },
    );
    return console.log(`💻 Changes successfully commited for ${commitDate}.`);
};

export const gitPush = () => {
    execSync(`git push --set-upstream origin main`, {
        cwd: `./tmp`,
    });
    return console.log(`➡️ Changes successfully pushed.`);
};

export const gitRemoteAdd = () => {
    execSync(`git remote add origin ${process.env.GIT_REPOSITORY}`, {
        cwd: `./tmp`,
    });
};

export const gitSetup = () => {
    execSync(`git init  -b main`, {
        cwd: `./tmp`,
    });
    execSync(`git config core.autocrlf false`, {
        cwd: `./tmp`,
    });
    execSync(`git config user.email ${process.env.GIT_USER_EMAIL}`, {
        cwd: `./tmp`,
    });
    execSync(`git config user.name "GitHub Contributions Bot"`, {
        cwd: `./tmp`,
    });

    return console.log(`🛠️ Setup completed`);
};
