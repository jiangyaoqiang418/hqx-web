<script setup lang="ts">
const activeCategory = ref('all')

const metrics = [
  { value: '1000+', label: '项目落地', icon: '/images/solutions/icon-projects.png' },
  { value: '200+', label: '服务客户', icon: '/images/solutions/icon-customers.png' },
  { value: '20+', label: '覆盖行业', icon: '/images/solutions/icon-industries.png' },
  { value: '7×24小时', label: '专业服务支持', icon: '/images/solutions/icon-support.png' },
]

const tabs = [
  { label: '全部解决方案', value: 'all' },
  { label: '新能源发电', value: 'energy' },
  { label: '商业气象', value: 'weather' },
  { label: '工程气象保障', value: 'engineering' },
  { label: '卫星遥感监测', value: 'satellite' },
  { label: '政府与行业数字化', value: 'government' },
]

const solutions = [
  {
    category: 'energy',
    title: '新能源发电解决方案',
    description: '为风电、光伏及储能企业提供功率预测、资源评估、运维优化及电力交易等全流程智能服务。',
    image: '/images/solutions/solution-energy.png',
    icon: '/images/solutions/icon-energy.png',
    iconTone: 'rgb(1 236 244)',
    points: ['风光功率预测', '资源评估与选址', '智能运维与发电优化', '电力交易辅助决策'],
  },
  {
    category: 'weather',
    title: '商业气象解决方案',
    description: '提供精细化气象预报、灾害预警与气候风险评估，为生产运营和安全管理提供科学决策依据。',
    image: '/images/solutions/solution-weather.png',
    icon: '/images/solutions/icon-weather.png',
    iconTone: 'rgb(54 147 255)',
    points: ['精细化气象预报', '灾害预警与风险评估', '气候可行性论证', '行业定制化气象服务'],
  },
  {
    category: 'engineering',
    title: '工程气象保障解决方案',
    description: '为大型工程建设提供气象保障服务，降低气象风险，提升施工效率与安全水平。',
    image: '/images/solutions/solution-engineering.png',
    icon: '/images/solutions/icon-engineering.png',
    iconTone: 'rgb(95 82 205)',
    points: ['施工气象预报预警', '施工窗口期推荐', '极端天气应对支持', '工程气候可行性分析'],
  },
  {
    category: 'satellite',
    title: '卫星遥感监测解决方案',
    description: '利用卫星遥感与空间信息技术，实现地表动态监测与目标识别，为决策提供空间数据支撑。',
    image: '/images/solutions/solution-satellite.png',
    icon: '/images/solutions/icon-satellite.png',
    iconTone: 'rgb(12 169 166)',
    points: ['遥感数据处理与解译', '地表变化监测', '目标识别与检测', '灾害遥感评估'],
  },
  {
    category: 'government',
    title: '政府与行业数字化解决方案',
    description: '提供数据平台建设、智能应用开发与系统集成服务，助力政府和行业实现数字化转型。',
    image: '/images/solutions/solution-government.png',
    icon: '/images/solutions/icon-government.png',
    iconTone: 'rgb(2 128 242)',
    points: ['数据中台与治理', '行业应用平台定制', '可视化指挥与决策平台', '系统集成与运维服务'],
  },
]

const visibleSolutions = computed(() =>
  activeCategory.value === 'all'
    ? solutions
    : solutions.filter(solution => solution.category === activeCategory.value),
)

usePageSeo({
  title: '解决方案',
  description: '微恩熵算面向新能源、商业气象、工程保障、卫星遥感和政府行业提供数字化解决方案。',
  path: '/solutions',
})
</script>

<template>
  <div class="solutions-page">
    <SolutionsHero :metrics="metrics" />
    <section class="solutions-main">
      <SolutionsTabs
        :tabs="tabs"
        :active="activeCategory"
        @change="activeCategory = $event"
      />
      <div class="site-container solutions-grid">
        <SolutionsCard
          v-for="solution in visibleSolutions"
          :key="solution.category"
          :title="solution.title"
          :description="solution.description"
          :image="solution.image"
          :icon="solution.icon"
          :icon-tone="solution.iconTone"
          :points="solution.points"
        />
      </div>
      <SolutionsConsult />
    </section>
  </div>
</template>

<style scoped>
.solutions-page {
  min-width: 1200px;
  background:
    radial-gradient(circle at 50% 18%, rgb(2 128 242 / 12%), transparent 34rem),
    #020d21;
}

.solutions-main {
  min-height: 638px;
  padding-bottom: 1px;
  background:
    linear-gradient(180deg, rgb(3 13 30 / 96%), rgb(2 13 33 / 100%)),
    var(--color-bg-page);
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}

@media (max-width: 1439px) {
  .solutions-main {
    min-height: 586px;
  }

  .solutions-grid {
    gap: 14px;
    margin-top: 16px;
  }
}
</style>
