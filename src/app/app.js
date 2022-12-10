import readline from 'node:readline';
import {
  addEmptyFile,
  changeCatalog,
  compress,
  copyFile,
  decompress,
  deleteFile,
  goUp,
  moveFile,
  printArch,
  printCat,
  printCPUS,
  printEOL,
  printHash,
  printHomedir,
  printRootName,
  readFile,
  renameFile,
  printCurrentDir,
} from '../utils/index.js';

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
      //navigation
      if (answer === 'up') {
        goUp();
      }

      if (commandLine === 'cd') {
        changeCatalog(answer);
      }

      if (commandLine === 'ls') {
        printCat(process.cwd());
      }
      //FS
      if (commandLine === 'add') {
        addEmptyFile(answer);
      }
      if (commandLine === 'rn') {
        renameFile(answer);
      }

      if (commandLine === 'cp') {
        copyFile(answer);
      }

      if (commandLine === 'mv') {
        moveFile(answer);
      }

      if (commandLine === 'hash') {
        printHash(answer);
      }

      if (commandLine === 'rm') {
        deleteFile(answer);
      }
      if (commandLine === 'cat') {
        readFile(answer);
      }
      //compress/decompress
      if (commandLine === 'decompress') {
        decompress(answer);
      }

      if (commandLine === 'compress') {
        compress(answer);
      }

      //exit/clear
      if (commandLine === 'clear') {
        console.clear();
      }

      if (commandLine === '.exit') {
        console.clear();
        return rl.close();
      }
      //OS
      if (answer === 'os --EOL') {
        printEOL();
      }

      if (answer === 'os --cpus') {
        printCPUS();
      }

      if (answer === 'os --homedir') {
        printHomedir();
      }

      if (answer === 'os --username') {
        printRootName();
      }

      if (answer === 'os --architecture') {
        printArch();
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
