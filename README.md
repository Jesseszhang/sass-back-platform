## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


########################Sass后台服务平台########################
一、 代码获取
  1. 仓库 http://gitlab.oa.com/frontend/private-charger-cloud.git
     git clone时候输入我司gitLab的用户名和密码

二、开发步骤
  1. 安装开发依赖 npm install。 不同操作系统请重新安装。
  2. 启用开发服务 npm run dev。(window对webpack-dashboard支持不友好请启动 npm run dev-server) 详见package.json下script配置项。
  3. 如需本地模拟数据，从新开启CLI启动mock服务。命令为 npm run mock。
  4. 阶段性开发完成，打包命令为 npm build。

三、发布测试环境和生产环境
  1. 发布测试环境。 CLI到tools下 执行bash ./publish.sh
  2. 发布正式环境。 CLI到tools下 执行bash ./publish.sh -e production
    （正式环境未确定，后续请配置下publish.sh的server&port）

四、目录介绍
  private-charger-cloud
    build              webpack配置文件
    config             环境配置文件配合webpack配置使用
    mock               前端模拟后台数据接口
    node-modules       node安装依赖包
    src                开发目录
      assets           静态资源(图片)放置位置
      components       项目组件放置文件
        common         公用组件放置文件，大多走vuex全局状态为单个对象存放于state中。如分页、查询结果为空
        layout         布局公用组件，包括左侧菜单栏、顶部Header栏、面包屑等
        **             页面组件
      scss             样式文件
      servive          后台服务统一出口文件
      vuex             vuex框架文件
        actions        actions文件
        getter         获取state状态, 此处放置获取多处使用的state值。单一使用请在component自行获取
        mutation       mutation文件, 为修改state的唯一入口 
        state          state当前app所有状态
        store.js       生成vuex.store供vue使用
      App.vue          单页挂载点
      main.js          入口文件
      utils.js         工具类，常用的工具如日期转换、字符、数组、对象基本操作可放此
    staic              打包后生成文件
      css
      fonts
      img
      js
      app.html
    tools             项目发布工具
      publish.sh      详细使用请阅读第三大点    
    app.html          开发阶段模板文件提供挂载单元
    package.json      node安装包
    README.md         readme




