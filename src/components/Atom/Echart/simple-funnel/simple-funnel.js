import { textStyle, itemStyle, lineStyle, label, title, xAxis, yAxis, legend, grid, visualMapC, visualMapP, timeline, dataZoom, palette, backgroundPalette } from '../element'
import editor from '../editor'

const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
  atomType: 'echart',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'simple-funnel',
    detail: {
      sheetData: [
        ['Exposure', 200],
        ['Infection', 120],
        ['Symptom', 70],
        ['Outpatient', 40],
        ['Hospitalized', 25],
        ['Death', 10]
      ],
      nr: 6,
      nc: 2,
      simpleFunnel: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '20%',
        min: 0,
        max: 300,
        minSize: '0%',
        maxSize: '100%',
        gap: 2,
        orient: 'vertical',
        sort: 'ascending',
        funnelAlign: 'center',
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      legend: {
        ...legend,
        show: false
      },
      label: {
        ...label,
        show: true,
        position: 'right',
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