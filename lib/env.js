/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = '';
let baseImgPath = '';

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://127.0.0.1:5000';
  baseImgPath = 'http://127.0.0.1:5000/upload/';
}else{
  baseUrl = 'https://www.lzzj.online:5001';
  baseImgPath = 'https://www.lzzj.online:5001/upload/';
}

export {
  baseUrl,
  baseImgPath
}
