import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const str = 'this is from index.js';

ReactDOM.render(<App str={str} />, document.getElementById('root'));
