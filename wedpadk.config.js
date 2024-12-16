const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  // 其他Webpack配置...
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true
    })
  ],
};
