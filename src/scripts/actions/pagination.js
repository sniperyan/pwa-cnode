import * as types from '../constants/ActionTypes';
//设置当前页
export function setCurrPage(data) {
  return {
    type: types.SET_CURRENTPAGE,
    data,
  };
}
//设置scroll的位置
export function setScrollPos(data) {
  return {
    type: types.SET_SCROLL_POSITION,
    data,
  };
}






