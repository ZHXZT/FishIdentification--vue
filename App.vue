<script>
	export default {
		
		globalData: {
				//自己的服务器网址
				ipw: "wss://adl.seafishery.com/api/socket/web-socket", 
				limit: 0,
				timeout: 10000,
				timeoutObj: null,
				serverTimeoutObj: null,
				callback: function () {},
			},
		
		
		onLaunch: function() {
			console.log('App Launch')
			this.linkSocket()
		},
		onShow: function() {
		},
		onHide: function() {
		},
		methods:{
			
			linkSocket() {
					var that = this
					uni.connectSocket({
						url: that.globalData.ipw,
						// header: {
						// 	Cookie: 'gfsessionid=14r0id6145l910ca8r6oz436nw1003hl;'
						// },
						success(info) {
							console.log(info)
							that.initEventHandle()
						},
						fail(err) {
							console.log(err)
						}
					})
				},
				
				//绑定事件
				initEventHandle() {
					var that = this
					uni.onSocketMessage((res) => {
						if (res.data == "heartbeat") {
							that.reset()
							that.start()
						} else {
							that.globalData.callback(res)
						}
					})
					uni.onSocketOpen(() => {
						console.log('WebSocket连接打开')
						that.reset()
						that.start()
					})
					uni.onSocketError((res) => {
						console.log('WebSocket连接打开失败')
						that.reconnect()
					})
					uni.onSocketClose((res) => {
						console.log('WebSocket 已关闭！')
						that.reconnect()
					})
				},
			
				//重新连接
				reconnect() {
					var that = this;
					if (that.lockReconnect) return;
					that.lockReconnect = true;
					clearTimeout(that.timer)
					if (that.globalData.limit < 5) { //连接10次后不再重新连接
						that.timer = setTimeout(() => {
							that.linkSocket();
							that.lockReconnect = false;
						}, 5000); //每隔5秒连接一次
						that.globalData.limit = that.globalData.limit + 1
					}
				},
			
				//心跳包开始
				reset: function () {
					var that = this;
					clearTimeout(that.globalData.timeoutObj);
					clearTimeout(that.globalData.serverTimeoutObj);
					return that;
				},
			
				start: function () {
					var that = this;
					that.globalData.timeoutObj = setTimeout(() => {
						that.globalData.serverTimeoutObj = setTimeout(() => {
							wx.closeSocket();
						}, that.globalData.timeout);
					}, that.globalData.timeout);
				},
		}
		
		
	}
</script>

<style>
	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	page {
	   background: linear-gradient(-50deg, #ffece9, #73bbff, #a37cff, #eb4e43);
	    background-size: 300% 300%;
	    animation: gradientBG 12s ease infinite;
		padding: 0;
		margin:0;
		width: 100%;
		color: #fff;
		
		/* height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box; */
		}

	/*每个页面公共css */
</style>
