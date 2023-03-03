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

import geojson from "./shanghai.json";

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
    atomName: "map-c",
    detail: {
      sheetData: [
        ["北京", 4],
        ["上海", 3],
      ],
      nr: 5,
      nc: 2,
      mapName: "shanghai",
      mapObj: geojson,
      visualMapC: {
        show: true,
        type: "continuous",
        orient: "vertical",
        left: "1%",
        right: "auto",
        bottom: "1%",
        top: "auto",
        min: 1,
        max: 10,
        text: ["High", "Low"],
        textGap: 10,
        itemWidth: 20,
        itemHeight: 140,
        calculable: true,
        inRange: {
          color: ["#D7DA8B", "#E15457"],
        },
      },
      simpleMap: {
        aspectScale: 0.75,
        roam: true,
        zoom: 1,
        left: "center",
        right: "auto",
        bottom: "1%",
        top: "5%",
        itemStyle: {
          borderColor: "rgba(126, 51, 51, 1)",
          borderWidth: 1,
          borderType: "solid",
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        },
        emphasis: {
          areaColor: "#eee",
          borderColor: "#2B91B7",
        },
      },
      animation: true,
      palette,
      backgroundPalette,
      title
    },
  },
};
export { atom, editor };
