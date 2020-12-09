const TOKEN = 'token'
//注册一个小程序示例
App({
  globalData:{
    token: ''
  },
  //小程序初始化完成后(app.json加载解析完毕)会执行的生命周期函数
  onLaunch:function(){
    //验证本地缓存的token是否过期
    const token = wx.getStorageSync('TOKEN')
    if(token && token.length>0){
      //有token,服务器验证token是否过期
      wx.request({
        url: 'http://123.207.32.32:3000/auth',
        method: 'POST',
        header: {
          token
        },
        success: (res)=>{
          //根据服务器返回的错误码判断是否登录过期，登录过期则重新登录。未过期则进行相关请求
        },
        fail: (err)=>{
          console.log(err);
        }
      })
    }else{
       //没有token，用户第一次登录。开始登录操作
      wx.login({
        success: (res)=>{
          //1.获取code
          const code = res.code;
          //2.将请求发送给公司服务器
          wx.request({
            url: 'http://123.207.32.32:3000/login',
            method: 'post',
            data: {
              code
            },
            success: (res)=>{
              console.log(res)
              const token = res.data.token;
              //存储到globalData对象中。缺点是小程序关闭token也随之删除
              this.globalData.token = token;
  
              //进行本地存储
              wx.setStorage(TOKEN,token)
            }
          })
        }
      })
    }
  },
  //小程序界面显示出来后执行该生命周期函数
  onShow:function(){

  },
  //小程序界面隐藏时执行，此时小程序会保留后台两个小时，如果没有再次开启，小程序从后台杀死,再次开启时又从onlaunch开始执行
  onHide:function(){

  },
  //小程序中发生一些错误时执行
  onError:function(){

  }
})