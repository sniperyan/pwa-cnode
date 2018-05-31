import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import createBrowserHistory from 'history/createBrowserHistory';
import ListAPP from './containers/listApp';
import LoginAPP from './containers/loginApp';
import LogoutAPP from './containers/logoutApp';
import MessagesApp from './containers/messagesApp';
import TopicApp from './containers/topicApp';
import TopicCreateApp from './containers/topicCreateApp';
import UserApp from './containers/userApp';

import configureStore from './store';
import '../styles/common.less'; //加载公共样式
import '../styles/animation.less'; //加载公共动画
import '../assets/iconfont.css'; //字体图标

moment.locale('zh-cn');

const store = configureStore();
const history = createBrowserHistory();

// const HistoryContext = React.createContext(history);

function Main() {
  return (
    <LocaleProvider locale={zhCN}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/topic/create" component={TopicCreateApp} />
            <Route path="/topic/:id" component={TopicApp} />
            <Route path="/login" component={LoginAPP} />
            <Route path="/loginout" component={LogoutAPP} />
            <Route path="/user/:loginname" component={UserApp} />
            <Route path="/my/messages" component={MessagesApp} />
            <Route component={ListAPP} />
          </Switch>
        </Router>
      </Provider>
    </LocaleProvider>
  );
}

export default Main;
