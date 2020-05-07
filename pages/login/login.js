import {checkStorge,goHome} from '../../util/util';

Page({
  data:{
    userInfo: {},
  },
  
  goHome: goHome,
  
  //获得用户信息
  getUserInfo() {
    return new Promise((resolve, reject) => {
      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          my.getAuthUserInfo({
            success: res => {
              // 设置缓存
              my.setStorageSync({
                key: 'userInfo',
                data: {
                  avatar: res.avatar,
                  nickName: res.nickName
                }
              });
              resolve(res);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },
  
  onLoad(query) {
    // 页面加载
    // loading
    my.showLoading({
      content: '加载中...',
      delay: 1000,
    });
    // 修改导航栏样式
    const title = "授权页面",
          backgroundColor = '000';
    my.setNavigationBar({
      title,
      backgroundColor
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    // 检查缓存当中是否有userInfo
    checkStorge('userInfo').then(res=>{
      // 赋值给userInfo
      this.setData({userInfo:res});
      my.hideLoading();
    },
    // 缓存当中没有的话就发起授权请求
    ()=>{
      this.getUserInfo().then(res=>{
      // 赋值给userInfo
        this.setData({userInfo:res});
        my.hideLoading();
      });
    });
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
