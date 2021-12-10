/** @type {import('next').NextConfig} */

const withLess = require("next-with-less")
const withImages = require('next-images')
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

// const lessToJS = require('less-vars-to-js');
// const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './static/modifyVars.less'), 'utf8'))

module.exports = (
  withLess({
    lessLoaderOptions: {
      // modifyVars: themeVariables, // make your antd custom effective
      lessOptions: {
        modifyVars: {
          "@primary-color": "#ff0000",
        }
      }
    },
    ...withTM(
      withImages({
        reactStrictMode: true,
        // 其他的 Next.js 配置
      })
    )
  })
);
