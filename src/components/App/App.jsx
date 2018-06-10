import React, { Component } from 'react';

import { hot } from 'react-hot-loader';

@hot(module)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello, react!</h1>
        <p>SSR, and I work fine!</p>
      </div>
    );
  }
}
