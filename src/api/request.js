// 对axios进行二次封装
import axios from "axios";

// 利用axios对象的方法create去创建一个axios实例
// request就是axios，只不过稍微配置一下
const requests=axios.create({
    // 配置对象
    baseURL:" http://gmall-h5-api.atguigu.cn/api",
    // 请求超时的时间是5s
    timeout:5000,
});
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // config：配置对象，对象里有一个属性很重要，headers请求头
    return config;
});

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情
    return res.data;
},(error)=>{
    // 响应失败的回调函数
    return Promise.reject(new error('false'))
});

// 对外暴露
export default requests;