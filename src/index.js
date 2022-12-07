import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const username = process.argv.slice(2)[0].split('=')[1] || 'anonymous';
const __dirname=fileURLToPath(import.meta.url)

const snowCurrentDir= () => process.stdout.write(`\nYou are currently in ${__dirname}\nenter the command:`)

const rl = readline.createInterface(process.stdin, process.stdout);


process.stdout.write(`Welcome to the File Manager, ${username}!\n\n`);

snowCurrentDir()

rl.on('line', (answer) => {
  if (answer === '.exit') {
    return rl.close();
  }

  snowCurrentDir()
});

rl.on('SIGINT', (answer) => {
  rl.close();
});

rl.on('close', () => {
  process.stdout.write(
    `\nThank you for using File Manager, ${username}, goodbye!` + '\n'
  );
});