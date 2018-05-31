import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tool} from '../../util/tool';
import {UserHeadImg, TabIcon, TipMsgSignin} from '../common';
import {ReList} from './reList';
import {ReplyBox} from './replyBox';
import './index.less';
import PropTypes from 'prop-types';
/**
 * 文章主体部分
 *
 * @class Article
 * @extends {Component}
 */
export class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {id, title, create_at, visit_count, reply_count, content, replies, author, User, submit, clickZan, showReplyBox} = this.props;
    /*react innerHtml*/
    var createMarkup = () => {
      return {
        __html: content,
      };
    };
    var bottom = User ? <ReplyBox display="block" placeholder="回复支持Markdown语法,请注意标记代码" submit={submit}
      data={{ accesstoken: User.accesstoken, id }}/> : <TipMsgSignin />;

    return (
      <div className="topic">
        <div className="user">
          <div className="headimg">
            <UserHeadImg url={author.avatar_url}/>
          </div>
          <div className="data">
            <div>
              <Link to={'/user/' + author.loginname} className="name">{author.loginname}</Link>
              <time data-flex-box="1">{Tool.formatDate(create_at) }</time>

              <div className="font"><TabIcon {...this.props} /></div>
            </div>
            <div className="qt">
              <div>阅读：{visit_count}</div>
              <div>回复：{reply_count}</div>
            </div>
          </div>
        </div>
        <h2 className="tit2">{title}</h2>
        <div className="content" dangerouslySetInnerHTML={createMarkup() }/>
        <h3 className="tit3">共<em>{replies.length}</em>条回复</h3>
        <ReList submit={submit} id={id} list={replies} User={User} clickZan={clickZan}
          showReplyBox={showReplyBox}/>
        {bottom}
      </div>
    );
  }
}
ReList.propTypes = {
  id: PropTypes.string,  //主题ID
  title: PropTypes.string,  //主题标题
  create_at: PropTypes.string,  //创建时间
  visit_count: PropTypes.number,  //访问量
  reply_count: PropTypes.number,  //回复量
  content: PropTypes.string,  //主题内容
  replies: PropTypes.array,  //回复列表
  author: PropTypes.object,  //作者信息
  User: PropTypes.object,  //登录用户
  clickZan: PropTypes.func,  //点赞
  showReplyBox: PropTypes.func,  //展示回复框
  submit: PropTypes.func, //提交回复内容
};
