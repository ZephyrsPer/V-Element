// 导入globals模块，这通常用于定义全局变量，但具体内容取决于globals模块的实现
import globals from 'globals'

// 导入@eslint/js插件，它提供了针对JavaScript的ESLint规则
import pluginJs from '@eslint/js'

// 导入typescript-eslint插件，它提供了针对TypeScript的ESLint规则和解析器
import tseslint from 'typescript-eslint'

// 导入eslint-plugin-vue插件，它提供了针对Vue.js文件的ESLint规则
import pluginVue from 'eslint-plugin-vue'

// 导入eslint-config-prettier配置，它用于关闭所有不必要的或可能与Prettier冲突的ESLint规则
// 防止prettier格式化后 冲突
import eslintConfigPrettier from 'eslint-config-prettier' // 新增

/**
 * @type {import('eslint').Linter.Config[]}
 * 这行注释指定了下面的数组是一个ESLint配置对象的数组
 */
export default [
  {
    // 定义要忽略的文件模式
    ignores: [
      '**/*.config.js', // 忽略所有.config.js文件
      'dist/**', // 忽略dist目录及其所有内容
      'node_modules/**', // 忽略node_modules目录及其所有内容
      '!**/eslint.config.js' // 但不排除任何名为eslint.config.js的文件
    ]
  },
  {
    // 定义要应用规则的文件模式
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    // 在此处添加ESLint规则
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error', // 将此规则设置为错误级别
        {
          allowShortCircuit: true, // 允许使用短路逻辑（如 a && b）
          allowTernary: false, // 不允许使用三元运算符
          allowTaggedTemplates: false // 不允许使用标签模板字符串
        }
      ],
      // 'no-console': 'warn'
    }
  },
  // {
  //   // 重复定义了一个文件模式，但没有提供其他配置（可能是多余的）
  //   files: ['**/*.{js,mjs,cjs,ts,vue}']
  // },
  {
    // 定义语言选项，这里合并了browser和node的全局变量
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  // 应用@eslint/js插件的推荐配置
  pluginJs.configs.recommended,
  // 应用typescript-eslint插件的推荐配置
  ...tseslint.configs.recommended,
  // 应用eslint-plugin-vue插件的'flat/essential'配置
  ...pluginVue.configs['flat/essential'],
  // 应用eslint-config-prettier配置，以关闭可能与Prettier冲突的ESLint规则
  eslintConfigPrettier, // 新增
  {
    // 为.vue文件定义特定的解析器选项
    files: ['**/*.vue'],
    // 使用typescript-eslint的解析器来处理.vue文件中的<script>部分
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      "vue/multi-word-component-names": ["error", {
        "ignores": ['index']
      }]
    }
  }
]
