// pages/chooseroom/chooseroom.js
var app = getApp()
Page({
  data:{
    uuid:'',
  },
  creategame(){
    wx.showLoading({
      title: '正在创建房间',
      mask:true
    })
    wx.request({
      url: 'http://172.17.173.97:9000/api/game',
      method:'post',
      data:{
        "private": false
      },
      header:{
        "Authorization": wx.getStorageSync('token')
      },
      success(res){
        wx.hideLoading()
        console.log(res);
        console.log(wx.getStorageSync('token'));
        if(res.data.code == 200){
          wx.setStorageSync('id', 0)
          wx.showToast({
            icon:'success',
            title: '创建房间成功',
            duration:1500
          })
          wx.setStorageSync('uuid', res.data.data.uuid)
          wx.navigateTo({
            url: '/pages/wait/wait',
          })
        }
        else{
          wx.showToast({
            icon:'error',
            title: '创建房间失败',
            duration:1500
          })
        }
      },
      fail(res){
        wx.hideLoading()
        wx.showToast({
          icon:'error',
          title: '网络错误',
        })
      }
    })
  },

  uuidInput(e){
    this.setData({
      uuid: e.detail.value
    })
  },

  joingame(){
    if(this.data.uuid.length == 0){
      wx.showToast({
        icon:'error',
        title: '请输入uuid',
        duration:1500
      })
      return
    }
    else{
      wx.showLoading({
        title: '正在加入房间',
        mask:true,
      })
      let url = 'http://172.17.173.97:9000/api/game/' + this.data.uuid
      let that = this
      wx.getStorage({
        key:'token',
        success(res){
          wx.request({
            url: url,
            method:'post',
            header:{
              "Authorization":res.data
            },
            success(res){
              wx.hideLoading()
              wx.setStorageSync('uuid', that.data.uuid)
              if (res.data.code == 200) {
                wx.setStorageSync('id', 1)
                wx.showToast({
                  icon:'success',
                  title: '加入成功',
                  duration:1500
                })
                setTimeout(() => {
                  wx.navigateTo({
                    url: '/pages/onlinegame/onlinegame',
                  })
                }, 1500)
              } 
              else {
                wx.showToast({
                  icon: 'error',
                  title: '加入失败',
                  duration:1500
                })
              }
            },
            fail(res){
              wx.hideLoading()
              wx.showToast({
                icon:'error',
                title: '网络错误',
                duration:1500
              })
            }
          })
        }
      })
    }
  }
})
