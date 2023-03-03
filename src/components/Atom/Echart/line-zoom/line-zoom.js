import { textStyle, itemStyle, lineStyle, label, title, xAxis, yAxis, legend, grid, visualMapC, visualMapP, timeline, dataZoom, palette, backgroundPalette } from '../element'
import editor from '../editor'

var atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:true,
  atomType: 'echart',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'line-zoom',
    detail: {
      sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
      ['2017', 10, 11, 12, 13],
      ['2018', 20, 11, 14, 13],
      ['2019', 30, 15, 12, 13]
      ],
      nr: 4,
      nc: 5,
      dataZoom,
      simpleLine: {
        lineStyle: {
          width: 2,
          type: 'solid'
        },
        smooth: false,
        areaStyle: {
          opacity: 0.2
        }
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
      }
    }
  }
}

export { atom, editor }