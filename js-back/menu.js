const dialog = require('electron').dialog;
const newShotDialog = {
    type: 'info',
    title: 'Hello',
    message: 'Do you like this?',
    buttons: ['Yes', 'No']
};

module.exports = function appMenu(win) {
  return (
    [
      {
        label: 'File',
        submenu: [
          {
            label: 'Click me',
            click() {
                dialog.showMessageBox(newShotDialog, function(index) {
                  if (index === 0) {
                    win.webContents.send('write', 'click');
                  }
                })
             },
          },
        ],
      },
    ]
  );
};