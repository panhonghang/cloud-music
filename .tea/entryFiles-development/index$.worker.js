if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../components/grid/grid?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=5b270d0ff29fdc1281a9684b5299275f58255d99');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/singer/singer?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/rank/rank?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}