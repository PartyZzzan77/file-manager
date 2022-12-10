import readline from 'node:readline';
import {
  addEmptyFile,
  changeCatalog,
  compress,
  copyFile,
  decompress,
  deleteFile,
  goUp,
  printArch,
  printCat,
  printCPUS,
  printEOL,
  printHash,
  printHomedir,
  printRootName,
  readFile,
  renameFile,
  snowCurrentDir,
} from './utils/index.js';

const isArgs = process.argv.slice(2).length > 0;

const username = isArgs ? process.argv.slice(2)[0].split('=')[1] : 'anonymous';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'enter the command: ',
});

process.stdout.write(`Welcome to the File Manager, ${username}!\n\n`);

snowCurrentDir(process.cwd());
rl.on('line', (answer) => {
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

  snowCurrentDir(process.cwd());
});

rl.on('SIGINT', (answer) => {
  rl.close();
});

rl.on('close', () => {
  console.clear();

  process.stdout.write(
    `\nThank you for using File Manager, ${username}, goodbye!` + '\n'
  );
});
