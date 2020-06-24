// pages/myorder/myorder.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected1:true,
    selected2:false,
    orderlist:[
      {
         order_id:"1",
         order_status:"0",
         type:"0",
         canteen_name: "云餐",
         counter_id: 1,
         counter_num: "5号",
         counter_name: "地锅鸡",
         counter_icon: "../../img/1.jpg",
         order_detail:[
           {
             product_id:'1',
             product_name:"肥牛",
             product_quantity:"2"
           },
           {
             product_id:'2',
             product_name:"油豆腐",
             product_quantity:"1"
           },
           {
             product_id:'3',
             product_name:"鸡块",
             product_quantity:"1"
           },
         ],
         order_amount:"70",
        order_time: '12:50',
        phone: 18673597323
      },
      {
         order_id:"1",
         order_status:"0",
        type:"1",
         canteen_name: "南餐",
         counter_id: 1,
         counter_num: "7号",
         counter_name: "麻辣烫",
         counter_icon: "../../img/x5.jpg",
         order_detail:[
           {
             product_id:'1',
             product_name:"金针菇",
             product_quantity:"2"
           },
           {
             product_id:'2',
             product_name:"宽粉",
             product_quantity:"1"
           },
           {
             product_id:'3',
             product_name:"土豆片",
             product_quantity:"1"
           },
         ],
         order_amount:"23",
        order_time: '13:10',
        phone: 13572368458
      },
      {
         order_id:"1",
         order_status:"0",
         type:"1",
         canteen_name: "云餐",
         counter_id: 1,
         counter_num: "22号",
         counter_name: "陕西美食",
         counter_icon: "../../img/x3.jpg",
         order_detail:[
           {
             product_id:'1',
             product_name:"煮馍",
             product_quantity:"1"
           },
        
         ],
         order_amount:"70",
        order_time: '11:50',
        phone: 13673897766
      },
      {
         order_id:"1",
         order_status:"0",
         type:"0",
         canteen_name: "云餐",
         counter_id: 1,
         counter_num: "9号",
         counter_name: "砂锅",
         counter_icon: "../../img/x2.jpg",
         order_detail:[
           {
             product_id:'1',
             product_name:"砂锅麻花",
             product_quantity:"2"
           },
        
         ],
         order_amount:"70",
        order_time:'12:45',
         phone:13673897766
      },
      
    ]
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected2: true,
      selected1: false
    })
  },
  toshop:function(e){
    var that=this;
    var counter_id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../shop/shop?counter_id='+counter_id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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