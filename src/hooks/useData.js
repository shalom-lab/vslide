import { number } from "echarts";

export function transpose(arr) {
  var newArray = arr[0].map((col, i) => {
    return arr.map((row) => {
      return row[i];
    });
  });
  return newArray;
}

export function toNumber(arr, nr, nc) {
  var newArray = arr.map((item, index) => {
    return index < nr
      ? item
      : item.map((item1, index1) => {
          return index1 < nc ? item1 : Number(item1);
        });
  });
  return newArray;
}
