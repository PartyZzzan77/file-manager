import readline from 'node:readline';
import {
  commandMap,
  commandNeedCWD,
  commandNeedLineInterface,
  commandsDump,
  commandsNeedAnswer,
  commandsOS,
} from '../utils/commands/commands.js';
import { printCurrentDir } from '../utils/index.js';
class App {
  constructor() {
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'enter the command: ',
    });

    this._isArgs = process.argv.slice(2).length > 0;

    this._username = this._isArgs
      ? process.argv.slice(2)[0].split('=')[1]
      : 'anonymous';

    this._rl.on('line', (answer) => {
      const commandLine = answer.split(' ')[0];

      if (commandsDump.includes(commandLine)) {
        commandMap[commandLine]();
      }

      if (commandsOS.includes(answer)) {
        commandMap[answer]();
      }

      if (commandNeedCWD.includes(commandLine)) {
        commandMap[commandLine](process.cwd());
      }

      if (commandNeedLineInterface.includes(commandLine)) {
        return commandMap[commandLine](this._rl);
        
      }

      if (commandsNeedAnswer.includes(commandLine)) {
        commandMap[commandLine](answer);
      }

      printCurrentDir(process.cwd());
    });

    this._rl.on('SIGINT', () => {
      this._rl.close();
    });

    this._rl.on('close', () => {
      console.clear();

      process.stdout.write(
        `\nThank you for using File Manager, ${this._username}, goodbye!` + '\n'
      );
    });
  }

  run() {
    process.stdout.write(`Welcome to the File Manager, ${this._username}!\n\n`);

    printCurrentDir(process.cwd());
  }
}

export default new App();
