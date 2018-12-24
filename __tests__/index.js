
const {sync: globSync} = require("glob");

const cwd = process.cwd();

(async () => {
  const matches = globSync("__tests__/**/*.test.mjs");
  for (const match of matches) {
    await import(`${cwd}/${match}`);
  }
  run();
})();
