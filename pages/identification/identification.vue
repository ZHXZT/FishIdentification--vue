<template>
	<view class="D">
		
		<view class="I_background">
			
			
			<view class="I_img1">
				<image class="img1" v-bind:src="img1"></image>
			</view>
			
			<view class="faildiv" v-show="flag"><icon class="iconfont iconshiwang"></icon>识别失败！</view>
			
			<view class="detail" v-show="!flag">
				<view class="I_img2"><image class="img2" v-bind:src="img2"></image></view>
				<view class="information">
					<view class="detailed_information1" v-text="name"></view>
					<view class="detailed_information2" v-text="information1"></view>
					<view class="detailed_information3" v-text="information2"></view>
					<view class="detailed_information4" v-text="information3" @click="gotodetail"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// fail_style: {
				// 	display:'inline-block',
				// 	},
				// success_style: {
				//     display:'none',
				// 	},
				flag:true,
				name:"",//科
				img1:"",//返回的照片
				img2:"",//科的图片
				information1:'',//门
				information2:'',//纲
				information3:'点击查看详情',
				
				information4:'',//门
				information5:'',//形态特征
				information6:'',//栖息地
				information7:'',//目
				
			}
		},
		onLoad:function() {
			
			var json = require("./data.js")
			// console.log(json)
			const eventChannel = this.getOpenerEventChannel()
			const that = this
			eventChannel.on('acceptDataFromOpenerPage', function (data) {
			var tmp = []
			console.log(data.kes,'ke')
			// console.log(json.data[15].code,'ke2')
			for (let index = 0; index < json.data.length; index++) {
			    if (json.data[index].code == data.kes) {
					that.flag= false
			        var fish_img_src1 = json.data[index].img
			        var fish_name =json.data[index].name
					var msg1 = json.data[index].info1
					var msg2 = json.data[index].info2
					var msg3 = json.data[index].info3
					var msg4 = json.data[index].info4
					var msg5 = json.data[index].info5
					var msg6 = json.data[index].info6
					}
					}
					that.name = fish_name
					that.img2 = fish_img_src1
					that.img1 = data.img
					that.information1 = msg4
					that.information2 = msg5
					that.information4 = msg1
					that.information5 = msg2
					that.information6 = msg3
					that.information7 = msg6
					
					
					
					
					// that.setData({
					// 	img1: fish_img_src1,
					// 	img2:data.img,
					// 	name: fish_name,
					// 	information1: msg4,
					// 	information2: msg5,
					// 	information3: msg6,
					// 	})
					
			            // for (let index = 0; index < json.data.length; index++) {
			            // const element = json.data[index];
			            // if (data.kes && data.kes.includes(element.code.toLocaleLowerCase())) {
			            // tmp.push(element)
			            // }
			            // }
				
				})
				
		},
		methods: {
			
			gotodetail () {
				const that = this
				uni.navigateTo({
					// url:'../detail/detail',
					url:'../detail/detail',
					success: function (res) {
					// console.log(res.data,'asd')
					// 通过eventChannel向被打开页面传送数据
					res.eventChannel.emit('acceptDataFromOpenerPage', {
						name:that.name,
						image: that.img2,
						inf1:that.information1,
						inf2:that.information2,
						inf3:that.information4,
						inf4:that.information5,
						inf5:that.information6,
						inf6:that.information7,
					})
					}
				})
			},
			
		}
	}
</script>

<style>
	@font-face {
	  font-family: "iconfont"; /* Project id 2522530 */
	  src: url('//at.alicdn.com/t/font_2522530_h0kg47w0ivg.woff2?t=1620873247456') format('woff2'),
	       url('//at.alicdn.com/t/font_2522530_h0kg47w0ivg.woff?t=1620873247456') format('woff'),
	       url('//at.alicdn.com/t/font_2522530_h0kg47w0ivg.ttf?t=1620873247456') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 32px;
	  margin-right: 2%;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconshiwang:before {
	  content: "\e711";
	}
	

	.D {
	    width: 100vw;
	    height: 100vh;
	    position: absolute;
	    background-size: 100% 100%;
	    overflow: hidden;
	}
	.I_background{
	    background-color: rgba(255,255,255,1);
	    border-radius: 15px;
	    height: 90vh;
	    width: 90vw;
	    margin-left: 5vw;
	    margin-top: 4vh;
	    -webkit-box-shadow: #666 0px 0px 20px;
	    -moz-box-shadow: #666 0px 0px 20px;
	    box-shadow: #666 0px 0px 20px;
	    /* margin-left: 50px; */
	
	}
	.I_back{
	    margin-top: 1vh;
	    width: 100vw;
	    height: 8vh;
	    position: absolute;
	}
	.I_img1 {
	    width: 90vw;
	    height: 50vh;
	
	}
	.img1 {
	    margin-left: 7vw;
		border-radius: 10px;
	    width: 76vw;
		/* height: 30vh; */
	    margin-top: 5vh;
	
	}

	.faildiv {
	    width: 74vw;
	    margin-left: 8vw;
	    margin-top: 8vh;
	    height: 26vh;
	    border-radius: 10px;
	    background-color: rgba(255,255,255,0.6);
	    -webkit-box-shadow: #666 0px 0px 20px;
	    -moz-box-shadow: #666 0px 0px 20px;
	    box-shadow: #666 0px 0px 20px;
	    font-size: 30px;
	    text-align: center;
	    color: red;
	    line-height: 26vh;
	
	}
	.detail {
	    width: 74vw;
	    margin-left: 8vw;
	    margin-top: 8vh;
	    height: 26vh;
	    border-radius: 10px;
	    background-color: rgba(255,255,255,0.4);
	    -webkit-box-shadow: #666 0px 0px 10px;
	    -moz-box-shadow: #666 0px 0px 10px;
	    box-shadow: #666 0px 0px 10px;
	    
	}
	.I_img2 {
	    display: inline;
	    width: 37vw;
	    height: 26vh;
	    float: left;
	}
	.img2 {
		border-radius:5px;
	    width: 35vw;
		height: 20vh;
	    margin-top: 3vh;
	    margin-left: 3vw;
	}
	.information {
	    width: 37vw;
	    height: 26vh;
	    float: right;
	    color: #000;
	}
	.I_backbtn{
	    outline: none;
	    font-size: 15px;
	    width: 20vw;
	    height: 8vh;
	    color: #fff;
	    text-align: left;
	    border:0;
	    /* cursor:pointer; */
	    background-color: Transparent;
	}
	.detailed_information1 {
	    margin-top: 3vh;
	    padding: 1%;
	    font-size: 22px;
	    text-align: center;
	}
	.detailed_information2 {
	    padding: 1%;
	    font-size:16px;
	    text-align: center;
	}
	.detailed_information3 {
	    padding: 1%;
	    font-size:14px;
	    text-align: center;
	}
	.detailed_information4 {
	    padding: 1%;
	    margin-top: 3vh;
	    font-size: 10px;
	    text-align: center;
		color: #007AFF;
	}
	
</style>
