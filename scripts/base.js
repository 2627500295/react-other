// 插件
import UglifyJs from 'uglifyjs-webpack-plugin';
import OptimizeCSS from 'optimize-css-assets-webpack-plugin';

import { appDirectory, resolveOwn } from './utils/paths';

const resolve = (dir = '') => {
  return resolveOwn(`../${dir}`);
};

export default {
  stats: 'minimal',

  context: resolve(),

  mode: 'production',

  resolve: {
    extensions: ['.js', '.jsx', '.mjs', '.json'],
    alias: {
      '@': resolve('src')
    }
  },

  entry: {
    app: [resolve('src/index')]
  },

  output: {
    pathinfo: true,
    path: resolve('dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  optimization: {
    minimizer: [
      new OptimizeCSS({
        cssProcessorOptions: {
          autoprefixer: false,
          sourcemap: true,
          discardComments: true,
          safe: true
        }
      }),

      new UglifyJs({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },

  module: {
    rules: []
  }
};
