<script setup lang="ts">
const abilities = [
  { label: '精细预报', icon: '/images/home/ability-forecast.png' },
  { label: '功率预测', icon: '/images/home/ability-power.png' },
  { label: '灾害预警', icon: '/images/home/ability-warning.png' },
  { label: '卫星遥感', icon: '/images/home/ability-satellite.png' },
  { label: '平台集成', icon: '/images/home/ability-platform.png' },
]

const services = [
  {
    title: '商业气象服务',
    description: '精细化气象预报、灾害预警、气候可行性论证与风险评估，为行业决策提供科学依据。',
    icon: '/images/home/service-weather-icon.png',
    image: '/images/home/service-weather.png',
    to: '/solutions',
  },
  {
    title: '新能源智能服务',
    description: '风光功率预测、资源评估、智能运维与电力交易辅助，提升发电效益，助力能源转型。',
    icon: '/images/home/service-energy-icon.png',
    image: '/images/home/service-energy.png',
    to: '/products',
  },
  {
    title: '卫星遥感与空间智能',
    description: '遥感数据处理、地表变化监测、目标识别与灾害评估，构建宏观态势感知能力。',
    icon: '/images/home/service-satellite-icon.png',
    image: '/images/home/service-satellite.png',
    to: '/technology',
  },
  {
    title: '人工智能与数字化平台',
    description: 'AI算法模型、数据中台、可视化平台与系统集成，打造全链条数字化解决方案。',
    icon: '/images/home/service-ai-icon.png',
    image: '/images/home/service-ai.png',
    to: '/products',
  },
]

const metrics = [
  { value: '20+', label: '覆盖省市地区', icon: '/images/home/metric-regions.png' },
  { value: '1000+', label: '气象站点接入', icon: '/images/home/metric-stations.png' },
  { value: '500+', label: '新能源电站服务', icon: '/images/home/metric-energy.png' },
  { value: '98%+', label: '功率预测准确率', icon: '/images/home/metric-accuracy.png' },
  { value: '7×24小时', label: '全天候技术支持', icon: '/images/home/metric-support.png' },
]

const solutions = [
  {
    title: '新能源发电解决方案',
    image: '/images/home/solution-energy.png',
    icon: '/images/home/solution-energy-icon.png',
    to: '/solutions',
  },
  {
    title: '工程气象保障方案',
    image: '/images/home/solution-engineering.png',
    icon: '/images/home/solution-engineering-icon.png',
    to: '/solutions',
  },
  {
    title: '自然灾害监测预警方案',
    image: '/images/home/solution-disaster.png',
    icon: '/images/home/solution-disaster-icon.png',
    to: '/solutions',
  },
  {
    title: '卫星遥感监测方案',
    image: '/images/home/solution-satellite.png',
    icon: '/images/home/solution-satellite-icon.png',
    to: '/solutions',
  },
  {
    title: '政府与行业数字化方案',
    image: '/images/home/solution-government.png',
    icon: '/images/home/solution-government-icon.png',
    to: '/solutions',
  },
]

const root = ref<HTMLElement | null>(null)

usePageEntrance(root)

usePageSeo({
  title: '首页',
  description: '微息熵算融合人工智能、大数据、云计算与卫星遥感技术，为商业气象、新能源发电及地理空间智能提供数据、算法与平台一体化解决方案。',
  path: '/',
})
</script>

<template>
  <div
    ref="root"
    class="home-page"
  >
    <HomeHero :abilities="abilities">
      <HomeServiceGrid :services="services" />
    </HomeHero>
    <HomeMetrics :metrics="metrics" />
    <HomeSolutions :solutions="solutions" />
  </div>
</template>

<style scoped>
.home-page {
  min-width: 1200px;
  background: #020d21;
}
</style>
