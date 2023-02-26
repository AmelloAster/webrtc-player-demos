module.exports = {
  extends: ['git-commit-emoji'],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        '🎉 init',
        '✨ feat', // 新功能 feature
        '🐞 fix', // 修复 bug
        '🚧 working', // 进行的工作
        '📝 docs', // 文档注释
        '🌈 style', // 代码格式(不影响代码运行的变动)
        '🦄 refactor', // 重构(既不增加新功能，也不是修复bug)
        '🎈 perf', // 性能优化
        '🧪 test', // 增加测试
        '🐳 chore', // 构建过程或辅助工具的变动
        '↩ revert', // 回退
        '🔧 build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'type-empty': [
      2,
      'never',
      [
        ':art:',
        ':newspaper:',
        ':pencil:',
        ':memo:',
        ':zap:',
        ':fire:',
        ':books:',
        ':bug:',
        ':ambulance:',
        ':penguin:',
        ':apple:',
        ':checkered_flag:',
        ':robot:',
        ':green_ale:',
        ':tractor:',
        ':recycle:',
        ':white_check_mark:',
        ':microscope:',
        ':green_heart:',
        ':lock:',
        ':arrow_up:',
        ':arrow_down:',
        ':fast_forward:',
        ':rewind:',
        ':rotating_light:',
        ':lipstick:',
        ':wheelchair:',
        ':globe_with_meridians:',
        ':construction:',
        ':gem:',
        ':bookmark:',
        ':tada:',
        ':loud_sound:',
        ':mute:',
        ':sparkles:',
        ':speech_balloon:',
        ':bulb:',
        ':construction_worker:',
        ':chart_with_upwards_trend:',
        ':ribbon:',
        ':rocket:',
        ':heavy_minus_sign:',
        ':heavy_plus_sign:',
        ':wrench:',
        ':hankey:',
        ':leaves:',
        ':bank:',
        ':whale:',
        ':twisted_rightwards_arrows:',
        ':pushpin:',
        ':busts_in_silhouette:',
        ':children_crossing:',
        ':iphone:',
        ':clown_face:',
        ':ok_hand:',
        ':boom:',
        ':bento:',
        ':pencil2:',
        ':package:',
        ':alien:',
        ':truck:',
        ':age_facing_up:',
        ':busts_in_silhouette:',
        ':card_file_box:',
        ':loud-sound:',
        ':mute:',
        ':egg:',
        ':see-no-evil:',
        ':camera-flash:',
        ':alembic:',
        ':mag:',
        ':wheel-of-dharma:',
        ':label:'
      ]
    ]
  }
};
