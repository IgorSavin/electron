const { ipcRenderer } = require('electron')
const $ = require('jquery');

$(function() {
  ipcRenderer.on('write', (event, message) => {
    $('h1').html(message);
  });
  
  $('button').on('click', () => {
    console.log('click');
    ipcRenderer.send('message', 'ping');
  })
});
