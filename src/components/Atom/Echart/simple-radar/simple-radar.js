import { textStyle, itemStyle, lineStyle, label, title, xAxis, yAxis, legend, grid, visualMapC, visualMapP, timeline, dataZoom, palette, backgroundPalette } from '../element'
import editor from '../editor'

const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
  atomType: 'echart',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'simple-radar',
    detail: {
      sheetData: [
        ['', 'AQI', 'PM2.5', 'PM10', 'CO', 'NO2', 'SO2'],
        ['轴最小值', 0, 0, 0, 0, 0, 0],
        ['轴最大值', 100, 50, 150, 5, 50, 50],
        ['上海', 91, 45, 125, 0.82, 34, 23],
        ['北京', 55, 9, 56, 0.46, 18, 6],
        ['广州', 26, 37, 27, 1.163, 27, 13]
      ],
      nr: 5,
      nc: 6,
      simpleRadar: {
        shape: 'polygon',
        nameGap: 15,
        center: ['50%', '70%'],
        radius: ['0%', '70%'],
        startAngle: 90,
        splitNumber: 5,
        symbol: 'circle',
        symbolSize: 4,
        symbolRotate: 0,
        name: {
          textStyle: {
            color: 'rgb(238, 197, 102)',
            fontWeight: 'bold',
            fontFamily: 'Microsoft YaHei',
            fontSize: 14
          }
        },
        axisLabel: {
          show: true,
          color: '#333',
          fontWeight: 'normal',
          fontFamily: 'Microsoft YaHei',
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 1)',
            width: 1,
            type: 'solid'
          }
        },
        splitArea: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: 'grey',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: true,
          length: 2,
          lineStyle: {
            color: 'grey',
            width: 1
          }
        },
        areaStyle: {
          opacity: 0
        }
      },
      animation: true,
      palette,
      backgroundPalette,
      title,
      legend,
      label: {
        ...label,
        show: true,
        position: 'outside',
        formatter: '{@[0]}: {@[1]} {d}%',
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