#  React 学习记录
### 起步

```javasxript
    npm init    //项目初始化
    npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev  
    npm install react react-dom --save
```

webpack.config.js 文件配置,参考[webpack官网](https://doc.webpack-china.org/),[babel-loader配置](https://www.npmjs.com/package/babel-loader)
```javascript
const path = require('path');

module.exports = {
  entry: './app/main.js', //webpack入口文件
  output: { //出口文件
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react'],
            plugins: ['transform-object-rest-spread']
          }
        }
      }
    ]
  },
  watch: true
};
```