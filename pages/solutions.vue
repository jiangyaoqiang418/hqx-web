<script setup lang="ts">
const solutions = [
  ['新能源发电解决方案', '功率预测、资源评估、智能运维与电力交易辅助的全流程服务。'],
  ['商业气象解决方案', '精细化预报、灾害预警、气候风险评估与行业定制服务。'],
  ['工程气象保障方案', '面向大型工程建设提供气象预报、风险评估和施工窗口期建议。'],
  ['卫星遥感监测方案', '通过卫星遥感实现地表动态监测、目标识别与灾害评估。'],
  ['政府与行业数字化解决方案', '提供数据中台、行业应用平台、可视化指挥与系统集成服务。'],
]

usePageSeo({
  title: '解决方案',
  description: '微恩熵算面向新能源、商业气象、工程保障、卫星遥感和政府行业提供数字化解决方案。',
  path: '/solutions',
})
</script>

<template>
  <div>
    <PageHero
      title="解决方案"
      subtitle="以数据驱动决策，用智能创造价值"
      description="融合气象、能源、遥感与人工智能技术，为不同行业和场景提供全链条、全流程的数字化解决方案。"
      :metrics="[
        { value: '1000', unit: '+', label: '项目落地' },
        { value: '200', unit: '+', label: '服务客户' },
        { value: '20', unit: '+', label: '覆盖行业' },
        { value: '7×24', label: '专业服务支持' },
      ]"
      :primary-cta="{ label: '联系解决方案专家', to: '/contact' }"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="行业解决方案"
          description="围绕实际业务场景组合数据、模型、平台和专业服务。"
        />
        <div class="content-grid">
          <BusinessCard
            v-for="([title, description], index) in solutions"
            :key="title"
            :title="title"
            :description="description"
            :icon="['i-lucide-sun', 'i-lucide-cloud-lightning', 'i-lucide-construction', 'i-lucide-satellite', 'i-lucide-building-2'][index]"
            to="/contact"
          />
        </div>
      </SectionContainer>
    </section>
  </div>
</template>
