// 对小程序官方提供的网络相关的API重新进行封装。
// 原因1：降低网络代码与其他代码的耦合度，有利于后期更新维护；
// 原因2：微信小程序官方提供的网络API是参考Ajax实现的，这是一种古老的异步网络请求技术，
//       现在使用更多的是axios，这是一种基于Promise开发的网络模块,Promise链式编程很好的解决了ajax中回调地狱的现象

// export default function request(options){
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function(res){
//         resolve(res);
//       },
//       fail: function(err){
//         reject(err);
//       }
//     })
//   })
// }

//更为一种简单的写法
export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}