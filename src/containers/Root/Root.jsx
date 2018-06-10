import React, { Component } from 'react';

import { hot } from 'react-hot-loader';

import App from '@/components/App/App';

/**
 * 根容器
 * 在这里添加对 App 组件的包裹
 */
@hot(module)
export default class Root extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}
