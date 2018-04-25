import {
    wxRequest
} from '../utils/wxrequest'; 

const apimall = 'http://192.168.1.251:6688';
// const apimall = 'http://192.168.1.251:8089';
// const apimall = 'http://192.168.1.226:8080/mobile';
// const apimall = 'https://m.51jrq.com/mobile2'; 
const apiGps = 'https://apis.map.qq.com/ws/geocoder/v1';

// 用户登录
const  loginIn = (params) => wxRequest(params, apimall + '/emobile/api/hr/login');

// 获取数据字典数据
const  getDictData = (params) => wxRequest(params, "http://192.168.1.251:8089" + '/mobile/api/dictionary');

// 修改个人信息
const  getPersonalInfo = (params) => wxRequest(params, apimall + '/emobile/api/hr/job');

// 修改个人信息
const  changeInfo = (params) => wxRequest(params, apimall + '/emobile/api/hr/regc');

// 获取职位列表
const  getJobList = (params) => wxRequest(params, apimall + '/emobile/api/hr/joblist');

//获取我的收藏及投递记录 
const  getCollectJob = (params) => wxRequest(params, apimall + '/emobile/api/hr/selruser');

//获取我的收藏及投递记录 
const  collectResume = (params) => wxRequest(params, apimall + '/emobile/api/hr/userjob');

// ====================================================================================================================

//得到首页banner图片列表
const getMobileHomeBanner = (params) => wxRequest(params, apimall + '/api/ad_show/getMobileHomeBanner');

//获取职位
const  getCompanyjob = (params) => wxRequest(params, apimall + '/api/companyjob');

//获取公司列表
const  getCompanyList = (params) => wxRequest(params, apimall + '/api/company');

//查找公司
const  searchCorp = (params) => wxRequest(params, apimall + '/api/imain');

//地址解析
const getCityName = (params) => wxRequest(params, apiGps + `/?address=${params.address}&key=RULBZ-ZPFRX-4XV4F-7NALT-RMEQV-Y3BVT`);

//获取小程序码
const getWxaCode = (params) => wxRequest(params, apimall + '/wx/createwxaqrcode');

//获取个人信息
const getPimg = (params) => wxRequest(params, apimall + '/api/pimg');

//图片转base64
const trBase64 = (params) => wxRequest(params, apimall + '/img/index');

//获取access_token
var getAccessToken = (params) => wxRequest(params, apimall + '/wx/get');



// 获取简历信息
const  getResumeInfo = (params) => wxRequest(params, apimall + '/api/my');

// 个人用户注册获取短信验证码
const  getVerifyCode = (params) => wxRequest(params, apimall + '/api/regphone');

// 修改头像
const  changeHeadImg = (params) => wxRequest(params, apimall + '/api/pimg');

// 导入简历
const  importResume = (params) => wxRequest(params, apimall + '/api/importResume');

// 找回密码
const  resetPassword = (params) => wxRequest(params, apimall + '/api/password_old');

// 简历投递流程
const  getProcessView = (params) => wxRequest(params, apimall + '/api/ai/deliveryprocess');

module.exports = {
    loginIn,
    getDictData,
    getPersonalInfo,
    changeInfo,
    getJobList,
    getCollectJob,
    collectResume,
    // ================================
    apimall,
    getMobileHomeBanner,
    getCompanyjob,
    searchCorp,
    getCompanyList,
    getCityName,
    getWxaCode,
    getPimg,
    trBase64,
    getAccessToken,
    getResumeInfo,
    getVerifyCode,
    importResume,
    changeHeadImg,
    resetPassword,
    getProcessView
}
  