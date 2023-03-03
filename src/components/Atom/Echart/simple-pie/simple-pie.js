import { textStyle, itemStyle, lineStyle, label, title, xAxis, yAxis, legend, grid, visualMapC, visualMapP, timeline, dataZoom, palette, backgroundPalette } from '../element'
import editor from '../editor'

const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
  atomType: 'echart',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'simple-pie',
    detail: {
      sheetData: [
        ['性别', '人数'],
        ['男', 11],
        ['女', 15]
      ],
      nr: 2,
      nc: 2,
      simplePie: {
        clockwise: true,
        startAngle: 90,
        center: ['50%', '60%'],
        radius: ['30%', '75%'],
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      legend: {
        ...legend,
        top: '0',
      },
      label: {
        ...label,
        show: true,
        position: 'outside',
        formatter: '{@[1]},{d}%',
      },
      itemStyle,
      emphasis: {
        label,
        itemStyle,
      }
    }
  }
}
export { atom, editor }