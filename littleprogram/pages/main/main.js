// pages/main/main.js qqmap-wx-jssdk.min.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
Page({
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    markers: [{
      id: 0,
      iconPath: "../../images/icon_cur_position.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    var qqmapsdk = new QQMapWX({
      key: 'SEHBZ-DK2HP-76QDF-V66RH-3OO3Z-3KF3U'
    });
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        //console.log(res.latitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }]
        })
        qqmapsdk.reverseGeocoder({ //腾讯的地图的接口 经纬度查位置 //并没有很精确
          location: {
            // latitude: res.latitude,
            // longitude: res.longitude
            latitude: 34.0355462000, 
            longitude: 108.7674486600 
          },
          success: function (addressRes) {
            console.log("哈哈")
            console.log(addressRes);
            console.log(addressRes.result.formatted_addresses.recommend);
            // 可看文档取自己需要信息  这只取了address
            that.setData({
              curCityAddress: addressRes.result.address_reference.street,
            })
          },
          fail: function (res) {
            console.log('fail', res);
          },
        })
      }
    })
  }, 
  // onLoad: function (options) {
  //   var that = this;
  //   wx.getLocation({
  //     type: "wgs84",
  //     success: function (res) {
  //       var latitude = res.latitude;
  //       var longitude = res.longitude;
  //       //console.log(res.latitude);
  //       that.setData({
  //         latitude: res.latitude,
  //         longitude: res.longitude,
  //         markers: [{
  //           latitude: res.latitude,
  //           longitude: res.longitude
  //         }]
  //       })
  //       that.loadCity(latitude, longitude);
  //     }
  //   })
  // }, 
  loadCity: function(l, lo){
    var that = this;
    var qqmapsdk = new QQMapWX({
      key: 'SEHBZ-DK2HP-76QDF-V66RH-3OO3Z-3KF3U'
    });
      console.log(l)
        
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