import path from 'node:path';
import { rename } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { enterAnotherCommand } from '../enterAnotherCommand.js';
import { printInvalidPath } from '../printInvalidPath.js';
import { printCurrentDir } from '../printCurrentDir.js';

export const renameFile = async (answer) => {
  const command = answer.split(' ');

  if (command.length !== 3) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  const pathSrc = path.resolve(command[1]);
  const pathDist = path.resolve(command[2]);

  try {
    await access(pathSrc);
    await rename(pathSrc, pathDist);
  } catch (error) {
    printInvalidPath();
    printCurrentDir(process.cwd());
  }
};
