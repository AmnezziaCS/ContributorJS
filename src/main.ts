import 'dotenv/config';

import { createContributions } from './scripts/createContributions';
import { pushContributions } from './scripts/pushContributions';
import { setup } from './scripts/setup';

try {
    if (!process.env.GIT_USER_EMAIL) {
        throw "No git login email provided, please add it to the '.env' file.";
    }

    setup();
    createContributions();
    if (!process.env.GIT_REPOSITORY) {
        console.log(
            `Changes have been commited to the './tmp/' folder. Have fun pushing! 🎉`,
        );
    } else {
        pushContributions();
        console.log(
            `Changes have been pushed to ${process.env.GIT_REPOSITORY} 🎉`,
        );
        console.log(
            `You should now see the generated contributions on your profile. If not, please wait a few minutes.`,
        );
    }
} catch (error) {
    console.log(
        `Something went wrong. Please ensure that everything is correct. Error: ${error}`,
    );
    process.exit();
}
