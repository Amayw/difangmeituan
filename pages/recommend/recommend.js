// pages/recommend/recommend.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //窗口推荐
    counterlist:[
      {
        counter_id: 1,
        counter_name:"地锅",
        counter_detail:"主营地锅鸡，地锅虾，地锅排骨等主营地锅鸡，地锅虾，地锅排骨等主营地锅鸡，地锅虾，地锅排骨等",
        counter_icon: "../../img/0.jpg",
        canteen_name:"云餐",
        counter_num: "5号"
      },
      {
        counter_id: 2,
        counter_name:"麻辣烫",
        counter_detail:"精品浓汤，秘制调味料，你值得拥有",
        counter_icon: "../../img/1.jpg",
        canteen_name:"南餐",
        counter_num: "5号"
      },
      {
        counter_id: 3,
        counter_name:"陕西美食",
        counter_detail:"肉夹馍，凉皮，冰峰",
        counter_icon: "../../img/2.jpg",
        canteen_name:"南餐",
        counter_num: "5号"
      },
      {
        counter_id: 4,
        counter_name:"盖饭",
        counter_detail:"红烧茄子，空爆鸡丁，锅包肉等",
        counter_icon: "../../img/1.jpg",
        canteen_name:"北餐",
        counter_num: "5号"
      },
      {
        counter_id: 5,
        counter_name:"砂锅",
        counter_detail:"砂锅土豆粉，砂锅麻食，砂锅丸子等",
        counter_icon: "../../img/1.jpg",
        canteen_name:"云餐",
        counter_num: "5号"
      },
      {
        counter_id: 6,
        counter_name:"豆浆",
        counter_detail:"原味豆浆，玉米豆浆，红豆豆浆，紫米豆浆等",
        counter_icon: "../../img/1.jpg",
        canteen_name:"北餐",
        counter_num: "5号"
      },
    ],
    //菜推荐
    productlist:[
      { product_id:1,
        product_name:"凉皮",
        product_price:"5",
        product_icon: "../../img/z1.jpg",
        product_desc: "现蒸凉皮，酸辣爽口，配菜包含面筋黄瓜丝豆芽等",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 2,
        product_name: "香辣米线",
        product_price: "5",
        product_icon: "../../img/z2.jpg",
        product_desc: "米钱光滑劲道，配菜包含青菜蟹棒豆皮海带等",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 3,
        product_name: "宫保鸡丁盖饭",
        product_price: "5",
        product_icon: "../../img/z3.jpg",
        product_desc: "肉量十足香而不辣，新鲜大米不限量",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 4,
        product_name: "胡萝卜肉丸",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "精选纯瘦肉，纯菜油油炸而成，搭配胡萝卜更营养",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 5,
        product_name: "麻辣香锅单人套餐",
        product_price: "5",
        product_icon: "../../img/2.jpg",
        product_desc: "送米饭，单人套餐配菜包含土豆片金针菇海带鱼豆腐羊肉卷土豆粉",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 6,
        product_name: "麻辣香锅单人套餐",
        product_price: "5",
        product_icon: "../../img/2.jpg",
        product_desc: "送米饭，单人套餐配菜包含土豆片金针菇海带鱼豆腐羊肉卷土豆粉",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 7,
        product_name: "青菜营",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
      },
      {
        product_id: 8,
        product_name: "牛肚热",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
      }
    ],
    selected_place:[1,1,0],
    // selected_place:[true,true,false],
    filter_id:1,
  },
  //搜索
  tapSearch: function () {
    wx.navigateTo({ url: 'search' });
  },
  changeColor: function (e) {
    var that = this;
    var color;
    var index = e.currentTarget.dataset.btnid;
    if (that.data.selected_place[index] == 1) {
      if ((that.data.selected_place[0] + that.data.selected_place[1] + that.data.selected_place[2])==1) {
        return
      }
      color = 0
    } else {
      color = 1
    }
    var change = "selected_place[" + index + "]";
    that.setData({
      [change]: color
    })
    
  },
  //更改推荐类型
  changeFilterId:function(e){
    var that=this;
    that.setData({
      filter_id:e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '西工大食堂'
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})