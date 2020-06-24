function HttpRequst(loading, url, sessionChoose, sessionId, params, method, ask, callBack) {
  if (loading == true) {
    wx.showToast({
      title: '数据加载中',
      icon: 'loading'
    })
  }
  var paramSession = [{},
  {
    'content-type': 'application/json',
    'Cookie': 'JSESSIONID=' + sessionId
  },
  {
    'content-type': 'application/json'
  },
  {
    'content-type': 'application/x-www-form-urlencoded',
    'Cookie': 'JSESSIONID=' + sessionId
  },
  {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    'Cookie': 'JSESSIONID=' + sessionId
  }
  ]
  wx.request({
    url: baseUrl + url,
    data: params,
    dataType: "json",
    header: paramSession[sessionChoose],
    method: method,
    success: function (res) {
      console.log(res);
      console.log(res.data.statusCode);
      if (loading == true) {
        wx.hideToast();
      }
      if (res.data.needLogin == true) {
        wxLogin2(loading, callBack);//在此做自己的wx.login
      }
      if (res.data.needLogin != true) {
        callBack(res.data);
      }
    },
    complete: function () {
      if (loading == true) {
        wx.hideToast();
      }
    }
  })
}
 