import chalk from 'chalk';
import * as figlet from 'figlet';
const packageData = require('../package.json');

figlet.text(process.argv[2], (error: any, data: any) => {
    if (error) {
        return process.exit(1);
    }

    if (process.argv[3] == 'long') {
        console.log(chalk.blue(data));
        console.log('Build complete');
        console.log('Package name: ' +  packageData.name);
        console.log('Version: ' + packageData.version);
    } else {
        console.log(`Processing.. ${process.argv[2]}`);
    }

    return process.exit(0);
});