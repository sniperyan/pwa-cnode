import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';
/**
 * 登录部分
 */
export class Login extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    const {loginClick} = this.props;
    var accesstoken = this.refs.accesstoken.value;
    if (!accesstoken) {
      return alert('accesstoken不能为空');
    }
    loginClick(accesstoken);
    return null;
  }
  render() {
    const {btnName} = this.props;
    return (
      <div className="signin">
        <div className="center">
          <div className="text"><input ref="accesstoken" 
            type="text" placeholder="Access Token" /></div>
          <button className="btn" 
            onClick={(e) => this.handleClick(e)}>{btnName}</button>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  btnName: PropTypes.string.isRequired,  //按钮名称
  loginClick: PropTypes.func.isRequired,  //登录回调事件
};