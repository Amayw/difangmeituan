
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 选择用餐方式
    selected1: true,
    selected2: false,
    //取餐窗口
    canteen_name: '南餐',
    counter_name: '6号窗口地锅鸡',
    // 取饭时间
    timeindex1: 0,
    timelist1: ['大约12：00送到', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10'],
    //预留电话
    user_phone:12345678, 
    // 捎带地址列表
    addresslist:[
      {
        address_id: "1",
        address_name: "云A567",
        address_show: false,
        user_name:"王二",
        user_phone:"18722456759",
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
        address_show:false,
        user_name: "王二",
        user_phone: "18722456759",
      }, 
      {
        address_id: "4",
        address_name: "云A567",
        address_show: false,
        user_name:"王二",
        user_phone:"18722456759",
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
        address_show:false,
        user_name: "王二",
        user_phone: "18722456759",
      }, 
      {
        address_id: "7",
        address_name: "云A567",
        address_show: false,
        user_name:"王二",
        user_phone:"18722456759",
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
        address_show:false,
        user_name: "王二",
        user_phone: "18722456759",
      }, 
    ],
    //捎带时间
    timeindex2: 0,
    timelist2: ['大约12:00去取', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10'],
    // 捎带金额
    piggyback_tip:'3',
    cart:'',
    delete_address_id:''
  },
  //选择送餐方式
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
  //修改自取时间
  changetimeindex1: function (e) {
    console.log(e.detail.value)
    this.setData({
      timeindex1: e.detail.value
    })
    
  },
  //修改自取电话
  changuserphone:function(e){
      this.setData({
        user_phone: e.detail.value
      })
  },
  pnoneblur:function(){
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(this.data.user_phone))) {
      wx.showModal({
        title: '提示',
        content: "手机号格式不正确"
      })
    }
  },
  //捎带派送地址
  changeaddress: function (e) {
    this.showModal();
  },
  //修改选中地址
  changeradio: function (e) {
    for(var i=0;i<this.data.addresslist.length;i++){
      // var show1 = "addresslist['+i+'].address_show";
      this.setData({
        // [show1]:false
        [`addresslist[${i}].address_show`]: false
      })
    }

    var index2 = e.target.dataset.address_id
     index2--;
    var show2="addresslist.["+index2+"].address_show"
    this.setData({
      [show2]:true
    })
  },
  //显示对话框
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(600).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //隐藏对话框
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(600).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
  //编辑派送地址
  modifyAddress:function(e){
    var index = e.target.dataset.modifyid - 1
    var model = JSON.stringify(this.data.addresslist[index]);
    wx.navigateTo({
      url: '/pages/modifyAddre/modifyAddre?list=' + model
    })
    
  },
  newAddress:function(e){
    var index = this.data.addresslist.length;
    console.log(index);
    wx.navigateTo({
      url: '/pages/newAddre/newAddre?addressid=' +index
    })
    
  },
  //修改自取时间
  changetimeindex2: function (e) {
    console.log(e.detail.value)
    this.setData({
      timeindex2: e.detail.value
    })

  },
  //派送金额
  changepiggybacktip:function(e){
    var that = this;
    that.setData({
      piggyback_tip: e.detail.value
      
    })
  },
  //支付
  pay:function(){
      var model = JSON.stringify(this.data.addresslist);
      wx.reLaunch({
        url: '/pages/my/my?list=' + model
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.cart){
      var list = JSON.parse(options.cart)
    }
    console.log(list)
    this.setData({
      cart: list,
    });

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
    var that=this;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; //当前页面
    //修改信息
    let modify_address = currPage.data.modify_address;
     
    if (modify_address){
      var username = modify_address.user_name;
      var userphone = modify_address.user_phone;
      var addressname = modify_address.address_name;
      for (var i = 0; i < that.data.addresslist.length; i++) {
        if (i == modify_address.address_id - 1) {
          that.setData({
            [`addresslist[${i}].user_name`]: username,
            [`addresslist[${i}].user_phone`]: userphone,
            [`addresslist[${i}].address_name`]: addressname
          })
          // 后端传
          break
        }
      }
    }
    // 删除信息
    let delete_address_id = currPage.data.delete_address_id-1;
    if (delete_address_id>-1){
      that.data.addresslist.splice(delete_address_id, 1)
      that.setData({
        addresslist: that.data.addresslist
      })
      // 后端传
    }
    // 新建地址
    let new_address = currPage.data.new_address;
    if(new_address){
      that.data.addresslist.push(new_address)
      console.log(new_address)
      console.log(this.data.addresslist)
      that.setData({
        addresslist: that.data.addresslist
      })
      // 后端传
    }
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