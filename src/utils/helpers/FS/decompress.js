import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { enterAnotherCommand } from '../enterAnotherCommand.js';
import { printInvalidPath } from '../printInvalidPath.js';
import { printCurrentDir } from '../printCurrentDir.js';

export const decompress = (answer) => {
  const command = answer.split(' ');

  if (command.length !== 3) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  console.log(command[1]);
  console.log(command[2]);

  const pathSrc = path.resolve(command[1]);
  const pathDist = path.resolve(command[2]);

  const rs = fs.createReadStream(pathSrc);
  const ws = fs.createWriteStream(pathDist);
  const decompressBuf = zlib.createBrotliDecompress();

  pipeline(rs, decompressBuf, ws, (err) => {
    if (err) {
      printInvalidPath();
      enterAnotherCommand();
      printCurrentDir(process.cwd());
    }
  });
};
