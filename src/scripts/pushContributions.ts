import { gitPush, gitRemoteAdd } from '../gitCommands';

export const pushContributions = () => {
    console.log(`Pushing contributions to GitHub...`);
    gitRemoteAdd();
    gitPush();
    console.log(`Contributions pushed successfully! 🎉`);
};
