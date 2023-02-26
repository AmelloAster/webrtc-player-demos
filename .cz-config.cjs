module.exports = {
  // 可选类型
  types: [
    { value: '🎉 init', name: '🎉init:     项目初始化' },
    { value: '✨ feat', name: '✨feat:     新功能' },
    { value: '🐞 fix', name: '🐞fix:      修复' },
    { value: '🚧 working', name: '🚧working:      正在进行的工作' },
    { value: '📝 docs', name: '📝docs:     文档变更' },
    { value: '🌈 style', name: '🌈style:    代码格式(不影响代码运行的变动)' },
    { value: '🦄 refactor', name: '🦄refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: '🎈 perf', name: '🎈perf:     性能优化' },
    { value: '🧪 test', name: '🧪test:     增加测试' },
    { value: '🐳 chore', name: '🐳chore:    构建过程或辅助工具的变动' },
    { value: '↩ revert', name: '↩revert:   回退' },
    { value: '🔧 build', name: '🔧build:    打包' }
  ],
  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    breaking: '突破性的变化 issues list (可选):\n',
    footer: '此次提交要关闭的 issues (可选). E.g.: #31, #34:\n',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // subject文字长度默认是72
  subjectLimit: 100
};
