/**
 * @description delete 命令处理
 */
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { listTable } = require(`${__dirname}/../utils`);

let tplList = require(`${__dirname}/../templates`);

const deleteCommand = [ 
    {
        type: 'input',
        name: 'templateName',
        message: 'Which template(templateName) you want to delete:',
        validate (val) {
            if (tplList[ val ]) {
                return true;
            } else if (val === '') {
                return 'TemplateName is required!';
            } else if (!tplList[ val ]) {
                return 'The template doesn\'t exists.';
            }
        }
    }
 ]

module.exports = prompt(deleteCommand).then(({ templateName }) => {
    delete tplList[ templateName ];

    writeFile(`${__dirname}/../templates.json`, JSON.stringify(tplList), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
        listTable(tplList, `The ${templateName} Template has been deleted successfully!`);
    })
})
