Page({
  data: {
    //模态框状态
    showModal: false,
    selected_shaodai:{
      user_id: 2,
      user_icon: "../../img/user2.jpg",
      user_name: "我是小可爱呀",
      user_pay: 1,
      user_address: "",
      user_time: "",
      user_more: "",
    },
    users:[
      {
        user_id:1,
        user_icon: "../../img/user7.jpg",
        user_name: "猪猪女孩",
        user_pay: 5,
        user_address: "图书馆",
        user_time: "12:40",
        user_more: "请送上楼",
      },
      {
        user_id:2,
        user_icon: "../../img/user2.jpg",
        user_name: "我是小可爱呀",
        user_pay: 1,
        user_address: "云A",
        user_time: "17:40",
        user_more: "宿舍622",
      },
      {
        user_id:3,
        user_icon: "../../img/user3.jpg",
        user_name: "人生如海",
        user_pay: 8,
        user_address: "启翔楼",
        user_time: "12:10",
        user_more: "请送上楼，3楼左边388",
      },
      {
        user_id:4,
        user_icon: "../../img/user4.jpg",
        user_name: "白雪公主",
        user_pay: 5,
        user_address: "星F",
        user_time: "13:00",
        user_more: "到了放楼下就好",
      },
      {
        user_id:5,
        user_icon: "../../img/user5.jpg",
        user_name: "德善呐",
        user_pay: 5,
        user_address: "外语院",
        user_time: "12:40",
        user_more: "到楼下打电话",
      },
      {
        user_id:6,
        user_icon: "../../img/user6.jpg",
        user_name: "码农",
        user_pay: 5,
        user_address: "理学院",
        user_time: "12:40",
        user_more: "院楼北门门口打电话",
      },
      {
        user_id:7,
        user_icon: "../../img/user1.jpg",
        user_name: "甜甜圈",
        user_pay: 5,
        user_address: "教东",
        user_time: "12:40",
        user_more: "在计算机学院对面的那个门那里打电话",
      },
      {
        user_id:8,
        user_icon: "../../img/user7.jpg",
        user_name: "猪猪女孩哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        user_pay: 5,
        user_address: "图书馆哈哈哈哈哈哈哈哈哈哈哈哈哈哈hhhhhhhhhhhhhhhhhhh",
        user_time: "12:40",
        user_more: "请送上楼",
      },
      {
        user_id:9,
        user_icon: "../../img/user2.jpg",
        user_name: "我是小可爱呀",
        user_pay: 1,
        user_address: "云A",
        user_time: "17:40",
        user_more: "宿舍622",
      },
      {
        user_id:10,
        user_icon: "../../img/user3.jpg",
        user_name: "人生如海",
        user_pay: 8,
        user_address: "启翔楼",
        user_time: "12:10",
        user_more: "请送上楼，3楼左边388",
      },
      {
        user_id:11,
        user_icon: "../../img/user4.jpg",
        user_name: "白雪公主",
        user_pay: 5,
        user_address: "星F",
        user_time: "13:00",
        user_more: "到了放楼下就好",
      },
      {
        user_id:12,
        user_icon: "../../img/user5.jpg",
        user_name: "德善呐",
        user_pay: 5,
        user_address: "外语院",
        user_time: "12:40",
        user_more: "到楼下打电话",
      },
      {
        user_id:13,
        user_icon: "../../img/user6.jpg",
        user_name: "码农",
        user_pay: 5,
        user_address: "理学院",
        user_time: "12:40",
        user_more: "院楼北门门口打电话",
      },
      {
        user_id:14,
        user_icon: "../../img/user1.jpg",
        user_name: "甜甜圈",
        user_pay: 5,
        user_address: "教东",
        user_time: "12:40",
        user_more: "在计算机学院对面的那个门那里打电话",
      },
    ]
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '校园捎带'
    })
  },
  submit: function (e) {
    this.setData({
      showModal: true,
      index: e.currentTarget.dataset.index
    })
  },
  // 模态框部分函数
  preventTouchMove: function () {

  },
  go: function () {
    this.setData({
      showModal: false
    })
  },

})
