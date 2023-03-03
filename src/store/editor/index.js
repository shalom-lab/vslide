const path = require("path");
const editorOption = {};

// common editor
const files = require.context("./", false, /atom.*\.js$/);
files.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  editorOption[name] = JSON.parse(JSON.stringify(files(key).default));
});
// atom specific editor
const atomfiles = require.context("@/components/Atom", true, /-.*\.js$/);
////console.log('atomfiles', atomfiles.keys())
atomfiles.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  if (atomfiles(key).editor) {
    editorOption[name] = JSON.parse(JSON.stringify(atomfiles(key).editor));
  }
});

export { editorOption };
