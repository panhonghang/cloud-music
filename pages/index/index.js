import {checkStorge,axios,NumberToUnit} from '../../util/util';

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
      url:'/banner',
      method:"GET"
    }).then((res)=>{
      this.setData({img:res.data.banners})
    })
    // 推荐歌单
    axios({
      url:'/personalized',
      method:"GET"
    }).then((res)=>{
      const arr = res.data.result.map(obj=>{
        return {
          name: obj.name,
          picUrl: obj.picUrl,
          playCount: NumberToUnit(obj.playCount)
        }
      })
      this.setData({card: arr});
    })
  }
});