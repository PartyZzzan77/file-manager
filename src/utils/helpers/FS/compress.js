import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { enterAnotherCommand } from '../enterAnotherCommand.js';
import { printInvalidPath } from '../printInvalidPath.js';
import { printCurrentDir } from '../printCurrentDir.js';

export const compress = (answer) => {
  const command = answer.split(' ');

  if (command.length !== 3) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  const pathSrc = path.resolve(command[1]);
  const pathDist = path.resolve(command[2]);

  const rs = fs.createReadStream(pathSrc);
  const ws = fs.createWriteStream(`${pathDist}.br`);
  const compressBuf = zlib.createBrotliCompress();

  pipeline(rs, compressBuf, ws, (err) => {
    if (err) {
      printInvalidPath();
      enterAnotherCommand();
      printCurrentDir(process.cwd());
    }
  });
};
