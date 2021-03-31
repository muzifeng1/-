import server from '../server/http';


// 请求轮播图数据
const getBanners = async function() {
    var {data} = await server.get('/small4/banner/list')
    return Promise.resolve(data.data);
}

// 请求精选专题数据
const seleds = async function() {
    var {data} = await server.get('/small4/cms/news/list')
    return Promise.resolve(data.data);
}



// 请求全民砍价数据
const Selection = async function() {
    var {data} = await server.get('/small4/shop/goods/kanjia/list')
    return Promise.resolve(data.data);
}


// 请求列表数据
const listList = async function() {
    var {data} = await server.get('/small4/shop/goods/category/all')
    return Promise.resolve(data.data);
}

// 请求列表对应数据数据
const details = async function() {
    var {data} = await server.get('/small4/shop/goods/list')
    return Promise.resolve(data.data);
}

/**
 * 获取砍价详情数据
 * @params id 表示数据的id
 * 
 * */ 
const kjDetail = async function(id) {
    const { data } = await server.post('https://api.it120.cc/small4/shop/goods/detail?id=' + id)
    return Promise.resolve(data.data);
}

// 精选详情
const jxDetail = async function(id) {
    const { data } = await server.post('https://api.it120.cc/small4/cms/news/detail?id=' + id)
    console.log(data);
    return Promise.resolve(data.data);
}
// 人气推荐列表
const siftsList = async function() {
    var {data} = await server.get('/small4/shop/goods/list')
    return Promise.resolve(data.data);
}

// 优惠券数据
const coupons = async function() {
    var {data} = await server.post('/small4/discounts/coupons')
    console.log(data);
    return Promise.resolve(data.data);
}

// 登录
const login = async function(obj) {
    var {data} = await server.get('/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=' + obj.mobile + '&pwd=' + obj.pwd)
    return Promise.resolve(data.data);
}


const evaluate = async function(token) {
    var {data} = await server.post('/small4/order/list?token='+token)
    return Promise.resolve(data.data);
}


export {
    getBanners,
    seleds,
    Selection,
    listList,
    details,
    kjDetail,
    jxDetail,
    siftsList,
    login,
    coupons,
    evaluate
}