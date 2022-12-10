import fs from 'node:fs';
import path from 'node:path';
import { enterAnotherCommand } from '../enterAnotherCommand.js';
import { printInvalidPath } from '../printInvalidPath.js';
import { snowCurrentDir } from '../snowCurrentDir.js';

export const addEmptyFile = (answer) => {
  const command = answer.split(' ');

  if (command.length !== 2) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  const pathSrc = path.resolve(command[1]);
  console.log(pathSrc);

  fs.appendFile(pathSrc, '', (err) => {
    console.clear();
    process.stdout.write(`\nSuccess`);
    snowCurrentDir(process.cwd());

    if (err) {
      process.stdout.write(`\nSomething went wrong\n`);
      snowCurrentDir(process.cwd());
    }
  });
};
