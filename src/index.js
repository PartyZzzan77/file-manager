import readline from 'node:readline';
import {
  changeCatalog,
  compress,
  decompress,
  goUp,
  printArch,
  printCat,
  printCPUS,
  printEOL,
  printHash,
  printHomedir,
  printRootName,
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
  //navigation

  console.log(answer.split(' ')[0]);
  if (answer === 'up') {
    goUp();
  }

  if (answer.includes('cd')) {
    changeCatalog(answer);
  }

  if (answer === 'ls') {
    printCat(process.cwd());
  }
  //FS
  if (answer.includes('hash')) {
    printHash(answer);
  }
  //compress/decompress
  if (answer.split(' ')[0] === 'decompress') {
    decompress(answer);
  }

  if (answer.split(' ')[0] === 'compress') {
    compress(answer);
  }

  //exit/clear
  if (answer === 'clear') {
    console.clear();
  }

  if (answer === '.exit') {
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
