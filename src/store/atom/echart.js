const path = require("path");
const files = require.context("@/components/Atom/Echart", true, /-.*\.js$/);

const echart = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  const atom = JSON.parse(JSON.stringify(files(key).atom))
  echart[name] = atom;
});
//删除部分组件
Reflect.deleteProperty(echart,'simple-parallel')
Reflect.deleteProperty(echart,'base-calendar')

export default echart;
