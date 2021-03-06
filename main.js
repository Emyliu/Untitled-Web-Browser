const { app, BrowserWindow, ipcMain } = require('electron')
var redisTools = require('./db')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      allowRendererProcessReuse: true
    },
  })

  // and load the index.html of the app.
  win.loadFile('app/index.html')

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

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
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

var counter = 0;


ipcMain.on("inc", (event) => {
  counter = counter + 1;
  console.log(counter)
  event.reply("inc-reply", counter);
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

redisTools.redisMain();