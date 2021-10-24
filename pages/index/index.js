// pages/index/index.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log("用户授权了");
        } else {
          //用户没有授权
          console.log("用户没有授权");
        }
      }
    });
  },

  getUserProfile: function(res) {
    wx.getUserProfile({
      desc: '用于微信账号与小程序绑定', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res)=>{
        console.log("获取到的用户信息成功: ",JSON.stringify(res));
        this.setData({
          userInfoStr: JSON.stringify(res),
        })
        wx.setStorageSync('userInfo', res.userInfo)
        wx.navigateTo({
          url:'/pages/selectmode/selectmode'
        })
      },
      fail: (res)=>{
        console.log("获取用户个人信息失败: ",res);
         //用户按了拒绝按钮
               wx.showModal({
                  title: '警告',
                  content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                  showCancel: false,
                  confirmText: '返回授权',
                  success: function(res) {
                    // 用户没有授权成功，不需要改变 isHide 的值
                    if (res.confirm) {
                      console.log('用户点击了“返回授权”'); 
                    }
                  }
       });
      }
    })
},
})
