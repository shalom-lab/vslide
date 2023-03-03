import { textStyle, itemStyle, lineStyle, label, title, xAxis, yAxis, legend, grid, visualMapC, visualMapP, timeline, dataZoom, palette, backgroundPalette } from '../element'
import editor from '../editor'

const BARBACKGROUNDSTYLE = {
  mode: 'pureColor',
  pureColor: 'rgba(220, 220, 220, 0.1)',
  linear: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0, color: 'red' // 0% 处的颜色
    }, {
      offset: 1, color: 'blue' // 100% 处的颜色
    }],
    global: false // 缺省为 false}
  },
  radial: {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.5,
    colorStops: [{
      offset: 0, color: 'red' // 0% 处的颜色
    }, {
      offset: 1, color: 'blue' // 100% 处的颜色
    }],
    global: false // 缺省为 false
  }
}


const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:true,
  atomType: 'echart',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'pop-pyramid',
    detail: {
      sheetData: [
        ['年龄', '男性', '女性'],
        ['0-4岁', 41062566, 34470044],
        ['5-9岁', 38464665, 32416884],
        ['10-14岁', 40267277, 34641185],
        ['15-19岁', 51904830, 47984284],
        ['20-24岁', 64008573, 63403945],
        ['25-29岁', 50837038, 50176814],
        ['30-34岁', 49521822, 47616381],
        ['35-39岁', 60391104, 57634855],
        ['40-44岁', 63608678, 61145286],
        ['45-49岁', 53776418, 51818135],
        ['50-54岁', 40363234, 38389937],
        ['55-59岁', 41082938, 40229536],
        ['60-64岁', 29834426, 28832856],
        ['65-69岁', 20748471, 20364811],
        ['70-74岁', 16403453, 16568944],
        ['75-79岁', 11278859, 12573274],
        ['80-84岁', 5917502, 7455696],
        ['85-89岁', 2199810, 3432118],
        ['90-94岁', 530872, 1047435],
        ['95-99岁', 117716, 252263],
        ['100岁及以上', 8852, 27082]
      ],
      nr: 22,
      nc: 3,
      popPyramid: {
        max: 64008573
      },
      simpleBar: {
        barMaxWidth: 50,
        barGap: '30%',
        barCategoryGap: '10%',
        borderRadius: [0, 0, 0, 0],
        showBackground: true,
        backgroundStyle: BARBACKGROUNDSTYLE
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      grid,
      xAxis: {
        ...xAxis,
        axisLabel: {
          show: false
        }
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