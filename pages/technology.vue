<script setup lang="ts">
const layers = [
  {
    title: '数据层',
    description: '多源数据融合\n构建数据底座',
    icon: '/images/technology/layer-data.png',
    variant: 'image' as const,
    items: [
      { title: '卫星遥感数据', description: '高分辨率光学影像、SAR影像、热红外影像等', image: '/images/technology/satellite-data.png' },
      { title: '地面气象数据', description: '自动气象站、气象雷达、风廓线雷达等', image: '/images/technology/ground-weather-data.png' },
      { title: '数值预报数据', description: '全球/区域数值预报模式数据与多处理产品', image: '/images/technology/forecast-data.png' },
      { title: '电站设备数据', description: '风机、逆变器、箱变等运行状态与历史数据', image: '/images/technology/station-equipment-data.png' },
      { title: '地理空间数据', description: 'DEM、土地利用、行政区划、道路、水系等', image: '/images/technology/geospatial-data.png' },
      { title: '第三方数据', description: '电价数据、市场数据、经济数据等', image: '/images/technology/third-party-data.png' },
    ],
  },
  {
    title: '算法层',
    description: '核心算法研发\n驱动业务创新',
    icon: '/images/technology/layer-algorithm.png',
    itemVariant: 'inline-icon' as const,
    oneLineColumns: 7,
    items: [
      { title: '深度学习', description: 'CNN、RNN、Transformer等深度模型应用', icon: '/images/technology/algorithm-deep-learning.png' },
      { title: '多源数据融合', description: '时空融合、特征融合、模型融合等技术', icon: '/images/technology/algorithm-data-fusion.png' },
      { title: '时空预测', description: '时序预测、空间预测、时空建模与推理', icon: '/images/technology/algorithm-spatiotemporal.png' },
      { title: '气象要素订正', description: 'AI订正、偏差校正、精细化降尺度', icon: '/images/technology/algorithm-weather-correction.png' },
      { title: '功率预测算法', description: '风电/光伏功率预测、组合预测与不确定性评估', icon: '/images/technology/algorithm-power-forecast.png' },
      { title: '目标检测识别', description: '遥感影像目标检测、分类与识别', icon: '/images/technology/algorithm-object-detection.png' },
      { title: '变化检测', description: '地表变化检测、趋势分析与监测', icon: '/images/technology/algorithm-change-detection.png' },
    ],
  },
  {
    title: '模型层',
    description: '行业模型沉淀\n提升预测精度',
    icon: '/images/technology/layer-model.png',
    variant: 'image' as const,
    items: [
      { title: '气象预测模型', description: '高精度网格化气象预测模型体系', image: '/images/technology/weather-model.png', icon: '/images/technology/model-weather-forecast.png' },
      { title: '风电预测模型', description: '风电功率预测专用模型及风资源评估模型', image: '/images/technology/wind-model.png', icon: '/images/technology/model-wind-power-forecast.png' },
      { title: '光伏预测模型', description: '光伏功率预测专用模型及辐照度预测模型', image: '/images/technology/solar-model.png', icon: '/images/technology/model-solar-forecast.png' },
      { title: '资源评估模型', description: '风能、太阳能资源评估与场址分析模型', image: '/images/technology/resource-model.png', icon: '/images/technology/model-resource-assessment.png' },
      { title: '风险评估模型', description: '气象灾害风险评估与损失评估模型', image: '/images/technology/risk-model.png', icon: '/images/technology/model-risk-assessment.png' },
      { title: '运维优化模型', description: '设备运维优化与健康度评估模型', image: '/images/technology/operation-model.png', icon: '/images/technology/model-operations-optimization.png' },
    ],
  },
  {
    title: '平台层',
    description: '技术平台支撑\n高效稳定可靠',
    icon: '/images/technology/layer-platform.png',
    itemVariant: 'side-icon' as const,
    items: [
      { title: '数据中台', description: '统一数据接入、治理、存储与管理', icon: '/images/technology/platform-data-center.png' },
      { title: 'AI模型平台', description: '模型训练、管理、部署与监控一体化', icon: '/images/technology/platform-ai-model.png' },
      { title: 'GIS可视化平台', description: '三维地理信息、专题图层、可视化分析', icon: '/images/technology/platform-gis.png' },
      { title: '业务应用平台', description: '业务流程、任务管理、权限与服务管理', icon: '/images/technology/platform-business-app.png' },
      { title: 'API服务平台', description: '标准API服务、数据服务与算法服务开放', icon: '/images/technology/platform-api.png' },
      { title: '运维监控平台', description: '系统监控、资源管理、告警与运维保障', icon: '/images/technology/platform-operations.png' },
    ],
  },
  {
    title: '应用层',
    description: '行业深度应用\n创造业务价值',
    icon: '/images/technology/layer-application.png',
    itemVariant: 'stacked-icon' as const,
    oneLineColumns: 9,
    items: [
      { title: '商业气象', description: '精细化预报、预警与风险防范', icon: '/images/technology/application-commercial-weather.png' },
      { title: '新能源发电', description: '功率预测、资源评估与电力交易辅助', icon: '/images/technology/application-new-energy.png' },
      { title: '工程建设', description: '施工气象保障与进度风险管理', icon: '/images/technology/application-engineering.png' },
      { title: '自然资源', description: '资源监测、生态保护与国土管理', icon: '/images/technology/application-natural-resources.png' },
      { title: '应急管理', description: '灾害监测、预警与应急指挥', icon: '/images/technology/application-emergency.png' },
      { title: '交通运输', description: '交通气象服务与运行安全保障', icon: '/images/technology/application-transportation.png' },
      { title: '农业气象', description: '农业气象服务与产量预测', icon: '/images/technology/application-agriculture.png' },
      { title: '农多专业', description: '金融、保险、文旅、军事等行业应用', icon: '/images/technology/application-multi-industry.png' },
      { title: '更多行业', description: '持续拓展行业应用边界', icon: '/images/technology/application-more-industries.png' },
    ],
  },
]

const advantages = [
  { title: '高精度', description: 'AI算法与物理模型融合，预测精度行业领先，平均水平提升20%以上。', icon: '/images/technology/advantage-precision.png' },
  { title: '多源融合', description: '融合卫星、地面、雷达、数值预报与电站数据，提升数据完整性与准确性。', icon: '/images/technology/advantage-fusion.png' },
  { title: '自主可控', description: '核心算法与平台自主研发，具备持续迭代与快速适配能力。', icon: '/images/technology/advantage-control.png' },
  { title: '高性能平台', description: '分布式架构与云原生技术，支撑海量数据处理与高并发访问。', icon: '/images/technology/advantage-platform.png' },
  { title: '行业深耕', description: '深耕气象与新能源领域，理解行业需求，提供更贴合业务的解决方案。', icon: '/images/technology/advantage-industry.png' },
]

usePageSeo({
  title: '技术能力',
  description: '微恩熵算以多源数据、AI智能算法、行业模型和数字化平台构建全栈技术能力。',
  path: '/technology',
})
</script>

<template>
  <div class="technology-page">
    <TechnologyHero />
    <section class="technology-page__content">
      <div class="site-container technology-page__layout">
        <TechnologyArchitecture :layers="layers" />
        <TechnologyAdvantages :advantages="advantages" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.technology-page {
  min-width: 1200px;
  background: #04142c;
}

.technology-page__content {
  padding: 10px 0 24px;
}

.technology-page__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 350px;
  align-items: start;
  gap: 14px;
}

@media (max-width: 1439px) {
  .technology-page__layout {
    grid-template-columns: minmax(0, 1fr) 294px;
    gap: 10px;
  }
}

@media (max-width: 1199px) {
  .technology-page {
    min-width: 0;
  }

  .technology-page__content {
    padding-block: 24px 40px;
  }

  .technology-page__layout {
    grid-template-columns: 1fr;
  }
}
</style>
