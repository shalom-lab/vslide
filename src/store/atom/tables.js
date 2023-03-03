const path = require("path");
const files = require.context("@/components/Atom/Tables", true, /\.js$/);

const tables = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  const atom = JSON.parse(JSON.stringify(files(key).atom))
  tables[name] = atom;
});

export default tables;
