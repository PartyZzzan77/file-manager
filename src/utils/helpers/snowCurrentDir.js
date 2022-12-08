import { dirname } from 'node:path';

const __dirname = dirname(import.meta.url);

export const snowCurrentDir = () =>
  process.stdout.write(
    `\nYou are currently in ${__dirname}\nenter the command: `
  );
