/**
 * @description init 命令处理
 */
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { listTable } = require(`${__dirname}/../utils`);
const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');

let tplList = require(`${__dirname}/../templates`);

const initCommand = [ 
    {
        type: 'input',
        name: 'templateName',
        message: 'TemplateName:',
        validate (val) {
            if (tplList[ val ]) {
                return true;
            } else if (val === '') {
                return 'TemplateName is required!';
            } else if (!tplList[ val ]) {
                return 'The template doesn\'t exists.';
            }
        }
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'ProjectName:',
        validate (val) {
            if (val !== '') {
                return true;
            }
            return 'ProjectName is required!';
        }
    },
    {
        type: 'input',
        name: 'place',
        message: 'Where to init the project:',
        default: './'
    }
]

module.exports = prompt(initCommand).then(({ templateName, projectName, place }) => {
    const gitPlace = tplList[ templateName ][ 'templateUrl' ];
    const gitBranch = tplList[ templateName ][ 'branch' ];
    const spinner = ora('Downloading template...');

    spinner.start();
    // test pattern
    // const str = 'https://github.com/wupengju/The-question-bank-script.git';
    // const str1 = 'git@github.com:wupengju/The-question-bank-script.git';
    const templateUrl = gitPlace.replace(/com\//, 'com:').replace(/^git\@/, 'https://').replace(/\.git$/, '');
    download(`${templateUrl}`, `${place}${projectName}`, (err) => {
        if (err) {
            console.log(chalk.red(err));
            process.exit();
        }
        spinner.stop();
        console.log(chalk.green(`New project has been initialized to ${place}${projectName} successfully!`));
    });
})
