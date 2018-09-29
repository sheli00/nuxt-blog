import http from './http'
/**  -----  article  ----- **/
export const getArticleList = (data) => http("/article/list", data, "GET");                              // 列表
export const getArticleDetail = (data) => http(`/articleDetail/${data.id}`);                             // 详情
export const addArticle = (data) => http("/article/add", data, "POST");                                  // 新增
export const delArticle = (data) => http(`/article/delete/${data.id}`,{}, "DELETE");                     // 删除
export const updateArticle = (data) => http("/article/update", data, "PUT");                             // 更新


/**  -----  mood  ----- **/
export const moodList = (data) => http("/mood/list");                                                    // 列表
export const addMood = (data) => http("/mood/add", data, "POST");                                        // 新增
export const delMood = (data) => http(`/mood/delete/${data.id}`,{}, "DELETE");                           // 删除


/**  -----  menu  ----- **/
export const menuList = (data) => http("/menu/list");                                                    // 列表
export const addMenu = (data) => http("/menu/add", data, "POST");                                        // 新增
export const delMenu = (data) => http(`/menu/delete/${data.id}`,{}, "DELETE");                           // 删除
export const disabledMenu = (data) => http(`/menu/disabled/${data.id}`,data , "DELETE");                 // 禁用启用

/**  -----  about  ----- **/
export const aboutInfo = () => http("/about");                                                           // 关于