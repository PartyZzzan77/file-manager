export const snowCurrentDir = (path) =>
  process.stdout.write(
    `\nYou are currently in ${path}\nenter the command: `
  );
