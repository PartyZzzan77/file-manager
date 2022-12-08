import fs from 'node:fs';
import { enterAnotherCommand } from './enterAnotherCommand.js';
import { snowCurrentDir } from './snowCurrentDir.js';

export const printCat = (__dirname) => {
  fs.readdir(new URL(__dirname), { withFileTypes: true }, (err, files) => {
    if (err) enterAnotherCommand();
    else {
      const catalog = files
        .sort((a) => (a.isDirectory() ? -1 : 1))
        .map((file) => ({
          Name: file.name,
          Type: !file.isDirectory() ? 'file' : 'directory',
        }));

      process.stdout.write('\n');
      console.table(catalog);

      snowCurrentDir();
    }
  });
};
