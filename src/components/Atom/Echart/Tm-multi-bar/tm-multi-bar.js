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
  stacic: false,
  super: true,
  atomType: "echart",
  atomBorder: { width: 0, type: "solid", color: "#808080", radius: 1 },
  atomAnimation: { order: 1, enter: "fadeIn", leave: "fadeOut" },
  atomContent: {
    atomName: "tm-multi-bar",
    detail: {
      sheetData: [
        ["timeline", "X轴", "Ford", "Tesla", "Toyota", "Honda"],
        ["2017", "X1", 10, 11, 12, 13],
        ["2017", "X2", 10, 11, 12, 13],
        ["2017", "X3", 10, 11, 12, 13],
        ["2018", "X1", 20, 11, 12, 13],
        ["2018", "X2", 10, 11, 12, 13],
        ["2018", "X3", 10, 11, 12, 13],
        ["2019", "X1", 10, 11, 12, 13],
        ["2019", "X2", 10, 11, 12, 13],
        ["2019", "X3", 30, 11, 12, 13],
      ],
      nr: 10,
      nc: 6,
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
      grid: {
        ...grid,
        bottom: "20%",
      },
      xAxis,
      timeline,
      yAxis,
      legend,
      label: {
        ...label,
        show: true,
        position: "top",
      },
      itemStyle,
      emphasis: {
        label,
        itemStyle,
      },
    },
  },
};
export { atom, editor };
