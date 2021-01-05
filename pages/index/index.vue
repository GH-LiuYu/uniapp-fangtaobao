<template>
	<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback">
	<view>
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->
		
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-section">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c7.png"></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c8.png"></image>
				<text>速食生鲜</text>
			</view>
		</view>
		
		<view class="ad-1">
			<image src="/static/temp/ad1.jpg" mode="scaleToFill"></image>
		</view>
		
		<!-- 秒杀楼层 -->
		<view class="seckill-section m-t">
			<view class="s-header">
				<image class="s-img" src="/static/temp/secskill-img.jpg" mode="widthFix"></image>
				<text class="tip">8点场</text>
				<text class="hour timer">07</text>
				<text class="minute timer">13</text>
				<text class="second timer">55</text>
				<text class="yticon icon-you"></text>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 团购楼层 -->
		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">精品团购</text>
				<text class="tit2">Boutique Group Buying</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="group-section">
			<swiper class="g-swiper" :duration="500">
				<swiper-item
					class="g-swiper-item"
					v-for="(item, index) in goodsList" :key="index"
					v-if="index%2 === 0"
					@click="navToDetailPage(item)"
				>
					<view class="g-item left">
						<image :src="item.image" mode="aspectFill"></image>
						<view class="t-box">
							<text class="title clamp">{{item.title}}</text>
							<view class="price-box">
								<text class="price">￥{{item.price}}</text> 
								<text class="m-price">￥188</text> 
							</view>
							
							<view class="pro-box">
							  	<view class="progress-box">
							  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
							  	</view>
								<text>6人成团</text>
							</view>
						</view>
						            
					</view>
					<view class="g-item right">
						<image :src="goodsList[index+1].image" mode="aspectFill"></image>
						<view class="t-box">
							<text class="title clamp">{{goodsList[index+1].title}}</text>
							<view class="price-box">
								<text class="price">￥{{goodsList[index+1].price}}</text> 
								<text class="m-price">￥188</text> 
							</view>
							<view class="pro-box">
							  	<view class="progress-box">
							  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
							  	</view>
								<text>10人成团</text>
							</view>
						</view>
					</view>
				</swiper-item>

			</swiper>
		</view>
		
		
		
		<!-- 分类推荐楼层 -->
		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">分类精选</text>
				<text class="tit2">Competitive Products For You</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409398864&di=4a12763adccf229133fb85193b7cc08f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F19%2F20170319150032_MNwmn.jpeg" mode="scaleToFill"></image>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409984228&di=dee176242038c2d545b7690b303d65ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5ef4da9f17faaf4612f0d5046f4161e556e9bbcfdb5b-rHjf00_fw658" mode="scaleToFill"></image>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image3" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="hot-floor">
			<view class="floor-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg" mode="scaleToFill"></image>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in goodsList" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.image2" mode="aspectFill"></image>
						<text class="title clamp">{{item.title}}</text>
						<text class="price">￥{{item.price}}</text>
					</view>
					<view class="more">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 猜你喜欢 -->
		<view class="f-header m-t">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">猜你喜欢</text>
				<text class="tit2">Guess You Like It</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		
		<view class="guess-section">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">￥{{item.price}}</text>
			</view>
		</view>
	</view>
	
			<!-- <view class="notice-warp">
				<view class="notice">商品的名称价格销量随时会变动,也可能会下架删除</view>
				<view class="notice">所以本Demo的下拉刷新会重置列表数据</view>
				<view class="btn-change" @click="isGoodsEdit=true">{{isGoodsEdit ? "已模拟后台修改信息, 请下拉刷新" : "点击模拟后台修改商品信息"}}</view>
			</view>
			<good-list :list="goods"></good-list> -->
		</mescroll-body>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: []
			};
		},

		onLoad() {
			this.loadData();//初步进入时调用加载数据，相当于vue的mounted
		},
		methods: {
			
			/*mescroll组件初始化的回调,可获取到mescroll对象 (此处可删,mixins已默认)*/
							mescrollInit(mescroll) {
								this.mescroll = mescroll;
							},
							/*下拉刷新的回调, 有3种处理方式:*/
							downCallback(){
								console.log(343)
								// 绝大部分情况methods中都不用写downCallback的,此时会默认调MescrollMixin的downCallback (效果同第2种)
								
								// 第1种: 请求具体接口
								// uni.request({
								// 	url: 'xxxx',
								// 	success: () => {
								// 		// 请求成功,隐藏加载状态
								// 		this.mescroll.endSuccess()
								// 	},
								// 	fail: () => {
								// 		// 请求失败,隐藏加载状态
								// 		this.mescroll.endErr()
								// 	}
								// })
								// // 第2种: 下拉刷新和上拉加载调同样的接口, 则不用第1种, 直接mescroll.resetUpScroll()即可
								this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
								// // 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
								// this.mescroll.endSuccess()
								
								// 此处仍可以继续写其他接口请求...
								// 调用其他方法...
							},
							/*上拉加载的回调*/
							upCallback(page) {
								// let pageNum = page.num; // 页码, 默认从1开始
								// let pageSize = page.size; // 页长, 默认每页10条
								// uni.request({
								// 	url: 'xxxx?pageNum='+pageNum+'&pageSize='+pageSize,
								// 	success: (data) => {
								// 		// 接口返回的当前页数据列表 (数组)
								// 		let curPageData = data.xxx; 
								// 		// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
								// 		let curPageLen = curPageData.length; 
								// 		// 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
								// 		let totalPage = data.xxx; 
								// 		// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
								// 		let totalSize = data.xxx; 
								// 		// 接口返回的是否有下一页 (true/false)
								// 		let hasNext = data.xxx; 
										
								// 		//设置列表数据
								// 		if(page.num == 1) this.dataList = []; //如果是第一页需手动置空列表
								// 		this.dataList = this.dataList.concat(curPageData); //追加新数据
										
								// 		// 请求成功,隐藏加载状态
								// 		//方法一(推荐): 后台接口有返回列表的总页数 totalPage
								// 		this.mescroll.endByPage(curPageLen, totalPage); 
										
								// 		//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
								// 		//this.mescroll.endBySize(curPageLen, totalSize); 
										
								// 		//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
								// 		//this.mescroll.endSuccess(curPageLen, hasNext); 
										
								// 		//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.
								// 		//如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据
								// 		//如果传了hasNext,则翻到第二页即可显示无更多数据.
								// 		//this.mescroll.endSuccess(curPageLen);
										
								// 		// 如果数据较复杂,可等到渲染完成之后再隐藏下拉加载状态: 如
								// 		// 建议使用setTimeout,因为this.$nextTick某些情况某些机型不触发
								// 		setTimeout(()=>{
								// 			this.mescroll.endSuccess(curPageLen)
								// 		},20)
										
								// 		// 上拉加载的 curPageLen 必传, 否则会一直显示'加载中...':
								// 		// 1. 使配置的noMoreSize 和 empty生效
								// 		// 2. 判断是否有下一页的首要依据: 
								// 		//    当传的值小于page.size时(说明不满页了),则一定会认为无更多数据;
								// 		//    比传入的totalPage, totalSize, hasNext具有更高的判断优先级;
								// 		// 3. 当传的值等于page.size时(满页),才取totalPage, totalSize, hasNext判断是否有下一页
								// 		// 传totalPage, totalSize, hasNext目的是避免方法四描述的小问题
										
								// 		// 提示: 您无需额外维护页码和判断显示空布局,mescroll已自动处理好.
								// 		// 当您发现结果和预期不一样时, 建议再认真检查以上参数是否传正确
								// 	},
								// 	fail: () => {
								// 		//  请求失败,隐藏加载状态
								// 		this.mescroll.endErr()
								// 	}
								// })
								
								// 此处仍可以继续写其他接口请求...
								// 调用其他方法...
								
								 this.mescroll.endSuccess()
							},
			
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() { //async 的意思是里面多个请求，不分先后顺序，一起加载，谁先加载完不影响
				// 本地请求
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
				
				//真实网络请求
				await this.$http.post('/api/enterprise/getenterpriselist', {param: {page: '1'}}).then(res => {
						console.log(res.data)
				}).catch(err => {
				
				})
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			this.$api.msg('点击了搜索框');
		},
		// 标题栏input搜索框输入内容实时搜索
		onNavigationBarSearchInputChanged: async function(e) {
			this.$api.msg('搜索框有输入内容');
			console.log(e)
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				// this.$api.msg('点击了扫描');
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
						uni.navigateTo({url: `/pages/public/login`});// 页面点击事件跳转 ，url的值需要斜引号 ``,不能用双引号
				    }
				});
				
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 88upx;
			height: 88upx;
			margin-bottom: 14upx;
			border-radius: 50%;
			opacity: .7;
			box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
		}
	}
	.ad-1{
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;
		image{
			width:100%;
			height: 100%; 
		}
	}
	/* 秒杀专区 */
	.seckill-section{
		padding: 4upx 30upx 24upx;
		background: #fff;
		.s-header{
			display:flex;
			align-items:center;
			height: 92upx;
			line-height: 1;
			.s-img{
				width: 140upx;
				height: 30upx;
			}
			.tip{
				font-size: $font-base;
				color: $font-color-light;
				margin: 0 20upx 0 40upx;
			}
			.timer{
				display:inline-block;
				width: 40upx;
				height: 36upx;
				text-align:center;
				line-height: 36upx;
				margin-right: 14upx;
				font-size: $font-sm+2upx;
				color: #fff;
				border-radius: 2px;
				background: rgba(0,0,0,.8);
			}
			.icon-you{
				font-size: $font-lg;
				color: $font-color-light;
				flex: 1;
				text-align: right;
			}
		}
		.floor-list{
			white-space: nowrap;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 150upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 150upx;
				height: 150upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
	}
	
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	/* 团购楼层 */
	.group-section{
		background: #fff;
		.g-swiper{
			height: 650upx;
			padding-bottom: 30upx;
		}
		.g-swiper-item{
			width: 100%;
			padding: 0 30upx;
			display:flex;
		}
		image{
			width: 100%;
			height: 460upx;
			border-radius: 4px;
		}
		.g-item{
			display:flex;
			flex-direction: column;
			overflow:hidden;
		}
		.left{
			flex: 1.2;
			margin-right: 24upx;
			.t-box{
				padding-top: 20upx;
			}
		}
		.right{
			flex: 0.8;
			flex-direction: column-reverse;
			.t-box{
				padding-bottom: 20upx;
			}
		}
		.t-box{
			height: 160upx;
			font-size: $font-base+2upx;
			color: $font-color-dark;
			line-height: 1.6;
		}
		.price{
			color:$uni-color-primary;
		}
		.m-price{
			font-size: $font-sm+2upx;
			text-decoration: line-through;
			color: $font-color-light;
			margin-left: 8upx;
		}
		.pro-box{
			display:flex;
			align-items:center;
			margin-top: 10upx;
			font-size: $font-sm;
			color: $font-base;
			padding-right: 10upx;
		}
		.progress-box{
			flex: 1;
			border-radius: 10px;
			overflow: hidden;
			margin-right: 8upx;
		}
	}
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;
		.floor-img-box{
			width: 100%;
			height:320upx;
			position:relative;
			&:after{
				content: '';
				position:absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(rgba(255,255,255,.06) 30%, #f8f8f8);
			}
		}
		.floor-img{
			width: 100%;
			height: 100%;
		}
		.floor-list{
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-top:-140upx;
			margin-left: 30upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 180upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			image{
				width: 180upx;
				height: 180upx;
				border-radius: 6upx;
			}
			.price{
				color: $uni-color-primary;
			}
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
	}
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
		/*说明*/
		.notice-warp{
			font-size: 26upx;
			padding: 40upx 0;
			border-bottom: 1upx solid #eee;
			text-align: center;
		}
		.notice-warp .notice{
			color:#555;
		}
		.notice-warp .btn-change{
			display: inline-block;
			margin-top: 28upx;
			padding: 6upx 16upx;
			border: 1upx solid #FF6990;
			border-radius: 40upx;
			color: #FF6990;
		}
		.notice-warp .btn-change:active{
			opacity: .5;
		}

</style>
