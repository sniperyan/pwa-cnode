import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tool} from '../../util/tool';
import {UserHeadImg} from '../common';
import {ReplyBox} from './replyBox';
import PropTypes from 'prop-types';
/**
 * 回复列表
 *
 * @class ReList
 * @extends {Component}
 */
export class ReList extends Component {
  constructor(props) {
    super(props);
  }

    /**
     * 验证回复项目是否点赞
     *
     * @param {Array} arr
     * @returns
     */
    isUp = (arr) => {
      var {User} = this.props;
      var id = User ? User.id : '';
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === id) {return true;}
      }
      return false;
    }

    /**
     * 点赞的处理事件
     * @param id
     * @param index
     * @param loginname
     */
    handleClickZan(id, index, loginname) {
      const {clickZan} = this.props;
      clickZan(id, index, loginname);
    }

    /**
     * 展示回复框
     * @param index
     */
    showReplyBox(index) {
      const {showReplyBox} = this.props;
      showReplyBox(index);
    }

    render() {
      var {User, list, submit} = this.props;
      var accesstoken = User ? User.accesstoken : '';
      return (
        <ul className="re-list">
          {
            list.map((item, index) => {
              var {id, content, author, ups, create_at, display} = item;
              if (!display) {
                display = 'none';
              }
              var at = new Date(create_at);
              var upState = this.isUp(ups);
              var createMarkup = () => {
                return {
                  __html: content,
                };
              };
              return (
                <li key={index}>
                  <div className="headimg">
                    <UserHeadImg url={author.avatar_url}/>
                  </div>
                  <div className="main">
                    <div className="top">
                      <Link to={'/user/' + author.loginname}
                        className="name">{author.loginname}</Link>
                      <time>{Tool.formatDate(create_at) }</time>
                      <div className="lou">#{++index}</div>
                    </div>
                    <div className="content" dangerouslySetInnerHTML={createMarkup() }></div>
                    <div className="bottom">
                      <div className={`font font-${upState}`} onClick={() => this.handleClickZan(id, index, author.loginname)}>
                        <i className="iconfont icon-dianzan "></i>
                        <em>{ups.length ? ups.length : ''}</em>
                      </div>
                      <div className="font" onClick={() => this.showReplyBox(index)}>
                        <i className="iconfont icon-huifu"></i>
                      </div>
                    </div>
                    <ReplyBox placeholder={`@${author.loginname}`} submit={submit}
                      display={display} loginname={author.loginname}
                      data={{ accesstoken, id: this.props.id, reply_id: id }}/>
                  </div>
                </li>
              );
            })
          }
        </ul>
      );
    }
}
ReList.propTypes = {
  User: PropTypes.object,  //登录用户
  id: PropTypes.string,  //主题ID
  clickZan: PropTypes.func,  //点赞事件
  showReplyBox: PropTypes.func,  //展示回复框事件
  list: PropTypes.array,  //回复集合
  submit: PropTypes.func,  //提交回复的方法
};
