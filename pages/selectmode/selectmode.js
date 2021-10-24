// pages/selectmode/selectmode.js
var app = getApp()
var bgm = wx.createInnerAudioContext();
Page({
	data: {
    userInfo:null,
    musictap:1
  },

  onLoad: function () {
    this.setData({
      userInfo:wx.getStorageSync('userInfo')
    });
    bgm.src = "http://music.163.com/song/media/outer/url?id=1351618615.mp3"
    bgm.play()
  },
	localgame() {
		wx.navigateTo({
			url: '/pages/localgame/localgame',
		})
	},
	aigame() {
		wx.navigateTo({
			url: '/pages/aigame/aigame',
		})
	},
	onlinegame() {
		wx.navigateTo({
			url: '/pages/load/load',
		})
  },
  showModal(){
    wx.showModal({
      title:'游戏规则',
      content:'1.由一名玩家开始，从牌堆随机抽取翻开一张扑克牌，置于<放置区>上。\r\n2.切换到另外一名玩家操作，执行1操作，此时插入判定。\r\n3.若翻开的花色与<放置区>原顶部扑克牌花色相同，需进行以下操作:将放置区的所有牌收到自己<手牌>内(即”吃“牌)。\r\n4.在执行1操作前，若玩家<手牌>非空，则玩家可选择放弃翻牌，同时需要从<手牌>中选择─张牌置于<放置区>]顶部作为替代，判定同2操作。\r\n5.若牌堆非空，则重复2操作。\r\n6.当牌堆为空，且插入判定结算完成，游戏终止，进行结算判定:比较两玩家<手牌>卡牌数量:剩余卡片数量小者获胜;数量相同则判断为平局。',
      cancelColor: '#000000',
      showCancel:false,
      confirmText:'我已明白',
    })
  },
  turn_music(){
    if(this.data.musictap == 1){
      this.setData({
        musictap:0
      })
      bgm.pause()
    }
    else{
      this.setData({
        musictap:1
      })
      bgm.play()
    }
  },
})
