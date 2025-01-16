/**
 * next-i18next 配置文件
 * 用于设置网站的国际化功能
 */
module.exports = {
  // 支持的语言列表
  i18n: {
    defaultLocale: 'en',  // 默认语言为英语
    locales: ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl'],  // 支持英语、中文、日语、韩语、印地语、印尼语和塔加洛语
  },
  
  // 本地化文件配置
  localePath: './public/locales',  // 翻译文件存放路径
  
  // 调试模式配置
  debug: process.env.NODE_ENV === 'development',  // 开发环境下启用调试
  
  // 命名空间配置
  ns: ['common', 'home', 'name', 'payment'],  // 定义不同页面/功能的翻译命名空间
  
  // 默认命名空间
  defaultNS: 'common',  // 默认使用 common 命名空间
  
  // 检测用户语言配置
  detection: {
    order: ['cookie', 'header'],  // 优先使用 cookie，其次使用浏览器 header
    caches: ['cookie'],  // 将语言选择缓存在 cookie 中
  },
  
  // 回退语言配置
  fallbackLng: 'en',  // 当某个翻译缺失时，使用英语作为后备语言
  
  // 插值配置
  interpolation: {
    escapeValue: false,  // 不转义 HTML 内容
  },
} 