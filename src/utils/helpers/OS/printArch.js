import * as os from 'node:os';

export const printArch = () => {
  process.stdout.write(`\n${os.platform()}\n`);
};
