import webpack from 'webpack';

import merge from 'webpack-merge';

import { appDirectory, resolveOwn } from './utils/paths';

const resolve = (dir = '') => {
  return resolveOwn(`../${dir}`);
};

import baseConfig from './base';

baseConfig.entry.app = [resolve('src/App')];

const config = merge(baseConfig || {}, {
  // mode: 'development',

  target: 'node',

  output: {
    filename: 'server.[name].js',
    publicPath: '',
    libraryTarget: 'commonjs2'
  },

  plugins: [],

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react'],
            plugins: ['transform-decorators-legacy']
          }
        }
      }
    ]
  }
});

// console.log(JSON.stringify(config, null, 2));

webpack(config).run((err, stats) => {
  let { errors } = stats.compilation;

  if (errors.length) {
    console.log(stats['compilation']['errors']);
  }

  console.log('build');
});

export default config;
