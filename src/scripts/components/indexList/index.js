import React, {Component} from 'react';
import {ListItem} from  './listItem';
import './index.less';
import PropTypes from 'prop-types';
/**
 * 循环列表
 */
export class List extends Component {
  render() {
    const {list} = this.props;
    return (
      <ul className="index-list">
        {
          list.map((item, index) => {
            return <ListItem key={item.id} {...item}/>;
          })
        }
      </ul>
    );
  }
}
List.propTypes = {
  list: PropTypes.array.isRequired,  //首页主题集合
};
