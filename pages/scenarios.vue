<script setup lang="ts">
const scenarios = [
  { index: '01', title: '新能源发电', description: '风电、光伏等新能源企业提供功率预测、资源评估、智能运维与电力交易辅助等全流程解决方案。', points: ['风光功率预测与交易辅助', '资源评估与选址', '智能运维与效率提升', '气象风险分析与预警'], image: '/images/scenarios/card-01.png', icon: '/images/scenarios/icon-01.png', accent: '#b9d92d' },
  { index: '02', title: '工程建设气象保障', description: '为大型工程项目提供精细化天气预报、气象风险评估与施工窗口期建议，保障工程安全高效推进。', points: ['施工气象保障', '极端天气预警', '施工窗口期推荐', '气候可行性论证'], image: '/images/scenarios/card-02.png', icon: '/images/scenarios/icon-02.png', accent: '#4b91e6' },
  { index: '03', title: '自然灾害监测预警', description: '多源数据融合、实时监测与智能研判，为防灾减灾提供精准预警与应急支持。', points: ['灾害监测与预警', '风险评估与影响分析', '应急指挥支持', '灾后评估与恢复分析'], image: '/images/scenarios/card-03.png', icon: '/images/scenarios/icon-03.png', accent: '#7568e3' },
  { index: '04', title: '卫星遥感监测', description: '提供遥感数据处理、目标识别、地表变化监测等服务，为资源管理与生态监测提供支撑。', points: ['遥感影像处理与分析', '地表变化监测', '目标识别与检测', '时空大数据可视化'], image: '/images/scenarios/card-04.png', icon: '/images/scenarios/icon-04.png', accent: '#17d4ca' },
  { index: '05', title: '政府与应急管理', description: '构建气象与应急指挥平台，提升城市安全管理、应急响应和决策的智能化水平。', points: ['气象监测与预警', '应急指挥调度', '风险管理与评估', '数据可视化大屏'], image: '/images/scenarios/card-05.png', icon: '/images/scenarios/icon-05.png', accent: '#27baa7' },
  { index: '06', title: '自然资源与生态环境', description: '通过遥感与大数据技术，助力自然资源监测、生态保护与环境治理的精细化管理。', points: ['生态环境监测', '土地利用变化监测', '水资源监测与评估', '矿产资源监测'], image: '/images/scenarios/card-06.png', icon: '/images/scenarios/icon-06.png', accent: '#e4b42d' },
  { index: '07', title: '交通运输保障', description: '提供道路、航空、航运等领域的气象保障与风险预警，提升交通运输安全与运营效率。', points: ['交通气象预报', '航空气象服务', '航运气象保障', '道路风险预警'], image: '/images/scenarios/card-07.png', icon: '/images/scenarios/icon-07.png', accent: '#e48627' },
  { index: '08', title: '农业气象服务', description: '为农业生产提供精准气象预报、灾害预警与农事建议，助力农业增产增收。', points: ['农业气象预报', '灾害预警与评估', '农事建议服务', '墒情监测支持'], image: '/images/scenarios/card-08.png', icon: '/images/scenarios/icon-08.png', accent: '#e77ca9' },
  { index: '09', title: '能源与工业企业', description: '为能源与工业企业提供气象监测、风险预警与智能运维服务，保障生产稳定运行。', points: ['气象风险预警', '设备运维优化', '能耗与效益分析', '安全生产保障'], image: '/images/scenarios/card-09.png', icon: '/images/scenarios/icon-09.png', accent: '#54a4ed' },
  { index: '10', title: '金融与保险服务', description: '将气象与遥感数据应用于金融与保险风险管理，提升风险评估与定价的科学性。', points: ['气象风险建模', '保险定价支持', '农业金融风控', '极端事件评估'], image: '/images/scenarios/card-10.png', icon: '/images/scenarios/icon-10.png', accent: '#82cc85' },
]

usePageSeo({
  title: '应用场景',
  description: '微恩熵算面向新能源、工程建设、灾害预警、遥感、政府、农业、交通、工业和金融保险提供行业服务。',
  path: '/scenarios',
})
</script>

<template>
  <div class="scenarios-page">
    <ScenariosHero />
    <main class="scenarios-page__content">
      <div class="site-container">
        <section class="scenarios-page__grid" aria-label="行业应用场景">
          <ScenarioCard
            v-for="scenario in scenarios"
            :key="scenario.index"
            :scenario="scenario"
          />
        </section>
        <ScenariosConsult />
      </div>
    </main>
  </div>
</template>

<style scoped>
.scenarios-page {
  min-width: 1200px;
  background:
    linear-gradient(rgb(3 16 39 / 70%), rgb(3 16 39 / 96%)),
    #03132d;
}

.scenarios-page__content {
  padding: 0 0 22px;
}

.scenarios-page__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
}

@media (max-width: 1439px) {
  .scenarios-page__grid {
    gap: 6px;
  }
}

@media (max-width: 1199px) {
  .scenarios-page {
    min-width: 0;
  }

  .scenarios-page__content {
    padding-block: 24px 40px;
  }

  .scenarios-page__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }
}

@media (max-width: 767px) {
  .scenarios-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
