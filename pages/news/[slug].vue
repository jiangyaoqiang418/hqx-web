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
        headline: resolvedArticle.title,
        description: resolvedArticle.description,
        image: resolvedArticle.cover,
        datePublished: resolvedArticle.publishedAt,
        dateModified: resolvedArticle.updatedAt || resolvedArticle.publishedAt,
        author: { '@type': 'Organization', name: resolvedArticle.department },
      }),
    },
  ],
})
</script>

<template>
  <article class="news-article-page">
    <NewsArticleHero :article="resolvedArticle" />
    <main class="news-article-page__content">
      <div class="news-article-page__container">
        <NuxtImg
          v-if="resolvedArticle.cover"
          :src="resolvedArticle.cover"
          :alt="resolvedArticle.title"
          width="1000"
          height="500"
          class="news-article-page__cover"
        />
        <ContentRenderer :value="resolvedArticle" class="news-article-page__body" />
        <div class="news-article-page__footer">
          <NuxtLink to="/news">← 返回新闻动态</NuxtLink>
        </div>
      </div>
    </main>
  </article>
</template>

<style scoped>
.news-article-page {
  min-width: 1200px;
  background: #04142c;
}

.news-article-page__content {
  padding: 36px 0 64px;
}

.news-article-page__container {
  width: min(calc(100% - 32px), 900px);
  margin-inline: auto;
}

.news-article-page__cover {
  display: block;
  width: 100%;
  max-height: 450px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  object-fit: cover;
}

.news-article-page__body {
  color: var(--color-text-secondary);
  font-size: 16px;
  line-height: 2;
}

.news-article-page__body :deep(p) {
  margin: 24px 0 0;
}

.news-article-page__footer {
  margin-top: 38px;
  padding-top: 18px;
  border-top: 1px solid rgb(52 118 194 / 42%);
}

.news-article-page__footer a {
  color: var(--color-accent-cyan);
  font-size: 14px;
}

@media (max-width: 1199px) {
  .news-article-page {
    min-width: 0;
  }
}

@media (max-width: 767px) {
  .news-article-page__content {
    padding-block: 24px 40px;
  }

  .news-article-page__body {
    font-size: 15px;
  }
}
</style>
