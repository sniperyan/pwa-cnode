import React from 'react';
import ReactDOM from 'react-dom';
import Main from './scripts/Main';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Main />, document.getElementById('app'));

registerServiceWorker();


