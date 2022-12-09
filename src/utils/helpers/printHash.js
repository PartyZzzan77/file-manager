import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { snowCurrentDir } from './snowCurrentDir.js';
import { enterAnotherCommand } from './enterAnotherCommand.js';
import { printInvalidPath } from './printInvalidPath.js';

export const printHash = (answer) => {
  const command = answer.split(' ');

  if (command.length !== 2) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  const pathSrc = path.resolve(process.cwd(), command[1]);

  fs.readFile(pathSrc, (err, data) => {
    if (err) {
      printInvalidPath();
      enterAnotherCommand();
      snowCurrentDir(process.cwd());
    } else {
      const hash = createHash('sha256');
      const hex = hash.update(data).digest('hex');
      process.stdout.write(`\n\nHash ${command[1]}: ${hex}\n`);
      snowCurrentDir(process.cwd());
    }
  });
};
