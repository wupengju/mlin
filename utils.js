/**
 * @description 命令行中打印彩色表格
 */
const Table = require('cli-table');
const chalk = require('chalk');

const table = new Table({
    head: [ 'TemplateName', 'templateUrl', 'Branch' ],
    style: {
        head: [ 'blue' ]
    }
});

function listTable(tplList, promptInfo) {
    const list = Object.keys(tplList);
    let curTemplateStr = "";

    function printPromptInfo(promptInfo){
        console.log(table.toString());
        if (promptInfo) {
            console.log(chalk.green(`\u2714 ${promptInfo}`));
        }
        process.exit();
    }

    if (list.length) {
        list.forEach((key) => {
            curTemplateStr = tplList[ key ];
            table.push([ key, curTemplateStr[ 'templateUrl' ], curTemplateStr[ 'branch' ] ])
            if (table.length === list.length) {
                printPromptInfo(promptInfo);
            }
        });
    } else {
        printPromptInfo(promptInfo);
    }
};

exports.listTable = listTable;
