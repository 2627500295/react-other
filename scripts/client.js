import webpack from 'webpack';

import merge from 'webpack-merge';

import { appDirectory, resolveOwn } from './utils/paths';

const resolve = (dir = '') => {
  return resolveOwn(`../${dir}`);
};

import baseConfig from './base';

baseConfig.entry.app = [].concat(
  [
    // resolve('scripts/utils/polyfill')
    'babel-polyfill'
  ],
  baseConfig.entry.app || []
);

const config = merge(baseConfig || {}, {
  // mode: 'development',
  mode: 'production',

  output: {
    filename: '[name].js'
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
            presets: [
              [
                'env',
                {
                  targets: {
                    ie: 9,
                    uglify: true
                  },
                  useBuiltIns: false,
                  modules: false
                }
              ],
              'react'
            ],
            plugins: [
              'transform-decorators-legacy',
              'transform-react-jsx-source',
              'transform-react-jsx-self',
              'transform-es2015-destructuring',
              'transform-class-properties',
              [
                'transform-object-rest-spread',
                {
                  useBuiltIns: true
                }
              ],
              [
                'transform-react-jsx',
                {
                  useBuiltIns: true
                }
              ],
              [
                'transform-runtime',
                {
                  helpers: false,
                  polyfill: false,
                  regenerator: true
                }
              ],
              [
                'transform-regenerator',
                {
                  async: false
                }
              ],
              'syntax-dynamic-import',
              'react-hot-loader/babel'
            ]
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
