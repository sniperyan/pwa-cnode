import React, {Component} from 'react';
import {Tool} from '../../util/tool';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * 发布的主题和回复的主题列表
 *
 * @class HomeList
 * @extends {Component}
 */
export class HomeList extends Component {
  render() {
    const {list, display} = this.props;
    return (
      <ul className="list" style={{ display: display }}>
        {
          list.map((item, index) => {
            let {id, title, last_reply_at} = item;
            return (
              <li key={index}>
                <Link to={`/topic/${id}`}>
                  <div className="tit">{title}</div>
                  <time className>{Tool.formatDate(last_reply_at) }</time>
                </Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
HomeList.propTypes = {
  display: PropTypes.string,  //css display
  list: PropTypes.array,  //列表数据
};