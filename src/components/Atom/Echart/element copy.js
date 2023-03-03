import mapDefault from './map-p/China.json'

const textStyle = {
    color: '#333',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontFamily: 'Microsoft YaHei',
    fontSize: 20,
    lineHeight: 5,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 2,
    textShadowOffsetX: 1,
    textShadowOffsetY: 1
}
const itemStyle = {
    borderColor: '#000',
    borderWidth: 0,
    borderType: 'solid',
    shadowBlur: 4,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX: 1,
    shadowOffsetY: 1
}
const lineStyle = {
    show: true,
    color: '#DAE1FA',
    width: 2,
    type: 'solid',
    shadowBlur: 4,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX: 1,
    shadowOffsetY: 1
}
const label = {
    show: false,
    // formatter: '{@[0]},{@[1]}',
    position: 'top',
    distance: 5,
    rotate: 0,
    offset: [0, 0],
    color: 'inherit',
    fontWeight: 'normal',
    fontFamily: 'san-serif',
    fontSize: 12,
    align: 'center',
    verticalAlign: 'middle',
    backgroundColor: 'transparent',
    borderColor: 'inherit',
    borderWidth: 0,
    borderRaduis: 0,
    padding: [0, 0, 0, 0]
}
const title = {
    show: true,
    text: '图表标题',
    link: '',
    target: 'blank',
    textStyle: TEXTSTYLE,
    subtext: '',
    sublink: '',
    subtarget: 'blank',
    subtextStyle: {
        color: '#aaa',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 14,
        align: 'center',
        verticalAlign: 'middle',
        lineHeight: 5,
        textBorderColor: 'transparent',
        textBorderWidth: 0,
        textShadowColor: 'transparent',
        textShadowBlur: 2,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1
    },
    textAlign: 'auto',
    textVerticalAlign: 'auto',
    padding: [0, 0, 0, 0],
    itemGap: 15,
    left: 'center',
    right: 'auto',
    top: 'auto',
    bottom: '90%',
    backgroundColor: 'red',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRaduis: 0
}
const xAxis = {
    show: true,
    type: 'category',
    position: 'bottom',
    name: 'X轴名称',
    nameLocation: 'center',
    nameTextStyle: {
        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'Microsoft YaHei',
        fontSize: 14,
        lineHeight: 5
    },
    nameGap: 25,
    nameRotate: 0,
    inverse: false,
    axisLine: {
        show: true,
        onZero: true,
        symbol: ['none', 'none'],
        symbolSize: [6, 9],
        symbolOffset: 6,
        lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid'
        }
    },
    axisTick: {
        show: true,
        alignWithLable: false,
        interval: 'auto',
        inside: false,
        length: 5,
        lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid'
        }
    },
    axisLabel: {
        show: true,
        color: '#333',
        interval: 'auto',
        rotate: 0,
        fontWeight: 'normal',
        fontFamily: 'Microsoft YaHei',
        fontSize: 14,
        lineHeight: 5
    },
    splitLine: {
        show: false,
        interval: 'auto',
        lineStyle: {
            color: 'rgba(28, 51, 28, 0.81)',
            width: 1,
            type: 'dashed'
        }
    }
}
const yAxis = {
    show: true,
    type: 'value',
    position: 'bottom',
    name: 'Y轴名称',
    nameLocation: 'end',
    nameTextStyle: {
        color: '#333',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'Microsoft YaHei',
        fontSize: 14,
        lineHeight: 5
    },
    nameGap: 25,
    nameRotate: 0,
    inverse: false,
    axisLine: {
        show: true,
        onZero: true,
        symbol: ['none', 'arrow'],
        symbolOffset: 6,
        symbolSize: [6, 9],
        lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid'
        }
    },
    axisTick: {
        show: true,
        alignWithLable: false,
        interval: 'auto',
        inside: false,
        length: 3,
        lineStyle: {
            color: '#333',
            width: 1,
            type: 'solid'
        }
    },
    axisLabel: {
        show: true,
        color: '#333',
        interval: 'auto',
        rotate: 0,
        fontWeight: 'normal',
        fontFamily: 'Microsoft YaHei',
        fontSize: 14,
        lineHeight: 5
    },
    splitLine: {
        show: true,
        interval: 'auto',
        lineStyle: {
            color: 'rgba(28, 51, 28, 0.81)',
            width: 1,
            type: 'dotted'
        }
    }
}
const legend = {
    show: true,
    type: 'plain',
    left: 'center',
    right: 'auto',
    top: '10%',
    bottom: 'auto',
    orient: 'horizontal',
    align: 'auto',
    padding: 5,
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    textStyle: {
        color: '#333',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 14,
        lineHeight: 56
    }
}
const backgroundPalette = {
    mode: 'pure',
    pureColor: 'transparent',
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
        global: false // 缺省为 false
    }
}
const palette = {
    mode: 'pureColor',
    pureColor: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', 'rgba(0,0,84,1)'],
    linear: [{ type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#2c3e50' }, { offset: 1, color: '#bdc3c7' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#ee9ca7' }, { offset: 1, color: '#ffdde1' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
    { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false }]
}
const grid = {
    containLabel: true,
    show: true,
    backgroundColor: 'transparent',
    left: '5%',
    right: '5%',
    top: '20%',
    bottom: '10%'
}
const visualMapC = {
    show: true,
    type: 'continuous',
    orient: 'vertical',
    left: '1%',
    right: 'auto',
    bottom: '1%',
    top: 'auto',
    min: 1,
    max: 10,
    text: ['High', 'Low'],
    textGap: 10,
    itemWidth: 20,
    itemHeight: 140,
    calculable: true,
    inRange: {
        color: ['#D7DA8B', '#E15457']
    }
}
const visualMapP = {
    show: true,
    type: 'piecewise',
    pieces: [
        { min: 0, max: 1, color: 'red', label: '0~1', key: 1 }, // 不指定 max，表示 max 为无限大（Infinity）。
        { min: 2, max: 3, color: 'blue', key: 2 },
        { min: 4, max: 5, color: 'grey', key: 3 },
        { min: 6, max: 7, color: 'pink', key: 4 },
        { min: 8, max: 9, color: 'yellow', key: 5 }
    ],
    selectedMode: 'multiple',
    orient: 'vertical',
    left: '1%',
    right: 'auto',
    bottom: '1%',
    top: 'auto',
    itemGap: 10,
    itemWidth: 20,
    itemHeight: 14,
    itemSymbol: 'roundRect'
}

// timeline
const TIMELINELABEL = {
    position: 'auto',
    show: true,
    interval: 'auto',
    rotate: 0,
    color: '#A4B1D7',
    fontWeight: 100,
    fontFamily: 'san-serif',
    fontSize: 12,
    align: 'auto',
    verticalAlign: 'auto',
    lineHeight: 5,
    backgroundColor: 'transparent',
    borderColor: 'inherit',
    borderWidth: 0,
    borderRaduis: 0,
    padding: [0, 0, 0, 0],
    shadowBlur: 4,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    textBorderColor: 'transparent',
    textBorderWidth: 0,
    textShadowColor: 'transparent',
    textShadowBlur: 2,
    textShadowOffsetX: 1,
    textShadowOffsetY: 1
}
const CHECKPOINTSTYLE = {
    symbol: 'circle',
    symbolSize: 13,
    symbolRotate: 0,
    symbolOffset: [0, 0],
    color: '#316bf3',
    borderColor: '#ccc',
    borderWidth: 1,
    borderType: 'solid',
    shadowBlur: 4,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    animation: true,
    animationDuration: 300,
    animationEasing: 'quinticInOut'
}
const CONTROLSTYLE = {
    show: true,
    showPlayBtn: true,
    showPrevBtn: true,
    showNextBtn: true,
    itemSize: 22,
    itemGap: 12,
    position: 'left',
    color: '#A4B1D7',
    borderColor: '#A4B1D7',
    borderWidth: 1,
    borderType: 'solid',
    shadowBlur: 4,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffsetX: 1,
    shadowOffsetY: 1,
}
const timeline = {
    show: true,
    orient: 'horizontal',
    inverse: false,
    left: '10%',
    right: '10%',
    top: '85%',
    bottom: '1%',
    axisType: 'category',
    currentIndex: 0,
    autoPlay: true,
    rewind: false,
    loop: true,
    playInterval: 2000,
    realtime: true,
    controlPosition: 'left',
    symbol: 'emptyCircle',
    symbolSize: 10,
    symbolRotate: 0,
    symbolOffset: [0, 0],
    lineStyle: LINESTYLE,
    itemStyle: {
        ...ITEMSTYLE,
        color: '#A4B1D7',
    },
    label: TIMELINELABEL,
    checkpointStyle: CHECKPOINTSTYLE,
    controlStyle: CONTROLSTYLE,
    emphasis: {
        label: TIMELINELABEL,
        itemStyle: {
            ...ITEMSTYLE,
            color: '#A4B1D7',
        },
        checkpointStyle: CHECKPOINTSTYLE,
        controlStyle: CONTROLSTYLE
    }
}
const dataZoom = {
    handleSize: '100%',
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    left: '5%',
    right: '5%',
    top: '92%',
    bottom: '5%',
    height: 20,
    borderColor: '#ddd'
}
// specific
const BARBACKGROUNDSTYLE = {
    mode: 'pure',
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
    }
}
// item component
const CKTEXT = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'ck-text',
        detail: {
            text: '<p><span style="font-size:24px">请输入文字</span></p>',
            background: 'transparent'
        }
    }
}
const SHADOWTEXT = {
    x: 0,
    y: 5,
    w: 18,
    h: 4,
    i: '0',
    itemBackground: 'transparent',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'shadow-text',
        detail: {
            background: 'transparent',
            text: 'TU SHOW',
            fontFamily: 'Arial',
            fontSize: 72,
            fontWeight: 900,
            textAlign: 'center',
            textShadow1W: 2,
            textShadow1B: 4,
            textShadow1C: 'rgba(48, 34, 34, 1)',
            textShadow2W: 0,
            textShadow2B: 0,
            textShadow2C: '#fff',
            color: 'rgba(134, 178, 196,1)'
        }
    }
}
const BASEIMAGE = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'base-image',
        detail: {
            src: ''
        }
    }
}
const BASETABLE = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'base-table',
        detail: {
            sheetData: [['10%', '10%', '10%', '20%', '20%'],
            ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            baseTable: {
                align: 'center',
                border: true,
                headerColor: 'lightblue',
                stripe: true,
                size: 'medium'
            }
        }
    }
}
// 
const STACKBAR = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'stack-bar',
        detail: {
            sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: true,
                // formatter: '{@[0]},{@[1]}',
                position: 'insideTop',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{@[0]},{@[1]}',
                    position: 'insideTop',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID
        }
    }
}
const BIBAR = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'bi-bar',
        detail: {
            sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: false,
                // formatter: '{c}',
                position: 'inside',
                distance: 2,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{c}',
                    position: 'top',
                    distance: 2,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            legend: {
                show: true,
                type: 'plain',
                left: 'center',
                right: 'auto',
                top: '5%',
                bottom: 'auto',
                orient: 'horizontal',
                align: 'auto',
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                icon: 'roundRect',
                textStyle: {
                    color: '#333',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    lineHeight: 56
                }
            },
            color: {
                option: 'pure',
                pure: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', 'rgba(0,0,84,1)'],
                linear: [{ type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#2c3e50' }, { offset: 1, color: '#bdc3c7' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#ee9ca7' }, { offset: 1, color: '#ffdde1' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false }]
            },
            title: {
                show: true,
                text: '柱状图',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 20,
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                subtext: '',
                subtextStyle: {
                    color: '#aaa',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 14,
                    align: 'left',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                textAlign: 'center',
                textVerticalAlign: 'auto',
                padding: 5,
                /* backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                shadowColor: 'transparent',
                shaodowBlur: 2,
                shadowOffsetX: 0,
                shadowOffsetY: 0, */
                itemGap: 12,
                left: '50%',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            }
        }
    }
}
const RANKINGBAR = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'ranking-bar',
        detail: {
            sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: false,
                // formatter: '{@[0]},{@[1]}',
                position: 'right',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{@[0]},{@[1]}',
                    position: 'right',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID
        }
    }
}
const DTRANKINGBAR = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'dt-ranking-bar',
        detail: {
            sheetData: [
                ['', '1月', '2月'],
                ['河南', 1, 4],
                ['河北', 2, 2],
                ['上海', 3, 3],
                ['山东', 4, 1]
            ],
            nr: 5,
            nc: 3,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            dtRankingBar: {
                top: 4,
                animationDuration: 1000,
                animationDurationUpdate: 2000,
                easing: 'quinticInOut',
                imageLabelPosition: 'left'
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            timeline: TIMELINE,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: true,
                formatter: '{b}: {c}',
                position: 'right',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'right',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            palette: PALETTE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID,
            title: TITLE
        }
    }
}
const DTRANKINGBARIMAGE = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'dt-ranking-bar-image',
        detail: {
            sheetData: [
                ['', '1月', '2月', 'image'],
                ['河南', 1, 4, 'data:image/png;base64,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'],
                ['河北', 2, 2, 'data:image/png;base64,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'],
                ['上海', 3, 3, 'data:image/png;base64,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'],
                ['山东', 4, 1, 'data:image/png;base64,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']
            ],
            nr: 5,
            nc: 4,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            dtRankingBar: {
                top: 4,
                animationDuration: 1000,
                animationDurationUpdate: 2000,
                easing: 'quinticInOut',
                imageLabelPosition: 'left'
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            timeline: {
                show: true,
                orient: 'horizontal',
                inverse: false,
                left: 20,
                right: 20,
                top: '85%',
                bottom: 'auto',
                axisType: 'category',
                currentIndex: 0,
                autoPlay: true,
                rewind: false,
                loop: true,
                playInterval: 2000,
                realtime: true,
                controlPosition: 'left',
                symbol: 'emptyCircle',
                symbolSize: 10,
                lineStyle: {
                    show: true,
                    color: '#304654',
                    width: 2,
                    type: 'solid'
                },
                controlStyle: {
                    show: true,
                    showPlayBtn: true,
                    showPrevBtn: true,
                    showNextBtn: true,
                    itemSize: 22,
                    itemGap: 12,
                    position: 'left',
                    color: '#304654',
                    borderColor: '#304654',
                    borderwidth: 1
                },
                label: {
                    color: '#000',
                    fontSize: 12
                },
                emphasis: {
                    controlStyle: {
                        show: true,
                        showPlayBtn: true,
                        showPrevBtn: true,
                        showNextBtn: true,
                        itemSize: 22,
                        itemGap: 12,
                        position: 'left',
                        color: '#304654',
                        borderColor: '#304654',
                        borderwidth: 1
                    },
                    label: {
                        color: '#000',
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: true,
                formatter: '{b}: {c}',
                position: 'right',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'right',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            palette: PALETTE,
            xAxis: {
                show: true,
                max: 5,
                type: 'value',
                position: 'top',
                name: 'X轴名称',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: false,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [6, 9],
                    symbolOffset: 6,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: true,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                zlevel: 2,
                show: true,
                type: 'category',
                position: 'bottom',
                name: '',
                nameLocation: 'center',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: true,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'none'],
                    symbolOffset: 6,
                    symbolSize: [6, 9],
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: false,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            grid: {
                containLabel: true,
                show: false,
                backgroundColor: 'transparent',
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '20%'
            },
            title: {
                show: true,
                text: '动态柱状图',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 18,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 1,
                    textShadowColor: 'transparent',
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 5
                },
                subtext: '',
                subtextStyle: {
                    color: '#100',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 12,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 1,
                    textShadowColor: 'transparent',
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 5
                },
                textAlign: 'auto',
                textVerticalAlign: 'auto',
                itemGap: 15,
                left: 'center',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            }
        }
    }
}
const DTRANKINGBARGRADIENTIMAGE = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'dt-ranking-bar-gradient-image',
        detail: {
            sheetData: [
                ['', '1月', '2月', 'image'],
                ['河南', 1, 4, 'data:image/png;base64,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'],
                ['河北', 2, 2, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu19CXhb1bXuv44s2bItj3LsOJacQW4odKAj0NeWqe0NbR/QJmUsUNrChb6WoeWWFkoJtEAoU3KhFwplCCVMBQpcylDGvkcf6cCDch+QYDuJ5cTYsSzbkuVJ0ln320d24kG2jqQjnXOks7+vn0u8z95r/Xv/3nvtvfZaBKvkDIGOxsolksN5gEy8GgwPiGoAuBhwiZ9EcIHhArGLWfw31QlhmDlIhDCYwiCEmREGECaIn3IITMMgdEtM2+XJsW2+vpG9OVOiyBumItc/a/UZKOlqrW+LyVjNhAMIUuIn82oQ1WbdgZoGmAdBtA2M7QR5m8zYVhLH9uU9Ax0ExNQ0YdVJjoBFkDRnRjtQihb3YZBwBAhHAHQoiX8zZhkHeCsxXpFkvIKSwF9X7MK4MUU1plQWQVKMy87lKIvF3IeahBCpZplFmFQIzfm9RZAkgO1taKgMl/OxDFoLxhoQytPE1RzVGaMMPEPMj1SN01NL+vtHzCF4/qS0CDKFdWdtbTW7pOMVUhB9ycDbppzMDgYmwPwcgR+lsPzEqsHB4Zx0ZLJGi5og4pSJy8qOJdBaBh9NILvJxi8n4jI4SqAXGHi0LD7xB8/uUDAnHZmg0aIjiN/jbo4SfUMGf52Az4JIMsE46SYiM8cI+DMxHrEDT3q7Az26CaNDx0VDkN5GVERK3WfJwI+IqEUHrE3fJTPvlkDXV0z0/7apDxHTK6RCgYInSHdLVd245DgPoO8ToV4FJlaVFAgwY0AC3+yQJ28u9O1XwRKkfVldC2zSjwA6iwgV1qzXHgFmREB8O2LyjW17gru170H/FguOIDua3avjdroY4G9aRnd+Jpgw6gH+nS1Kv1rZE9ien17z00vBEKS9rq5KctmuZuZzLcM7P5NnXi/MMpj+gyPxS9uCwZBOUmjabUEQpLPVfQqDbgDQpCk6VmOZItALmS/0dQcezLQBo3xnaoJ0eatXRsl+B0BHGQVQS46ZCPBLdo6e1eof3mFWXExJEMVh0Ou+BEQXF9uNt9km2tQN/Qb4A9e0idt6kxXTEaSz1f0VmWkTEVaZDOuiFpcZnRTns3x7Ai+bCQjTEIQBe6fXfRWAi0BkGrnNNBlyLiszM+hXPn//ZQREc96fBh2YYqIptgbsD4PoExrobDWhNwLMr3NcPt4MdyeGJ0i7p/44kHQfESr1Hlerfw0RYB5k5jPbugee0LBVzZsyLEGUh0rsvpFA52qutdWgYRAg4NcS9V9k1JeOhiTI1JbqSRAdZJiRtATJHQLMb9sRPdaIx8GGI0hnq/tUmek2a0uVu/loxJaZMSIRn7OqK7DFSPIZiiAdHvd1kOgiIwFkyZJfBJixoc3f/9P89rpwb4YhSIfXfTuIzjIKMJYc+iHA4FvbugLf00+C/T3rThAGHJ2t7s0AnWQEQCwZjIEAM2/x+QNnEBDXUyJdCdLTjPJRu/spgI7UEwSrb4MiwPxEeSxwSnMPRvWSUDeCiCgissv2JyL6tF7KW/0aHwEGtkqh2Bq9oqzoQpD2psoGcjhfBOHDxh8iS0IDIPAWT4x9oa13pD/fsuSdIOIpLNlsL4Pgy7eyVn8mRoC5HTH5aF9PsDufWuSVICJiYcjJL4HoU/lU0uqrMBBg5r9Vj9HR+YwAmTeCMGDrbHW/ANARhTFclhb6IMAvreoKiMiXeTndygtBGKDOVvcWgE7WB1Sr10JCgJnv8/kDpxPAudYrLwTp8NZvBEnn51oZq/0iQoDlTT7/wAW51jjnBGn31v+ESLom14pY7RcfAszyT9v8AxtyqXlOCdLhcZ8EiR7IpQJW28WNAIG/mUsHx5wRJPF2HI8TUUlxD6GlfS4REMG1bcDXV/oD/5mLfnJCkB1La1plu/2dgk08k4uRsNrMGAERArVkMvqhFb1DuzJuZIEPNSeICK7Q4XW/armQaD1UVnuLIcDgv/q6Ap/TOhiE5gSxTqysiawXAsy4ts3f/xMt+9eUIB2t9UcB0otaCmi1ZSGgGgFmmcBfWuUf0GwOakaQHUsqGmVn+ZtWfFzVw2nIimUfjmL8v0ydia7XRtEPrtg1NKQFwJoRpMPrfgFER2shlNWGPgg4VsbQ9MsQ/KfU6SOARr0y49E2f/86LZrThCCdXvcFTHSTFgJZbeiDgOSS4blnUHHe6Fpn/kRcJPO5q7oDt2WLZtYEaffWHQiS3iCQI1thrO91QkBiNN8yBOdHYoj1SgVBECX7FeKHtPmDb2eDatYE6Wh1v2Q9mc1mCLT/1lbFqP/BCMJPl2HsjdT2hPvCMKrXjiuCFApBFGWYX/T5A1/IBuGsCGK5kmQDfW6/rTsrgtozRjG5y4bQ406EnymDHJk/3JVrxtH4s/A+YQqKIEIrmU/OJpFPxgSZevz0Dog8uR1qq/VMEKByGa2PBCFWE2WejBFGni/F8KNOTHYmvH9KPxjFsluHMNMZqOAIwtxdNUYHZvrIKmOCWBeCmUzb/H5Tc8IY6s8bmdfp+Dt2ZftV9+0IbHXyrN/Hem3oWmfuU6x5CmfhGp8RQTqXuT/ANojVw5bfIbd6SwsBGyurSEnDbBIs1kbBrSAJWyQuxXBQJhl4MyKIZZinNU11rez68jiWXLLfxkglTEESJAuDPW2CWIZ5qilmsN8Tw7NlEA6v+ifckVcdGLynAhPbCuylQgYGe1oEsQxzg01+leKUf3YCSzekn7Z89G8ODN5ZjvG3Ux8VqxRF32oZGOxpEaTd615PRJfrq6XVeyYILP/jAGzV6m2RmX2MvWnH0L3lEIQxe0n3ma5qgoiMT3F2vw9QjRlBKl0dha2WMbrV/IOcLv5LLg/B9cXsMzCL06+hzeWI/MW8GDJzT4kUWKU2o5Vqgpjd36ru7AhK6mTs3eBKd36Zun7t6RHUnZ1d7Gdx9CtWkfF/2pWf0W5zH14S84Wr/IGNagZWFUGUoG9edzeIlqpp1Ih1PPcHYauRseur9YCsSm0jqpGWTBWHT6DpqvRtj6h/BiFedyAWkNLq1+iVxSri8we8aoLPqZopHZ76b0GS7ja64gvJJ9y4PfcOKr9+/8JqjP7dvFsEtWNQ9pEolv1Hek8iBDH2nFuD+HBhESIpZrJ8pq974J5UeKYkyNTq8S6I2lI1ZtTf131rFLXfjSjihZ4oQ/91hb3NsrfE0XLHICTX/MCDE++WYOK9ElQdl3BOnFmEbdF7cbVRh1Fjufg9X1dgdapGUxKkEO49PPcE4fAl7gHiIcKuL4v3DilVT4WdIX8v3nW03DUI+1IZcpiUI9rxt+zKK8Hxt0vAkwm9Gy8PoXKO4V4MfzxmDZosf83XPfD4YgOZcpZ0eN2vg+jjhpwNKoSyN8fhfTg4q2bP92sUY7MQS/XxYwr3x96y73NKTKZniVuG98EgqGz/KhO8vQKD95YXIixJdRKRUNq6AodmTJCOlro1sNmeMTNiNaeMov57ie3VdBl+rAyBGwt7m6VmzGpOHUX9ufux2XtNJcJ/dKr5tGDqcJyPbNsdeGUhhRZdQTq87gdBdKKZ0Wi5fRClB8ZmqRAbIHQdV7jbLNXjZWN47w/CvixxgdhzYTXGiuAAYxY+zA/5/IEFE8guSJDeRlSESxt6iVCpGnCDVRSu3MufHEgq1Z7vVWP8rcI/zUo1JM5PTqJ547BSrfu0WkzuLDD/qxQAMDhcPUrNC70XWZAgZj/aFbhUrxuF+4LZ26t926zfOxHYZFrup5r3af2+6ephVHx+EjvX1EMeKYIj3rnoLHLkuyBB2lvdrxDo8LSQNljlZbcMoezgaFKpEtsst8Ek1keckkYZnruD2Pnl4sSDGc+1+fvXJEM/KUESWWjL+kCU8pRLnyFN3as47lz+9AAW02DPOTUY//+FeZqVGqHZNSq/OI6R58vS/awg6jM4SuPjLb6+kb1zFUpKALP7XQklq44dQ8OP5z83nQnA0ANODPza2mYVxCzPUomF/LOSryCtDW8S8NEs+9T186U3DKH8kOTbq2nBon0S/GvNHyRNV6ALpHMG/tnW1X9wyhVk57KGg+MleMPMegsXixXPBFSpsPu7tYX3ck6V5rmr5Dw4asqLWFtU/uCKnoFtM5GZt4K0exs2EOHi3MGX+5Zda8axZEasp8V6HNrixMCt1jZLy1Fp3jiE8NNOhP9UqmWzOW+Lma9o8wfWL06QAtheTR9bqkHU2mapQSm9OksuCaFyzQT2/sJlKsM/2TZr1grSWVtbzS7boJlPr8jBWPFcAJTG4VT3t2sw+V4aH6Q3X4qu9nRUR5aBvp9XIfJK6pVEBK9zfWUc8ghh5MXU9XMCKrNcKk82eHaH9jnvzSJIh6f+eEjSH3LSeZ4arTxqHI1Xqg9zI8Qa3FyO4B0VeZKw8LuZeYLIcaDv8oVJIv6gVX1lHDWnjQIlDP+6+n0ex7ogNcfDdzZBvPUbQdL5ugimUaeN60Oo/EJ6768nu23oPrnAoglqhGcmzZQfOoml1yfcV0RJRhKFGMeNQziTTge2C9xYieHHdHaWnBOFcRZB2s1uf5QktldSBit09+m1mNxRXH5ImUx+Nd84VsTh+d3sJwbiu77LqhD5vw5Uf20cNSePwla/P8pKbK+Erm/UAXF976bn2iH7pCkE+6Pif0yi6dr9f7nUDOZ0neBd5Ri8y9pmpYPZQnWlcsaKPyU/Zo8PSUpsgLml/2oXQk8b4CZ/jh2yjyCFYH+I0xPXl9PbXk0P1OROG7pPs7ZZWhBEtLHixX7VK3l0jwS/2OIaJZjGDDtkP0HMbn9IjBXPDkD89cq0+E+qRXS3tc3KFL+Z33nuDcKxUl240771Loy8YIDVY5/RJG/y+QcuEP+5jyBmtz+cn5pE802Zba/2bbPuKMfgZmublQ1BhP1Rc3oErqMmABXhsya7bOg+1Vgr90w7RCFIR3OdByVSl5nvP9wXjUB5j51FEYllus+ozaKF4v209AMx1JwxisrD09viBu8ux+CdBvujNMMOUQjS3uI+gmz0snmHlxXX9ulsStno0fX1OsT2qvjTl00nBfSt86NR1Jw+ivJDJjPSShwB773ShZEXDbTFEkfTsfhhbXuCWxMriIaB4RyrYkqQBLIxWBhdwiSQAXGrKn6KXZ3y/8X2lEVuk6l/n6q7r574hqe+j099L+oq9afaEO0wIFUyqtdmt3pMj27k/zgw0Z5HOyROCP3BqYQjMlMRJ4Yi6IMIUKdFEW4p4ecMRJKpV4aJFURjB0UlIf2GYdibM4smrgXgZmgj1i+h95IqTLxrPjcX+9K4Egyj9KAoyg6KobQtBnH5l2kRfyj3/tKFEYOQhBnXtvn7f5JYQbzux0F0XKbKJfuOnDIaLw+j4rOZLb1aymLEtka32tF3RRXkcGG8ARe+VKUfiKJUkEWQ5sAYREyydIqhSML8hM8fOD6xguTwBr3mpDHUf3/xl33pgFgIdYO3VWDwvsIP0CYiPArjfW6JvW9TVpuZN+kz6/Rf70LocX23W9MnWSS28B3ehuFchvcp/VAUTVcNo6Q+8yW4EIghAkX0XlqNiSJ5B994RQiVR88/1fKfUIdojw2Sk+FYHod9eQx2Txz21jgc3hhEbOHATS6EntSPJAwO+boCtbSzqWZ5vNS+M9cTULgXCMCcn9DGqMu1vFq3L7IzidMa4WpRLGXa7X2mviJPe+Cm1A/UBGH0zkNim4iuoLyGF5WA2m9HUHfGaKHGjp4/9+NA8K6pmLdFtoDOzbArjwFdX683jd0lwpKSHhFMRDS/xitDmtxbGPmvsdhSibcQ428WZwTHuTlKBu8uR9Bol4KLTCCS+VzS+ohX7YS1ueNoujqknHYUYhl7w47ey6ogF9GWau44zgz9Ku55xOrB4+a57xFHvdSho5OiOBoUJ1zV67S55DME0WQguLkcg3dXTF2MGkIq3YRY+VI/yAEENlZg+BGTndyxvIk6vO7bQPSvuiEIoOKICSy5NARJ58dk2WIQHyRl1SjWLVUy/MRRr61WRtc6/R9DpT2+zL8RBDFEigN7i7h9DynHfmYs4/9VohzhxoPFc0qlZpzEyWXkVYepopvs04v5IWGDPEuEf1GjbK7rUCmj4aIRuI6Znz8v131n077IyiSyM1llPgKVR01g5KUM3kAbAEwR1JraW91bCXSIAeTZJ0LVseNwnz8CQRgjF2F4irA2Y/8ozlMqI4+NFrKJFG3U0ereBlDKbJ9adJhOG0Z3eFS2VJdVIR6wXOPTGVcz1RXuJoIguwBqNaLgwuGx6RchlB9qoNt3BoYeKMfAbyoSLvtWKWAEeDt1tDb0iqzARtZShIip+9cIxLGwniU+krj4G/urtaXScxzy2Hcftbc2iKsbw1tRejs8jr9Tgr6fVVmvDfM4O/XuioEJ0xBEgCUitovI7XqUnV9yQx41zy2wHhgVWp8KQcywxVKAF2F9nhmAVKHPyVbvpVWI/NnwC22hzVG99ekztJE+Ex3nJybRvCm7sD7ZoD3yfKnyAtAqxYQAdxn2mHfuMLgv0NdnS54Adv6LG4hZ26zioQhvN+RFYbIBaH18ACVufYNAvH9xFUb/Ym2zioUgykWhkVxNFgJeBANouWtI93EJP12KvVdb2yzdByJPAiiuJrmIaKK1/HXfjaD2W6NaN5t2e+IUa+eaeuMEWU5bA+uDtBAQzopG8eZdTHDPPUE4fMa4tu75YTXG/mZdFKY10cxambHZEO9BFsOvpCmO1kfmJ2PRC3MRaaP/Vy69urf6zScC4j2IXk9u1epZc8IY6s8zTlwtEZVk11fr1Ypv1ZtCQMTHmnhPZ1+hNEdDeXKrR9CGdORsvnkIzo9p46wobIhs8odMy93zgxqIN+dWUY+AyJ3ef50L0T3m8X4m5gvzG/ZHPZ5KTVu1jOV/HEjzq/nVJ3fZ0PezasjjQNMvQyg9ILtAEcOPlSFwo7XNUjswVC4rXhDDDzgxcFvqmFhq2815vXj8mLwFjstEmblxldJuQ7imP+xE8LZK8NQiJDyCa78TQe2po0CGr2NFOJ+u48Q2y7o0VDMmlUePo/GKMOJDhF0CN50TdaqRWfkDLQLHidCjnV73JIgMt/Y1XTOMis9lFvw6NkjYu74KY68nP3Eq+3AUjb8IZXz5uOecGowXSQhRtRNqoXqNl4dQ+cVECFLxyCzysvEvW5kx4vP3VyeiuxvwVaEIbixSOlMGW30lcvqVVZBDiy8RkkvGksvCqPhM+iQcetCJgVtMtF3IdpZn+v0cJ9Oxv9vRc2FNpq3l7bt9wasVguQg/UG2mlR8bgJN14TSakYEJQvcXInQE+kFPRap2+p/EEnrDXy0V4J/nXWalWqAnB+bRPPN+51MRYoD/7o6xPoMt2GZrcqs9AcaJ9BJBZqa36eb0nmi04a+S6syzlJr98SUSI8iCaXasvs7NZjYnsESp7aDAqgnAgOKFBgzy9B9xjfWZyfQ0TAFmyZjms7bDxkYfKAcg3dUgLM7nFJyVtT/r4jqdG5mGGhNxiOLRrwPD8zLNGYKY31WCjaDJfF0HhxF8y2pnRNFkDYl7M6b2v4VF/n3Gi4JK8fMixVxpu8/0VgpjLOYy2l/KrlYuVeSKuTET+X/s5L3Q+SNlGpk1J6e3Idu4t0SyBMLnwLKYULgBhdigQyPGtPWZs4Oa2YSz53LG5rijPezbFOzz93njaD6hMXj9Ub+4oBI/CiP5AZAES5TyWfy8cUvKUXaaJE+uthKybI4Gn8eUvITal0md9rw/kXVutopNorWrtg1NLSPwrlMw5YugIu9/RC34QMbKxF6Oj1DPF0ZlPoE1J4yitqzFo6oMnhPOYK/LdKoihJQ840x1J2d3gHHYmMx8mcH9l5RBZ7U745p+gRragokxNUzyvtMwBy+GDz3DCbFUPjy9IrIIj35PQFxrI6i6coQ7Mvmb7nEX7vu04p3myUGSpPVJA4l1tjQ/QaIAM/yJp9/4ILZBPHUHw9J+kNGf2k1/Kj2zAjqvjNn3xqHkvRSpBTI1hDPVFQqYzT8KHncYP/JtYh2F982axaWYjVZN7WalKUXWCMeJuUEcuz/GeQZgSx/zdc98PgsgnS3VNVNSI5+EOVmU69yZnruGoRjRmZUJZf4ZVWGSXxZceQ4lvw0DGnGH7rg7eUYvLdIt1lzxlU8T1jy8xCcH1FnmxjB3pilAjNTOF67anBQubyZtdHT2w4paZTR+uh+58SRF0ohUgLLI/rtR5Px2r40jiXrwyg7KGHAT7SXYPeZtSr/BBRHtdbHBlCyJHUMgeAdFRjcbIBt1dSwzLQ/5hFEbzuk+hujcJ8fgRwhBG6sRPi5PBjimc5XG1D37QhqT0s4PXatNcHtcKa6pvldydI4Wn+v7pFbdI8E/4kG8kiYYX/MJ4jOdkjzvw+BnJwI8Wl0V4SpSTPt9Dj8kFMJam0VoPqEUbjPi6iGwlBH5TPsj3kE0dMOERdL1WvHDLXcqh1hcWFWfdyYcpBgFUA8jnJ+cv790cjLpag8MuHVO7MYJgHRHPtjHkHEP+hth1gTzNwITD+Omvl4Qmyjei+pVi5URRDyxvUh2Jv22yexPglda/XfZs21P5ITxICOi+aeMsUl/fTjqGmtw8+Uof+Gylnpn4VLSv0PRlD1P/cHIt99dg0m3tHWZShd5Jn5ijZ/YP3M7+YdD+1c1nBwvARvpNu4Vd9CQCAw/ThKHgX2XuNC5OWFD1qch0xiyc9CKKllCBtOPFXQs9ii8gdX9AxsW5Qg1jZLzyEyed9TXtjRblvC46E3tceDVCWj4eIwxGFH17H6PWNOtr1KusUS/2j0SCcmn0YFK77zo1E4PzOJ4K3pX5q6vjgBcWk40aGPR4KIYLLKH9g4d3CS3sB1NFYuQWlZL4iMdUNXsFOrMBQT72n0dDLMFEUGRyuiE83NPeGAKoIktlnuVwh0eKadWt9ZCJgFARGkus3fvyaZvAuuEB1Ge2VoFrQtOc2HwNTrwbQIsrehoXK4nIOUUVwR82FkSVycCDAjUhHrX9Lcg6RPHxe1MYwY7aQ4hzE/Wov7CXtzXDdDOT9azumFsdnn7//WQn0vThCdfbN0AayIO116/RDExd7IiwZ2EtV6fOLxY3y7g89mRBDxUYfX/XcQfVJruaz2jIVA7ekR1J09ir2/dCH8bHEQRKRYa+sKHLrYSKQ8xu2wVhFjzeQcSCMyCC/dOAxxqN+/oRKhp5w56MWATc7x3E3LSJ9ZuaPVvR2gDxhQRUukJAiUfTSKyfdKII+l/PsHe0scLXcO7ss/H7i+EsOPFwFBmNt9/kDKOZ0aQbHNso58TUVEcaO99MZhRF51YOT5MoxudSR9yy/e3ghyOLz7o0kGNlVg+PdF4La/yNHuzMFWRRAGbB1et5+Imk01U4pY2IYfh1F1bMJbNh4iRF4qVcgy9pYdmIqpIIzy8kNnv9sY+HVF4T/8Yn5/lT/gISBlnFlVBBEgW/5Z5mKbOLL13B+cl94htldC+PkyiNAcNSfPP/oP3l4B8YCpkMtCflcZ2yDiw53LURaX3T0gsqITmGT2VBw+gaar0ouQP3h3OYJ3pu9saBJIAOb3bVJg5Ypd2P8YZRHhVa8goo12r3s9EV1uGjAsQdF07TBErGG1ZfB3TgR/o++7DLWyZlKPWf5pm39gg9pv0yKIcD8JOfkdEHnUdmDV0xeBErcMzwNBJaC0mjL2uh3917oQzXP0SjWyZV2HubtqjA5c0t+vOm1yWgQRAnZ43CdBogeyFtZqIG8IVB07hoYfq54TilwivZy4MBz5UylEPOSCKDKf7OsOPJiOLhlp3uF1vwCio9PpyKqrLwItdw1C5CrPpIy8UorwU4njYvMWftnXFTgqXfkzIsiOZvdquQRvGzHxZ7oAFEN9kWde5JvPtohcHeEnnQjeZbJTLuY4xXHgqj2B99LFICOCKFstb/1GkHR+uh1a9fOLgIhyKC4DbVXqbJBk0olwPZGtDoz91YHxt+y6BRDPGLk50RLTaSdjgijvRZzYSQR3Oh1adfOHgIhR1fLboVk35Wp6F7GQR//hwNhWh7Kt0ivLkxpZU9bJwDCf2WbGBFFWEcsFJeX46FlBhHJNlSFrpnzCMBcBF8b+qW98Kk0xy8Aw14wgia2WZbBrOqAaNdZwURhVxye/CxNheeye+V4WocfLlGj6hVMyM8w1JYhlsBtvOk1HyReS8QRh/N0SjP/TrvxP+GLxBLDstqF5+QVFfvn+6wqDIAxMSDH+SCaGuaYEEY11etznsES3Gm+qFJ9EwpO35vTRBBmmSJEMBZHoxnPvoJKZdroU1Aqi0ls31QzJygaZ2XhHa8NjAL6WqkPr98ZBYK6vVsGsIMwP+fyBk7RAWjOCdNbWVnNVyZsAlmshmNVGfhAQsXFdaxIpCQqEILsoFDt4OoVatihqRpDEVqv+U7JErxLIzFeu2WJqqu9FclLPvUHYm2XTE0RESJRkfGZVd+AfWg2CpgRRSOJ1X8BEN2kloNVO7hFwtEXRcucQwv9pbiM9nXcealHVnCCiY8seUQu/cerVnhFRkm6a9hSL+QmfP3C81ojmhCCWPaL1MOWhPQmoOmYcoT+aMuSPpnbHTLRzQhBlFfHUfogl218IVJWH4bW6KFIEGBwGy4e1+YNv5wKCnBEkYY/UHy0TPWPF983F0FltMnOM4viSb0/g5VyhkVOCKCuJt/50kLQ5VwpY7RYvAgT+5qquwJZcIpBzggjhrbfsuRzC4mw73bflmaKUF4JMrSSbQNJ5mQpqfWchsA+BLN53pIti3gjCAHW2NjxquaOkO0RW/ZkIMPOT4jiX9oW/yy0+eSOIUEPE1opxw8sELBpRO7cqW62bFQFm/hv8gc+3AQnfmDyUvBJE6LN7mat+3Fa2FQRfHvSzuigQBJjRWSZPfNqzOxTMp0p5J4hitDdVNsBR9hQRfTqfylp9mRQB5n+UxyaOSZaFNtca6UIQoVRPM8pH7e6nADoy17aZAEQAAAQISURBVEpa7ZsagWdK4/1rPbsxpocWuhFEKMuAo7PVvRkgTXz39QDQ6jN3CDDj9z5//0kEyLnrZfGWdSXItGgdHvd1kOgivUCw+jUeAsy8sc0fuFBvyQxBEAFCR6v7RwBdrzcgVv86I8DMBLpwlb9/k86SKN0bhiCK8d7q/i4YtxJRiRHAsWTIMwLMcQnySSv9wUfy3POC3RmKIELKHZ6Gz8sSHgLQZBSQLDnygkCvJOPEld39/zsvvansxHAEUUiypKIx7nQ+RKDDVephVTMxAgz+s21s7MSVeyN9RlPDkAQRIIm8iDu8Db9g8E9AIkGxVQoOAWZm0LU+f//P1OQL1EN/w0+8jpa6NSxJW4ioTg+ArD5zhkAv4vEzfbuDz+asBw0aNjxBhI4dzXUeLpEesW7eNRhxAzRh5C3VXHhMQZCpLZdjh7dhvbXlMsAMz1QEE2ypTEuQacGtLVems1Pf75g5SLJ8qtG3VKYniFCgHSiFt/5CgnQZCCZLd6TvRM1774xRZlyF7v4b8ummrpWeptliJVO4fVldC2ySuFj8qlaAWO1oiADzw4jJF/l6gt0atprXpkxNkGmkOlvdX5GZNhFhVV7RszpLioB4u0FxPiuX0UbyBX1BEMTaduVruqTox+TbqWTaFQxBppUTt/Cy0/lvzHQOESoMMnUKWgxmRCTi39DY2K+MeBueDfgFR5BpMLpbquombPYfAvR9gKqzAcn6NjkCzBiQwP/ukCdvyfdT2HyNScESZJ99ouQtsZ0N0A8tB0jNplUfWL6xcmLg1019iGjWqgEbKniCTGMuIqrE5YazAP43EHkMOBaGF4mZdxPoOpvUf/uKXUieIdTwWqQnYNEQZBoWBuydXveZDLqYCCvTg6s4azN4GzFvWOUfuJ+AaDGhUHQEmTm4u1qrV8TgOJXBpxLogGIa+NS68nYAW0oQvW951/DO1PULs0ZRE2TmkLa3uj8uAacy42QQLS3M4U51TMvvM+FBYmzx+QOvFyUGc5S2CDIHEAakHd76I2WSTgV4baHnN2FwiJgeI8hbVvoHXtIzgogRCWkRZJFRUXy+ltV9DJJ0GIgOA/gwImox4kCqlUkY2gC9BubXIMuvYU/wDTP6SKnVN9t6FkHSRFD4f9lsOJRJOoxBhzHwcRJEMmDhRAzbNwB+DUyvIR5/rW1PcLcBRTWsSBZBshwaBkp2Ndf7YjaslggHMKQDQFgN5gNAVJtl86o+Fxd2BGxjkrcTaBvL2C7J2LZyT2AHATFVjViVkiJgESSHE6OjsXKJ5HAeIBOvBsMD4mpAqmLABcBFBBcYLhC7mMV/J54VK28nCGEwhUEIMyMMIExI/ATzEAjdEtN2skXfWrFraCiHahR10/8N09AycF2wNBYAAAAASUVORK5CYII='],
                ['上海', 3, 3, 'data:image/png;base64,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'],
                ['山东', 4, 1, 'data:image/png;base64,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']
            ],
            nr: 5,
            nc: 4,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            dtRankingBar: {
                top: 4,
                animationDuration: 1000,
                animationDurationUpdate: 2000,
                easing: 'quinticInOut',
                imageLabelPosition: 'left'
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            timeline: {
                show: true,
                orient: 'horizontal',
                inverse: false,
                left: 20,
                right: 20,
                top: '85%',
                bottom: 'auto',
                axisType: 'category',
                currentIndex: 0,
                autoPlay: true,
                rewind: false,
                loop: true,
                playInterval: 2000,
                realtime: true,
                controlPosition: 'left',
                symbol: 'emptyCircle',
                symbolSize: 10,
                lineStyle: {
                    show: true,
                    color: '#304654',
                    width: 2,
                    type: 'solid'
                },
                controlStyle: {
                    show: true,
                    showPlayBtn: true,
                    showPrevBtn: true,
                    showNextBtn: true,
                    itemSize: 22,
                    itemGap: 12,
                    position: 'left',
                    color: '#304654',
                    borderColor: '#304654',
                    borderwidth: 1
                },
                label: {
                    color: '#000',
                    fontSize: 12
                },
                emphasis: {
                    controlStyle: {
                        show: true,
                        showPlayBtn: true,
                        showPrevBtn: true,
                        showNextBtn: true,
                        itemSize: 22,
                        itemGap: 12,
                        position: 'left',
                        color: '#304654',
                        borderColor: '#304654',
                        borderwidth: 1
                    },
                    label: {
                        color: '#000',
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: true,
                formatter: '{b}: {c}',
                position: 'right',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'right',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            color: {
                option: 'linear',
                pure: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', 'rgba(0,0,84,1)'],
                linear: [{ type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#2c3e50' }, { offset: 1, color: '#bdc3c7' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#ee9ca7' }, { offset: 1, color: '#ffdde1' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false }]
            },
            xAxis: {
                show: true,
                max: 5,
                type: 'value',
                position: 'top',
                name: 'X轴名称',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: false,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [6, 9],
                    symbolOffset: 6,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: true,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                zlevel: 2,
                show: true,
                type: 'category',
                position: 'bottom',
                name: '',
                nameLocation: 'center',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: true,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'none'],
                    symbolOffset: 6,
                    symbolSize: [6, 9],
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: false,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            grid: {
                containLabel: true,
                show: false,
                backgroundColor: 'transparent',
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '20%'
            },
            title: {
                show: true,
                text: '动态柱状图',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 18,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 1,
                    textShadowColor: 'transparent',
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 5
                },
                subtext: '',
                subtextStyle: {
                    color: '#100',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 12,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 1,
                    textShadowColor: 'transparent',
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 5
                },
                textAlign: 'auto',
                textVerticalAlign: 'auto',
                itemGap: 15,
                left: 'center',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            }
        }
    }
}
const DTRANKINGBARGRADIENT = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'dt-ranking-bar-gradient',
        detail: {
            sheetData: [
                ['', '1月', '2月', '3月', '4月'],
                ['河南', 1, 4, 1, 4],
                ['河北', 2, 2, 3, 3],
                ['上海', 3, 3, 2, 2],
                ['山东', 4, 1, 4, 1]
            ],
            nr: 5,
            nc: 3,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            dtRankingBar: {
                top: 4,
                animationDuration: 1000,
                animationDurationUpdate: 2000,
                easing: 'quinticInOut',
                imageLabelPosition: 'left'
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: false,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            timeline: TIMELINE,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: true,
                formatter: '{b}: {c}',
                position: 'right',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'right',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            palette: PALETTE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID,
            title: TITLE
        }
    }
}
const SIMPLEBUBBLE = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-bubble',
        detail: {
            sheetData: [
                ['类别', 'x', 'y', '大小'],
                ['A', 10.0, 8.04, 10],
                ['A', 8.0, 6.95, 11],
                ['A', 13.0, 7.58, 12],
                ['A', 9.0, 8.81, 13],
                ['A', 11.0, 8.33, 14],
                ['B', 14.0, 9.96, 15],
                ['B', 6.0, 7.24, 16],
                ['B', 4.0, 4.26, 17],
                ['B', 12.0, 10.84, 18],
                ['B', 7.0, 4.82, 19],
                ['B', 5.0, 5.68, 20]
            ],
            nr: 12,
            nc: 4,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            label: {
                show: true,
                formatter: '{@[0]},{@[1]}',
                position: 'top',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#fff',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: '{@[0]},{@[1]}',
                    position: 'top',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#fff',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            legend: LEGEND,
            palette: PALETTE,
            title: TITLE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID
        }
    }
}
const SIMPLELINE = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-line',
        detail: {
            sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
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
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE,
            xAxis: {
                ...XAXIS,
                boundaryGap: false,
            },
            yAxis: YAXIS,
            grid: GRID
        }
    }
}
const SIMPLEPIE = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-pie',
        detail: {
            sheetData: [
                ['男', 11],
                ['女', 15]
            ],
            nr: 2,
            nc: 2,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            simplePie: {
                type: 'pie',
                hoveranimation: true,
                /* left: 'center',
                right: 'auto',
                top: '20%',
                bottom: 'auto', */
                clockwise: true,
                startAngle: 90,
                center: ['50%', '60%'],
                radius: ['30%', '75%'],
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{@[0]}: {@[1]} {d}%',
                    color: '#aaa',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 14,
                    alignTo: 'none'
                },
                itemStyle: {
                    borderColor: '#000',
                    borderRadius: 5,
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{@[0]}: {@[1]} {d}%',
                        color: '#aaa',
                        fontWeight: 'bold',
                        fontFamily: 'Arial',
                        fontSize: 14,
                        alignTo: 'none'
                    },
                    itemStyle: {
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: 4,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffsetX: 1,
                        shadowOffsetY: 1
                    }
                }
            },
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE
        }
    }
}
const SIMPLESCATTER = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-scatter',
        detail: {
            sheetData: [
                ['组别', 'x', 'y'],
                ['A', 10.0, 8.04],
                ['A', 8.0, 6.95],
                ['A', 13.0, 7.58],
                ['B', 9.0, 8.81],
                ['B', 11.0, 8.33],
                ['B', 14.0, 9.96],
                ['B', 6.0, 7.24],
                ['C', 4.0, 4.26],
                ['C', 12.0, 10.84],
                ['C', 7.0, 4.82],
                ['C', 5.0, 5.68]
            ],
            nr: 4,
            nc: 5,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            label: {
                show: true,
                formatter: '{@[0]},{@[1]}',
                position: 'top',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#fff',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: '{@[0]},{@[1]}',
                    position: 'top',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#fff',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            simpleScatter: {
                symbol: 'circle',
                symbolSize: 14
            },
            legend: {
                ...LEGEND,
                icon: 'circle'
            },
            palette: PALETTE,
            title: TITLE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID
        }
    }
}
const SIMPLEFUNNEL = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-funnel',
        detail: {
            sheetData: [
                ['Exposure', 100],
                ['Infection', 90],
                ['Symptom', 80],
                ['Outpatient', 70],
                ['Hospitalized', 60],
                ['Death', 50]
            ],
            nr: 6,
            nc: 2,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            simpleFunnel: {
                type: 'funnel',
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '20%',
                min: 40,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                gap: 2,
                sort: 'ascending',
                funnelAlign: 'center',
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    /* color: '#aaa', */
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 14
                    // align: 'left'
                },
                labelLine: {
                    show: true,
                    length: 40,
                    lineStyle: {
                        // color: '#aaa',
                        width: 2,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                },
                emphasis: {
                    labelLine: {
                        length: 40,
                        lineStyle: {
                            // color: '#aaa',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    label: {
                        show: true,
                        // position: 'inside',
                        formatter: '{b}:{c}',
                        /*  color: '#aaa', */
                        fontWeight: 'bold',
                        // fontFamily: 'Arial',
                        fontSize: 15
                        // align: 'center'
                    },
                    itemStyle: {
                        borderColor: '#000',
                        borderWidth: 0,
                        borderType: 'solid',
                        shadowBlur: 4,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowOffsetX: 1,
                        shadowOffsetY: 1
                    }
                }
            },
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE
        }
    }
}
const SIMPLERADAR = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-radar',
        detail: {
            sheetData: [
                ['', 'AQI', 'PM2.5', 'PM10', 'CO', 'NO2', 'SO2'],
                ['最大值', 100, 50, 150, 5, 50, 50],
                ['上海', 91, 45, 125, 0.82, 34, 23],
                ['北京', 55, 9, 56, 0.46, 18, 6],
                ['广州', 26, 37, 27, 1.163, 27, 13]
            ],
            nr: 5,
            nc: 7,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            simpleRadar: {
                shape: 'polygon',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)',
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 14
                    }
                },
                nameGap: 15,
                center: ['50%', '50%'],
                radius: ['0%', '70%'],
                startAngle: 90,
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
            title: TITLE,
            legend: {
                ...LEGEND,
                show: false
            },
            palette: PALETTE
        }
    }
}
const SIMPLESANKEY = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'simple-sankey',
        detail: {
            sheetData: [
                ['名称', '层级', '总数', '来源', '目标', '数量'],
                ['A', 0, 100, 'A', 'B1', 50],
                ['B1', 1, 50, 'A', 'B2', 40],
                ['B2', 1, 40, 'A', 'C1', 10],
                ['C1', 2, 50, 'B1', 'C1', 20],
                ['C2', 2, 40, 'B1', 'C2', 20],
                [null, null, null, 'B2', 'C1', 20],
                [null, null, null, 'B2', 'C2', 20]
            ],
            nr: 8,
            nc: 6,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            simpleSankey: {
                left: '5%',
                right: '5%',
                top: '10%',
                bottom: '5%',
                nodeWidth: 20,
                nodeGap: 8,
                orient: 'horizontal',
                label: {
                    show: true,
                    position: 'right',
                    distance: 5,
                    color: '#333',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 12
                }
            },
            title: TITLE,
            palette: PALETTE
        }
    }
}
const BARLINE = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'bar-line',
        detail: {
            sheetData: [['', '粗产量', '残次率'],
            ['2010', 100, 13.2],
            ['2011', 120, 12.4],
            ['2012', 170, 10.7],
            ['2013', 250, 14.1],
            ['2014', 200, 11.5],
            ['2015', 150, 13.5]
            ],
            nr: 7,
            nc: 3,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            simpleLine: {
                lineStyle: {
                    width: 1,
                    type: 'solid'
                },
                smooth: true,
                areaStyle: {
                    opacity: 0
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: false,
                // formatter: '{@[0]},{@[1]}',
                position: 'top',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{@[0]},{@[1]}',
                    position: 'top',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE,
            yAxis: YAXIS,
            xAxis: XAXIS,
            grid: GRID
        }
    }
}
const POPPYRAMID = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'pop-pyramid',
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
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            popPyramid: {
                max: 64008573
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '5%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
                    linear: {
                        type: 'pure',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0, color: '#ee9ca7' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#ffdde1' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false}
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: false,
                // formatter: '{@[0]},{@[1]}',
                position: 'top',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{@[0]},{@[1]}',
                    position: 'inside',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            title: {
                show: true,
                text: '2010年中国人口金字塔',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 20,
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                subtext: '第六次人口普查',
                subtextStyle: {
                    color: '#aaa',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Arial',
                    fontSize: 12,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                textAlign: 'center',
                textVerticalAlign: 'auto',
                padding: 5,
                itemGap: 15,
                left: '50%',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            },
            legend: {
                show: true,
                type: 'plain',
                left: 'center',
                right: 'auto',
                top: '5%',
                bottom: 'auto',
                orient: 'horizontal',
                align: 'auto',
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                icon: 'roundRect',
                textStyle: {
                    color: '#333',
                    fontWeight: 'normal',
                    fontFamily: 'sans-serif',
                    fontSize: 14,
                    lineHeight: 56
                }
            },
            color: {
                option: 'pure',
                pure: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', 'rgba(0,0,84,1)'],
                linear: [{ type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#2c3e50' }, { offset: 1, color: '#bdc3c7' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#ee9ca7' }, { offset: 1, color: '#ffdde1' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false }]
            },
            xAxis: {
                show: true,
                type: 'category',
                position: 'bottom',
                name: '',
                nameLocation: 'center',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 25,
                nameRotate: 0,
                inverse: false,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'none'],
                    symbolSize: [6, 9],
                    symbolOffset: 6,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: true,
                    length: 3,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: false,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: false,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                show: true,
                type: 'value',
                position: 'bottom',
                name: '',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: false,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'none'],
                    symbolOffset: 6,
                    symbolSize: [6, 9],
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 3,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: false,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: true,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dotted'
                    }
                }
            }
        }
    }
}
const WORDCLOUD = {
    x: 1,
    y: 2,
    w: 8,
    h: 7,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'word-cloud',
        detail: {
            sheetData: [
                ['新冠', 1000],
                ['传染病', 1000],
                ['epidemic', 1000],
                ['疫区', 1000],
                ['COVID-19', 1000],
                ['武汉', 750],
                ['钟南山', 800],
                ['隔离', 500],
                ['口罩', 600],
                ['方舱医院', 400],
                ['世界卫生组织', 400],
                ['谭德赛', 400],
                ['WHO', 400],
                ['医护人员', 800],
                ['大流行', 900],
                ['Pandemic', 900],
                ['援鄂', 800],
                ['蝙蝠', 300],
                ['野味', 300],
                ['华南海鲜市场', 600]
            ],
            nr: 20,
            nc: 2,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            wordCloud: {
                src: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjI1NnB4IiB2aWV3Qm94PSIwIDAgNTQ4LjE3NiA1NDguMTc2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NDguMTc2IDU0OC4xNzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNTI0LjE4MywyOTcuMDY1Yy0xNS45ODUtMTkuODkzLTM2LjI2NS0zMi42OTEtNjAuODE1LTM4LjM5OWM3LjgxLTExLjk5MywxMS43MDQtMjUuMTI2LDExLjcwNC0zOS4zOTkgICBjMC0yMC4xNzctNy4xMzktMzcuNDAxLTIxLjQwOS01MS42NzhjLTE0LjI3My0xNC4yNzItMzEuNDk4LTIxLjQxMS01MS42NzUtMjEuNDExYy0xOC4yNzEsMC0zNC4wNzEsNS45MDEtNDcuMzksMTcuNzAzICAgYy0xMS4yMjUtMjcuMDI4LTI5LjA3NS00OC45MTctNTMuNTI5LTY1LjY2N2MtMjQuNDYtMTYuNzQ2LTUxLjcyOC0yNS4xMjUtODEuODAyLTI1LjEyNWMtNDAuMzQ5LDAtNzQuODAyLDE0LjI3OS0xMDMuMzUzLDQyLjgzICAgYy0yOC41NTMsMjguNTQ0LTQyLjgyNSw2Mi45OTktNDIuODI1LDEwMy4zNTFjMCwyLjg1NiwwLjE5MSw2Ljk0NSwwLjU3MSwxMi4yNzVjLTIyLjA3OCwxMC4yNzktMzkuODc2LDI1LjgzOC01My4zODksNDYuNjg2ICAgQzYuNzU5LDI5OS4wNjcsMCwzMjIuMDU1LDAsMzQ3LjE4YzAsMzUuMjExLDEyLjUxNyw2NS4zMzMsMzcuNTQ0LDkwLjM1OWMyNS4wMjgsMjUuMDMzLDU1LjE1LDM3LjU0OCw5MC4zNjIsMzcuNTQ4aDMxMC42MzYgICBjMzAuMjU5LDAsNTYuMDk2LTEwLjcxNSw3Ny41MTItMzIuMTIxYzIxLjQxMy0yMS40MTIsMzIuMTIxLTQ3LjI0OSwzMi4xMjEtNzcuNTE1ICAgQzU0OC4xNzIsMzM5Ljc1Nyw1NDAuMTc0LDMxNi45NTIsNTI0LjE4MywyOTcuMDY1eiIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
                shape: 'diamond',
                left: null,
                right: null,
                top: null,
                bottom: null,
                width: '100%',
                height: '100%',
                sizeRange: [12, 40],
                rotationRange: [-5, 5],
                rotationStep: 1,
                gridSize: 8,
                drawOutOfBound: false,
                fontFamily: 'sans-serif',
                fontWeight: 'bold'
            },
            title: {
                show: true,
                text: '2010年中国人口金字塔',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 20,
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                subtext: '第六次人口普查',
                subtextStyle: {
                    color: '#aaa',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Arial',
                    fontSize: 12,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                textAlign: 'center',
                textVerticalAlign: 'auto',
                padding: 5,
                itemGap: 15,
                left: '50%',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            },
            color: {
                option: 'pure',
                pure: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', 'rgba(0,0,84,1)'],
                linear: [{ type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#2c3e50' }, { offset: 1, color: '#bdc3c7' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#ee9ca7' }, { offset: 1, color: '#ffdde1' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false }]
            }
        }
    }
}
const BARZOOM = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'bar-zoom',
        detail: {
            sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: false,
                // formatter: '{@[0]},{@[1]}',
                position: 'top',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{@[0]},{@[1]}',
                    position: 'top',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE,
            xAxis: XAXIS,
            yAxis: YAXIS,
            grid: GRID,
            dataZoom: DATAZOOM
        }
    }
}
const LINEZOOM = {
    x: 1,
    y: 2,
    w: 8,
    h: 14,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'line-zoom',
        detail: {
            sheetData: [['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
            ],
            nr: 4,
            nc: 5,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
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
            title: TITLE,
            legend: LEGEND,
            palette: PALETTE,
            xAxis: {
                ...XAXIS,
                boundaryGap: false,
            },
            yAxis: YAXIS,
            grid: GRID,
            dataZoom: DATAZOOM
        }
    }
}
const CUSTOM = {
    x: 1,
    y: 2,
    w: 10,
    h: 15,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'custom',
        detail: {
            option: {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            }
        }
    }
}
const MAPC = {
    x: 1,
    y: 2,
    w: 9,
    h: 13,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'map-c',
        detail: {
            mapName: 'mymap',
            mapObj: mapDefault,
            sheetData: [
                ['北京', 4],
                ['上海', 3]
            ],
            nr: 5,
            nc: 2,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            visualMapC: {
                show: true,
                type: 'continuous',
                orient: 'vertical',
                left: '1%',
                right: 'auto',
                bottom: '1%',
                top: 'auto',
                min: 1,
                max: 10,
                text: ['High', 'Low'],
                textGap: 10,
                itemWidth: 20,
                itemHeight: 140,
                calculable: true,
                inRange: {
                    color: ['#D7DA8B', '#E15457']
                }
            },
            simpleMap: {
                aspectScale: 0.75,
                roam: true,
                zoom: 1,
                left: 'center',
                right: 'auto',
                bottom: '1%',
                top: '5%',
                itemStyle: {
                    borderColor: 'rgba(126, 51, 51, 1)',
                    borderWidth: 1,
                    borderType: 'solid',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#eee',
                    borderColor: '#2B91B7'
                }
            },
            title: {
                show: true,
                text: '中国地图',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 20,
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                subtext: '',
                subtextStyle: {
                    color: '#aaa',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 14,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 0,
                    textShadowColor: 'transparent',
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1
                },
                textAlign: 'center',
                textVerticalAlign: 'auto',
                padding: 5,
                /* backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                shadowColor: 'transparent',
                shaodowBlur: 2,
                shadowOffsetX: 0,
                shadowOffsetY: 0, */
                itemGap: 12,
                left: '50%',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            }
        }
    }
}
const MAPP = {
    x: 1,
    y: 2,
    w: 9,
    h: 13,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'map-p',
        detail: {
            mapName: 'mymap',
            mapObj: mapDefault,
            sheetData: [
                ['新疆', 4],
                ['台湾', 3]
            ],
            nr: 34,
            nc: 2,
            animation: true,
            backgroundColor: BACKGROUNDCOLOR,
            visualMapP: VISUALMAPP,
            simpleMap: {
                roam: true,
                left: 'center',
                right: 'auto',
                bottom: '1%',
                top: '5%',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(126, 51, 51, 1)'
                    },
                    emphasis: {
                        areaColor: '#eee',
                        borderColor: '#2B91B7'
                    }
                }
            },
            title: TITLE
        }
    }
}
const DTMAPC = {
    x: 1,
    y: 2,
    w: 9,
    h: 13,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'dt-map-c',
        detail: {
            mapName: 'mymap',
            mapObj: mapDefault,
            sheetData: [
                ['province', '2010', '2011', '2012'],
                ['河北', 4, 5, 6],
                ['山东', 3, 5, 6],
                ['河南', 3, 5, 6],
                ['重庆', 2, 5, 6],
                ['广西', 1, 5, 6],
                ['四川', 1, 5, 6],
                ['海南', 1, 5, 6],
                ['北京', 4, 5, 6],
                ['天津', 4, 5, 6],
                ['上海', 3, 5, 6],
                ['江苏', 3, 5, 6],
                ['浙江', 2, 5, 6],
                ['福建', 2, 5, 6],
                ['安徽', 3, 5, 6],
                ['江西', 2, 5, 6],
                ['湖北', 3, 5, 6],
                ['湖南', 2, 5, 6],
                ['广东', 1, 5, 6],
                ['辽宁', 4, 5, 6],
                ['吉林', 4, 5, 6],
                ['黑龙江', 4, 2, 3],
                ['内蒙古', 4, 4, 7],
                ['云南', 1, 2, 3],
                ['贵州', 1, 2, 3],
                ['山西', 5, 2, 3],
                ['陕西', 5, 2, 3],
                ['甘肃', 5, 2, 3],
                ['新疆', 5, 2, 3],
                ['西藏', 1, 2, 3],
                ['青海', 5, 2, 3],
                ['宁夏', 5, 2, 3],
                ['台湾', 5, 2, 3],
                ['香港', 5, 2, 3],
                ['澳门', 5, 2, 3],
                ['南海诸岛', 'NaN', 'NaN', 'NaN']
            ],
            nr: 36,
            nc: 4,
            animation: true,
            dtMap: {
                baseTitle: '年各省市人口数',
                roam: true,
                left: 'center',
                right: 'auto',
                bottom: '15%',
                top: '5%',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(126, 51, 51, 1)'
                    },
                    emphasis: {
                        areaColor: '#eee',
                        borderColor: '#2B91B7'
                    }
                }
            },
            timeline: TIMELINE,
            backgroundColor: BACKGROUNDCOLOR,
            visualMapC: VISUALMAPC,
            title: TITLE
        }
    }
}
const DTMAPP = {
    x: 1,
    y: 2,
    w: 9,
    h: 13,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'dt-map-p',
        detail: {
            mapName: 'mymap',
            mapObj: mapDefault,
            sheetData: [
                ['province', '2010', '2011', '2012'],
                ['河北', 4, 5, 6],
                ['山东', 3, 5, 6],
                ['河南', 3, 5, 6],
                ['重庆', 2, 5, 6],
                ['广西', 1, 5, 6],
                ['四川', 1, 5, 6],
                ['海南', 1, 5, 6],
                ['北京', 4, 5, 6],
                ['天津', 4, 5, 6],
                ['上海', 3, 5, 6],
                ['江苏', 3, 5, 6],
                ['浙江', 2, 5, 6],
                ['福建', 2, 5, 6],
                ['安徽', 3, 5, 6],
                ['江西', 2, 5, 6],
                ['湖北', 3, 5, 6],
                ['湖南', 2, 5, 6],
                ['广东', 1, 5, 6],
                ['辽宁', 4, 5, 6],
                ['吉林', 4, 5, 6],
                ['黑龙江', 4, 2, 3],
                ['内蒙古', 4, 4, 7],
                ['云南', 1, 2, 3],
                ['贵州', 1, 2, 3],
                ['山西', 5, 2, 3],
                ['陕西', 5, 2, 3],
                ['甘肃', 5, 2, 3],
                ['新疆', 5, 2, 3],
                ['西藏', 1, 2, 3],
                ['青海', 5, 2, 3],
                ['宁夏', 5, 2, 3],
                ['台湾', 5, 2, 3],
                ['香港', 5, 2, 3],
                ['澳门', 5, 2, 3],
                ['南海诸岛', 'NaN', 'NaN', 'NaN']
            ],
            nr: 36,
            nc: 4,
            animation: true,
            dtMap: {
                baseTitle: '年各省市人口数',
                roam: true,
                left: 'center',
                right: 'auto',
                bottom: '15%',
                top: '5%',
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(126, 51, 51, 1)'
                    },
                    emphasis: {
                        areaColor: '#eee',
                        borderColor: '#2B91B7'
                    }
                }
            },
            timeline: TIMELINE,
            backgroundColor: BACKGROUNDCOLOR,
            visualMapP: VISUALMAPP,
            title: TITLE
        }
    }
}
// slide component
const SLIDE = {
    i: '0',
    x: 0,
    y: 0,
    w: 1,
    h: 5,
    slideAnimation: { steps: 1, enter: 'fadeIn', leave: 'fadeOut' },
    SlideContent: []
}
// 保留图表
const MYRANKINGIMAGE = {
    x: 1,
    y: 2,
    w: 10,
    h: 11,
    i: '0',
    itemBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    itemAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    itemContent: {
        type: 'my-ranking-image',
        detail: {
            sheetData: [
                ['', '1月', '2月', 'image'],
                ['河南', 1, 4, 'data:image/png;base64,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'],
                ['河北', 2, 2, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu19CXhb1bXuv44s2bItj3LsOJacQW4odKAj0NeWqe0NbR/QJmUsUNrChb6WoeWWFkoJtEAoU3KhFwplCCVMBQpcylDGvkcf6cCDch+QYDuJ5cTYsSzbkuVJ0ln320d24kG2jqQjnXOks7+vn0u8z95r/Xv/3nvtvfZaBKvkDIGOxsolksN5gEy8GgwPiGoAuBhwiZ9EcIHhArGLWfw31QlhmDlIhDCYwiCEmREGECaIn3IITMMgdEtM2+XJsW2+vpG9OVOiyBumItc/a/UZKOlqrW+LyVjNhAMIUuIn82oQ1WbdgZoGmAdBtA2M7QR5m8zYVhLH9uU9Ax0ExNQ0YdVJjoBFkDRnRjtQihb3YZBwBAhHAHQoiX8zZhkHeCsxXpFkvIKSwF9X7MK4MUU1plQWQVKMy87lKIvF3IeahBCpZplFmFQIzfm9RZAkgO1taKgMl/OxDFoLxhoQytPE1RzVGaMMPEPMj1SN01NL+vtHzCF4/qS0CDKFdWdtbTW7pOMVUhB9ycDbppzMDgYmwPwcgR+lsPzEqsHB4Zx0ZLJGi5og4pSJy8qOJdBaBh9NILvJxi8n4jI4SqAXGHi0LD7xB8/uUDAnHZmg0aIjiN/jbo4SfUMGf52Az4JIMsE46SYiM8cI+DMxHrEDT3q7Az26CaNDx0VDkN5GVERK3WfJwI+IqEUHrE3fJTPvlkDXV0z0/7apDxHTK6RCgYInSHdLVd245DgPoO8ToV4FJlaVFAgwY0AC3+yQJ28u9O1XwRKkfVldC2zSjwA6iwgV1qzXHgFmREB8O2LyjW17gru170H/FguOIDua3avjdroY4G9aRnd+Jpgw6gH+nS1Kv1rZE9ien17z00vBEKS9rq5KctmuZuZzLcM7P5NnXi/MMpj+gyPxS9uCwZBOUmjabUEQpLPVfQqDbgDQpCk6VmOZItALmS/0dQcezLQBo3xnaoJ0eatXRsl+B0BHGQVQS46ZCPBLdo6e1eof3mFWXExJEMVh0Ou+BEQXF9uNt9km2tQN/Qb4A9e0idt6kxXTEaSz1f0VmWkTEVaZDOuiFpcZnRTns3x7Ai+bCQjTEIQBe6fXfRWAi0BkGrnNNBlyLiszM+hXPn//ZQREc96fBh2YYqIptgbsD4PoExrobDWhNwLMr3NcPt4MdyeGJ0i7p/44kHQfESr1Hlerfw0RYB5k5jPbugee0LBVzZsyLEGUh0rsvpFA52qutdWgYRAg4NcS9V9k1JeOhiTI1JbqSRAdZJiRtATJHQLMb9sRPdaIx8GGI0hnq/tUmek2a0uVu/loxJaZMSIRn7OqK7DFSPIZiiAdHvd1kOgiIwFkyZJfBJixoc3f/9P89rpwb4YhSIfXfTuIzjIKMJYc+iHA4FvbugLf00+C/T3rThAGHJ2t7s0AnWQEQCwZjIEAM2/x+QNnEBDXUyJdCdLTjPJRu/spgI7UEwSrb4MiwPxEeSxwSnMPRvWSUDeCiCgissv2JyL6tF7KW/0aHwEGtkqh2Bq9oqzoQpD2psoGcjhfBOHDxh8iS0IDIPAWT4x9oa13pD/fsuSdIOIpLNlsL4Pgy7eyVn8mRoC5HTH5aF9PsDufWuSVICJiYcjJL4HoU/lU0uqrMBBg5r9Vj9HR+YwAmTeCMGDrbHW/ANARhTFclhb6IMAvreoKiMiXeTndygtBGKDOVvcWgE7WB1Sr10JCgJnv8/kDpxPAudYrLwTp8NZvBEnn51oZq/0iQoDlTT7/wAW51jjnBGn31v+ESLom14pY7RcfAszyT9v8AxtyqXlOCdLhcZ8EiR7IpQJW28WNAIG/mUsHx5wRJPF2HI8TUUlxD6GlfS4REMG1bcDXV/oD/5mLfnJCkB1La1plu/2dgk08k4uRsNrMGAERArVkMvqhFb1DuzJuZIEPNSeICK7Q4XW/armQaD1UVnuLIcDgv/q6Ap/TOhiE5gSxTqysiawXAsy4ts3f/xMt+9eUIB2t9UcB0otaCmi1ZSGgGgFmmcBfWuUf0GwOakaQHUsqGmVn+ZtWfFzVw2nIimUfjmL8v0ydia7XRtEPrtg1NKQFwJoRpMPrfgFER2shlNWGPgg4VsbQ9MsQ/KfU6SOARr0y49E2f/86LZrThCCdXvcFTHSTFgJZbeiDgOSS4blnUHHe6Fpn/kRcJPO5q7oDt2WLZtYEaffWHQiS3iCQI1thrO91QkBiNN8yBOdHYoj1SgVBECX7FeKHtPmDb2eDatYE6Wh1v2Q9mc1mCLT/1lbFqP/BCMJPl2HsjdT2hPvCMKrXjiuCFApBFGWYX/T5A1/IBuGsCGK5kmQDfW6/rTsrgtozRjG5y4bQ406EnymDHJk/3JVrxtH4s/A+YQqKIEIrmU/OJpFPxgSZevz0Dog8uR1qq/VMEKByGa2PBCFWE2WejBFGni/F8KNOTHYmvH9KPxjFsluHMNMZqOAIwtxdNUYHZvrIKmOCWBeCmUzb/H5Tc8IY6s8bmdfp+Dt2ZftV9+0IbHXyrN/Hem3oWmfuU6x5CmfhGp8RQTqXuT/ANojVw5bfIbd6SwsBGyurSEnDbBIs1kbBrSAJWyQuxXBQJhl4MyKIZZinNU11rez68jiWXLLfxkglTEESJAuDPW2CWIZ5qilmsN8Tw7NlEA6v+ifckVcdGLynAhPbCuylQgYGe1oEsQxzg01+leKUf3YCSzekn7Z89G8ODN5ZjvG3Ux8VqxRF32oZGOxpEaTd615PRJfrq6XVeyYILP/jAGzV6m2RmX2MvWnH0L3lEIQxe0n3ma5qgoiMT3F2vw9QjRlBKl0dha2WMbrV/IOcLv5LLg/B9cXsMzCL06+hzeWI/MW8GDJzT4kUWKU2o5Vqgpjd36ru7AhK6mTs3eBKd36Zun7t6RHUnZ1d7Gdx9CtWkfF/2pWf0W5zH14S84Wr/IGNagZWFUGUoG9edzeIlqpp1Ih1PPcHYauRseur9YCsSm0jqpGWTBWHT6DpqvRtj6h/BiFedyAWkNLq1+iVxSri8we8aoLPqZopHZ76b0GS7ja64gvJJ9y4PfcOKr9+/8JqjP7dvFsEtWNQ9pEolv1Hek8iBDH2nFuD+HBhESIpZrJ8pq974J5UeKYkyNTq8S6I2lI1ZtTf131rFLXfjSjihZ4oQ/91hb3NsrfE0XLHICTX/MCDE++WYOK9ElQdl3BOnFmEbdF7cbVRh1Fjufg9X1dgdapGUxKkEO49PPcE4fAl7gHiIcKuL4v3DilVT4WdIX8v3nW03DUI+1IZcpiUI9rxt+zKK8Hxt0vAkwm9Gy8PoXKO4V4MfzxmDZosf83XPfD4YgOZcpZ0eN2vg+jjhpwNKoSyN8fhfTg4q2bP92sUY7MQS/XxYwr3x96y73NKTKZniVuG98EgqGz/KhO8vQKD95YXIixJdRKRUNq6AodmTJCOlro1sNmeMTNiNaeMov57ie3VdBl+rAyBGwt7m6VmzGpOHUX9ufux2XtNJcJ/dKr5tGDqcJyPbNsdeGUhhRZdQTq87gdBdKKZ0Wi5fRClB8ZmqRAbIHQdV7jbLNXjZWN47w/CvixxgdhzYTXGiuAAYxY+zA/5/IEFE8guSJDeRlSESxt6iVCpGnCDVRSu3MufHEgq1Z7vVWP8rcI/zUo1JM5PTqJ547BSrfu0WkzuLDD/qxQAMDhcPUrNC70XWZAgZj/aFbhUrxuF+4LZ26t926zfOxHYZFrup5r3af2+6ephVHx+EjvX1EMeKYIj3rnoLHLkuyBB2lvdrxDo8LSQNljlZbcMoezgaFKpEtsst8Ek1keckkYZnruD2Pnl4sSDGc+1+fvXJEM/KUESWWjL+kCU8pRLnyFN3as47lz+9AAW02DPOTUY//+FeZqVGqHZNSq/OI6R58vS/awg6jM4SuPjLb6+kb1zFUpKALP7XQklq44dQ8OP5z83nQnA0ANODPza2mYVxCzPUomF/LOSryCtDW8S8NEs+9T186U3DKH8kOTbq2nBon0S/GvNHyRNV6ALpHMG/tnW1X9wyhVk57KGg+MleMPMegsXixXPBFSpsPu7tYX3ck6V5rmr5Dw4asqLWFtU/uCKnoFtM5GZt4K0exs2EOHi3MGX+5Zda8axZEasp8V6HNrixMCt1jZLy1Fp3jiE8NNOhP9UqmWzOW+Lma9o8wfWL06QAtheTR9bqkHU2mapQSm9OksuCaFyzQT2/sJlKsM/2TZr1grSWVtbzS7boJlPr8jBWPFcAJTG4VT3t2sw+V4aH6Q3X4qu9nRUR5aBvp9XIfJK6pVEBK9zfWUc8ghh5MXU9XMCKrNcKk82eHaH9jnvzSJIh6f+eEjSH3LSeZ4arTxqHI1Xqg9zI8Qa3FyO4B0VeZKw8LuZeYLIcaDv8oVJIv6gVX1lHDWnjQIlDP+6+n0ex7ogNcfDdzZBvPUbQdL5ugimUaeN60Oo/EJ6768nu23oPrnAoglqhGcmzZQfOoml1yfcV0RJRhKFGMeNQziTTge2C9xYieHHdHaWnBOFcRZB2s1uf5QktldSBit09+m1mNxRXH5ImUx+Nd84VsTh+d3sJwbiu77LqhD5vw5Uf20cNSePwla/P8pKbK+Erm/UAXF976bn2iH7pCkE+6Pif0yi6dr9f7nUDOZ0neBd5Ri8y9pmpYPZQnWlcsaKPyU/Zo8PSUpsgLml/2oXQk8b4CZ/jh2yjyCFYH+I0xPXl9PbXk0P1OROG7pPs7ZZWhBEtLHixX7VK3l0jwS/2OIaJZjGDDtkP0HMbn9IjBXPDkD89cq0+E+qRXS3tc3KFL+Z33nuDcKxUl240771Loy8YIDVY5/RJG/y+QcuEP+5jyBmtz+cn5pE802Zba/2bbPuKMfgZmublQ1BhP1Rc3oErqMmABXhsya7bOg+1Vgr90w7RCFIR3OdByVSl5nvP9wXjUB5j51FEYllus+ozaKF4v209AMx1JwxisrD09viBu8ux+CdBvujNMMOUQjS3uI+gmz0snmHlxXX9ulsStno0fX1OsT2qvjTl00nBfSt86NR1Jw+ivJDJjPSShwB773ShZEXDbTFEkfTsfhhbXuCWxMriIaB4RyrYkqQBLIxWBhdwiSQAXGrKn6KXZ3y/8X2lEVuk6l/n6q7r574hqe+j099L+oq9afaEO0wIFUyqtdmt3pMj27k/zgw0Z5HOyROCP3BqYQjMlMRJ4Yi6IMIUKdFEW4p4ecMRJKpV4aJFURjB0UlIf2GYdibM4smrgXgZmgj1i+h95IqTLxrPjcX+9K4Egyj9KAoyg6KobQtBnH5l2kRfyj3/tKFEYOQhBnXtvn7f5JYQbzux0F0XKbKJfuOnDIaLw+j4rOZLb1aymLEtka32tF3RRXkcGG8ARe+VKUfiKJUkEWQ5sAYREyydIqhSML8hM8fOD6xguTwBr3mpDHUf3/xl33pgFgIdYO3VWDwvsIP0CYiPArjfW6JvW9TVpuZN+kz6/Rf70LocX23W9MnWSS28B3ehuFchvcp/VAUTVcNo6Q+8yW4EIghAkX0XlqNiSJ5B994RQiVR88/1fKfUIdojw2Sk+FYHod9eQx2Txz21jgc3hhEbOHATS6EntSPJAwO+boCtbSzqWZ5vNS+M9cTULgXCMCcn9DGqMu1vFq3L7IzidMa4WpRLGXa7X2mviJPe+Cm1A/UBGH0zkNim4iuoLyGF5WA2m9HUHfGaKHGjp4/9+NA8K6pmLdFtoDOzbArjwFdX683jd0lwpKSHhFMRDS/xitDmtxbGPmvsdhSibcQ428WZwTHuTlKBu8uR9Bol4KLTCCS+VzS+ohX7YS1ueNoujqknHYUYhl7w47ey6ogF9GWau44zgz9Ku55xOrB4+a57xFHvdSho5OiOBoUJ1zV67S55DME0WQguLkcg3dXTF2MGkIq3YRY+VI/yAEENlZg+BGTndyxvIk6vO7bQPSvuiEIoOKICSy5NARJ58dk2WIQHyRl1SjWLVUy/MRRr61WRtc6/R9DpT2+zL8RBDFEigN7i7h9DynHfmYs4/9VohzhxoPFc0qlZpzEyWXkVYepopvs04v5IWGDPEuEf1GjbK7rUCmj4aIRuI6Znz8v131n077IyiSyM1llPgKVR01g5KUM3kAbAEwR1JraW91bCXSIAeTZJ0LVseNwnz8CQRgjF2F4irA2Y/8ozlMqI4+NFrKJFG3U0ereBlDKbJ9adJhOG0Z3eFS2VJdVIR6wXOPTGVcz1RXuJoIguwBqNaLgwuGx6RchlB9qoNt3BoYeKMfAbyoSLvtWKWAEeDt1tDb0iqzARtZShIip+9cIxLGwniU+krj4G/urtaXScxzy2Hcftbc2iKsbw1tRejs8jr9Tgr6fVVmvDfM4O/XuioEJ0xBEgCUitovI7XqUnV9yQx41zy2wHhgVWp8KQcywxVKAF2F9nhmAVKHPyVbvpVWI/NnwC22hzVG99ekztJE+Ex3nJybRvCm7sD7ZoD3yfKnyAtAqxYQAdxn2mHfuMLgv0NdnS54Adv6LG4hZ26zioQhvN+RFYbIBaH18ACVufYNAvH9xFUb/Ym2zioUgykWhkVxNFgJeBANouWtI93EJP12KvVdb2yzdByJPAiiuJrmIaKK1/HXfjaD2W6NaN5t2e+IUa+eaeuMEWU5bA+uDtBAQzopG8eZdTHDPPUE4fMa4tu75YTXG/mZdFKY10cxambHZEO9BFsOvpCmO1kfmJ2PRC3MRaaP/Vy69urf6zScC4j2IXk9u1epZc8IY6s8zTlwtEZVk11fr1Ypv1ZtCQMTHmnhPZ1+hNEdDeXKrR9CGdORsvnkIzo9p46wobIhs8odMy93zgxqIN+dWUY+AyJ3ef50L0T3m8X4m5gvzG/ZHPZ5KTVu1jOV/HEjzq/nVJ3fZ0PezasjjQNMvQyg9ILtAEcOPlSFwo7XNUjswVC4rXhDDDzgxcFvqmFhq2815vXj8mLwFjstEmblxldJuQ7imP+xE8LZK8NQiJDyCa78TQe2po0CGr2NFOJ+u48Q2y7o0VDMmlUePo/GKMOJDhF0CN50TdaqRWfkDLQLHidCjnV73JIgMt/Y1XTOMis9lFvw6NkjYu74KY68nP3Eq+3AUjb8IZXz5uOecGowXSQhRtRNqoXqNl4dQ+cVECFLxyCzysvEvW5kx4vP3VyeiuxvwVaEIbixSOlMGW30lcvqVVZBDiy8RkkvGksvCqPhM+iQcetCJgVtMtF3IdpZn+v0cJ9Oxv9vRc2FNpq3l7bt9wasVguQg/UG2mlR8bgJN14TSakYEJQvcXInQE+kFPRap2+p/EEnrDXy0V4J/nXWalWqAnB+bRPPN+51MRYoD/7o6xPoMt2GZrcqs9AcaJ9BJBZqa36eb0nmi04a+S6syzlJr98SUSI8iCaXasvs7NZjYnsESp7aDAqgnAgOKFBgzy9B9xjfWZyfQ0TAFmyZjms7bDxkYfKAcg3dUgLM7nFJyVtT/r4jqdG5mGGhNxiOLRrwPD8zLNGYKY31WCjaDJfF0HhxF8y2pnRNFkDYl7M6b2v4VF/n3Gi4JK8fMixVxpu8/0VgpjLOYy2l/KrlYuVeSKuTET+X/s5L3Q+SNlGpk1J6e3Idu4t0SyBMLnwLKYULgBhdigQyPGtPWZs4Oa2YSz53LG5rijPezbFOzz93njaD6hMXj9Ub+4oBI/CiP5AZAES5TyWfy8cUvKUXaaJE+uthKybI4Gn8eUvITal0md9rw/kXVutopNorWrtg1NLSPwrlMw5YugIu9/RC34QMbKxF6Oj1DPF0ZlPoE1J4yitqzFo6oMnhPOYK/LdKoihJQ840x1J2d3gHHYmMx8mcH9l5RBZ7U745p+gRragokxNUzyvtMwBy+GDz3DCbFUPjy9IrIIj35PQFxrI6i6coQ7Mvmb7nEX7vu04p3myUGSpPVJA4l1tjQ/QaIAM/yJp9/4ILZBPHUHw9J+kNGf2k1/Kj2zAjqvjNn3xqHkvRSpBTI1hDPVFQqYzT8KHncYP/JtYh2F982axaWYjVZN7WalKUXWCMeJuUEcuz/GeQZgSx/zdc98PgsgnS3VNVNSI5+EOVmU69yZnruGoRjRmZUJZf4ZVWGSXxZceQ4lvw0DGnGH7rg7eUYvLdIt1lzxlU8T1jy8xCcH1FnmxjB3pilAjNTOF67anBQubyZtdHT2w4paZTR+uh+58SRF0ohUgLLI/rtR5Px2r40jiXrwyg7KGHAT7SXYPeZtSr/BBRHtdbHBlCyJHUMgeAdFRjcbIBt1dSwzLQ/5hFEbzuk+hujcJ8fgRwhBG6sRPi5PBjimc5XG1D37QhqT0s4PXatNcHtcKa6pvldydI4Wn+v7pFbdI8E/4kG8kiYYX/MJ4jOdkjzvw+BnJwI8Wl0V4SpSTPt9Dj8kFMJam0VoPqEUbjPi6iGwlBH5TPsj3kE0dMOERdL1WvHDLXcqh1hcWFWfdyYcpBgFUA8jnJ+cv790cjLpag8MuHVO7MYJgHRHPtjHkHEP+hth1gTzNwITD+Omvl4Qmyjei+pVi5URRDyxvUh2Jv22yexPglda/XfZs21P5ITxICOi+aeMsUl/fTjqGmtw8+Uof+Gylnpn4VLSv0PRlD1P/cHIt99dg0m3tHWZShd5Jn5ijZ/YP3M7+YdD+1c1nBwvARvpNu4Vd9CQCAw/ThKHgX2XuNC5OWFD1qch0xiyc9CKKllCBtOPFXQs9ii8gdX9AxsW5Qg1jZLzyEyed9TXtjRblvC46E3tceDVCWj4eIwxGFH17H6PWNOtr1KusUS/2j0SCcmn0YFK77zo1E4PzOJ4K3pX5q6vjgBcWk40aGPR4KIYLLKH9g4d3CS3sB1NFYuQWlZL4iMdUNXsFOrMBQT72n0dDLMFEUGRyuiE83NPeGAKoIktlnuVwh0eKadWt9ZCJgFARGkus3fvyaZvAuuEB1Ge2VoFrQtOc2HwNTrwbQIsrehoXK4nIOUUVwR82FkSVycCDAjUhHrX9Lcg6RPHxe1MYwY7aQ4hzE/Wov7CXtzXDdDOT9azumFsdnn7//WQn0vThCdfbN0AayIO116/RDExd7IiwZ2EtV6fOLxY3y7g89mRBDxUYfX/XcQfVJruaz2jIVA7ekR1J09ir2/dCH8bHEQRKRYa+sKHLrYSKQ8xu2wVhFjzeQcSCMyCC/dOAxxqN+/oRKhp5w56MWATc7x3E3LSJ9ZuaPVvR2gDxhQRUukJAiUfTSKyfdKII+l/PsHe0scLXcO7ss/H7i+EsOPFwFBmNt9/kDKOZ0aQbHNso58TUVEcaO99MZhRF51YOT5MoxudSR9yy/e3ghyOLz7o0kGNlVg+PdF4La/yNHuzMFWRRAGbB1et5+Imk01U4pY2IYfh1F1bMJbNh4iRF4qVcgy9pYdmIqpIIzy8kNnv9sY+HVF4T/8Yn5/lT/gISBlnFlVBBEgW/5Z5mKbOLL13B+cl94htldC+PkyiNAcNSfPP/oP3l4B8YCpkMtCflcZ2yDiw53LURaX3T0gsqITmGT2VBw+gaar0ouQP3h3OYJ3pu9saBJIAOb3bVJg5Ypd2P8YZRHhVa8goo12r3s9EV1uGjAsQdF07TBErGG1ZfB3TgR/o++7DLWyZlKPWf5pm39gg9pv0yKIcD8JOfkdEHnUdmDV0xeBErcMzwNBJaC0mjL2uh3917oQzXP0SjWyZV2HubtqjA5c0t+vOm1yWgQRAnZ43CdBogeyFtZqIG8IVB07hoYfq54TilwivZy4MBz5UylEPOSCKDKf7OsOPJiOLhlp3uF1vwCio9PpyKqrLwItdw1C5CrPpIy8UorwU4njYvMWftnXFTgqXfkzIsiOZvdquQRvGzHxZ7oAFEN9kWde5JvPtohcHeEnnQjeZbJTLuY4xXHgqj2B99LFICOCKFstb/1GkHR+uh1a9fOLgIhyKC4DbVXqbJBk0olwPZGtDoz91YHxt+y6BRDPGLk50RLTaSdjgijvRZzYSQR3Oh1adfOHgIhR1fLboVk35Wp6F7GQR//hwNhWh7Kt0ivLkxpZU9bJwDCf2WbGBFFWEcsFJeX46FlBhHJNlSFrpnzCMBcBF8b+qW98Kk0xy8Aw14wgia2WZbBrOqAaNdZwURhVxye/CxNheeye+V4WocfLlGj6hVMyM8w1JYhlsBtvOk1HyReS8QRh/N0SjP/TrvxP+GLxBLDstqF5+QVFfvn+6wqDIAxMSDH+SCaGuaYEEY11etznsES3Gm+qFJ9EwpO35vTRBBmmSJEMBZHoxnPvoJKZdroU1Aqi0ls31QzJygaZ2XhHa8NjAL6WqkPr98ZBYK6vVsGsIMwP+fyBk7RAWjOCdNbWVnNVyZsAlmshmNVGfhAQsXFdaxIpCQqEILsoFDt4OoVatihqRpDEVqv+U7JErxLIzFeu2WJqqu9FclLPvUHYm2XTE0RESJRkfGZVd+AfWg2CpgRRSOJ1X8BEN2kloNVO7hFwtEXRcucQwv9pbiM9nXcealHVnCCiY8seUQu/cerVnhFRkm6a9hSL+QmfP3C81ojmhCCWPaL1MOWhPQmoOmYcoT+aMuSPpnbHTLRzQhBlFfHUfogl218IVJWH4bW6KFIEGBwGy4e1+YNv5wKCnBEkYY/UHy0TPWPF983F0FltMnOM4viSb0/g5VyhkVOCKCuJt/50kLQ5VwpY7RYvAgT+5qquwJZcIpBzggjhrbfsuRzC4mw73bflmaKUF4JMrSSbQNJ5mQpqfWchsA+BLN53pIti3gjCAHW2NjxquaOkO0RW/ZkIMPOT4jiX9oW/yy0+eSOIUEPE1opxw8sELBpRO7cqW62bFQFm/hv8gc+3AQnfmDyUvBJE6LN7mat+3Fa2FQRfHvSzuigQBJjRWSZPfNqzOxTMp0p5J4hitDdVNsBR9hQRfTqfylp9mRQB5n+UxyaOSZaFNtca6UIQoVRPM8pH7e6nADoy17aZAEQAAAQISURBVEpa7ZsagWdK4/1rPbsxpocWuhFEKMuAo7PVvRkgTXz39QDQ6jN3CDDj9z5//0kEyLnrZfGWdSXItGgdHvd1kOgivUCw+jUeAsy8sc0fuFBvyQxBEAFCR6v7RwBdrzcgVv86I8DMBLpwlb9/k86SKN0bhiCK8d7q/i4YtxJRiRHAsWTIMwLMcQnySSv9wUfy3POC3RmKIELKHZ6Gz8sSHgLQZBSQLDnygkCvJOPEld39/zsvvansxHAEUUiypKIx7nQ+RKDDVephVTMxAgz+s21s7MSVeyN9RlPDkAQRIIm8iDu8Db9g8E9AIkGxVQoOAWZm0LU+f//P1OQL1EN/w0+8jpa6NSxJW4ioTg+ArD5zhkAv4vEzfbuDz+asBw0aNjxBhI4dzXUeLpEesW7eNRhxAzRh5C3VXHhMQZCpLZdjh7dhvbXlMsAMz1QEE2ypTEuQacGtLVems1Pf75g5SLJ8qtG3VKYniFCgHSiFt/5CgnQZCCZLd6TvRM1774xRZlyF7v4b8ummrpWeptliJVO4fVldC2ySuFj8qlaAWO1oiADzw4jJF/l6gt0atprXpkxNkGmkOlvdX5GZNhFhVV7RszpLioB4u0FxPiuX0UbyBX1BEMTaduVruqTox+TbqWTaFQxBppUTt/Cy0/lvzHQOESoMMnUKWgxmRCTi39DY2K+MeBueDfgFR5BpMLpbquombPYfAvR9gKqzAcn6NjkCzBiQwP/ukCdvyfdT2HyNScESZJ99ouQtsZ0N0A8tB0jNplUfWL6xcmLg1019iGjWqgEbKniCTGMuIqrE5YazAP43EHkMOBaGF4mZdxPoOpvUf/uKXUieIdTwWqQnYNEQZBoWBuydXveZDLqYCCvTg6s4azN4GzFvWOUfuJ+AaDGhUHQEmTm4u1qrV8TgOJXBpxLogGIa+NS68nYAW0oQvW951/DO1PULs0ZRE2TmkLa3uj8uAacy42QQLS3M4U51TMvvM+FBYmzx+QOvFyUGc5S2CDIHEAakHd76I2WSTgV4baHnN2FwiJgeI8hbVvoHXtIzgogRCWkRZJFRUXy+ltV9DJJ0GIgOA/gwImox4kCqlUkY2gC9BubXIMuvYU/wDTP6SKnVN9t6FkHSRFD4f9lsOJRJOoxBhzHwcRJEMmDhRAzbNwB+DUyvIR5/rW1PcLcBRTWsSBZBshwaBkp2Ndf7YjaslggHMKQDQFgN5gNAVJtl86o+Fxd2BGxjkrcTaBvL2C7J2LZyT2AHATFVjViVkiJgESSHE6OjsXKJ5HAeIBOvBsMD4mpAqmLABcBFBBcYLhC7mMV/J54VK28nCGEwhUEIMyMMIExI/ATzEAjdEtN2skXfWrFraCiHahR10/8N09AycF2wNBYAAAAASUVORK5CYII='],
                ['上海', 3, 3, 'data:image/png;base64,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'],
                ['山东', 4, 1, 'data:image/png;base64,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']
            ],
            nr: 5,
            nc: 4,
            animation: true,
            backgroundColor: {
                option: 'pure',
                pure: 'transparent',
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
                    global: false // 缺省为 false
                }
            },
            myRanking: {
                step: 0.01,
                tofixed: 3
            },
            dtRankingBar: {
                top: 4,
                animationDuration: 50,
                animationDurationUpdate: 50,
                easing: 'linear',
                imageLabelPosition: 'left'
            },
            simpleBar: {
                barMaxWidth: 50,
                barGap: '30%',
                barCategoryGap: '20%',
                itemStyle: {
                    barBorderRadius: [0, 0, 0, 0]
                },
                showBackground: true,
                backgroundStyle: {
                    option: 'pure',
                    pure: 'rgba(220, 220, 220, 0.1)',
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
                    }
                }
            },
            timeline: {
                show: true,
                orient: 'horizontal',
                inverse: false,
                left: 20,
                right: 20,
                top: '85%',
                bottom: 'auto',
                axisType: 'category',
                currentIndex: 0,
                autoPlay: true,
                rewind: false,
                loop: true,
                playInterval: 50,
                realtime: true,
                controlPosition: 'left',
                symbol: 'emptyCircle',
                symbolSize: 10,
                lineStyle: {
                    show: true,
                    color: '#304654',
                    width: 2,
                    type: 'solid'
                },
                controlStyle: {
                    show: true,
                    showPlayBtn: true,
                    showPrevBtn: true,
                    showNextBtn: true,
                    itemSize: 22,
                    itemGap: 12,
                    position: 'left',
                    color: '#304654',
                    borderColor: '#304654',
                    borderwidth: 1
                },
                label: {
                    color: '#000',
                    fontSize: 12
                },
                emphasis: {
                    controlStyle: {
                        show: true,
                        showPlayBtn: true,
                        showPrevBtn: true,
                        showNextBtn: true,
                        itemSize: 22,
                        itemGap: 12,
                        position: 'left',
                        color: '#304654',
                        borderColor: '#304654',
                        borderwidth: 1
                    },
                    label: {
                        color: '#000',
                        fontSize: 12
                    }
                }
            },
            itemStyle: {
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                shadowBlur: 4,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 1,
                shadowOffsetY: 1
            },
            label: {
                show: true,
                formatter: '{b}: {c}',
                position: 'right',
                distance: 5,
                rotate: 0,
                offset: [0, 0],
                color: '#000',
                fontWeight: 'normal',
                fontFamily: 'san-serif',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'right',
                    distance: 5,
                    rotate: 0,
                    offset: [0, 0],
                    color: '#000',
                    fontWeight: 'normal',
                    fontFamily: 'san-serif',
                    fontSize: 12
                },
                itemStyle: {
                    borderColor: '#000',
                    borderWidth: 0,
                    borderType: 'solid',
                    shadowBlur: 4,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowOffsetX: 1,
                    shadowOffsetY: 1
                }
            },
            color: {
                option: 'linear',
                pure: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', 'rgba(0,0,84,1)'],
                linear: [{ type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#2c3e50' }, { offset: 1, color: '#bdc3c7' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: '#ee9ca7' }, { offset: 1, color: '#ffdde1' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false },
                { type: 'linear', x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue' }], global: false }]
            },
            xAxis: {
                show: true,
                // max: 5,
                type: 'value',
                position: 'top',
                name: 'X轴名称',
                nameLocation: 'end',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: false,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'arrow'],
                    symbolSize: [6, 9],
                    symbolOffset: 6,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: true,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                zlevel: 2,
                show: true,
                type: 'category',
                position: 'bottom',
                name: '',
                nameLocation: 'center',
                nameTextStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                nameGap: 5,
                nameRotate: 0,
                inverse: true,
                axisLine: {
                    show: true,
                    onZero: true,
                    symbol: ['none', 'none'],
                    symbolOffset: 6,
                    symbolSize: [6, 9],
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLable: false,
                    interval: 'auto',
                    inside: false,
                    length: 5,
                    lineStyle: {
                        color: '#333',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#333',
                    interval: 'auto',
                    rotate: 0,
                    fontWeight: 'normal',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 14,
                    lineHeight: 5
                },
                splitLine: {
                    show: false,
                    interval: 'auto',
                    lineStyle: {
                        color: 'rgba(28, 51, 28, 0.81)',
                        width: 1,
                        type: 'dashed'
                    }
                }
            },
            grid: {
                containLabel: true,
                show: false,
                backgroundColor: 'transparent',
                left: '10%',
                right: '10%',
                top: '10%',
                bottom: '20%'
            },
            title: {
                show: true,
                text: '动态柱状图',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Microsoft YaHei',
                    fontSize: 18,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 1,
                    textShadowColor: 'transparent',
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 5
                },
                subtext: '',
                subtextStyle: {
                    color: '#100',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    fontSize: 12,
                    align: 'center',
                    lineHeight: 5,
                    textBorderColor: 'transparent',
                    textBorderWidth: 1,
                    textShadowColor: 'transparent',
                    textShadowBlur: 10,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 5
                },
                textAlign: 'auto',
                textVerticalAlign: 'auto',
                itemGap: 15,
                left: 'center',
                right: 'auto',
                top: '2%',
                bottom: 'auto'
            }
        }
    }
}



const IMAGE = {
    i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
    atomName: 't-image',
    atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
    atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
    atomContent: {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    }
}
const atom = {}
atom.multiBar = MULTIBAR
atom.image = IMAGE
const slide = {
    i: '0',
    x: 0,
    y: 0,
    w: 1,
    h: 5,
    slideAnimation: { steps: 1, enter: 'fadeIn', leave: 'fadeOut' },
    slideContent: [
        { ...atom.multiBar, i: '0' },
        { ...atom.image, i: '1' },
    ]
}
export { atom, slide }