const {resolve} = require('path')
const {name} = require('./package.json')

module.exports = (options, context) => {
  return {
    name,
    enhanceAppFiles: resolve(__dirname, './enhanceApp.js')
  };
}
