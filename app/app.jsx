import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import router from 'app/router';
var store = require('configStore').configure();

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
