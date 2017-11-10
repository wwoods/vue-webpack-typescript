var webpack = require('webpack'),
  webpackConfig = require('./webpack.config.base'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin'),
  env = require('../environment/dev.env');

const rules = webpackConfig.module.rules;
for (let i = 0, m = rules.length; i < m; i++) {
  const rule = rules[i];
  if (rule.loader === 'ts-loader') {
    rule.options.compilerOptions = {
      inlineSourceMap: true,
      sourceMap: false
    };
  }
}
webpackConfig.plugins = [...webpackConfig.plugins,
  new SourceMapDevToolPlugin({
    filename: null, // if no value is provided the sourcemap is inlined
    test: /\.(ts|js)($|\?)/i
  }),
  new DefinePlugin({
    'process.env': env
  })
];

webpackConfig.devtool = 'inline-source-map';

module.exports = webpackConfig;
