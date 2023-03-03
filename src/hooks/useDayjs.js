const dayjs = require("dayjs");
require("dayjs/locale/zh");
dayjs.locale("zh");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default dayjs;
