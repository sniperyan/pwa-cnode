import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import createBrowserHistory from 'history/createBrowserHistory';
// import ListAPP from './containers/listApp';
// import LoginAPP from './containers/loginApp';
// import LogoutAPP from './containers/logoutApp';
// import MessagesApp from './containers/messagesApp';
// import TopicApp from './containers/topicApp';
// import TopicCreateApp from './containers/topicCreateApp';
// import UserApp from './containers/userApp';

import configureStore from './store';
import '../styles/common.less'; //加载公共样式
import '../styles/animation.less'; //加载公共动画
import '../assets/iconfont.css'; //字体图标

import Loading from './components/loading';
import Loadable from 'react-loadable';

moment.locale('zh-cn');

const store = configureStore();
const history = createBrowserHistory();

// const HistoryContext = React.createContext(history);

/**
 * react-loadable A higher order component for loading components with promises.
 * https://github.com/jamiebuilds/react-loadable
 * Code-splitting is the process of taking one large bundle containing your entire app, 
 * and splitting them up into multiple smaller bundles which contain separate parts of your app.

This might seem difficult to do, but tools like Webpack have this built in, 
and React Loadable is designed to make it super simple.

https://webpack.js.org/guides/code-splitting/#src/components/Sidebar/Sidebar.jsx
 */
const ListAPP = Loadable({
  loader: () => import('./containers/listApp'),
  loading: Loading,
});
const LoginAPP = Loadable({
  loader: () => import('./containers/loginApp'),
  loading: Loading,
});
const LogoutAPP = Loadable({
  loader: () => import('./containers/logoutApp'),
  loading: Loading,
});
const MessagesApp = Loadable({
  loader: () => import('./containers/messagesApp'),
  loading: Loading,
});
const TopicApp = Loadable({
  loader: () => import('./containers/topicApp'),
  loading: Loading,
});
const TopicCreateApp = Loadable({
  loader: () => import('./containers/topicCreateApp'),
  loading: Loading,
});
const UserApp = Loadable({
  loader: () => import('./containers/userApp'),
  loading: Loading,
});

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
