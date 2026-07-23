<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData(`news:${route.path}`, () =>
  queryCollection('news').path(route.path).first(),
)

const resolvedArticle = article.value

if (!resolvedArticle) {
  throw createError({
    statusCode: 404,
    statusMessage: '未找到该新闻内容',
  })
}

usePageSeo({
  title: resolvedArticle.seoTitle || resolvedArticle.title,
  description: resolvedArticle.seoDescription || resolvedArticle.description,
  path: route.path,
  type: 'article',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': resolvedArticle.title,
        'description': resolvedArticle.description,
        'datePublished': resolvedArticle.publishedAt,
        'dateModified': resolvedArticle.updatedAt || resolvedArticle.publishedAt,
        'author': {
          '@type': 'Organization',
          'name': resolvedArticle.department,
        },
      }),
    },
  ],
})

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(new Date(date))
</script>

<template>
  <article class="article-page">
    <header class="article-header">
      <div class="site-container article-header__inner">
        <NuxtLink
          class="article-header__back"
          to="/news"
        >返回新闻动态</NuxtLink>
        <h1>{{ resolvedArticle.title }}</h1>
        <p>{{ resolvedArticle.description }}</p>
        <div class="article-header__meta">
          <span>{{ resolvedArticle.category }}</span>
          <time :datetime="resolvedArticle.publishedAt">{{ formatDate(resolvedArticle.publishedAt) }}</time>
          <span>{{ resolvedArticle.department }}</span>
        </div>
      </div>
    </header>
    <SectionContainer>
      <ContentRenderer
        class="article-content"
        :value="resolvedArticle"
      />
    </SectionContainer>
  </article>
</template>

<style scoped>
.article-header {
  padding-block: 5rem;
  border-bottom: 1px solid var(--color-border);
  background: radial-gradient(circle at 70% 0, rgb(2 128 242 / 18%), transparent 30rem);
}

.article-header__inner { max-width: 60rem; }
.article-header__back { color: var(--color-accent-cyan); }
.article-header h1 {
  margin: 1.5rem 0 0;
  color: var(--color-text-primary);
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}
.article-header p { margin: 1rem 0 0; color: var(--color-text-secondary); }
.article-header__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin-top: 1.5rem;
  color: var(--color-text-muted);
}
.article-content {
  max-width: 52rem;
  margin-inline: auto;
  padding-block: 4rem;
  color: var(--color-text-secondary);
}
</style>
