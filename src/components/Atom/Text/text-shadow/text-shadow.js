
const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
  atomType: 'text',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'text-shadow',
    detail: {
      text: 'V-SLIDE',
      color: 'rgb(114, 138, 154)',
      fontFamily: 'Arial',
      fontSize: 50,
      fontWeight: 900,
      shadow: {
        h: 2,
        v: 2,
        blur: 4,
        color: 'rgba(48, 34, 34, 1)',
      },
    }
  }
}
const editor = {
  labels: {
    shadow: '阴影',
    text: '文本',
    fontFamily: '字体',
    fontSize: '字号',
    fontWeight: '粗细',
    h: '水平偏移',
    v: '垂直偏移',
    blur: '模糊',
    color: '颜色'
  },
  selectOptions: {
    fontFamily: [
      { label: "宋体", value: "宋体" },
      { label: "楷体", value: "楷体" },
      { label: "仿宋", value: "仿宋" },
      { label: "楷体", value: "楷体" },
      { label: "华文中宋", value: "华文中宋" },
      { label: "Arial", value: "Arial" },
      { label: "Times New Roman", value: "Times New Roman" },
      { label: "Georgia", value: "Georgia" },
      { label: "monospace", value: "monospace" },
      { label: "Courier New", value: "Courier New" },
      { label: "Tahoma", value: "Tahoma" },
      { label: "Brush Script MT ", value: "Brush Script MT" },
    ]
  }
}
export { atom, editor }