import readline from 'node:readline';
import { fileURLToPath } from 'node:url';
import { printCat, snowCurrentDir } from './utils/index.js';
import { dirname } from 'node:path';

const __dirname = dirname(import.meta.url);
const __filename = fileURLToPath(import.meta.url);

const isArgs = process.argv.slice(2).length > 0;

const username = isArgs ? process.argv.slice(2)[0].split('=')[1] : 'anonymous';

const rl = readline.createInterface(process.stdin, process.stdout);

process.stdout.write(`Welcome to the File Manager, ${username}!\n\n`);

snowCurrentDir();

rl.on('line', (answer) => {
  if (answer === '.exit') {
    return rl.close();
  }

  if (answer === 'ls') {
    printCat(__dirname);
  }

  snowCurrentDir();
});

rl.on('SIGINT', (answer) => {
  rl.close();
});

rl.on('close', () => {
  process.stdout.write(
    `\nThank you for using File Manager, ${username}, goodbye!` + '\n'
  );
});
