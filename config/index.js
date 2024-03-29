const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)
const config = {
  projectName: 'dtPeople',
  date: '2021-12-7',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  // taro 插件配置
  plugins: [
    // '@tarojs/plugin-sass'
  ],
  // 全局变量
  defineConstants: {
  },
  alias: {
    '@/components': resolve('../src/components'),
    '@/utils': resolve('../src/utils'),
    '@/config': resolve('../src/config'),
    '@/api': resolve('../src/api'),
    '@/store': resolve('../src/store')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[local]___[hash:base64:5]'
        }
      }
    },
    debugReact: false
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  } else if (process.env.NODE_ENV === 'staging'){
    return merge({}, config, require('./staging'))
  }
  return merge({}, config, require('./prod'))
}
