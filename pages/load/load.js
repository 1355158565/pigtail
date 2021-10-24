// pages/index/index.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    flag:0,
    token:''
  },

  /**
   * 生命周期函数--监听页面加载
   */

  // 获取输入学号
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  //登录处理
  login:function(){
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '请输入账号信息',
        icon:'error',
        duration: 2000
      })
    }
    else{
      wx.request({
        url:'http://172.17.173.97:8080/api/user/login',
        method:'post',
        data:{
          student_id:that.data.username,
          password:that.data.password
        },
        header:{
          'content-type':'application/x-www-form-urlencoded'
        },
        success(res){
          console.log(res);
          if(res.data.status == 200 ){
            var token = res.data.data.token;
            wx.setStorageSync('token', token);
            wx.showToast({
              title: '登录成功',
              icon:'success',
              duration:1500
            })
            setTimeout(() => {
              that.jump_to_select()
            }, 1500);
          }
          else{
            wx.showToast({
              icon:"error",
              title: '登录失败',
              duration:1500
            })
          }
        },
        fail(res){
          wx.showToast({
            title: '请用校园网登录',
            icon:'error',
            duration:1500
          })
        },
      })
    }
  },
  jump_to_select(){
    wx.reLaunch({
      url: '/pages/chooseroom/chooseroom',
    })
  },
})
