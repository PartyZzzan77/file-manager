import * as os from 'node:os';

export const printRootName = () => {
  process.stdout.write(`\n${os.userInfo().username}\n`);
};
