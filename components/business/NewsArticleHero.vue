<script setup lang="ts">
import type { NewsDocument } from '~/types/site'

defineProps<{
  article: NewsDocument & { path: string }
}>()

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { dateStyle: 'long' }).format(new Date(date))
</script>

<template>
  <header class="news-article-hero">
    <div class="news-article-hero__background" />
    <div class="site-container news-article-hero__inner">
      <NuxtLink class="news-article-hero__back" to="/news">← 返回新闻动态</NuxtLink>
      <span>{{ article.category }}</span>
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <div class="news-article-hero__meta">
        <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        <span>{{ article.department }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.news-article-hero {
  position: relative;
  min-width: 1200px;
  overflow: hidden;
  background: #031127;
}

.news-article-hero__background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 92%), rgb(3 12 29 / 60%)),
    url('/images/news/hero-background.png') center / cover no-repeat;
  opacity: 0.86;
}

.news-article-hero__inner {
  position: relative;
  max-width: 1050px;
  padding-block: 150px 56px;
}

.news-article-hero__back {
  display: inline-flex;
  margin-bottom: 18px;
  color: var(--color-accent-cyan);
  font-size: 13px;
}

.news-article-hero__inner > span {
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 13px;
  color: #b9edff;
  background: rgb(8 118 198 / 64%);
  font-size: 11px;
}

.news-article-hero h1,
.news-article-hero p {
  margin: 0;
}

.news-article-hero h1 {
  max-width: 850px;
  margin-top: 14px;
  color: var(--color-text-primary);
  font-size: 38px;
  font-weight: 700;
  line-height: 1.28;
}

.news-article-hero p {
  max-width: 760px;
  margin-top: 14px;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 1.8;
}

.news-article-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 22px;
  color: var(--color-text-secondary);
  font-size: 12px;
}

.news-article-hero__meta span {
  padding-left: 20px;
  border-left: 1px solid rgb(177 184 199 / 30%);
}

@media (max-width: 1199px) {
  .news-article-hero {
    min-width: 0;
  }
}

@media (max-width: 767px) {
  .news-article-hero__inner {
    padding-block: 116px 40px;
  }

  .news-article-hero h1 {
    font-size: 28px;
  }

  .news-article-hero p {
    font-size: 14px;
  }
}
</style>
