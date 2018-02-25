import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var foo = {
  bar: 'bar string',
  baz: 11
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
