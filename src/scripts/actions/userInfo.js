import * as types from '../constants/ActionTypes';
import ajax from '../components/ajax';

/**
 * 获取用户信息
 * @param loginname 用户名
 * @returns {Function}
 */
export function getUserInfo(loginname) {
  return function(dispatch, getState) {
    return ajax(dispatch, {
      method: 'get', //请求类型
      url: types.ACTION_PREFIX + '/api/v1/user/' + loginname,
      success: function(ret) {
        dispatch(setUserInfo(ret.data.data));
      }, //请求成功后执行的方法
      error: function(error) {
        alert(error.data.error_msg);
      }, //请求失败后执行的方法
    });
  };
}
export function setUserInfo(data) {
  return {
    type: types.SET_USERINFO,
    data,
  };
}
