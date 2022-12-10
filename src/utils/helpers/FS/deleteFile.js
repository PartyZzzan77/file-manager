import path from 'node:path';
import { unlink } from 'node:fs/promises';
import { enterAnotherCommand } from '../enterAnotherCommand.js';
import { printInvalidPath } from '../printInvalidPath.js';
import { snowCurrentDir } from '../snowCurrentDir.js';

export const deleteFile = async (answer) => {
  const command = answer.split(' ');

  if (command.length !== 2) {
    printInvalidPath();
    enterAnotherCommand();
    return;
  }

  const pathSrc = path.resolve(command[1]);

  try {
    await unlink(pathSrc);
  } catch {
    printInvalidPath();
    enterAnotherCommand();
    snowCurrentDir(process.cwd());
  }
};
