/**
 * @description list 命令处理
 */
const { listTable } = require(`${__dirname}/../utils`);

let tplList = require(`${__dirname}/../templates`);

module.exports = listTable(tplList);