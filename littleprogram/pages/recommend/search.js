var app = getApp();
// var server = require('../../utils/server');
Page({
	data: {
		searchWords: 'helloworld',
    selected_place:[],
    goodslist: [
      // { product_id:1,
      //   product_name:"凉皮",
      //   product_price:"5",
      //   product_sales:1020,
      //   product_icon: "../../img/5.jpg",
      //   product_desc: "新蒸凉皮，味道酸爽",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      // },
      // {
      //   product_id: 7,
      //   product_name: "煮馍",
      //   product_price: "5",
      //   product_icon: "../../img/y6.jpg",
      //   product_desc: "原料是丸子、发好的面皮、细皮白肉片,加之用上好的肉骨、鸡鸭肉调好的白汁汤",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      //   product_sales: 567,
      // },
      // {
      //   product_id: 2,
      //   product_name: "青菜",
      //   product_price: "5",
      //   product_icon: "../../img/y1.jpg",
      //   product_desc: "大青菜爆炒辣椒，口感偏辣",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      //   product_sales: 101,
      // },
      // {
      //   product_id: 3,
      //   product_name: "麻辣鱼",
      //   product_price: "5",
      //   product_icon: "../../img/y2.jpg",
      //   product_desc: "东北一带的传统名菜。主要材料有黑鱼、胡萝卜、西芹等，辅料有姜、大蒜、大葱、干辣椒等",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      //   product_sales: 59,
      // },
      {
        product_id: 1,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/y3.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 2,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/z1.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 3,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/z2.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 4,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/z3.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 5,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/z4.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 6,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/z5.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      // {
      //   product_id: 5,
      //   product_name: "凉拌饸络",
      //   product_price: "5",
      //   product_icon: "../../img/y4.jpg",
      //   product_desc: "酸辣爽口，由面、西红柿、鸡蛋、黄瓜丝、鹌鹑蛋、芝麻、辣椒油制作而成",
      //   counter_name: "5号",
      //   product_sales: 108,
      // },
      // {
      //   product_id: 6,
      //   product_name: "米线",
      //   product_price: "5",
      //   product_icon: "../../img/y5.jpg",
      //   product_desc: "精华汤底秘方，佐以精质配料，汤清味浓、油而不腻、鲜香可口、味道鲜美",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      //   product_sales: 1150,
      // },

      // {
      //   product_id: 8,
      //   product_name: "菜卷",
      //   product_price: "5",
      //   product_icon: "../../img/y7.jpg",
      //   product_desc: "小麦面粉、鸡蛋、韭菜、粉条、虾皮等制作而成",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      //   product_sales: 310,
      // },
      // {
      //   product_id: 9,
      //   product_name: "油泼面",
      //   product_price: "5",
      //   product_icon: "../../img/y8.jpg",
      //   product_desc: "将手工制作的面条在开水中煮熟后捞在碗里，将葱花碎、花椒粉、盐等配料和厚厚一层的辣椒面一起平铺在面上，用烧的滚烫的菜油浇在调料上制作而成",
      //   canteen_name: "云餐",
      //   counter_name: "5号",
      //   product_sales: 2800,
      // }
    ],
	},
	onLoad: function (e) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    var that=this;
    console.log(e)
    var a=new Array();
    a[0]=Number(e.selected_place1);
    a[1] =Number(e.selected_place2);
    a[2] =Number(e.selected_place3);
    that.setData({
      selected_place:a
    })
		// var self = this;
		// wx.getLocation({
		// 	type: 'gcj02',
		// 	success: function (res) {
		// 		var latitude = res.latitude;
		// 		var longitude = res.longitude;
		// 		server.getJSON('/waimai/api/location.php', {
		// 			latitude: latitude,
		// 			longitude: longitude
		// 		}, function (res) {
		// 			console.log(res)
		// 			if (res.data.status != -1) {
		// 				self.setData({
		// 					address: res.data.result.address_component.street_number
		// 				});
		// 			} else {
		// 				self.setData({
		// 					address: '定位失败'
		// 				});
		// 			}
		// 		});
		// 	}
		// })
	},
	onShow: function () {

	},
	inputSearch: function (e) {
		this.setData({
			searchWords: e.detail.value
		});
	},
	doSearch: function() {
    var that=this;
		that.setData({
			showResult: true
		});
    that.search()
	},
  // 交互代码
  search: function () {
    var that = this;
    wx.request({
      url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/product/keyword/list',//请求地址路径
      data: {
         productName: that.data.searchWords,
         selected_place:that.data.selected_place,
          },//请求参数
      method: "get",//请求方式
      header: {//请求头
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
        console.log("搜索")
        if (res) {
          that.setData({
            goodslist: res.data.data.product
          })
        } else {
          console.log("错误")
        }
      }
    })
  },
	// tapFilter: function (e) {
	// 	switch (e.target.dataset.id) {
	// 		case '1':
	// 			this.data.shops.sort(function (a, b) {
	// 				return a.id - b.id;
	// 			});
	// 			break;
	// 		case '2':
	// 			this.data.shops.sort(function (a, b) {
	// 				return b.sales - a.sales;
	// 			});
	// 			break;
	// 		case '3':
	// 			this.data.shops.sort(function (a, b) {
	// 				return a.distance - b.distance;
	// 			});
	// 			break;
	// 	}
	// 	this.setData({
	// 		filterId: e.target.dataset.id,
	// 		shops: this.data.shops
	// 	});
	// }
});

