import type { NavigationItem } from '~/types/site'

export const siteConfig = {
  name: '微恩熵算科技有限公司',
  shortName: '微恩熵算',
  englishName: 'WEIKEN ENTROPY COMPUTING TECHNOLOGY CO., LTD.',
  description: '融合气象、能源、遥感与人工智能技术，提供数据、算法与平台一体化解决方案。',
  navigation: [
    { label: '首页1', to: '/' },
    { label: '解决方案', to: '/solutions' },
    { label: '产品中心', to: '/products' },
    { label: '技术能力', to: '/technology' },
    { label: '应用场景', to: '/scenarios' },
    { label: '关于我们', to: '/about' },
    { label: '新闻动态', to: '/news' },
    { label: '联系我们', to: '/contact' },
  ] satisfies NavigationItem[],
  contact: {
    phone: '028-1234 5678',
    businessEmail: 'business@weikenentropy.com',
    supportEmail: 'support@weikenentropy.com',
    address: '中国（四川）自由贸易试验区成都高新区天府大道中段1388号1栋20层',
  },
} as const
