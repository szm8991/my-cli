import { resolve, join } from 'node:path';
// import { spawn, exec } from 'node:child_process';
import fs from 'node:fs';
const fileList50Day = [
  {
    file: 'index.html',
    tmp: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <script src="script.js"></script>
      </body>
    </html>`,
  },
  {
    file: 'style.css',
    tmp: '',
  },
  {
    file: 'script.js',
    tmp: '',
  },
];
export function create50DayTemplate(folder: string, cwd = process.cwd()): any {
  const isFolderExisted = isPathExisted(folder);
  try {
    if (!isFolderExisted) fs.mkdirSync(folder);
    const path = resolve(cwd, folder);
    fileList50Day.forEach(({ file, tmp }) => {
      const filePath = join(path, file);
      const isFileExisted = fs.existsSync(filePath);
      if (!isFileExisted && file) fs.writeFileSync(filePath, tmp);
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
