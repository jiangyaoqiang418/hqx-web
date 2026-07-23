<script setup lang="ts">
const features = [
  { title: '全栈自研', description: '数据、算法、平台全栈自研', icon: '/images/products/icon-stack.png' },
  { title: '智能驱动', description: 'AI模型驱动业务创新', icon: '/images/products/icon-ai.png' },
  { title: '场景丰富', description: '多行业、多场景深度应用', icon: '/images/products/icon-scenes.png' },
  { title: '安全可靠', description: '多重安全防护体系', icon: '/images/products/icon-security.png' },
]

const products = [
  {
    title: '微气象智能预报平台',
    subtitle: '精细感知，精准预报',
    image: '/images/products/product-weather.png',
    points: [
      { text: '逐15分钟预报，公里级分辨率', icon: '/images/products/icon-forecast.png' },
      { text: '多源数据融合与AI订正', icon: '/images/products/icon-data-fusion.png' },
      { text: '灾害预警与风险评估', icon: '/images/products/icon-warning.png' },
      { text: '气象要素可视化分析', icon: '/images/products/icon-visual-weather.png' },
    ],
  },
  {
    title: '风光功率预测平台',
    subtitle: '精准预测，提升收益',
    image: '/images/products/product-power.png',
    points: [
      { text: '风电/光伏功率精准预测', icon: '/images/products/icon-power.png' },
      { text: '超短期、短期及中长期预测', icon: '/images/products/icon-forecast.png' },
      { text: '预测偏差评估与校准', icon: '/images/products/icon-deviation.png' },
      { text: '电力交易辅助决策支持', icon: '/images/products/icon-data-fusion.png' },
    ],
    tone: 'green' as const,
  },
  {
    title: '新能源智慧运维平台',
    subtitle: '智能运维，降本增效',
    image: '/images/products/product-operation.png',
    points: [
      { text: '最佳清洗与巡检窗口期推荐', icon: '/images/products/icon-task.png' },
      { text: '设备健康监测与告警', icon: '/images/products/icon-device.png' },
      { text: '运维任务管理与跟踪', icon: '/images/products/icon-task.png' },
      { text: '气象驱动的智能运维决策', icon: '/images/products/icon-model.png' },
    ],
    tone: 'purple' as const,
  },
  {
    title: '卫星遥感智能分析平台',
    subtitle: '天地一体，洞察万物',
    image: '/images/products/product-satellite.png',
    points: [
      { text: '卫星影像管理与处理', icon: '/images/products/icon-satellite-image.png' },
      { text: '目标识别与变化监测', icon: '/images/products/icon-target.png' },
      { text: '自然资源与环境监测', icon: '/images/products/icon-data-fusion.png' },
      { text: '遥感数据可视化与分析', icon: '/images/products/icon-visual-weather.png' },
    ],
  },
  {
    title: '数据智能决策平台',
    subtitle: '数据融合，智慧决策',
    image: '/images/products/product-data.png',
    points: [
      { text: '多源数据接入与治理', icon: '/images/products/icon-data-access.png' },
      { text: '模型管理与智能分析', icon: '/images/products/icon-model.png' },
      { text: '可视化驾驶舱与大屏展示', icon: '/images/products/icon-screen.png' },
      { text: 'API服务与系统集成', icon: '/images/products/icon-api.png' },
    ],
  },
]

const architectureLayers = [
  { title: '数据源', items: ['卫星遥感数据', '地面观测数据', '数值预报数据', '电站运行数据', '第三方数据'] },
  { title: '数据中台', items: ['数据接入', '数据治理', '数据存储', '数据服务'] },
  { title: 'AI能力中台', items: ['气象AI模型', '功率预测模型', '遥感识别模型', '时空分析模型'] },
  { title: '产品应用层', items: ['气象预报平台', '功率预测平台', '智慧运维平台', '遥感分析平台', '数据决策平台'] },
  { title: '终端与服务', items: ['Web端', '移动端', '大屏端', 'API服务'] },
]

const metrics = [
  { value: '1000+', label: '成功项目落地', icon: '/images/products/icon-projects.png' },
  { value: '98%+', label: '功率预测准确率', icon: '/images/products/icon-accuracy.png' },
  { value: '20+', label: '覆盖省市地区', icon: '/images/products/icon-regions.png' },
  { value: '7×24小时', label: '专业技术支持', icon: '/images/products/icon-support.png' },
]

usePageSeo({
  title: '产品中心',
  description: '覆盖气象预报、功率预测、智慧运维、卫星遥感和数据智能决策的一体化产品体系。',
  path: '/products',
})
</script>

<template>
  <div class="products-page">
    <ProductsHero :features="features" />
    <section class="products-main">
      <div class="site-container products-grid">
        <ProductCard
          v-for="product in products"
          :key="product.title"
          :title="product.title"
          :subtitle="product.subtitle"
          :image="product.image"
          :points="product.points"
          :tone="product.tone"
        />
      </div>
      <div class="site-container products-bottom">
        <ProductArchitecture :layers="architectureLayers" />
        <ProductMetrics :metrics="metrics" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.products-page {
  min-width: 1200px;
  background:
    radial-gradient(circle at 50% 18%, rgb(2 128 242 / 12%), transparent 34rem),
    #020d21;
}

.products-main {
  min-height: 625px;
  padding-bottom: 34px;
  background:
    linear-gradient(180deg, rgb(3 13 30 / 96%), rgb(2 13 33 / 100%)),
    var(--color-bg-page);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  padding-top: 20px;
}

.products-bottom {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 428px;
  gap: 18px;
  margin-top: 18px;
}

@media (max-width: 1439px) {
  .products-grid {
    gap: 14px;
  }

  .products-bottom {
    grid-template-columns: minmax(0, 1fr) 350px;
    gap: 14px;
  }
}
</style>
