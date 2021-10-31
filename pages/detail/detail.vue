<template>
	<view class="D">
		<view class="D_background">
		        <view class="D_img">
					<image class="img" v-bind:src="img2"></image>
				</view>
		
		        <view class="D_information1" v-text="name"></view>
		        <view class="D_information2" v-text="information1"></view>
		        <view class="D_font">形态特征</view>
		       <view class="D_information3" v-text="information4"></view>
		        <view class="D_font">地理分布</view>
		        <view class="D_information3" v-text="information5"></view>
		        <view class="D_font">栖所生态</view>
		        <view class="D_information3" v-text="information3"></view>  
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				name:"",//科
				img2:"",//科的图片
				information1:'',//门纲目1.2.6
				// information2:'',//纲
				information3:'',//栖息
				information4:'',//分布
				information5:'',//形态特征
				// information6:'',//目
			}
		},
		
		onLoad :function () {
			const eventChannel = this.getOpenerEventChannel()
			const that = this
			eventChannel.on('acceptDataFromOpenerPage', function (data) {
				that.name = data.name
				that.img2 = data.image
				that.information1 = data.inf1+'·'+data.inf2+'·'+data.inf6
				that.information4 = data.inf4
				that.information5 = data.inf5
				that.information3 = data.inf3
				})
		},
		
		methods: {

		}
	}
</script>

<style>
	.D {
	    width: 100vw;
	    height: 100vh;
	    position: absolute;
	    background-size: 100% 100%;
	    color: black;
	    overflow: scroll;
	}
	.D_background {
	    background-color: rgb(255, 255, 255,1);
	    border-radius: 10px;
	    width: 90vw;
	    margin-left: 5vw;
	    margin-top: 5vh;
	    margin-bottom: 5vh;
	    box-shadow: rgb(87, 87, 87) 0px 0px 20px;
	
	}
	.D_img {
	    padding-top: 5vh;
	    padding-bottom: 5vh;
	    width: 90vw;
	}
	.img {
	    margin-left: 10%;
	    width: 80%;
	/* 	height: 30vh; */
	}
	
	.D_detial {
	   width: 80vw;
	    height: 70vh;
	    border-radius: 10px;
	    background-color: rgba(255,255,255,0.4);
	    -webkit-box-shadow: #666 0px 0px 10px;
	    -moz-box-shadow: #666 0px 0px 10px;
	    box-shadow: #666 0px 0px 10px;
	}
	.D_font {
	    font-size: 20px;
	    font-weight: 800;
	    text-align: center;
	}
	.D_information1 {
	    font-size: 25px;
	    font-weight: 1000;
	    text-align: center;
	
	}
	.D_information2 {
	    font-size: 15px;
	    font-weight: 600;
	    text-align: center;
	    padding-top: 3vh;
	    padding-bottom: 3vh;
	
	}
	.D_information3 {
	    font-size: 15px;
	    padding-left: 3vw;
	    padding-right: 3vw;
	    padding-top: 3vh;
	    padding-bottom: 3vh;
		text-align:justify;
	
	}
</style>
