# X

## todos

- [ ] 优化瀑布流滚动监听，即节流
- [ ] 优化瀑布流高度检测，确保多列基本保持高度一致
- [ ] 优化瀑布流显示数据，做到维持只显示90条左右，提升性能
- [ ] 瀑布流页面 loading 动画，及 回到顶部 功能与动画
- [ ] 瀑布流总计可以获得10次数据，共300个，到底提示用户
- [ ] 用户信息验证
- [X] 模态框动画
  - `transition`
- [X] 重构用户组件css代码
  - 基本完成
- [X] 背景图适应问题
  - 使用伪元素的`fixed`代替`background-attachment`
- [ ] 一些代码需要异步处理
- [x] 菜单动画
- [X] 重定向不会使路由 active 问题
  - `redirect` 的时候使用具名路由进行重定向，即可解决
- [ ] echarts 重新渲染时无法加载数据问题
- [ ] 使用 vuex 的命名空间
- [ ] modalGraph 需要抽离，包括组件本身和 vuex 部分
- [ ] svg 文件单独拆分
- [ ] firefox 下，滚动完成后才重绘
- [ ] [文本截断](https://github.com/josephschmitt/Clamp.js)
- [ ] 现在获取用户信息的时候，如果直接进入需要登陆才能查看的页面，则会在 userHome 组件中再请求数据进行判断，需要改进

## 更新日志

### 2017.1.10

- 完成新闻页面瀑布流基本代码，实现移动到页面底端（150px）时加载更多数据
- 优化：
    - 确保只会加载一次。
    - 向最短的列加载

### 2017.1.11

- 完成用户登陆界面
- 更新 CRSF 对应代码
- 优化：
  - 现在瀑布流会按11，10，9的数量向三列填充内容

### 2017.1.12

- 更新：
  - 现在页面首次加载后（app.vue挂载后）将验证一次用户信息
  - 现在 getNews 时会带上 page 和 type
  - 完成 用户登陆，注册，找回密码 功能
  - 完成 精选热文 的 css 代码
  - 完成 topBar 的 css 代码
  - 添加 精选热文 的分类选择
  - 可以正确切换分类并处理数据
- 优化
  - 简化 精选热文 挂载时和切换分类时的检查逻辑

  css 的 box-shadow 被挡住 则将自身设置为relative
  关于 relative 遮挡其他元素问题。须将被遮挡元素的最外层父元素设置 z-index ，如果只设置本身，则会因为父元素没有设置而失败

### 2017.1.13

- 更新
  - 现在 精选热文 可以正确的请求数据了
- 优化
  - 简化 精选热文 切换时数据的判断逻辑

### 2017.1.14

- 更新
  - 现在 精选热文 的分类栏已经可以正常显示
  - 现在 用户模态框 拥有动画

### 2017.1.15

- 解决 `stacking context` 引发的问题
- 解决 位移过渡 引发的问题
- 更新
  - 修复 topbar 两级动画错误问题
  - 修复 topbar 阴影层次不正常问题

### 2017.1.16

- 更新
  - 现在主要分类更改为 今日热词，时下热文，热词榜
  - 路由做相应的更新
  - topbar 改版
    - 现在 菜单 和 用户 采用同样的展示方式
    - 时下热文 的分类被单独划分出
  - 今日热词 页面已经可以展示图表

### 2017.1.17

- 更新
  - 现在 今日热词，时下热文，热词榜 组件开始异步加载

### 2017.1.19

- 更新
  - 新增 搜索 页面
  - 现在 今日热词，时下热文，热词榜，搜索 都有共同的背景

### 2017.1.21

- 更新
  - 关系图 现在也开始使用 mock.js 返回测试数据
  - 更新 首页 的 名称
  - vuex 的模块中暴露的东西开始使用模块名为前缀

### 2017.1.21

- 更新
  - 搜索页面已基本完成
  - 搜索，新闻 两个页面的 卡片 现在固定大小，移除部分隐藏

### 2017.1.23

- 更新
  - 新闻，搜索，排行榜 三个页面的背景色已经添加
  - 所有接口带上错误检查

### 2017.1.24

- 更新
  - 排行榜已经可以正确的显示颜色
  - 排行榜页面制作完成
  - 排行榜 vuex 制作完成
  - 主界面的 padding 由 每个组件自带
  - 主要的三个页面 现在切换的时候不再销毁

### 2017.1.25

- 更新
  - 排行榜 查询 可以正常高亮，跳转，错误提示
  - 所有组件 css 启用 scoped
  - 排行榜 查询 时 图表重新渲染不带动画

### 2017.1.26

- 更新
  - 排行榜页面 走势图 完成
  - 瀑布流页面重构完成
  - 定位组件 完成

### 2017.1.27

- 更新
  - 细节更新

### 2017.1.31

- 更新
  - 重写 用户登陆/注册/忘记密码/登陆成功 的模态框

### 2017.2.2

- 更新
  - 路径从 /dist 改为 /static/dist
  - 时下热文 页面 除了显示中文外，其余操作用英文
  - 现在 进入 根路径 以后会显示 今日热词 页面

### 2017.2.3

- 更新
  - 增加了路由定位的效果
  - 添加 logo
  - topbar 现在 模拟 粘性布局
  - 时下热文 group 取消 title 显示
  - 跳转到新闻时会在新页面打开

### 2017.2.13

- 更新
  - 修复 窄屏 topbar 偏移 问题

### 2017.2.19

- 更新
  - 修复 主页关系图 文字过长问题
  - 缩短 主页关系图 空白(`padding-top`)

### 2017.2.21

- 更新
  - 修复 瀑布流页面 标题超出两行隐藏
  - 新增 用户中心页面
  - 新增 用户信息修改 组件

### 2017.2.23

- 更新
  - 用户中心页面完成 用户信息，用户关注页面
  - 修复 排行榜 十日热度 最大值

### 2017.2.24

- 更新
  - 用户中心 用户关注组件 现在可以正确的显示 已经关注 和 暂未关注 的内容
  - 用户中心 用户关注组件 现在可以手动添加 关键词
  - 用户登录 的 username 字段 更换为 email 字段
  - 首页关系图 点击 新闻 跳转到对应新闻，点击 词语 跳转到对应查询词语
  - 用户权限认证现在移动到了 App.vue 进行
  - 搜索页面  关系图 点击 新闻 跳转到对应新闻，点击 词语 跳转到对应查询词语

### 2017.3.10

- 更新
  - 用户中心，页面更新
