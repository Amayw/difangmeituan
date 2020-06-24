Page({
  data: {
    //模态框状态
    searchWords: '',
    showModal: false,
    selected_shaodai:{
      order_id:800,
      user_id: 2,
      user_icon: "../../img/user2.jpg",
      user_name: "我是小可爱呀",
      user_pay: 1,
      user_address: "",
      user_time: "",
      user_more: "电话哈哈哈哈哈哈哈哈哈哈或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
      canteen_name: "云餐",
      counter_num: "5号"
    },
    users:[
      
      {
        user_id:2,
        user_icon: "../../img/user2.jpg",
        user_name: "我是小可爱呀",
        user_pay: 1,
        user_address: "云A",
        user_time: "17:40",
        user_more: "宿舍622",
        canteen_name: "云餐",
        counter_num: "5号"
      },
      {
        user_id:3,
        user_icon: "../../img/user3.jpg",
        user_name: "人生如海",
        user_pay: 8,
        user_address: "启翔楼",
        user_time: "12:10",
        user_more: "请送上楼，3楼左边388",
        canteen_name: "云餐",
        counter_num: "5号"
      },
      {
        user_id:4,
        user_icon: "../../img/user4.jpg",
        user_name: "白雪公主",
        user_pay: 5,
        user_address: "星F",
        user_time: "13:00",
        user_more: "到了放楼下就好",
        canteen_name: "云餐",
        counter_num: "5号"
      },
      {
        user_id:5,
        user_icon: "../../img/user5.jpg",
        user_name: "德善呐",
        user_pay: 5,
        user_address: "外语院",
        user_time: "12:40",
        user_more: "到楼下打电话",
        canteen_name: "云餐",
        counter_num: "5号"
      },
     
      {
        user_id:7,
        user_icon: "../../img/user1.jpg",
        user_name: "甜甜圈",
        user_pay: 5,
        user_address: "教东",
        user_time: "12:40",
        user_more: "在计算机学院对面的那个门那里打电话哈哈哈哈哈哈哈哈哈哈或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
      },
      {
        user_id:2,
        user_icon: "../../img/user2.jpg",
        user_name: "我是小可爱呀",
        user_pay: 1,
        user_address: "云A",
        user_time: "17:40",
        user_more: "宿舍622",
        canteen_name: "云餐",
        counter_num: "5号"
      },
      {
        user_id:3,
        user_icon: "../../img/user3.jpg",
        user_name: "人生如海",
        user_pay: 8,
        user_address: "启翔楼",
        user_time: "12:10",
        user_more: "请送上楼，3楼左边388",
        canteen_name: "云餐",
        counter_num: "5号"
      },
      {
        user_id:4,
        user_icon: "../../img/user4.jpg",
        user_name: "白雪公主",
        user_pay: 5,
        user_address: "星F",
        user_time: "13:00",
        user_more: "到了放楼下就好",
        canteen_name: "云餐",
        counter_num: "5号"
      },
      {
        user_id:5,
        user_icon: "../../img/user5.jpg",
        user_name: "德善呐",
        user_pay: 5,
        user_address: "外语院",
        user_time: "12:40",
        user_more: "到楼下打电话",
        canteen_name: "云餐",
        counter_num: "5号"
      },
     
      {
        user_id:7,
        user_icon: "../../img/user1.jpg",
        user_name: "甜甜圈",
        user_pay: 5,
        user_address: "教东",
        user_time: "12:40",
        user_more: "在计算机学院对面的那个门那里打电话哈哈哈哈哈哈哈哈哈哈或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或",
      },
     
    ]
  },

  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '校园捎带'
    })
    this.getuserslist()
  },
  submit: function (e) {
    for(var i=0;i<this.data.users.length;i++){
      if (this.data.users[i].user_id == e.currentTarget.dataset.index){
        var change = this.data.users[i]
        this.setData({
          showModal: true,
          selected_shaodai: change
        })
      }
    } 
  },
  // 模态框部分函数
  preventTouchMove: function () {

  },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  goshaodai:function(e){
     var order_id=e.currentTarget.dataset.index;
     wx.navigateTo({
       url: '../myshaodai/myshaodai?order_id='+order_id,
     })
  },
  // 搜索
  inputSearch: function (e) {
    this.setData({
      searchWords: e.detail.value
    });
  },
  doSearch: function () {
    console.log("xxx")
  },
  //后台交互
  getuserslist:function(){
    var that = this;
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/order/piggybackingOrder/piggybacking/list',//请求地址路径
      // data: { selected_place: JSON.stringify(that.data.selected_place) },//请求参数
      method: "get",//请求方式
      header: {//请求头
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        console.log("捎带列表")
        if (res) {
          that.setData({
            counterlist: res.data.data
          })
        } else {
          console.log("错误")
        }
      }
    })
  }
})
