import {checkStorge,axios} from '../../util/util';

Page({
  data: {
    img: [{url:''}],
    card:[{copywriter:"",picUrl:"",name:''}],
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
    // banner图
    axios({
      url:'https://anymock.alipay.com/mockdata/http/112050354_ba457aa259f8ffa55cd7d41aa312bfab/%2Fapi/banner',
      method:"GET"
    }).then((res)=>{
      this.setData({img:res.data.banners})
    })
    // 推荐歌单
    axios({
      url:'https://anymock.alipay.com/mockdata/http/112050354_ba457aa259f8ffa55cd7d41aa312bfab/%2Fpersonalized',
      method:"GET"
    }).then((res)=>{
      console.log('aaaaaaaaa',res.data.result)
      this.setData({card:res.data.result},()=>{console.log(this.data)})
    })
  }
});