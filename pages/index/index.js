//index.js
//获取应用实例
const app = getApp()
const baseUrl = 'http://tp.cn/api/v1';

Page({
  onLoad: function () {
  },
  
  getSuperToken: function () {},

  getToken: function () {
    // 调用登录接口
    wx.login({
      success: function (res) {
        var code = res.code;
        console.log('code')
        console.log(code)
        wx.request({
          url: baseUrl + '/token/user',
          data: {
            code: code
          },
          method: 'POST',
          success: function (res) {
            console.log(res.data);
            wx.setStorageSync('token', res.data.token);
          },
          fail: function (res) {
            // fail
            console.log(res.data)
          },
          complete: function () {
            // complete
          }
        })
      }
    })
  },

  checkSession: function () {
    wx.checkSession({
      success: function () {
        console.log('session success');
      },
      fail: function () {
        console.log('session fail');
      }
    })
  }
})
