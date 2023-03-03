const commonPath = '/atom';

export default [
    {
        text: '图表',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '柱状图', link: `${commonPath}/bar.md` },
            { text: '折线图', link: `${commonPath}/line.md` },
            { text: '饼图', link: `${commonPath}/pie.md` },
            { text: '地图', link: `${commonPath}/map.md` },
            { text: '统计图表', link: `${commonPath}/stats.md` },
            { text: '其他', link: `${commonPath}/other-chart.md` }
        ]
    },
    {
        text: '文本',
        collapsible: false,
        collapsed: false,
        items: [
            { text: '文本', link: `${commonPath}/text.md` },
        ]
    },
    {
        text: '表格',
        collapsible: false,
        collapsed: false,
        items: [
            { text: '表格', link: `${commonPath}/table.md` },
        ]
    },
    {
        text: '图片',
        collapsible: false,
        collapsed: false,
        items: [
            { text: '图片', link: `${commonPath}/image.md` },
        ]
    }
]