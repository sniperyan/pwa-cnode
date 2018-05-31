import * as types from '../../constants/ActionTypes';
import initialState from './initialState';

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_INDEXLIST:
      return Object.assign({}, state, {
        indexList: [
          ...state.indexList,
          ...action.data,
        ],
      });
    case types.CLEAR_INDEXLIST:
      return Object.assign({}, state, {
        indexList: [],
      });
    default:
      return state;
  }
}