// pages/onlinegame/onlinegame.js
const app = getApp()

Page({

  data: {
    //玩家信息
    userInfo:null,
    //p1的卡牌信息
    p1_total:0,
    p1_club:0,
    p1_diamond:0,
    p1_spade:0,
    p1_heart:0,
    //p1各花色牌堆
    p1_club_stacks:[],
    p1_diamond_stacks:[],
    p1_spade_stacks:[],
    p1_heart_stacks:[],
    //p1各花色牌顶
    p1_club_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    p1_diamond_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    p1_spade_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    p1_heart_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    //p2的卡牌信息
    p2_total:0,
    p2_club:0,
    p2_diamond:0,
    p2_spade:0,
    p2_heart:0,
    //p2各花色牌堆
    p2_club_stacks:[],
    p2_diamond_stacks:[],
    p2_spade_stacks:[],
    p2_heart_stacks:[],
    //p2各花色牌顶
    p2_club_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    p2_diamond_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    p2_spade_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    p2_heart_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg',
    //牌堆
    pile_total:52,
    pile_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021105506598-2134088065.png',
    //判定区
    decision_total:0,
    decision_top:'',
    decision_stacks:[],
    decision_club:0,
    decision_diamond:0,
    decision_spade:0,
    decision_heart:0,
    //决定轮次
    turn:'',
    listen:null,
    uuid:null,
    id:null,
    robottap:0,
    musictap:1,
    value:{}
  },

  //每张牌牌对应相应的网络地址
  Address_pile(e){
    if(e == 'C1'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/48dffe9fd383441f8759c35aaf34cc1f.png'
    }
    else if(e == 'C2'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/8d62ae46ad83477791b10b03e4de6d93.png'
    }
    else if(e == 'C3'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/61e3120da3504f3b9554a94aa2ac767b.png'
    }
    else if(e == 'C4'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/e4bd11d779ba40fb9338c7a108464708.png'
    }
    else if(e == 'C5'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/f992d3a4b299472a91b64c799b710494.png'
    }
    else if(e == 'C6'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/f317987fe8af48fd95d3b41f9fb7c392.png'
    }
    else if(e == 'C7'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/f317987fe8af48fd95d3b41f9fb7c392.png'
    }
    else if(e == 'C8'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/83b2f7cd5b5f4105b3938464d5296c98.png'
    }
    else if(e == 'C9'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/d04456e2b45d42c39a2a9acb7b66fc79.png'
    }
    else if(e == 'C10'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/3de775bd306040f9aa748706ef57b6a8.png'
    }
    else if(e == 'CJ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/318301fbadf5495fb3cb14ecf7ea8188.png'
    }
    else if(e == 'CQ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/95195d7dcaf342578da64efeba548957.png'
    }
    else if(e == 'CK'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/6af5e79f7719468aa17aece554c86df5.png'
    }
    else if(e == 'D1'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/1ce473550a12460facf7287ef21a713b.png'
    }
    else if(e == 'D2'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/aae9d2fe604f40cca74829ddc105be77.png'
    }
    else if(e == 'D3'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/874f58a66dcc4d549edab20563367f2a.png'
    }
    else if(e == 'D4'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/2ef36cc65cc64bf2844919c7c7dd5838.png'
    }
    else if(e == 'D5'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/bf0c15d721074cd7b55ae1876389dff8.png'
    }
    else if(e == 'D6'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/bdc5b83abb9144968f814d5467f3f45f.png'
    }
    else if(e == 'D7'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/38c028efb7814652b798fd764a043487.png'
    }
    else if(e == 'D8'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/dce265a6205e4c1eb434403842857144.png'
    }
    else if(e == 'D9'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/455b668b04bc453f88ed12f4349ad2fd.png'
    }
    else if(e == 'D10'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/9b34652cca114279a560580f2de09a26.png'
    }
    else if(e == 'DJ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/adc48c23bad444f99bc661d75fa3543b.png'
    }
    else if(e == 'DQ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/d56bc6a0275b4205968d3453079c6c66.png'
    }
    else if(e == 'DK'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/6679ab8dead94a1fa8559a5e8f576b3f.png'
    }
    else if(e == 'S1'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/14760b127c244d01a0e891bfa7487fe9.png'
    }
    else if(e == 'S2'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/bbbfd1a0defe489289e316b265d347fa.png'
    }
    else if(e == 'S3'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/ca5a69eb86f849e5a2e6c1175199076e.png'
    }
    else if(e == 'S4'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/b4efbb69c48d447dbf6621a607f53f3c.png'
    }
    else if(e == 'S5'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/ff9070d5152b435db18d09537de2e035.png'
    }
    else if(e == 'S6'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/2d57b3c91ab84a95903aadbb732a8fa8.png'
    }
    else if(e == 'S7'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/185798f5ddc644f0a6b72f49b1a952f5.png'
    }
    else if(e == 'S8'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/3e81efb1fc984cd8a36d1fbdec7da9ff.png'
    }
    else if(e == 'S9'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/e4ecfc5cc6f6424e83186fc7e86ac033.png'
    }
    else if(e == 'S10'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/6b91b7b712dd45f082d90d57ffe599d7.png'
    }
    else if(e == 'SJ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/b78d1ed0a1144af8a6d4e10fb9d3fefe.png'
    }
    else if(e == 'SQ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/f21faf937dcc4daf87ae9299831defc6.png'
    }
    else if(e == 'SK'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/2c1dceb870244835bc00a5607ce03fc6.png'
    }
    else if(e == 'H1'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/a4a6b3a30bdf4e0e95340da50bc71a2c.png'
    }
    else if(e == 'H2'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/ff31f74f51234ab5a9604f7d5ff08762.png'
    }
    else if(e == 'H3'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/92002d52cd00499da1824f8ecbecc42b.png'
    }
    else if(e == 'H4'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/2e5cec0072ff4473ae9421f472c6c14e.png'
    }
    else if(e == 'H5'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/5499c03749ce4ce2816724c60af895f2.png'
    }
    else if(e == 'H6'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/22462cb0a3494dfcaf661cdc33f1da10.png'
    }
    else if(e == 'H7'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/9eb983735eef44628847a9655de9aea3.png'
    }
    else if(e == 'H8'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/e2ee2c75e0e74c15a9d7315e5645e121.png'
    }
    else if(e == 'H9'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/bd51dbd48d044a578d907d384ced918e.png'
    }
    else if(e == 'H10'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/305a962a0df34bb187bcffd786bd80ab.png'
    }
    else if(e == 'HJ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/0d1d2084230d46d09e89115339066d57.png'
    }
    else if(e == 'HQ'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/2347d74fac034fc8bb865096424f074f.png'
    }
    else if(e == 'HK'){
      return 'https://p-blog.csdn.net/images/p_blog_csdn_net/FuWaer/dd20aced928047e7adada2691d908ca3.png'
    }
  },

  onload(){
    this.setData({
      uuid:wx.getStorageSync('uuid'),
      id:wx.getStorageSync('id'),
      userInfo:wx.getStorageSync('userInfo')
    })
  },

  onShow() {
		this.setData({ 
      uuid:wx.getStorageSync('uuid'),
      id:wx.getStorageSync('id'),
      userInfo:wx.getStorageSync('userInfo')
    })
		let that = this
		this.setData({
			listen: setInterval(() => {
				that.wait() 
			}, 1000),
		})
  },

  onUnload(){
    clearInterval(this.data.listen)
    this.setData({
      listen:null
    })
  },

  wait:function(){
    let url ='http://172.17.173.97:9000/api/game/' + this.data.uuid + '/last'
    let url1 = 'http://172.17.173.97:9000/api/game/' + this.data.uuid
    let that = this
    wx.request({
      url: url,
      method:'GET',
      header:{
        "Content-Type": 'application/json',
        'Authorization':wx.getStorageSync('token')
      },
      success(res){
        if(res.data.code == 200){
          if(res.data.data.your_turn != that.data.turn){
            console.log(res.data);
            that.data.value = res.data
            that.data.turn = res.data.data.your_turn
            that.Move_card()
          }
        }
        else{
          wx.request({
            url: url1,
            data: {
            },
            header: { 
              "Content-Type": 'application/json',
              "Authorization": wx.getStorageSync('token'),
            },
            method: 'GET',
            success(res) {
              if(res.data.code == "200"){
                that.Overgame()
              }
            },
          })
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

  Play_card(e){
    //判断是打牌还是摸牌
    let ans = false
    if(this.data.pile_total == 0){
      that.Overgame()
    }
    if(this.data.robottap==1){
      return
    }
    if(this.data.turn==true){
      let type = parseInt(e.currentTarget.dataset.type)
      let flowercolor = e.currentTarget.dataset.flowercolor
      let pile = ''
      if( flowercolor == 'C'){
        if(this.data.p1_club == 0){
          wx.showToast({
            title: '你没有梅花牌！',
            icon:'error',
            duration:1500
          })
          return
        }
        else{
          pile = this.data.p1_club_stacks.pop()
          this.setData({
            p1_total:this.data.p1_total - 1,
            p1_club:this.data.p1_club - 1
          })
          if(this.data.p1_club == 0){
            this.setData({
              p1_club_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
            })
          }
          else{
            this.setData({
              p1_club_top:this.Address_pile(this.data.p1_club_stacks[this.data.p1_club_stacks.length-1])
            })
          }
          ans = true
        }
      }
      else if( flowercolor == 'D'){
        if(this.data.p1_diamond == 0){
          wx.showToast({
            title: '你没有方块牌！',
            icon:'error',
            duration:1500
          })
          return
        }
        else{
          pile = this.data.p1_diamond_stacks.pop()
          this.setData({
            p1_total:this.data.p1_total - 1,
            p1_diamond:this.data.p1_diamond - 1
          })
          if(this.data.p1_diamond == 0){
            this.setData({
              p1_diamond_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
            })
          }
          else{
            this.setData({
              p1_diamond_top:this.Address_pile(this.data.p1_diamond_stacks[this.data.p1_diamond_stacks.length-1])
            })
          }
          ans = true
        }
      }
      else if( flowercolor == 'S'){
        if(this.data.p1_spade == 0){
          wx.showToast({
            title: '你没有黑桃牌！',
            icon:'error',
            duration:1500
          })
          return
        }
        else{
          pile = this.data.p1_spade_stacks.pop()
          this.setData({
            p1_total:this.data.p1_total - 1,
            p1_spade:this.data.p1_spade - 1
          })
          if(this.data.p1_spade == 0){
            this.setData({
              p1_spade_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
            })
          }
          else{
            this.setData({
              p1_spade_top:this.Address_pile(this.data.p1_spade_stacks[this.data.p1_spade_stacks.length-1])
            })
          }
          ans = true
        }
      }
      else if( flowercolor == 'H'){
        if(this.data.p1_heart == 0){
          wx.showToast({
            title: '你没有红桃牌！',
            icon:'error',
            duration:1500
          })
          return
        }
        else{
          pile = this.data.p1_heart_stacks.pop()
          this.setData({
            p1_total:this.data.p1_total - 1,
            p1_heart:this.data.p1_heart - 1
          })
          if(this.data.p1_heart == 0){
            this.setData({
              p1_heart_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
            })
          }
          else{
            this.setData({
              p1_heart_top:this.Address_pile(this.data.p1_heart_stacks[this.data.p1_heart_stacks.length-1])
            })
          }
          ans = true
        }
      }
      if(ans){
        let that = this
        wx.request({
          url: 'http://172.17.173.97:9000/api/game/' + that.data.uuid,
          method:'PUT',
          header:{
            "Content-Type": 'application/json',
            'Authorization':wx.getStorageSync('token')
          },
          data:{
            'type':1,
            'card':pile
          },
          success(res){
            wx.showToast({
              title: '成功打出手牌',
              icon:'success',
              duration:1500
            })
          },
          fail(res){
            wx.showToast({
              title: '网络错误',
              icon:'error',
              duration:1500
            })
          }
        })
      }
      else if(ans==false && type == 0){
        let that = this
        wx.request({
          url: 'http://172.17.173.97:9000/api/game/' + that.data.uuid,
          method:'PUT',
          header:{
            "Content-Type": 'application/json',
            'Authorization':wx.getStorageSync('token')
          },
          data:{
            'type':0,
          },
          success(res){
            wx.showToast({
              title: '成功摸牌',
              icon:'success',
              duration:1500
            })
          },
          fail(res){
            wx.showToast({
              title: '网络错误',
              icon:'error',
              duration:1500
            })
          },
        })
      }
    }
    else{
      wx.showToast({
        title: '还没到你呢！',
        icon:'error',
        duration:1500
      })
    }
  },

  Move_card(){
    let opt = this.data.value.data.last_code.trim().split(/\s+/)
    if(opt[1] == 0){
      this.setData({
        pile_total:this.data.pile_total - 1,
        pile_top:this.Address_pile(opt[2])
      })
      setTimeout(() => {
        this.setData({
          pile_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021105506598-2134088065.png'
        })
        this.Judge(opt[0],opt[2])
      }, 1000);
    }
    else if(opt[1] == 1){
      if(opt[0]==this.data.id){
        this.Judge(opt[0],opt[2])
      }
      else{
        let top = ''
        if(opt[2][0] == 'C'){
          this.data.p2_club_stacks.pop()
          if(!this.data.p2_club_stacks.slice(-1)[0]){
            top = 'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
          }
          else{
            top = this.Address_pile(this.data.p2_club_stacks.slice(-1)[0])
          }
          this.setData({
            p2_club:this.data.p2_club - 1,
            p2_total:this.data.p2_total - 1,
            p2_club_top:top
          })
        }
        if(opt[2][0] == 'D'){
          this.data.p2_diamond_stacks.pop()
          if(!this.data.p2_diamond_stacks.slice(-1)[0]){
            top = 'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
          }
          else{
            top = this.Address_pile(this.data.p2_diamond_stacks.slice(-1)[0])
          }
          this.setData({
            p2_diamond:this.data.p2_diamond - 1,
            p2_total:this.data.p2_total - 1,
            p2_diamond_top:top
          })
        }
        if(opt[2][0] == 'S'){
          this.data.p2_spade_stacks.pop()
          if(!this.data.p2_spade_stacks.slice(-1)[0]){
            top = 'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
          }
          else{
            top = this.Address_pile(this.data.p2_spade_stacks.slice(-1)[0])
          }
          this.setData({
            p2_spade:this.data.p2_spade - 1,
            p2_total:this.data.p2_total - 1,
            p2_spade_top:top
          })
        }
        if(opt[2][0] == 'H'){
          this.data.p2_heart_stacks.pop()
          if(!this.data.p2_heart_stacks.slice(-1)[0]){
            top = 'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
          }
          else{
            top = this.Address_pile(this.data.p2_club_stacks.slice(-1)[0])
          }
          this.setData({
            p2_heart:this.data.p2_heart - 1,
            p2_total:this.data.p2_total - 1,
            p2_heart_top:top
          })
        }
        this.Judge(opt[0],opt[2])
      }
    }
    if(this.data.turn==true&&this.data.robottap==1){
      this.Robot()
    }
  },

  Judge(player,card){
    if(this.data.decision_total == 0 || card[0] != this.data.decision_stacks[this.data.decision_stacks.length - 1][0]){
      this.data.decision_stacks.push(card)
      this.setData({
        decision_top:this.Address_pile(card),
        decision_total:this.data.decision_total + 1
      })
    }
    else{
      this.data.decision_stacks.push(card)
      if(player == this.data.id){
        let len = this.data.decision_stacks.length
        for(let i = this.data.decision_stacks.length; i>0; i--){
          let pile = this.data.decision_stacks.pop()
          if(pile[0] == 'C'){
            this.data.p1_club_stacks.push(pile)
            this.setData({
              p1_club:this.data.p1_club + 1,
              p1_club_top:this.Address_pile(pile)
            })
          }
          else if(pile[0] == 'D'){
            this.data.p1_diamond_stacks.push(pile)
            this.setData({
              p1_diamond:this.data.p1_diamond + 1,
              p1_diamond_top:this.Address_pile(pile)
            })
          }
          else if(pile[0] == 'S'){
            this.data.p1_spade_stacks.push(pile)
            this.setData({
              p1_spade:this.data.p1_spade + 1,
              p1_spade_top:this.Address_pile(pile)
            })
          }
          else if(pile[0] == 'H'){
            this.data.p1_heart_stacks.push(pile)
            this.setData({
              p1_heart:this.data.p1_heart + 1,
              p1_heart_top:this.Address_pile(pile)
            })
          }
        }
        this.setData({
          p1_total:this.data.p1_total + len,
          decision_top:'',
          decision_total:0,
          decision_club:0,
          decision_diamond:0,
          decision_spade:0,
          decision_heart:0
        })
      }
      else{
        let len = this.data.decision_stacks.length
        for(let i = this.data.decision_stacks.length; i>0; i--){
          let pile = this.data.decision_stacks.pop()
          if(pile[0] == 'C'){
            this.data.p2_club_stacks.push(pile)
            this.setData({
              p2_club:this.data.p2_club + 1,
              p2_club_top:this.Address_pile(pile)
            })
          }
          else if(pile[0] == 'D'){
            this.data.p2_diamond_stacks.push(pile)
            this.setData({
              p2_diamond:this.data.p2_diamond + 1,
              p2_diamond_top:this.Address_pile(pile)
            })
          }
          else if(pile[0] == 'S'){
            this.data.p2_spade_stacks.push(pile)
            this.setData({
              p2_spade:this.data.p2_spade + 1,
              p2_spade_top:this.Address_pile(pile)
            })
          }
          else if(pile[0] == 'H'){
            this.data.p2_heart_stacks.push(pile)
            this.setData({
              p2_heart:this.data.p2_heart + 1,
              p2_heart_top:this.Address_pile(pile)
            })
          }
        }
        this.setData({
          p2_total:this.data.p2_total + len,
          decision_top:'',
          decision_total:0,
          decision_club:0,
          decision_diamond:0,
          decision_spade:0,
          decision_heart:0,
        })
      }
    }
  },

  Overgame(){
    if(this.data.p1_total<this.data.p2_total){
      wx.showToast({
        title: '你赢了！',
      })
    }
    else if(this.data.p1_total>this.data.p2_total){
      wx.showToast({
        title: '你输了！',
      })
    }
    else{
      wx.showToast({
        title: '平局！',
      })
    }
    wx.reLaunch({
      url: '/pages/chooseroom/chooseroom',
    })
  },


  turn_robot(e){
    if(this.data.robottap == 1){
      this.setData({
        robottap:0
      })
      wx.hideLoading()
    }
    else{
      this.setData({
        robottap:1
      })
      wx.showLoading({
        title: '托管中······',
      })
      if(this.data.turn){
        this.Robot()
      }
    }
  },

  Robot_turnon_card(){
    if(this.data.pile_total == 0){
      wx.reLaunch({
        url: '/pages/chooseroom/chooseroom',
      })
    }
    let that = this
      wx.request({
        url: 'http://172.17.173.97:9000/api/game/' + that.data.uuid,
        method:'PUT',
        header:{
          "Content-Type": 'application/json',
          'Authorization':wx.getStorageSync('token')
        },
        data:{
          'type':0,
        },
        fail(res){
          wx.showToast({
            title: '网络错误',
            icon:'error',
            duration:1500
          })
        },
      })
  },

  Robot_play_card(e){
    let card = ''
    if(e == 'C'){
      card = this.data.p1_club_stacks.pop()
          this.setData({
            p1_total:this.data.p1_total - 1,
            p1_club:this.data.p1_club - 1
          })
          if(this.data.p1_club == 0){
            this.setData({
              p1_club_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
            })
          }
          else{
            this.setData({
              p1_club_top:this.Address_pile(this.data.p1_club_stacks[this.data.p1_club_stacks.length-1])
            })
          }
    }
    else if(e == 'D'){
      card = this.data.p1_diamond_stacks.pop()
          this.setData({
            p1_total:this.data.p1_total - 1,
            p1_diamond:this.data.p1_diamond - 1
          })
          if(this.data.p1_diamond == 0){
            this.setData({
              p1_diamond_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
            })
          }
          else{
            this.setData({
              p1_diamond_top:this.Address_pile(this.data.p1_diamond_stacks[this.data.p1_diamond_stacks.length-1])
            })
          }
    }
    else if(e == 'S'){
      card = this.data.p1_spade_stacks.pop()
      this.setData({
        p1_total:this.data.p1_total - 1,
        p1_spade:this.data.p1_spade - 1
      })
      if(this.data.p1_spade == 0){
        this.setData({
          p1_spade_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
        })
      }
      else{
        this.setData({
          p1_spade_top:this.Address_pile(this.data.p1_spade_stacks[this.data.p1_spade_stacks.length-1])
        })
      }
    }
    else if(e == 'H'){
      card = this.data.p1_heart_stacks.pop()
      this.setData({
        p1_total:this.data.p1_total - 1,
        p1_heart:this.data.p1_heart - 1
      })
      if(this.data.p1_heart == 0){
        this.setData({
          p1_heart_top:'https://img2020.cnblogs.com/blog/1925175/202110/1925175-20211021225210340-773083698.jpg'
        })
      }
      else{
        this.setData({
          p1_heart_top:this.Address_pile(this.data.p1_heart_stacks[this.data.p1_heart_stacks.length-1])
        })
      }
    }
    let that = this
        wx.request({
          url: 'http://172.17.173.97:9000/api/game/' + that.data.uuid,
          method:'PUT',
          header:{
            "Content-Type": 'application/json',
            'Authorization':wx.getStorageSync('token')
          },
          data:{
            'type':1,
            'card':card
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

  Robot(){
    if(this.data.p1_total == 0 || this.data.decision_total == 0){
      this.Robot_turnon_card()
      return
    }
    else{
      let top = this.data.decision_stacks[this.data.decision_stacks.length - 1][0]
      let temp = 0
      let color = ''
      if( top == 'C' ){
        if( this.data.p1_diamond == 0 && this.data.p1_spade == 0 && this.data.p1_heart == 0 ){
          this.Robot_turnon_card()
          return 
        }
        else{
          temp = this.data.p1_diamond
          color = 'D'
          if(this.data.p1_spade > temp){
            temp = this.data.p1_spade
            color = 'S'
          }
          if(this.data.p1_heart > temp){
            temp = this.data.p1_heart
            color = 'H'
          }
        }
        if(color == 'D'){
          this.Robot_play_card(color)
        }
        else if(color == 'S'){
          this.Robot_play_card(color)
        }
        else if(color == 'H'){
          this.Robot_play_card(color)
        }
        return
      }
      else if( top == 'D' ){
        if( this.data.p1_club == 0 && this.data.p1_spade == 0 && this.data.p1_heart == 0 ){
          this.Robot_turnon_card()
          return
        }
        else{
          temp = this.data.p1_club
          color = 'C'
          if(this.data.p1_spade > temp){
            temp = this.data.p1_spade
            color = 'S'
          }
          if(this.data.p1_heart > temp){
            temp = this.data.p1_heart
            color = 'H'
          }
        }
        if(color == 'C'){
          this.Robot_play_card(color)
        }
        else if(color == 'S'){
          this.Robot_play_card(color)
        }
        else if(color == 'H'){
          this.Robot_play_card(color)
        }
        return
      }
      else if( top == 'S' ){
        if( this.data.p1_diamond == 0 && this.data.p1_club == 0 && this.data.p1_heart == 0 ){
          this.Robot_turnon_card()
          return
        }
        else{
          temp = this.data.p1_diamond
          color = 'D'
          if(this.data.p1_club > temp){
            temp = this.data.p1_club
            color = 'C'
          }
          if(this.data.p1_heart > temp){
            temp = this.data.p1_heart
            color = 'H'
          }
        }
        if(color == 'D'){
          this.Robot_play_card(color)
        }
        else if(color == 'C'){
          this.Robot_play_card(color)
        }
        else if(color == 'H'){
          this.Robot_play_card(color)
        }
        return
      }
      else if( top == 'H' ){
        if( this.data.p1_diamond == 0 && this.data.p1_spade == 0 && this.data.p1_club == 0 ){
          this.Robot_turnon_card()
          return
        }
        else{
          temp = this.data.p1_diamond
          color = 'D'
          if(this.data.p1_spade > temp){
            temp = this.data.p1_spade
            color = 'S'
          }
          if(this.data.p1_club > temp){
            temp = this.data.p1_club
            color = 'C'
          }
        }
        if(color == 'D'){
          this.Robot_play_card(color)
        }
        else if(color == 'S'){
          this.Robot_play_card(color)
        }
        else if(color == 'C'){
          this.Robot_play_card(color)
        }
        return
      }
    }
  },

})