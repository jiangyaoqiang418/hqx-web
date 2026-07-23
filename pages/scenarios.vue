<script setup lang="ts">
const scenarios = [
  ['新能源发电', '面向风电、光伏等新能源企业提供功率预测、资源评估和智能运维服务。'],
  ['工程建设气象保障', '为大型工程项目提供精细化气象预报、风险评估和施工窗口期建议。'],
  ['自然灾害监测预警', '融合多源数据与智能研判，为防灾减灾提供监测、预警和应急支持。'],
  ['卫星遥感监测', '提供遥感数据处理、目标识别、地表变化监测和灾害评估服务。'],
  ['政府与应急管理', '构建气象与应急指挥平台，提升城市安全管理和应急响应能力。'],
  ['自然资源与生态环境', '服务自然资源监测、生态保护、水资源评估与国土管理。'],
  ['交通运输保障', '为道路、航空和航运提供气象保障、风险预警与运行决策支持。'],
  ['农业气象服务', '提供精细农业气象预报、灾害预警、农事建议和墒情监测。'],
  ['能源与工业企业', '提供气象监测、风险预警、设备运维优化和安全生产保障。'],
  ['金融与保险服务', '将气象与遥感数据用于金融和保险风险管理、定价支持与事件评估。'],
]

usePageSeo({
  title: '应用场景',
  description: '微恩熵算面向新能源、工程、灾害预警、遥感、政府、农业、交通、工业和金融保险提供行业服务。',
  path: '/scenarios',
})
</script>

<template>
  <div>
    <PageHero
      title="应用场景"
      subtitle="多领域深度应用，赋能行业智能化升级"
      description="将气象、能源、遥感与人工智能技术深度融合，为政府、企业和行业客户提供专业、可靠、智能的数据与解决方案。"
      :metrics="[
        { value: '1000', unit: '+', label: '成功应用项目' },
        { value: '20', unit: '+', label: '覆盖行业' },
        { value: '1000', unit: '+', label: '服务客户' },
        { value: '7×24', label: '专业技术支持' },
      ]"
      :primary-cta="{ label: '获取方案咨询', to: '/contact' }"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="行业应用场景"
          description="围绕不同业务对象提供针对性的能力组合和实施路径。"
        />
        <div class="scenario-grid">
          <article
            v-for="([title, description], index) in scenarios"
            :key="title"
            class="scenario-card"
          >
            <span :class="`scenario-card__index scene-${String(index + 1).padStart(2, '0')}`">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </article>
        </div>
      </SectionContainer>
    </section>
  </div>
</template>

<style scoped>
.scenario-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.scenario-card {
  min-height: 15rem;
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: linear-gradient(160deg, rgb(10 35 70 / 90%), rgb(4 20 44 / 90%));
}

.scenario-card__index {
  font-size: 1.5rem;
  font-weight: 700;
}

.scenario-card h3 {
  margin: 1rem 0 0;
  color: var(--color-text-primary);
  font-size: 1.125rem;
}

.scenario-card p {
  margin: 0.75rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.925rem;
}

.scene-01 { color: var(--color-scene-01); }
.scene-02 { color: var(--color-scene-02); }
.scene-03 { color: var(--color-scene-03); }
.scene-04 { color: var(--color-scene-04); }
.scene-05 { color: var(--color-scene-05); }
.scene-06 { color: var(--color-scene-06); }
.scene-07 { color: var(--color-scene-07); }
.scene-08 { color: var(--color-scene-08); }
.scene-09 { color: var(--color-scene-09); }
.scene-10 { color: var(--color-scene-10); }

@media (max-width: 1199px) {
  .scenario-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 767px) {
  .scenario-grid { grid-template-columns: 1fr; }
  .scenario-card { min-height: auto; }
}
</style>
