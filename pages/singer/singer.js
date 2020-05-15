import {axios} from "../../util/util";
import {singersTypes,alphaTypes} from "../../util/api";
Page({
  data: {
    list:[],
    alphaTypes:alphaTypes,
    singersTypes:singersTypes,
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
  },
  searchSinger(e){
    console.log(e.target)
  }
});
