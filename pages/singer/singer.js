import {axios} from "../../util/util";

Page({
  data: {
    list:[]
  },
  onLoad() {},
  onShow(){
    axios({
      url:'/toplist/artist',
      method:"GET"
    }).then(res=>{
      this.setData({
        list: res.data.list.artists
      })
    })
  }
});
