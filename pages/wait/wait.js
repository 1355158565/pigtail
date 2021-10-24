// pages/wait/wait.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uuid:'',
    counttime:null,
  },

  onLoad(){
    this.setData({
      uuid:wx.getStorageSync('uuid')
    })
  },

  wait(){
    let url ='http://172.17.173.97:9000/api/game/' + this.data.uuid + '/last'
    wx.request({
      url: url,
      header:{
        "Authorization":wx.getStorageSync('token')
      },
      success(res){
        if(res.data.code == 200){
          wx.setStorageSync('id', 0)
          wx.showToast({
            icon:'success',
            title: '游戏正式开始！',
            duration:1500
          })
          setTimeout(() => {
						wx.reLaunch({
							url: '/pages/onlinegame/onlinegame',
						})
					}, 1500)
        }
      },
      fail(res){
        wx.showToast({
          title: '网络错误',
          icon:'error',
          duration:1500
        })
      }
    })
  },

  onShow() {
		this.setData({ 
      uuid: wx.getStorageSync('uuid') 
    })
		let that = this
		this.setData({
			counttime: setInterval(() => {
				that.wait() 
			}, 2000),
		})
  },
  
	onUnload: function () {
    clearInterval(this.data.counttime)
    this.setData({
      counttime:null
    })
	},
})
