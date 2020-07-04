import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto+Slab:400', 'sans-serif'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
