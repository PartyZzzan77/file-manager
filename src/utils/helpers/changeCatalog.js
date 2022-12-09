import path from 'node:path';
import { enterAnotherCommand } from './enterAnotherCommand.js';

export const changeCatalog = (answer) => {
  try {
    const command = answer.split(' ');
    const pathSrc = path.resolve(command[1]);

    if (command.length > 2) {
      enterAnotherCommand();
    }

    process.chdir(pathSrc);
  } catch {
    process.stdout.write(`\ninvalid path\n`);
    enterAnotherCommand();
  }
};
