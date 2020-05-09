// 检查缓存的函数
const checkStorge = (checkingKey)=>{
  return new Promise((resolve,reject)=>{
       my.getStorage({
        key: checkingKey,
        success: function(res) {  
          // 判断是否存在
          if(res.message=='查无此key'){
            reject(res.message)
          } else{
            resolve(res.data);
          }
        },
        fail: function(res){
          reject(res);
        }
      });
     })
  }
  
// 返回首页
const goHome = ()=>{
  my.navigateBack();
}
// 异步请求
const axios = (obj)=>{
  return new Promise((resolve,reject)=>{
    my.request({
      url: obj.url,
      method: obj.method,
      headers:{
        'content-type':'application/json'  //默认值
      },
      dataType: 'json',
      success: function(res) {
        resolve(res);
      },
      fail: function(res) {
        reject(res)
      }
    });
  })
}
// 数字转换单位
const NumberToUnit = function(num){
  if(num/100000000>1) return (num/10000).toFixed(2)+"亿";
  if(num/10000>1) return (num/10000).toFixed(2)+"万"
}

export default {
    checkStorge,
    goHome,
    axios,
    NumberToUnit
  };