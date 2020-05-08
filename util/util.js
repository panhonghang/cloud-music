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

export default {
    checkStorge,
    goHome,
    axios
  };