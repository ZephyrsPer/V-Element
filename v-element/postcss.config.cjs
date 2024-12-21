/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-env node */
module.exports = {
  plugins: [
    // postcss-each-variables 插件允许你在 CSS 中使用类似 Sass 的 @each 循环来遍历变量。
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      plugins: {
        beforeEach: [
          require('postcss-for'),
          require('postcss-color-mix')
        ]
      }
    }),
  ]
}
