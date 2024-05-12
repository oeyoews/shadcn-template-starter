import axios from 'axios'
import { toast } from 'sonner'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 对应国际化资源文件后缀
axios.defaults.headers['Content-Language'] = 'zh_CN'
// 创建axios实例
const service = axios.create({
	// axios中请求配置有baseURL选项，表示请求URL公共部分
	// baseURL: "https://jsonplaceholder.typicode.com",
	baseURL: "https://react-music-api-coral.vercel.app/api",
	// 超时
	timeout: 3000,
	// withCredentials: true,
	// httpsAgent: 'https://corsproxy.io',
	// httpAgent: 'https://corsproxy.io'
})

// request拦截器
service.interceptors.request.use(config => {
	// get请求映射params参数
	if (config.method === 'get' && config.params) {
		let url = config.url + '?' + tansParams(config.params)
		url = url.slice(0, -1)
		config.params = {}
		config.url = url
	}
	return config
}, error => {
	toast.error(error)
	Promise.reject(error)
})


// 响应拦截器
service.interceptors.response.use(res => {
	// 未设置状态码则默认成功状态
	const code = res.data.code || 200
	// 获取错误信息
	const msg = res.data.msg;
	// 二进制数据则直接返回
	if (res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
		return res.data
	}
	if (code === 401) {
		return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
	} else if (code === 500) {
		// Message({ message: msg, type: 'error' })
		toast.error(msg)
		return Promise.reject(new Error(msg))
	} else if (code === 601) {
		toast.error(msg)
		return Promise.reject('error')
	} else if (code !== 200) {
		toast.error(msg)
		return Promise.reject('error')
	} else {
		return res.data
	}
},
	error => {
		console.error('err' + error)
		let { message } = error
		if (message == "Network Error") {
			message = "后端接口连接异常"
		} else if (message.includes("timeout")) {
			message = "系统接口请求超时"
		} else if (message.includes("Request failed with status code")) {
			message = "系统接口" + message.substr(message.length - 3) + "异常"
		}
		toast.error(message)
		return Promise.reject(error)
	}
)


export default service

/**
* 参数处理
* @param {*} params  参数
*/
function tansParams(params: any) {
	let result = ''
	for (const propName of Object.keys(params)) {
		const value = params[propName];
		var part = encodeURIComponent(propName) + "=";
		if (value !== null && value !== "" && typeof (value) !== "undefined") {
			if (typeof value === 'object') {
				for (const key of Object.keys(value)) {
					if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
						let params = propName + '[' + key + ']';
						var subPart = encodeURIComponent(params) + "=";
						result += subPart + encodeURIComponent(value[key]) + "&";
					}
				}
			} else {
				result += part + encodeURIComponent(value) + "&";
			}
		}
	}
	return result
}

