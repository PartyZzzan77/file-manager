import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import {
  changeCatalog,
  enterAnotherCommand,
  goUp,
  printCat,
  printHash,
  snowCurrentDir,
} from './utils/index.js';
import { dirname } from 'node:path';

const __dirname = dirname(import.meta.url);
const __filename = fileURLToPath(import.meta.url);

const isArgs = process.argv.slice(2).length > 0;

const username = isArgs ? process.argv.slice(2)[0].split('=')[1] : 'anonymous';

const rl = readline.createInterface(process.stdin, process.stdout);

process.stdout.write(`Welcome to the File Manager, ${username}!\n\n`);

snowCurrentDir(process.cwd());
rl.on('line', (answer) => {
  if (answer === 'up') {
    goUp();
  }

  if (answer.includes('cd')) {
    changeCatalog(answer);
  }

  if (answer === 'ls') {
    printCat(process.cwd());
  }

  if (answer.includes('hash')) {
    printHash(answer);
  }

  if (answer === 'clear') {
    console.clear();
  }

  if (answer === '.exit') {
    console.clear();
    return rl.close();
  }

  snowCurrentDir(process.cwd());
});

rl.on('SIGINT', (answer) => {
  rl.close();
});

rl.on('close', () => {
  process.stdout.write(
    `\nThank you for using File Manager, ${username}, goodbye!` + '\n'
  );
});
