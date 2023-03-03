const path = require("path");
const files = require.context("@/components/Atom/Images", true, /\.js$/);

const images = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  const atom = JSON.parse(JSON.stringify(files(key).atom))
  images[name] = atom;
});

export default images;
