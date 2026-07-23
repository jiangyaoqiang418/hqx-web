<script setup lang="ts">
const products = [
  ['微气象智能预报平台', '精细感知，精准预报'],
  ['风光功率预测平台', '精准预测，提升收益'],
  ['新能源智慧运维平台', '智能运维，降本增效'],
  ['卫星遥感智能分析平台', '天地一体，洞察万物'],
  ['数据智能决策平台', '数据融合，智慧决策'],
]

usePageSeo({
  title: '产品中心',
  description: '覆盖气象预报、功率预测、智慧运维、卫星遥感和数据智能决策的一体化产品体系。',
  path: '/products',
})
</script>

<template>
  <div>
    <PageHero
      title="产品中心"
      subtitle="数据、算法与平台一体化产品体系"
      description="以数据为基础、算法为核心，打造覆盖气象预报、新能源预测、遥感智能与数字化管理的产品体系。"
      :metrics="[
        { value: '1000', unit: '+', label: '成功项目落地' },
        { value: '98', unit: '%+', label: '功率预测准确率' },
        { value: '20', unit: '+', label: '覆盖省市地区' },
        { value: '7×24', label: '专业技术支持' },
      ]"
      :primary-cta="{ label: '咨询产品方案', to: '/contact' }"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="核心产品平台"
          description="围绕气象、能源和空间智能场景提供完整的产品与服务能力。"
        />
        <div class="content-grid">
          <BusinessCard
            v-for="([title, description], index) in products"
            :key="title"
            :title="title"
            :description="description"
            :icon="['i-lucide-cloud-sun', 'i-lucide-chart-no-axes-combined', 'i-lucide-settings', 'i-lucide-satellite', 'i-lucide-database'][index]"
            to="/contact"
          />
        </div>
      </SectionContainer>
    </section>
  </div>
</template>
