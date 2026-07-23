<script setup lang="ts">
const { data: articles, status, error } = await useAsyncData('news-list', () =>
  queryCollection('news').order('publishedAt', 'DESC').all(),
)

usePageSeo({
  title: '新闻动态',
  description: '关注微恩熵算最新动态、产品更新、技术成果与气象能源行业洞察。',
  path: '/news',
})
</script>

<template>
  <div>
    <PageHero
      title="新闻动态"
      subtitle="洞察行业趋势，分享创新成果"
      description="关注微恩熵算的最新动态、产品更新、技术突破与行业洞察，与我们一起探索气象与能源的无限可能。"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="最新动态"
          description="了解公司发展、产品能力和行业实践。"
        />
        <LoadingSkeleton v-if="status === 'pending'" />
        <EmptyState
          v-else-if="error"
          title="新闻加载失败"
          description="当前无法获取新闻内容，请稍后再试。"
        />
        <EmptyState
          v-else-if="!articles?.length"
          title="暂无新闻内容"
          description="正式新闻内容接入后将在这里发布。"
        />
        <div
          v-else
          class="news-grid"
        >
          <NewsCard
            v-for="article in articles"
            :key="article.path"
            :article="article"
          />
        </div>
      </SectionContainer>
    </section>
  </div>
</template>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1199px) {
  .news-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 767px) {
  .news-grid { grid-template-columns: 1fr; }
}
</style>
