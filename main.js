import Vue from 'vue'
import store from './store'
import App from './App'
// 在main.js注册全局组件 (mescroll-uni 遵循 easycom 规范, 可自动引入, 而mescroll-body需注册全局组件)
	import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
	Vue.component('mescroll-body', MescrollBody)
import Json from './Json' //测试用数据
/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
import Request from '@/utils/luch-request/index.js' // 下载的插件
// import Request from 'luch-request' // 使用npm

const http = new Request();
// Vue.prototype.$http = http;

http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseURL = 'http://www.annpartybuild.com/'; /* 根域名 */
    config.header = {
        a: 1, // 演示用
        b: 2  // 演示用
    }
    return config
})

Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$http = http;
Vue.prototype.$api = {msg, json, prePage};

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()