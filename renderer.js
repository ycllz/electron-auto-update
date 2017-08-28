const electron = require('electron').remote;
var os = require('os');
var autoUpdater = electron.autoUpdater;
var app = electron.app;

var platform = os.platform() + '_' + os.arch();
var version = app.getVersion();
console.log("version", version);

autoUpdater.setFeedURL('http://localhost:6000/update/'+platform+'/'+version);
autoUpdater.checkForUpdates();
autoUpdater.on("error", ()=>
{
  console.log("error");
})
autoUpdater.on("checking-for-update", ()=>
{
  console.log("checking-for-update");
})
autoUpdater.on("update-available", ()=>
{
  console.log("update-available");
})
autoUpdater.on("update-not-available", ()=>
{
  console.log("update-not-available");
})
autoUpdater.on("update-downloaded", ()=>
{
  console.log("update-downloaded");
})