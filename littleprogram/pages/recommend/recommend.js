// pages/recommend/recommend.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 窗口推荐
    counterlist:[
      {
        counter_id: 1,
        counter_name:"地锅",
        counter_detail:"主营地锅鸡，地锅虾，地锅排骨等主营地锅鸡，地锅虾，地锅排骨等主营地锅鸡，地锅虾，地锅排骨等",
        counter_desc:"主营地锅鸡，地锅虾，地锅排骨等主营地锅鸡，地锅虾，地锅排骨等主营地锅鸡，地锅虾，地锅排骨等",
        counter_icon: "../../img/x1.jpg",
        canteen_name:"云餐",
        counter_num: "13号"
      },
      {
        counter_id: 2,
        counter_name:"麻辣烫",
        counter_detail:"精品浓汤，秘制调味料，你值得拥有",
        counter_desc:"精品浓汤，秘制调味料，你值得拥有",
        counter_icon: "../../img/x2.jpg",
        canteen_name:"南餐",
        counter_num: "1号"
      },
      {
        counter_id: 3,
        counter_name:"陕西美食",
        counter_detail:"肉夹馍，凉皮，冰峰",
        counter_desc:"肉夹馍，凉皮，冰峰",
        counter_icon: "../../img/x3.jpg",
        canteen_name:"南餐",
        counter_num: "17号"
      },
      {
        counter_id: 4,
        counter_name:"盖饭",
        counter_detail:"红烧茄子，空爆鸡丁，锅包肉等",
        counter_desc:"红烧茄子，空爆鸡丁，锅包肉等",
        counter_icon: "../../img/x4.jpg",
        canteen_name:"北餐",
        counter_num: "8号"
      },
      {
        counter_id: 5,
        counter_name:"砂锅",
        counter_desc:"砂锅土豆粉，砂锅麻食，砂锅丸子等",
        counter_detail:"砂锅土豆粉，砂锅麻食，砂锅丸子等",
        counter_icon: "../../img/x5.jpg",
        canteen_name:"云餐",
        counter_num: "5号"
      },
      {
        counter_id: 6,
        counter_name:"豆浆",
        counter_detail:"原味豆浆，玉米豆浆，红豆豆浆，紫米豆浆等",
        counter_desc:"原味豆浆，玉米豆浆，红豆豆浆，紫米豆浆等",
        counter_icon: "../../img/x6.jpg",
        canteen_name:"北餐",
        counter_num: "4号"
      },
    ],
    //菜推荐
    productlist:[
      // { product_id:1,
      //   product_name:"凉皮",
      //   product_price:"5",
      //   product_sales:1020,
      //   product_icon: "../../img/5.jpg",
      //   product_desc: "新蒸凉皮，味道酸爽",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      // },
      {
        product_id: 7,
        product_name: "煮馍",
        product_price: "5",
        product_icon: "../../img/y6.jpg",
        product_desc: "原料是丸子、发好的面皮、细皮白肉片,加之用上好的肉骨、鸡鸭肉调好的白汁汤",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 567,
      },
      {
        product_id: 2,
        product_name: "青菜",
        product_price: "5",
        product_icon: "../../img/y1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 101,
      },
      {
        product_id: 3,
        product_name: "麻辣鱼",
        product_price: "5",
        product_icon: "../../img/y2.jpg",
        product_desc: "东北一带的传统名菜。主要材料有黑鱼、胡萝卜、西芹等，辅料有姜、大蒜、大葱、干辣椒等",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 59,
      },
      {
        product_id: 4,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/y3.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 5,
        product_name: "凉拌饸络",
        product_price: "5",
        product_icon: "../../img/y4.jpg",
        product_desc: "酸辣爽口，由面、西红柿、鸡蛋、黄瓜丝、鹌鹑蛋、芝麻、辣椒油制作而成",
        counter_name: "5号",
        product_sales: 108,
      },
      {
        product_id: 6,
        product_name: "米线",
        product_price: "5",
        product_icon: "../../img/y5.jpg",
        product_desc: "精华汤底秘方，佐以精质配料，汤清味浓、油而不腻、鲜香可口、味道鲜美",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1150,
      },
      
      {
        product_id: 8,
        product_name: "菜卷",
        product_price: "5",
        product_icon: "../../img/y7.jpg",
        product_desc: "小麦面粉、鸡蛋、韭菜、粉条、虾皮等制作而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 310,
      },
      {
        product_id: 9,
        product_name: "油泼面",
        product_price: "5",
        product_icon: "../../img/y8.jpg",
        product_desc: "将手工制作的面条在开水中煮熟后捞在碗里，将葱花碎、花椒粉、盐等配料和厚厚一层的辣椒面一起平铺在面上，用烧的滚烫的菜油浇在调料上制作而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 2800,
      }
    ],
    selected_place:[1,1,1],
    // selected_place:[true,true,false],
    filter_id:1,
  },
  //搜索
  tapSearch: function () {
    var that=this;
    console.log(that.data.selected_place)
    wx.navigateTo({ url: 'search?selected_place1=' + that.data.selected_place[0] + '&selected_place2=' + that.data.selected_place[1] + '&selected_place3=' + that.data.selected_place[2]});
    // wx.navigateTo({ 
    //   url: 'search',
    //   selected_place:that.data.selected_place 
    //   });
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
    console.log(that.data.selected_place)
    that.setData({
      [change]: color
    })
    if(that.data.filter_id==1){
      that.recommend1()
    } else if (that.data.filter_id == 2) {
      that.recommend2()
    } else if (that.data.filter_id == 3) {
      that.recommend3()
    } else if (that.data.filter_id == 4) {
      that.recommend4()
    }
  },
  //更改推荐类型
  changeFilterId:function(e){
    console.log(e.currentTarget.dataset.id)
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
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/canteenCounter/list',//请求地址路径
      // data:{selected_place:JSON.stringify(that.data.selected_place)},//请求参数
      data:{selected_place:that.data.selected_place},//请求参数
      method:"get",//请求方式
      header:{//请求头
        "content-type":"application/json"
      },
      success(res){
        if(res){
          that.setData({
            counterlist:res.data.data
          })
        }else{
          console.log("错误")
        }
      }
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
  ,
  // 交互代码
  recommend1:function(){
    var that=this;
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/canteenCounter/list',//请求地址路径
      data: { selected_place: JSON.stringify(that.data.selected_place) },//请求参数
      method: "get",//请求方式
      header: {//请求头
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        console.log("热门")
        if (res) {
          that.setData({
            counterlist: res.data.data
          })
        } else {
          console.log("错误")
        }
      }
    })
  },
  recommend2:function(){
    var that = this;
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/product/nutrition/list',//请求地址路径
      data: { selected_place: JSON.stringify(that.data.selected_place) },//请求参数
      method: "get",//请求方式
      header: {//请求头
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        console.log("营养")
        if (res) {
          that.setData({
            counterlist: res.data.product
          })
        } else {
          console.log("错误")
        }
      }
    })
  },
  recommend3:function(){
    var that = this;
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/product/new/list',//请求地址路径
      data: { selected_place: JSON.stringify(that.data.selected_place) },//请求参数
      method: "get",//请求方式
      header: {//请求头
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        console.log("新菜")
        if (res) {
          that.setData({
            productlist: res.data.data.product
          })
        } else {
          console.log("错误")
        }
      }
    })
  },
  recommend4:function(){
    var that=this;
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/product/hot/list',//请求地址路径
      data: { selected_place: JSON.stringify(that.data.selected_place) },//请求参数
      method: "get",//请求方式
      header: {//请求头
        "content-type": "application/json"
      },
      success(res) {
        console.log(res)
        console.log("好菜")
        if (res) {
          that.setData({
            productlist: res.data.data.product
          })
        } else {
          console.log("错误")
        }
        console.log(that.data.productlist)
      }
    })
  }
})

