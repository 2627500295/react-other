import React from 'react';
import ReactDOM from 'react-dom';

import Root from '@/containers/Root/Root';

const AppElement = document.getElementById('app');

const render = (Component, element = AppElement) => {
  ReactDOM.hydrate(<Component />, element);
};

render(Root);
