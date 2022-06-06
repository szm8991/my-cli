import { create50DayTemplate } from '../fs';
// 1.接受命令参数——一个参数代表文件夹
const args = process.argv.slice(2);
// 2。判断文件夹是否存在
create50DayTemplate(args[0]);
