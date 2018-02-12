import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 6000;
axios.defaults.baseURL = 'https://easy-mock.com/mock/5a7d71c873b68c30b158c64a/api';

// 响应前 post参数序列化
axios.interceptors.request.use(req=>{
    //显示loading
    window.$vue.$showLoading();
    if (req.method == 'post') {
        req.data = qs.stringify(req.data);
    }
    return req;
});
// 响应时
axios.interceptors.response.use(res=>{
    //隐藏loading
    window.$vue.$hideLoading();
    return res;
});

const _axios = (url, method, params)=>{
    const config = {
        method: method,
        url: url,
        timeout: 30000
    }
    config[method === 'get' ? 'params' : 'data'] = params;
    return new Promise((resolve, reject)=>{
        axios(config).then(resp=>{
            window.$vue.$hideLoading();
            if (resp.data.returnFlag == '200' || resp.data.returnFlag == '60000' || resp.data.returnFlag == undefined){
                resolve(resp.data);
            } else {
                if (resp.data.returnFlag === '50001' || resp.data.returnFlag === '50008'){
                    alert(resp.data.returnMsg);
                    return
                }
                reject(resp.data);
            }
        }).catch(err=>{
            window.$vue.$hideLoading();
            reject(err);
        })
    })
}

export default {
    get: (url, data)=>{
        return _axios(url, 'get', data);
    },
    post: (url, data)=>{
        return _axios(url, 'post', data);
    }
};
