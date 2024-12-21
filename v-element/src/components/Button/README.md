# Button组件的本质

```html
<!-- 就是class名称的组合 -->
<div class="vk-button vk-button--primary vk-button--large is-plain is-round is-disabled">按钮</div>
```

- 确定Props
- 确定组件展示方式
- 确定事件

# 组件编码

- props的定义方式
- - 对象形式
- - TS类型方式，一些限制，不能定义初始值，需要使用withDefaults

# 样式解决方案

- 选择PostCSS作为预处理器
- 了解色彩系统
- 使用CSS变量添加颜色系统
- 添加Button样式-样式覆盖，使用PostCSS插件
- 使用PostCSS动态生成主题颜色
