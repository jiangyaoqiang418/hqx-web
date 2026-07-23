<script setup lang="ts">
const layers = [
  ['数据层', '融合卫星遥感、地面气象、数值预报、电站设备和地理空间数据。'],
  ['算法层', '覆盖深度学习、时空预测、功率预测、目标识别与变化检测算法。'],
  ['模型层', '沉淀气象、风电、光伏、资源评估、风险评估和运维优化模型。'],
  ['平台层', '构建数据中台、AI模型平台、GIS可视化和API服务平台。'],
  ['应用层', '支撑商业气象、新能源、工程、自然资源和应急管理等行业。'],
]

usePageSeo({
  title: '技术能力',
  description: '微恩熵算以多源数据、AI智能算法、行业模型和数字化平台构建全栈技术能力。',
  path: '/technology',
})
</script>

<template>
  <div>
    <PageHero
      title="技术能力"
      subtitle="数据 + 算法 + 平台，构建全栈技术壁垒"
      description="拥有多源数据融合、AI算法研发、卫星遥感智能分析与数字化平台开发能力，为行业客户提供高精度、高可靠、可落地的产品与服务。"
      :metrics="[
        { value: '1000', unit: '+', label: '专利与软著' },
        { value: '98', unit: '%+', label: '预测准确率' },
        { value: '500', unit: '+', label: '算法模型' },
        { value: '1000', unit: '+', label: '项目成功落地' },
      ]"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="全栈技术架构"
          description="从数据底座到行业应用形成完整、可复用的技术链路。"
        />
        <div class="content-grid">
          <BusinessCard
            v-for="([title, description], index) in layers"
            :key="title"
            :title="title"
            :description="description"
            :icon="['i-lucide-database', 'i-lucide-brain-circuit', 'i-lucide-box', 'i-lucide-layers-3', 'i-lucide-layout-grid'][index]"
          />
        </div>
      </SectionContainer>
    </section>
  </div>
</template>
