import readline from 'node:readline';

const rl = readline.createInterface(process.stdin, process.stdout);

const username = process.argv.slice(2)[0].split('=')[1] || 'anonymous';

process.stdout.write(`Welcome to the File Manager, ${username}!` + '\n');

rl.on('line', (answer) => {
  if (answer === '.exit') {
    rl.close();
  }
});

rl.on('SIGINT', (answer) => {
  rl.close();
});

rl.on('close', () => {
  process.stdout.write(
    `Thank you for using File Manager, ${username}, goodbye!` + '\n'
  );
});