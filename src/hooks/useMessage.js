import { useMessage } from "naive-ui";

export default function () {
  const message = useMessage();
  return {
    success(msg) {
      message.success(msg);
    },
    error(msg) {
      message.error(msg);
    },
    info(msg) {
      message.info(msg);
    },
    warning(msg) {
      message.warning(msg);
    },
  };
}
