import path from 'node:path';
import { enterAnotherCommand } from './enterAnotherCommand.js';
import { printInvalidPath } from './printInvalidPath.js';

export const changeCatalog = (answer) => {
  try {
    const command = answer.split(' ');
    const pathSrc = path.resolve(command[1]);

    if (command.length !== 2) {
      printInvalidPath();
      enterAnotherCommand();
      return;
    }

    process.chdir(pathSrc);
  } catch {
    printInvalidPath();
    enterAnotherCommand();
  }
};
