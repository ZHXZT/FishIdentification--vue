<template>
	<view class="background">
		<icon></icon>
		<camera style="height: 82vh;margin-top: -6%;"></camera>
		
		<view class="mainButton">
			<button style="margin-top: 5%; position: relative; left: 2rpx; top: -4rpx" class="button" @click="takePhoto"></button>
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
			takePhoto() {
			        const that = this
			        const ctx = uni.createCameraContext()
			        ctx.takePhoto({
			            quality: 'high',
			            success: res => {
							uni.showLoading({
								title:"识别中"
							})
			                const imgPath = res.tempImagePath
			                const tempImageBase64 = wx.getFileSystemManager().readFileSync(res.tempImagePath, "base64")
			                // that.setData({
			                //     // isShow: true,
			                // })
			                uni.request({
			                    url: 'https://adl.seafishery.com/api/ssd', //仅为示例，非真实的接口地址
			                    method: "POST",
			                    data: {
									'sign':'9',
			                        'img-type': 'jpg',
			                        'img': tempImageBase64
			                    },
			                    success(res) {
			                        const jsonData = res.data
									console.log(res,'后台数据')
									const jsonErrMsg = JSON.parse(res.data["err_message"])
									const jsonfileurl = res.data["flie_url"]
									uni.hideLoading()
			                        wx.navigateTo({
			                            url: '../identification/identification',
			                            success: function (res) {
			                                // 通过eventChannel向被打开页面传送数据
			                                res.eventChannel.emit('acceptDataFromOpenerPage', {
												kes: jsonErrMsg.ke,
												img: jsonfileurl,
			                                })
			                            }
			                        })
			                    }
			                })
			            }
			        })
			    },
		}
	}
</script>

<style>
	page {
		background: linear-gradient( #ffece9, #ffffff, #ffffff, #ffffff) !important;
	}
	@font-face {
	  font-family: "iconfont"; /* Project id 2522530 */
	  src: url('//at.alicdn.com/t/font_2522530_mc6zm3zwjvf.woff2?t=1620869772091') format('woff2'),
	       url('//at.alicdn.com/t/font_2522530_mc6zm3zwjvf.woff?t=1620869772091') format('woff'),
	       url('//at.alicdn.com/t/font_2522530_mc6zm3zwjvf.ttf?t=1620869772091') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 40px;
	  font-style: normal;
	   display: inline-block;
	   line-height: 60px;
	   text-align: center;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconpaizhaocopy-copy:before {
	  content: "\e600";
	}
	


	.mainButton button {
		width: 70px !important;
		  height: 70px;
		  border-radius: 50%;
		  padding: 5px;
		  border: 1px solid #a296e5;
		  background-color: currentColor;
		  background-clip:content-box;
		  
	/* 	width: 100%;
		height: 19vh; */
	}
	.button {
		background: linear-gradient(to right, #a296e5, #95edf8);
		color: #fff;
	/* 	width: 60px;
		height: 60px;
		margin-top: 3vh;
		background:none; */
	}
	.button::after {
	    border: none;
	}
</style>
