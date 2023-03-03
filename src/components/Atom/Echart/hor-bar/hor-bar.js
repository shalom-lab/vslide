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

const BARBACKGROUNDSTYLE = {
  mode: "pureColor",
  pureColor: "rgba(220, 220, 220, 0.1)",
  linear: {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
      {
        offset: 0,
        color: "red", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "blue", // 100% 处的颜色
      },
    ],
    global: false, // 缺省为 false}
  },
  radial: {
    type: "radial",
    x: 0.5,
    y: 0.5,
    r: 0.5,
    colorStops: [
      {
        offset: 0,
        color: "red", // 0% 处的颜色
      },
      {
        offset: 1,
        color: "blue", // 100% 处的颜色
      },
    ],
    global: false, // 缺省为 false
  },
};

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
    atomName: "hor-bar",
    detail: {
      sheetData: [
        ["", "Ford", "Tesla", "Toyota", "Honda"],
        ["2017", 10, 11, 12, 13],
        ["2018", 20, 11, 14, 13],
        ["2019", 30, 15, 12, 13],
      ],
      nr: 4,
      nc: 5,
      simpleBar: {
        barMaxWidth: 50,
        barGap: "30%",
        barCategoryGap: "20%",
        borderRadius: [0, 0, 0, 0],
        showBackground: true,
        backgroundStyle: BARBACKGROUNDSTYLE,
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      grid,
      xAxis,
      yAxis: {
        ...yAxis,
        position: "top",
      },
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
