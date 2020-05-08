import {checkStorge} from '../../util/util';

Page({
    data: {
    background: [
      { color: 'blue', text: '支付宝' },
      { color: 'red', text: '小程序' },
      { color: 'yellow', text: 'Swiper' }
    ],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 1000,
    circular: false,
    duration: 1500,
  },
  onLoad() {
    checkStorge('userInfo').then(
      ()=>{
        // 已经登陆
      },
      ()=>{
      // 未登陆就跳转
      my.navigateTo({
        url: '../login/login'
      });
    })
  },
  onShow(){
    my.request({
      url: '/api/banner',
      method: 'GET',
      headers:{
        'content-type':'application/json'  //默认值
      },
      dataType: 'json',
      success: function(res) {
        console.log('aaaaaaaaaaaaaaaaa',res.data.banners);
      },
      fail: function(res) {
        my.alert({content: 'fail'});
      },
      complete: function(res) {
        my.hideLoading();
      }
    });
  }
});