import {
  addEmptyFile,
  changeCatalog,
  compress,
  copyFile,
  decompress,
  deleteFile,
  goUp,
  moveFile,
  printArch,
  printCat,
  printCPUS,
  printEOL,
  printHash,
  printHomedir,
  printRootName,
  readFile,
  renameFile,
  printCurrentDir,
  clear,
  exit,
} from '../../utils/index.js';

export const commandsOS = [
  'os --EOL',
  'os --cpus',
  'os --homedir',
  'os --username',
  'os --architecture',
];
export const commandsNeedAnswer = [
  'cd',
  'add',
  'rn',
  'cp',
  'mv',
  'hash',
  'rm',
  'cat',
  'decompress',
  'compress',
];
export const commandNeedCWD = ['ls'];
export const commandNeedLineInterface = ['.exit'];
export const commandsDump = ['up', 'clear'];

export const commandMap = {
  up: goUp,
  cd: changeCatalog,
  ls: printCat,
  add: addEmptyFile,
  rn: renameFile,
  cp: copyFile,
  mv: moveFile,
  hash: printHash,
  rm: deleteFile,
  cat: readFile,
  decompress,
  compress,
  clear,
  '.exit': exit,
  'os --EOL': printEOL,
  'os --cpus': printCPUS,
  'os --homedir': printHomedir,
  'os --username': printRootName,
  'os --architecture': printArch,
};
