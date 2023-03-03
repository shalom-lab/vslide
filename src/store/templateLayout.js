import echart from "./atom/echart";

var atomName = Object.keys(echart);

var templateLayout = [
  {
    slideContent: atomName
      .map((name) => {
        return echart[name];
      })
      .map((atom, i) => {
        return {
          i: String(i),
          x: 6 * (i % 3),
          y: 5 * Math.floor(i / 3),
          w: 6,
          h: 5,
          super: atom.super,
          atomType: atom.atomType,
          atomContent: atom.atomContent,
        };
      }),
  },
];

export default templateLayout;
