import * as os from 'node:os';

export const printCPUS = () => {
  console.log(os.cpus());
};
