import {axios} from "../../util/util";

Page({
  data: {
    list:[],
    letterlist:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    singerlist:[]
  },
  onLoad() {},
  onShow(){
    axios({
      url:'/toplist/artist',
      method:"GET"
    }).then(res=>{
      this.setData({
        list: res.data.list.artists.slice(0,10)
      })
    })
  }
});
