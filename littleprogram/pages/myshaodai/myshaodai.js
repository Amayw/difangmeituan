// pages/myorder/myorder.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected1: true,
    selected2: false,
    orderlist: [
      {
        order_id: "1",
        order_status: "0",
        order_pickup_type: "0",
        canteen_name: "云餐",
        counter_id: 1,
        counter_num: "5号",
        counter_name: "地锅鸡",
        counter_icon: "../../img/1.jpg",
        order_detail: [
          {
            product_id: '1',
            product_name: "肥牛",
            product_quantity: "2"
          },
          {
            product_id: '2',
            product_name: "油豆腐",
            product_quantity: "1"
          },
          {
            product_id: '3',
            product_name: "鸡块",
            product_quantity: "1"
          },
        ],
        order_amount: "70",
        // 捎带地址列表
        addresslist: [
          {
            address_id: "1",
            address_name: "云A567",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "2",
            address_name: "图书馆",
            address_show: true,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "3",
            address_name: "自动化学院楼从正门进左拐319",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "4",
            address_name: "云A567",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "5",
            address_name: "图书馆",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "6",
            address_name: "自动化学院楼从正门进左拐319",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "7",
            address_name: "云A567",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "8",
            address_name: "图书馆",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
          {
            address_id: "9",
            address_name: "自动化学院楼从正门进左拐319",
            address_show: false,
            user_name: "王二",
            user_phone: "18722456759",
          },
        ],
        //捎带时间
        timeindex2: 0,
        timelist2: ['12:00', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10'],
        // 捎带金额
        piggyback_tip: '3',
        address: {
          address_id: "1",
          address_name: "云A567",
          address_show: false,
          user_name: "王二",
          user_phone: "18722456759",
        },
      },
      // {
      //   order_id: "1",
      //   order_status: "0",
      //   order_pickup_type: "0",
      //   canteen_name: "云餐",
      //   counter_id: 1,
      //   counter_num: "5号",
      //   counter_name: "地锅鸡",
      //   counter_icon: "../../img/1.jpg",
      //   order_detail: [
      //     {
      //       product_id: '1',
      //       product_name: "肥牛",
      //       product_quantity: "2"
      //     },
      //     {
      //       product_id: '2',
      //       product_name: "油豆腐",
      //       product_quantity: "1"
      //     },
      //     {
      //       product_id: '3',
      //       product_name: "鸡块",
      //       product_quantity: "1"
      //     },
      //   ],
      //   order_amount: "70"
      // },
        
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
  toshop: function (e) {
    var that = this;
    var counter_id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../shop/shop?counter_id=' + counter_id
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