import { resolve, join } from 'node:path';
// import { spawn, exec } from 'node:child_process';
import fs from 'node:fs';
const fileList50Day = ['index.html', 'style.css', 'script.js'];
export function create50DayTemplate(folder: string, cwd = process.cwd()): any {
  const isFolderExisted = isPathExisted(folder);
  try {
    if (!isFolderExisted) fs.mkdirSync(folder);
    const path = resolve(cwd, folder);
    fileList50Day.forEach(file => {
      const filePath = join(path, file);
      const isFileExisted = fs.existsSync(filePath);
      if (!isFileExisted) fs.writeFileSync(filePath, '');
    });
  } catch (e) {
    console.warn(`create50DayTemplate failed`);
    process.exit(0);
  }
}
export function isPathExisted(pathStr: string, cwd = process.cwd()): boolean {
  const path = resolve(cwd, pathStr);
  try {
    // 判断命令运行位置是否有当前文件/文件夹
    fs.accessSync(path);
    return true;
  } catch (e) {
    return false;
  }
}
