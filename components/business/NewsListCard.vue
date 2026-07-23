<script setup lang="ts">
import type { NewsDocument } from '~/types/site'

defineProps<{
  article: NewsDocument & { path: string }
}>()

const formatDate = (date: string) => date.replaceAll('-', '.')
</script>

<template>
  <article class="news-list-card">
    <NuxtImg
      :src="article.cover"
      :alt="article.title"
      width="360"
      height="190"
      loading="lazy"
    />
    <div class="news-list-card__body">
      <span>{{ article.category }}</span>
      <h2><NuxtLink :to="article.path">{{ article.title }}</NuxtLink></h2>
      <p>{{ article.description }}</p>
      <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
      <NuxtLink
        :to="article.path"
        :aria-label="`阅读：${article.title}`"
      >→</NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.news-list-card {
  overflow: hidden;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.news-list-card:hover {
  border-color: var(--color-border-active);
  box-shadow: 0 0 22px rgb(1 236 244 / 12%);
  transform: translateY(-3px);
}

.news-list-card > img {
  display: block;
  width: 100%;
  height: 152px;
  object-fit: cover;
}

.news-list-card__body {
  position: relative;
  min-height: 174px;
  padding: 13px 14px;
}

.news-list-card span {
  display: inline-flex;
  padding: 3px 8px;
  border-radius: 12px;
  color: #a6e6ff;
  background: rgb(8 118 198 / 57%);
  font-size: 10px;
}

.news-list-card h2,
.news-list-card p {
  margin: 0;
}

.news-list-card h2 {
  margin-top: 10px;
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.news-list-card h2 a:hover {
  color: var(--color-accent-cyan);
}

.news-list-card p {
  display: -webkit-box;
  overflow: hidden;
  margin-top: 6px;
  color: var(--color-text-secondary);
  font-size: 11px;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-list-card time {
  position: absolute;
  bottom: 13px;
  left: 14px;
  color: var(--color-text-secondary);
  font-size: 11px;
}

.news-list-card__body > a {
  position: absolute;
  right: 14px;
  bottom: 10px;
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border: 1px solid rgb(75 130 209 / 56%);
  border-radius: 50%;
  color: var(--color-text-primary);
  font-size: 19px;
}

@media (max-width: 1439px) {
  .news-list-card > img {
    height: 126px;
  }

  .news-list-card__body {
    min-height: 158px;
    padding: 10px;
  }

  .news-list-card h2 {
    font-size: 14px;
  }

  .news-list-card p {
    font-size: 10px;
  }

  .news-list-card time {
    bottom: 10px;
    left: 10px;
    font-size: 10px;
  }

  .news-list-card__body > a {
    right: 10px;
    bottom: 8px;
  }
}
</style>
