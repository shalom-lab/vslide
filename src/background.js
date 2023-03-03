'use strict'
const fs = require('fs')
const path = require('path')

import { app, protocol, BrowserWindow, screen, ipcMain, dialog } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
//import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow () {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const win = new BrowserWindow({
    show: false,
    width: Math.floor(width * 0.8),
    height: Math.floor(height * 0.9),
    minWidth: 1100,
    minHeight: 700,
    frame: false,
    resizable: true,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      //nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      //contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: false,//上下文隔离功能将确保您的 预加载脚本 和 Electron的内部逻辑
      // 运行在所加载的 webcontent网页 之外的另一个独立的上下文环境里
      //nodeIntegration: true,
      //enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // 优雅显示
  win.once('ready-to-show', () => {
    win.show()
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    /* if (!process.env.IS_TEST) win.webContents.openDevTools() */
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      //await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

// max min close save
ipcMain.on('minimize', (event, arg) => {
  BrowserWindow.getAllWindows()[0].minimize()
  event.reply('from-main', { isMinimized: true })
})

ipcMain.on('maximize', (event, arg) => {
  var win = BrowserWindow.getAllWindows()[0]
  if (win.isMaximized()) {
    win.restore()
  } else {
    win.maximize()
    event.reply('from-main', { isMaximized: true })
  }
})

ipcMain.on('close', (event, arg) => {
  BrowserWindow.getAllWindows()[0].close()
})


ipcMain.on('saveFile', (event, arg) => {
  var json = arg.toString()
  var options = {
    title: '保存为',
    filters: [
      { name: 'txt', extensions: ['json'] }
    ]
  }
  var filename = dialog.showSaveDialog(options
  ).then(result => {
    filename = result.filePath
    if (filename === undefined) {
      //console.log('the user clicked the btn but didn\'t created a file')
      return
    }
    fs.writeFile(filename, json, (err) => {
      if (err) {
        event.reply('from-main', '保存失败')
        return
      } else {
        event.reply('from-main', '保存完毕')
      }
    })
  }).catch(err => {
    //console.log(err)
  })
})