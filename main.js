const { app, BrowserWindow } = require('electron');
const path = require('node:path');

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    icon: path.join(__dirname, 'public', 'sirea-ico-256x256.png'),
  });
  win.loadFile('dist/sirea-front/browser/index.csr.html');

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(() => {
  createWindow();
});
