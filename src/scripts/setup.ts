import fs from 'fs';

import { gitSetup } from '../gitCommands';
import { deleteFolderRecursive } from '../utils/deleteFolderRecursive';

const dir = './tmp';

export const setup = () => {
    if (fs.existsSync(dir)) {
        deleteFolderRecursive(dir);
        console.log(`Deleted contents of ${dir}`);
    }
    fs.mkdirSync(dir);

    gitSetup();
    fs.writeFileSync(`${dir}/readme.md`, ``, {
        encoding: 'utf8',
        flag: 'a',
        mode: 0o666,
    });
};
