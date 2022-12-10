import fs from 'node:fs';
import path from 'node:path';
import { enterAnotherCommand } from '../enterAnotherCommand.js';
import { printInvalidPath } from '../printInvalidPath.js';
import { snowCurrentDir } from '../snowCurrentDir.js';

export const readFile = (answer) => {
  const command = answer.split(' ');
  const pathSrc = path.resolve(command[1]);
  const rs = fs.createReadStream(pathSrc);

  rs.on('error', () => {
    printInvalidPath();
    enterAnotherCommand();
    snowCurrentDir(process.cwd());
  });

  rs.on('end', () => snowCurrentDir(process.cwd()));
  rs.on('data', () => process.stdout.write('\n\n'));

  if (command.length !== 2) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  rs.pipe(process.stdout);
};
