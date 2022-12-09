export const goUp = () => {
  try {
    process.chdir('..');
  } catch {
    enterAnotherCommand();
  }
};
