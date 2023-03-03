const sheetData = [['Year', 'Ford', 'Tesla', 'Toyota', 'Honda'],
['2017', 10, 11, 12, 13],
['2018', 20, 11, 14, 13],
['2019', 30, 15, 12, 13],
['2017', 10, 11, 12, 13]
]

const atom = {
  i: '0', x: 1, y: 2, w: 8, h: 7, stacic:false,
super:false,
  atomType: 'tables',
  atomBorder: { width: 0, type: 'solid', color: '#808080', radius: 1 },
  atomAnimation: { order: 1, enter: 'fadeIn', leave: 'fadeOut' },
  atomContent: {
    atomName: 'simple-table',
    detail: {
      sheetData,
      nr: sheetData.length - 1,
      nc: sheetData[0].length - 1,
      pagination: {
        pageSize: 5,
        show: false
      }
    }
  }
}

export { atom }