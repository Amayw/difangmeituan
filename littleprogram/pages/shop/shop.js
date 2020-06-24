var app = getApp();
// var server = require('../../utils/server');
Page({
	data: {
    counter_id:"5",
    product_id:"",
    counter:{
        counter_id: 1,
        counter_name:"陕西美食",
        counter_desc:"纯正地道陕西风味欢迎您的光临，给您家的的味道！",
        counter_icon: "../../img/x3.jpg",
        canteen_name:"南餐",
        counter_num: "17号"
    },
    product:{
      product_id: 55,
      product_name: "青菜",
      product_price: "5",
      product_icon: "../../img/1.jpg",
      product_desc: "大青菜爆炒辣椒，口感偏辣",
      canteen_name: "云餐",
      counter_name: "5号",
      category_type:"1",
      product_sales: 1020,
      product_quantity: 0,
    },
    goods: [
      {
        product_id: 7,
        product_name: "煮馍",
        product_price: "5",
        product_icon: "../../img/y6.jpg",
        product_desc: "原料是丸子、发好的面皮、细皮白肉片,加之用上好的肉骨、鸡鸭肉调好的白汁汤",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 567,
      },
      {
        product_id: 2,
        product_name: "青菜",
        product_price: "5",
        product_icon: "../../img/y1.jpg",
        product_desc: "大青菜爆炒辣椒，口感偏辣",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 101,
      },
      {
        product_id: 3,
        product_name: "麻辣鱼",
        product_price: "5",
        product_icon: "../../img/y2.jpg",
        product_desc: "东北一带的传统名菜。主要材料有黑鱼、胡萝卜、西芹等，辅料有姜、大蒜、大葱、干辣椒等",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 59,
      },
      {
        product_id: 4,
        product_name: "肉夹馍",
        product_price: "8",
        product_icon: "../../img/y3.jpg",
        product_desc: "主要选用五花猪肉、面粉、高汤等原料加入各种香料和调味料加工而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 3520,
      },
      {
        product_id: 5,
        product_name: "凉拌饸络",
        product_price: "5",
        product_icon: "../../img/y4.jpg",
        product_desc: "酸辣爽口，由面、西红柿、鸡蛋、黄瓜丝、鹌鹑蛋、芝麻、辣椒油制作而成",
        counter_name: "5号",
        product_sales: 108,
      },
      {
        product_id: 6,
        product_name: "米线",
        product_price: "5",
        product_icon: "../../img/y5.jpg",
        product_desc: "精华汤底秘方，佐以精质配料，汤清味浓、油而不腻、鲜香可口、味道鲜美",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 1150,
      },

      {
        product_id: 8,
        product_name: "菜卷",
        product_price: "5",
        product_icon: "../../img/y7.jpg",
        product_desc: "小麦面粉、鸡蛋、韭菜、粉条、虾皮等制作而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 310,
      },
      {
        product_id: 9,
        product_name: "油泼面",
        product_price: "5",
        product_icon: "../../img/y8.jpg",
        product_desc: "将手工制作的面条在开水中煮熟后捞在碗里，将葱花碎、花椒粉、盐等配料和厚厚一层的辣椒面一起平铺在面上，用烧的滚烫的菜油浇在调料上制作而成",
        canteen_name: "云餐",
        counter_name: "5号",
        product_sales: 2800,
      }
		],
    // relatedList:[
    //   {
    //     product_id: 8,
    //     product_name: "茄子盖饭",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 9,
    //     product_name: "宫保鸡丁",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 10,
    //     product_name: "豆腐脑",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 11,
    //     product_name: "手抓饼",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 12,
    //     product_name: "西红柿鸡蛋面",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 13,
    //     product_name: "麻辣烫",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 14,
    //     product_name: "香锅",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    //   {
    //     product_id: 15,
    //     product_name: "烤冷面",
    //     product_price: "5",
    //     product_icon: "../../img/1.jpg",
    //     product_desc: "大青菜爆炒辣椒，口感偏辣",
    //     canteen_name: "云餐",
    //     counter_name: "5号",
    //     product_sales: 1020,
    //   },
    // ],
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
      this.getshop1()
    }else{
      var id = e.counter_id;
      console.log("窗口");
      console.log(e.counter)
      this.setData({
        counter_id: id,
    
      })
      this.getshop()
    }
    

    
	},
	onShow: function () {
		
	},
  tapAddCart: function (e) {
    var id = e.target.dataset.id || e.currentTarget.dataset.id;
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
  clearcart:function(){
    var change1 = "cart.count";
    var change2 = "cart.total";
    var change3 = "cart.list";
    console.log("xixixi")
    this.setData({
      [change1]:"",
      [change2]:"",
      [change3]:[],
    });
    this.hideCartDetail();
  },
  goOrder: function(e){
    var model = JSON.stringify(this.data.cart);
    wx.navigateTo({
      url: '/pages/order/order?cart='+model+'&counter_id='+this.data.counter_id
    })
  },
  // 交互请求
   getshop:function(){
     var that=this;
     wx.request({
       url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/product/canteenCounter/recommendDetail',//请求地址路径
       data: {
         counterId: that.data.counter_id,
        //  product_id: JSON.stringify(that.data.product_id),
       },//请求参数
       method: "get",//请求方式
       header: {//请求头
         "content-type": "application/json"
       },
       success(res) {
         console.log(res.data)
         console.log("购物车页面")
         if (res) {
           that.setData({
             goods: res.data.data.product
           })
         } else {
           console.log("错误")
         }
       }
     })
   },
   getshop1:function(){
     var that=this;
     wx.request({
       url: 'http://npusmartcanteen.nat300.top/npusmartcanteen/user/product/canteenCounter/recommendDetail',//请求地址路径
       data: {
         counterId: that.data.counter_id,
        //  product_id: JSON.stringify(that.data.product_id),
       },//请求参数
       method: "get",//请求方式
       header: {//请求头
         "content-type": "application/json"
       },
       success(res) {
         console.log(res.data)
         console.log("购物车页面")
         if (res) {
           that.setData({
             goods: res.data.data.product
           })
         } else {
           console.log("错误")
         }
       }
     })
   },
});

