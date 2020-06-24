var app = getApp();
// var server = require('../../utils/server');
Page({
	data: {
    counter_id:"",
    product_id:"",
    counter:{
        counter_id: 1,
        counter_name:"地锅",
        counter_detail:"主营地锅鸡，地锅虾，地锅排骨等",
        counter_icon: "../../img/0.jpg",
        canteen_name:"云餐",
        counter_num: "5号"
    },
    product:{
      product_id: 55,
      product_name: "青菜",
      product_price: "5",
      product_icon: "../../img/z1.jpg",
      product_desc: "大青菜爆炒辣椒，口感偏辣",
      canteen_name: "云餐",
      counter_name: "5号",
      category_type:"1",
      product_sales: 1020,
      product_quantity: 0,
    },
    goods: [
      {
        product_id: 1,
        product_name: "凉皮",
        product_price: "5",
        product_icon: "../../img/z1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 2,
        product_name: "香辣米线",
        product_price: "8",
        product_icon: "../../img/z2.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 3,
        product_name: "胡萝卜肉丸",
        product_price: "10",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 4,
        product_name: "宫保鸡丁盖饭",
        product_price: "15",
        product_icon: "../../img/z3.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 5,
        product_name: "黄焖鸡",
        product_price: "13",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 6,
        product_name: "米线",
        product_price: "10",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 7,
        product_name: "酸辣粉",
        product_price: "6",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
		],
    relatedList:[
      {
        product_id: 8,
        product_name: "茄子盖饭",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 9,
        product_name: "宫保鸡丁",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 10,
        product_name: "豆腐脑",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 11,
        product_name: "手抓饼",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 12,
        product_name: "西红柿鸡蛋面",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 13,
        product_name: "麻辣烫",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 14,
        product_name: "香锅",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
      {
        product_id: 15,
        product_name: "烤冷面",
        product_price: "5",
        product_icon: "../../img/1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1020,
      },
    ],
    cart: {
      count: 0,
      total: 0,
      list: [
      ]
    },
    filter_id:"",
		showCartDetail: false
	},
	onLoad: function (e) {
    // wx.setNavigationBarTitle({
    //   title: '搜索'
    // })
    console.log(e.filter_id)
    this.setData({
      filter_id: e.filter_id
    })
    if(this.data.filter_id>2){
      var id = e.product_id;
      console.log("菜")
      this.setData({
        product_id: id
      })
    }else{
      var id = e.counter_id;
      console.log("窗口");
      this.setData({
        counter_id: id
      })
    }

    
	},
	onShow: function () {
		
	},
  tapAddCart: function (e) {
    var id = e.target.dataset.id || e.currentTarget.dataset.id;
    console.log(id)
    this.addCart(id);
  },
  tapReduceCart: function (e) {
    var id = e.target.dataset.id || e.currentTarget.dataset.id;
    this.reduceCart(id);
  },
  addCart: function (item) {
    var flag = true;
    for (var i = 0; i < this.data.cart.list.length; i++) {
      if (item.product_id == this.data.cart.list[i].product_id) {
        this.data.cart.list[i].product_quantity ++;
        flag = false;
        break;
      }
    }
    if(flag){
      item.product_quantity=1;
      this.data.cart.list.push(item);
    }  
    this.countCart();
  },
  reduceCart: function (item) {
    var flag = true;
    for (var i = 0; i < this.data.cart.list.length; i++) {
      if (item.product_id == this.data.cart.list[i].product_id) {
        if (this.data.cart.list[i].product_quantity>1){
          this.data.cart.list[i].product_quantity--;
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      item.product_quantity = "";
      this.data.cart.list.pop(item);
    }
    this.countCart();
  },
  countCart: function () {
    var count = 0,
    total = 0;
    // console.log(this.data.cart.list)
    for (var i = 0; i < this.data.cart.list.length; i++) {
      count += this.data.cart.list[i].product_quantity;
      total += this.data.cart.list[i].product_price * this.data.cart.list[i].product_quantity;
    }
    this.data.cart.count = count;
    this.data.cart.total = total;
    this.setData({
      cart: this.data.cart
      
    });
  },
	follow: function () {
		this.setData({
			followed: !this.data.followed
		});
	},
	onGoodsScroll: function (e) {
    console.log(e.detail.scrollTop )
		if (e.detail.scrollTop >100&& !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 100 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}
	},
	showCartDetail: function () {
		this.setData({
			showCartDetail: !this.data.showCartDetail
		});
	},
	hideCartDetail: function () {
		this.setData({
			showCartDetail: false
		});
	},
  goOrder: function(e){
    // console.log(this.data.cart)
    var model = JSON.stringify(this.data.cart);
    wx.navigateTo({
      url: '/pages/order/order?cart='+model
    })
  }
});

