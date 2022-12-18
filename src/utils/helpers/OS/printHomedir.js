import * as os from 'node:os';

export const printHomedir = () => {
  process.stdout.write(`\n${os.homedir()}\n`);
};
