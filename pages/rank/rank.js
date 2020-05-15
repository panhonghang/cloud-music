import {axios} from '../../util/util';

Page({
  data: {
    rankList:[]
  },
  onLoad() {
    axios({
      url:'/rank/detail'
    }).then((res)=>{
      console.log("aaaaaa",res.data.list.filter(key=>key.userId==1&&key.tracks.length>0))
      this.setData({
        rankList:res.data.list.filter(key=>key.userId==1&&key.tracks.length>0)
      })
    })
  },
});
