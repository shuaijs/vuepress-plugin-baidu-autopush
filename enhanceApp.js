export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  try {
    // 生成静态页时在node中执行，没有document对象
    (function() {
      var bp = document.createElement("script");
      var curProtocol = window.location.protocol.split(":")[0];
      if (curProtocol === "https") {
        bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
      } else {
        bp.src = "http://push.zhanzhang.baidu.com/push.js";
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
    })();
  } catch (e) {
    console.error(e.message)
  }
}