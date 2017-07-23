/**
 * @description add 命令处理
 */
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { listTable } = require(`${__dirname}/../utils`);

let tplList = require(`${__dirname}/../templates`);

const addCommand = [ 
    {
        type: 'input',
        name: 'templateName',
        message: 'Set templateName:',
        default: 'test',
        validate (val) {
            if (tplList[ val ]) {
                return 'The templateName is existed!';
            } else if (val === '') {
                return 'TemplateName is required!';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'templateUrl',
        message: 'TemplateUrl of the template:',
        validate (val) {
            if (val !== '') {
                return true;
            }
            return 'TemplateUrl is required!';
        }
    },
    {
        type: 'input',
        name: 'branch',
        message: 'Branch of the templateUrl:',
        default: 'master'
    }
];

module.exports = prompt(addCommand).then(({ templateName, templateUrl, branch }) => {
    tplList[ templateName ] = {};
    tplList[ templateName ][ 'templateUrl' ] = templateUrl;
    tplList[ templateName ][ 'branch' ] = branch;

    writeFile(`${__dirname}/../templates.json`, JSON.stringify(tplList), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
        //　模板写入文件保存成功后，打印成表格输出
        listTable(tplList, `The ${templateName} template has been added successfully!`);
    });
});
