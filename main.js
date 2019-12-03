const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow () {
  console.log("here")
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.autoHideMenuBar = true;  // win.removeMenu();

  // win.webContents.openDevTools()

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)