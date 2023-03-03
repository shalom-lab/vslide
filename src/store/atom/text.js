const path = require("path");
const files = require.context("@/components/Atom/Text", true, /\.js$/);

const text = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  const atom = JSON.parse(JSON.stringify(files(key).atom))
  text[name] = atom;
});

export default text;
