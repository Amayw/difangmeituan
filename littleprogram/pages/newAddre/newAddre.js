
Page({
  data:{
    name:"请填写您的姓名",
    tel:"请填写您的联系方式",
    door:"请填写您的捎带地址",
    address_id:'',
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加地址'
    })
    if (options.addressid) {
      this.setData({
        address_id: options.addressid
      })
    }
  },
  //修改信息
  changename: function (e) {
    var that = this;
    that.setData({
      name: e.detail.value
    })
  },
  changetel: function (e) {
    var that = this;
    that.setData({
      tel: e.detail.value
    })
  },
  changedoor: function (e) {
    var that = this;
    that.setData({
      door: e.detail.value
    })
  },

  formSubmit: function(e) {
    var warn ="";
    var that = this;
    var flag = false;
    if(e.detail.value.name==""){
      warn = "请填写您的姓名！";
    }else if(e.detail.value.tel==""){
      warn = "请填写您的手机号！";
    }else if(!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))){
      warn = "手机号格式不正确";
    }else if(e.detail.value.door==""){
      warn = "请输入您的具体地址";
    }else{
      flag=true;
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        new_address: {
          address_id: that.data.address_id,
          user_name: that.data.name,
          user_phone: that.data.tel,
          address_name: that.data.door,
        }
      })
      wx.navigateBack({//返回
        delta: 1
      })
    }
    if(flag==false){
      wx.showModal({
      title: '提示',
      content:warn
    })
    }
    
  },
  
  })