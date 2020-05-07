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

const goHome = ()=>{
  my.navigateBack();
}

export default {
    checkStorge,
    goHome
  };