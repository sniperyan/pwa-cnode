import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Tool} from '../../util/tool';
import {UserHeadImg, TabIcon} from '../common';
import PropTypes from 'prop-types';
/**
 * 列表单独项
 */
export class ListItem extends Component {
  render() {
    const {id, title, author, visit_count, reply_count, 
      create_at, last_reply_at} = this.props;
    return (
      <li>
        <Link to={'/topic/' + id}>
          <div className="list-title">
            <div className="font"><TabIcon {...this.props} /></div>
            <h3 className="tit">{title}</h3>
          </div>
          <div className="bottom">
            <div className="author">
              <UserHeadImg url={author.avatar_url}/>
            </div>
            <div className="con">
              <p className="bottom-tip">
                <span className="name">{author.loginname}</span>
                <span className="count">{reply_count}/{visit_count}</span>
              </p>
              <p className="bottom-tip">
                <time className="create">{Tool.formatDate(create_at) }</time>
                <time className="re">{Tool.formatDate(last_reply_at) }</time>
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
  shouldComponentUpdate(np) {
    //因为列表项目不会更新，所以不需要重新渲染
    return false;
  }
}
ListItem.propTypes = {
  id: PropTypes.string.isRequired,  //主题ID
  title: PropTypes.string.isRequired,  //主题标题
  author: PropTypes.object.isRequired,  //作者
  visit_count: PropTypes.number.isRequired,  //访问量
  reply_count: PropTypes.number.isRequired,  //回复量
  create_at: PropTypes.string.isRequired,  //创建时间
  last_reply_at: PropTypes.string.isRequired,  //最后回复时间
};
