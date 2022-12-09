import * as os from 'node:os';

export const printEOL = () => {
  process.stdout.write(`\n${JSON.stringify(os.EOL)}\n`);
};
