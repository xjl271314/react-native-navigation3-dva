import Axios from 'axios'
import apiConfig from '../config/apiConfig'

Axios.defaults.headers.common['token'] = '139daa7d063983748e8a0c664e82ce74'
Axios.defaults.headers.common['deviceToken'] = 'abc'
Axios.defaults.headers.common['deviceType'] = '1'

// 是否模拟数据
const BaseUrl = apiConfig.mock ? apiConfig.devUrl : apiConfig.rootUrl

function get(config) {
    let { ...params } = config.data

    if (config.url.indexOf('/api/') == -1) {
        config.url = BaseUrl + apiConfig.version + apiConfig.prefix + config.url
    }

    return Axios.get(config.url, {
        params
    }).then(result => {
        return result.data
    }, err => {
        if (!err || !err.response) {
            return {
                code: 9999,
                message: '网络异常，请检查当前网络环境'
            }
        } else {
            return {
                code: err.response.status,
                message: '服务异常，请稍后再试'
            }
        }
    })
}


function post(config) {
    let { ...params } = config.data

    if (config.url.indexOf('/api/') == -1) {
        config.url = BaseUrl + apiConfig.version + apiConfig.prefix + config.url
    }
    
    return Axios.post(config.url, params).then(result => {
        return result.data
    }, err => {
        if (!err || !err.response) {
            return {
                code: 9999,
                message: '网络异常，请检查当前网络环境'
            }
        } else {
            return {
                code: err.response.status,
                message: '服务异常，请稍后再试'
            }
        }
    })
}

/**
* 自定义图片上传方法 upload
* 采用js原生图片上传 formData
*/

function uploadImage(config) {
    let imgType = params.picUri.split(".")[1];
    let headerConfig = {
        headers: {
            'Content-Type': `multipart/form-data`,
            'Accept': '*/*'
        }
    }

    let formData = new FormData()

    let file = {
        uri: params.picUri,
        type: imgType == 'png' ? 'image/png' : 'image/jpeg',
        name: `${params.picName}.${imgType}`
    };

    formData.append('file', file)

    if (params.channel) {
        formData.append('channel', params.channel)
    }

    return Axios.post(config.url, formData, headerConfig).then(result => {
        return result.data
    })
}

export default {
    get, post, uploadImage
}