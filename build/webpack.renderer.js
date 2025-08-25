const path = require('path');
const merge = require('webpack-merge');
const getBaseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { rendererComponents } = require('./build-renderer');

const entry = {};

// 添加 renderer 组件入口
rendererComponents.forEach((componentName) => {
  entry[`renderer/${componentName}`] = `./src/renderer/${componentName}.js`;
});

// 添加 renderer 统一入口
entry['renderer/index'] = './src/renderer/index.js';

module.exports = merge(getBaseConfig({ useCssExtract: false }), {
  mode: 'production',
  entry,
  output: {
    library: 'VMdEditor',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.join(__dirname, '../lib'),
    umdNamedDefine: true,
    filename: '[name].js',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['renderer/**/*'],
      dangerouslyAllowCleanPatternsOutsideProject: false,
    }),
  ],
});