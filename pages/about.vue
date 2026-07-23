<script setup lang="ts">
const values = [
  ['客户至上', '以客户价值为核心，持续提供可靠、可落地的服务。'],
  ['专业专注', '深耕气象、能源、遥感和人工智能行业场景。'],
  ['创新驱动', '持续探索数据智能和行业应用的前沿技术。'],
  ['合作共赢', '保持开放协作，与客户及伙伴共同创造价值。'],
]

usePageSeo({
  title: '关于我们',
  description: '了解微恩熵算科技的企业定位、核心价值观、专业团队和发展方向。',
  path: '/about',
})
</script>

<template>
  <div>
    <PageHero
      title="关于我们"
      subtitle="用数据与智能，探索天气的未来，创造可持续的价值"
      description="微恩熵算是一家以新一代信息技术为核心，深度服务于商业气象与新能源发电等领域的高科技企业。"
      :metrics="[
        { value: '2021', unit: '年', label: '公司成立' },
        { value: '100', unit: '+', label: '专业技术团队' },
        { value: '50', unit: '+', label: '知识产权与专利' },
        { value: '1000', unit: '+', label: '成功服务项目' },
      ]"
      :primary-cta="{ label: '联系我们', to: '/contact' }"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="核心价值观"
          description="以客户价值为导向，以技术创新为驱动，为行业创造长期价值。"
        />
        <div class="content-grid">
          <BusinessCard
            v-for="([title, description]) in values"
            :key="title"
            :title="title"
            :description="description"
          />
        </div>
      </SectionContainer>
    </section>
  </div>
</template>
