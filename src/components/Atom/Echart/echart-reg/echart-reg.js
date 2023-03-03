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

var atom = {
  i: "0",
  x: 1,
  y: 2,
  w: 8,
  h: 7,
  stacic: false,
  super: false,
  atomType: "echart",
  atomBorder: { width: 0, type: "solid", color: "#808080", radius: 1 },
  atomAnimation: { order: 1, enter: "fadeIn", leave: "fadeOut" },
  atomContent: {
    atomName: "echart-reg",
    detail: {
      sheetData: [
        ["x", "y"],
        [0.067732, 3.176513],
        [0.42781, 3.816464],
        [0.995731, 4.550095],
        [0.738336, 4.256571],
        [0.981083, 4.560815],
        [0.526171, 3.929515],
        [0.378887, 3.52617],
        [0.033859, 3.156393],
        [0.132791, 3.110301],
        [0.138306, 3.149813],
        [0.247809, 3.476346],
        [0.64827, 4.119688],
      ],
      nr: 4,
      nc: 5,
      reg: {
        method: "linear",
        formulaOn: "end",
        order: 2,
      },
      simpleLine: {
        lineStyle: {
          width: 2,
          type: "solid",
        },
        smooth: false,
        areaStyle: {
          opacity: 0.2,
        },
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      grid,
      xAxis: {
        ...xAxis,
        boundaryGap: false,
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
