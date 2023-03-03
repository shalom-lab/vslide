const commonPath = '/pricing';

export default [
    {
        text: '会员',
        collapsible: false,
        collapsed: false,
        items: [
            { text: '购买', link: `${commonPath}/pay.md` },
            { text: '到期处理', link: `${commonPath}/expire.md` }
        ]
    }
]