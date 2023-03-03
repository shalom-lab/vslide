import { textStyle, itemStyle, lineStyle, label, title, xAxis, yAxis, legend, grid, visualMapC, visualMapP, timeline, dataZoom, palette, backgroundPalette } from '../element'
import editor from '../editor'

const sheetData = [
  ['Male', 'infant', 850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
  ['Male', 'children', 850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
  ['Male', 'adult', 960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
  ['Female', 'infant', 880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
  ['Female', 'children', 880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
  ['Female', 'adult', 890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
]


const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
  atomType: 'echart',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'simple-box',
    detail: {
      sheetData,
      nr: sheetData.length - 1,
      nc: sheetData[0].length - 1,
      simpleScatter: {
        symbol: 'circle',
        symbolSize: 14
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      grid,
      xAxis,
      yAxis,
      legend,
      label,
      itemStyle,
      emphasis: {
        label,
        itemStyle,
      },
    }
  }
}
export { atom, editor }