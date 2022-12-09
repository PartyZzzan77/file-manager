import { enterAnotherCommand } from './enterAnotherCommand.js';

export const changeCatalog = (answer) => {
  try {
    const command = answer.split(' ');

    if (command.length > 2) {
      enterAnotherCommand();
    }

    process.chdir(command[1]);
  } catch {
    process.stdout.write(`\ninvalid path\n`);
    enterAnotherCommand();
  }
};
