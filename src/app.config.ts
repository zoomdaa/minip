export default {
  // entryPagePath: 'main/index/index', // 启动页路径，不填默认取pages[0]
  pages: [
    'main/index/index'
  ],
  window: {
    navigationBarBackgroundColor: '#fff', // 导航栏背景色
    navigationBarTextStyle: 'black', // 导航栏标题色 black/white
    navigationBarTitleText: 'WeChat', // 导航栏标题
    // navigationStyle: 'custom', // 导航栏样式default/custom
    // backgroundColor: '#000', // 窗口背景色
    backgroundTextStyle: 'dark', // 下拉loading的样式 dark/light
    // enablePullDownRefresh: false, // 开启下拉刷新 true/false
    // onReachBottomDistance: 50, // 页面上拉触底事件触发时距离页面底部距离
    pageOrientation: 'portrait' // 屏幕旋转设置 auto/portrait/landscape
  },
  // tabBar: {
  //   color: '#000', // 文字默认颜色
  //   selectedColor: '#000', // 选中时文字颜色
  //   backgroundColor: '#000', // tab背景色
  //   borderStyle: 'black', // tabbar边框颜色 black/white
  //   // 1<list.length<6
  //   list: [
  //     {
  //       pagePath: '', // 页面路径
  //       text: '', // 按钮文字
  //       iconPath: '', // 正常iocn <40kb 不支持网图
  //       selectedIconPath: '' // 选中时的icon
  //     }
  //   ],
  //   position: 'bottom', // 位置 bottom/top
  //   custom: false, // 开启自定义tabbar true/false
  // },
  subpackages: [
    {
      root: 'sub/sub1', // 分包根目录
      name: 'sub1', // 分包别名
      pages: [ // 分包页面路径
        "pages/index/index"
      ],
      // independent: false // 是否独立分包，独立分包不能对主包有任何依赖
    }
  ],
  // networkTimeout: {
  //   request: 60000, // Taro.request
  //   connectSocket: 60000, // Taro.connectSocket
  //   uploadFile: 60000, // Taro.uploadFile
  //   downloadFile: 60000, // Taro.downloadFile
  // },
  // debug: false, // 是否开启调试模式
  // preloadRule: { // 定义分包预下载规则
  //   'main/index/index': {
  //     packages: ['sub1'], // 进入页面后预下载分包的 root 或 name。__APP__ 表示主包
  //     network: 'wifi' // 指定网络下预下载 all/wifi
  //   }
  // }
}
