import {
  textStyle,
  itemStyle,
  lineStyle,
  label,
  title,
  xAxis,
  yAxis,
  legend,
  grid,
  visualMapC,
  visualMapP,
  timeline,
  dataZoom,
  palette,
  backgroundPalette,
} from "../element";
import editor from "../editor";

const atom = {
  i: "0",
  x: 1,
  y: 2,
  w: 8,
  h: 7,
  stacic:false,
super:false,
  atomType: "echart",
  atomBorder: { width: 0, type: "solid", color: "#808080", radius: 1 },
  atomAnimation: { order: 1, enter: "fadeIn", leave: "fadeOut" },
  atomContent: {
    atomName: "simple-bubble",
    detail: {
      sheetData: [
        ["类别", "x", "y", "大小"],
        ["A", 10.0, 8.04, 10],
        ["A", 8.0, 6.95, 11],
        ["A", 13.0, 7.58, 12],
        ["A", 9.0, 8.81, 13],
        ["A", 11.0, 8.33, 14],
        ["B", 14.0, 9.96, 15],
        ["B", 6.0, 7.24, 16],
        ["B", 4.0, 4.26, 17],
        ["B", 12.0, 10.84, 18],
        ["B", 7.0, 4.82, 19],
        ["B", 5.0, 5.68, 20],
      ],
      nr: 12,
      nc: 4,
      animation: true,
      palette,
      backgroundPalette,
      title,
      grid,
      xAxis: {
        ...xAxis,
        type: "value",
      },
      yAxis,
      legend,
      label,
      itemStyle,
      emphasis: {
        label,
        itemStyle,
      },
    },
  },
};
export { atom, editor };
