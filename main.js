const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let mainWindow = new BrowserWindow({width:700, height: 500})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools() // Para testear en life
})

exports.openWindow = () => {
  let mainWindow = new BrowserWindow({width:300, height: 200})
  mainWindow.loadURL(`file://${__dirname}/papaso.html`)
}
