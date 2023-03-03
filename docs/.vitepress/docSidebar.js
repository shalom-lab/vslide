const commonPath = '/doc';

export default [
    {
        text: '介绍',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '背景', link: `${commonPath}/background.md` },
            { text: '特点', link: `${commonPath}/feature.md` }
        ]
    },
    {
        text: '使用',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '概念', link: `${commonPath}/concept.md` },
            { text: '登录', link: `${commonPath}/login.md` },
            { text: '模板图表', link: `${commonPath}/template-layout.md` },
            { text: '我的图表', link: `${commonPath}/local-layout.md` },
            { text: '演示文稿', link: `${commonPath}/all-slides.md` },
            { text: '我的分享', link: `${commonPath}/shared-slides.md` },
            { text: '账号设置', link: `${commonPath}/account.md` }
        ]
    },
    {
        text: '编辑',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '幻灯片', link: `${commonPath}/slide.md` },
            { text: '组件', link: `${commonPath}/atom.md` },
        ]
    },
    {
        text: '展示',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '模式', link: `${commonPath}/show.md` },
        ]
    }
]