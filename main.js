const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname);

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Exile',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('main.html')
}
app.whenReady().then(createWindow)
