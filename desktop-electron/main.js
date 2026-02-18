const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// Fix for Linux taskbar icon/grouping
if (process.platform === 'linux') {
    app.setName('Nonoted');
    app.setDesktopName('nonoted.desktop');
}

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 900,
        minHeight: 600,
        title: 'Nonoted',
        icon: path.join(__dirname, '../www/icon.png'), // Set icon for window
        backgroundColor: '#0f172a',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
        show: false,
    });

    // Load from Vercel deployment
    win.loadURL('https://nonoted.vercel.app/');

    // Show window once ready (avoids white flash)
    win.once('ready-to-show', () => {
        win.show();
    });

    // Open external links in browser, not in Electron
    // Customize window handling
    win.webContents.setWindowOpenHandler(({ url }) => {
        // If it's an internal URL or about:blank (for popups), allow it
        if (url.startsWith('https://nonoted.vercel.app') || url === 'about:blank') {
            return {
                action: 'allow',
                overrideBrowserWindowOptions: {
                    autoHideMenuBar: true,
                    title: 'Nonoted Popup',
                    icon: path.join(__dirname, '../www/icon.png')
                }
            };
        }

        // Otherwise open in external browser
        shell.openExternal(url);
        return { action: 'deny' };
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
