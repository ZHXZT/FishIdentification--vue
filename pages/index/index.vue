<template>
	<view class="H_background">
		<view class="H_outer_lable">
			<image class="H_inner_lable" src="../../static/home.png"></image>
		</view>
		<view class="H_message1">南方海洋科学与工程广东实验室</view>
		<view class="H_message2">（湛江湾）</view>
		
		
		<animationView></animationView>
		
		
		<view class="mainButton">
			<button class="button1" @click="gotocamera"><icon class="iconfont iconxiangji1"></icon>拍照识鱼</button>
			<button class="button2" @click="uploadImg">上传图片></button>
		</view>
	</view>
</template>

<script>
	
	export default {

		data() {
			return {
				
			}
		},
		
		onLoad() {
			
		},
		methods: {
			
			gotocamera () {
				uni.navigateTo({
					url:'../camera/camera'
				})
			},
			
			uploadImg: function (e) {
				 var that = this
				 uni.chooseImage({
					 count:1,
					 sourceType: ['album'],
					success(res) {
						
						uni.showLoading({
							title:"识别中"
						})
						
						const tempFilePath=res.tempFilePaths[0]
						const tempImageBase64 = uni.getFileSystemManager().readFileSync(tempFilePath, "base64")
						const tempImagePrefix = tempFilePath.split(".")[1]
						uni.request({
							url:'https://adl.seafishery.com/api/ssd',
							method:"POST",
							data: {
								'sign':'9',
								'img-type':'jpg',
								'img':tempImageBase64
							},
							success(res) {
								const jsonData = res.data
								console.log(res,'后台数据')
								const jsonErrMsg = JSON.parse(res.data["err_message"])
								const jsonfileurl = res.data["flie_url"]
								// console.log(jsonErrMsg,'www')
								// console.log(jsonfileurl,'ss')
								
								uni.hideLoading()
								
								uni.navigateTo({
									url:'../identification/identification',
										success: function (res) {
										// 通过eventChannel向被打开页面传送数据
										res.eventChannel.emit('acceptDataFromOpenerPage', {
										// img: tempFilePath,
										// kes: jsonErrMsg.ke.split(" "),
										kes: jsonErrMsg.ke,
										img: jsonfileurl
										})
										}
								    })
							}
							
						})
					 }
				 })
			}
		
				
			
			},
			}
</script>

<style>
	@font-face {
	  font-family: "iconfont"; /* Project id 2522530 */
	  src: url('//at.alicdn.com/t/font_2522530_ofknlhc5i9n.woff2?t=1620829309727') format('woff2'),
	       url('//at.alicdn.com/t/font_2522530_ofknlhc5i9n.woff?t=1620829309727') format('woff'),
	       url('//at.alicdn.com/t/font_2522530_ofknlhc5i9n.ttf?t=1620829309727') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 21px;
	  margin-right: 4%;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconxiangji1:before {
	  content: "\e612";
	}
	

	
.H_background{
	display: inline;
	width: 100%;
	height: 100%;
	position: absolute;
	background-size: 100% 100%;
	}
	.H_outer_lable {
	  height: 30vh !important;
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 150px;
		text-align: center;
	}
	.H_inner_lable {
		position: absolute;
		left:0;
		right: 0;
		bottom: 0;
		/* top:8%; */
		margin: auto;
		height: 100px;
	  width: 100px;
	    
	}
	.H_message1 {
	    height: 5vh !important;
	    font-size: 15px !important;
	    color: rgb(255, 255, 255);
	    text-align: center;
	    margin-top: 1%;
	    margin-left: 20%;
	    width: 60%;
	    font-weight: bolder;
	}
	.H_message2 {
	    height: 5vh !important;
	    font-size: 14px !important;
	    color: rgb(255, 255, 255);
	    text-align: center;
	    margin-left: 20%;
	    width: 60%;
	    
	}
	.mainButton {
	    position: absolute;
	    top: 76%;
	    transform: translateX(50%);
	}

	.button1 {
		height: 50px;
		
	    width: 50vw;
	    font-size: 5.5vw;
	    font-weight: bold;
	    border-radius: 30px;
	    background: linear-gradient(to right, #afa0ff, #86f1ff);
	    color: rgba(36, 35, 35, 0.966);
		line-height: 50px;
	}
	.button2 {
		font-weight: 550;
		font-size: 4.5vw;
	}
	
	.button1::after {
	    border: none;
	}
	.button2 {
	    background:none;
	    color: #fff;
	}
	
	.button2::after {
	    border: none;
	}
</style>
