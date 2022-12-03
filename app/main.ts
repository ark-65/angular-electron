import { app, BrowserWindow, screen, Menu } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

let mainWindow: BrowserWindow = null;
const args = process.argv.slice(1),
  serve = args.some((val) => val === '--serve');

const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

function createMainWindow(): BrowserWindow {
  const size = screen.getPrimaryDisplay().workAreaSize;

  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: serve,
      contextIsolation: false, // false if you want to run e2e test with Spectron
    },
  });

  // 隐藏菜单栏
  // mainWindow.autoHideMenuBar = true;

  // 打开开发者工具如果是开发时
  if (isDev) {
    mainWindow.webContents.openDevTools();
    console.log(app.name);
  }

  if (serve) {
    const debug = require('electron-debug');
    debug();

    require('electron-reloader')(module);
    mainWindow.loadURL('http://localhost:4200');
  } else {
    // 运行 electron 可执行文件时的路径
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      // 在本地文件夹中运行 electron 的路径
      pathIndex = '../dist/index.html';
    }

    const url = new URL(path.join('file:', __dirname, pathIndex));
    mainWindow.loadURL(url.href);
  }

  // 窗口关闭时发出。
  mainWindow.on('closed', () => {
    // 取消引用窗口对象，如果你的应用支持多窗口，通常你会把窗口存储在一个数组中，这时候你应该删除相应的元素。
    mainWindow = null;
  });

  return mainWindow;
}

try {
  // 当 Electron 完成初始化并准备好创建浏览器窗口时，将调用此方法。
  // 某些 API 只能在该事件发生后使用。添加了 400 毫秒以修复使用透明窗口时的黑色背景问题。
  // 更多详情请访问 https:github.com/electron/electron/issues/15947
  app.on('ready', () => {
    setTimeout(createMainWindow, 400);

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    // mainWindow.on('closed', () => (mainWindow = null));
  });

  // 关闭所有窗口后退出。
  app.on('window-all-closed', () => {
    // 在 OS X 上，应用程序及其菜单栏通常会保持活动状态，直到用户使用 Cmd + Q 显式退出
    if (!isMac) {
      app.quit();
    }
  });

  app.on('activate', () => {
    // 在 OS X 上，当单击停靠栏图标并且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口。
    if (mainWindow === null) {
      createMainWindow();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
}
const menu = [
  ...(isMac
    ? [
      {
        label: app.name,
        submenu: [
          {
            label: '退出',
            click: () => app.quit(),
          },
        ],
      },
    ]
    : []),
];
