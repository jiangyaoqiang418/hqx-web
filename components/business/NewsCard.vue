<script setup lang="ts">
import type { NewsDocument } from '~/types/site'

defineProps<{
  article: NewsDocument & { path: string }
}>()

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { dateStyle: 'medium' }).format(new Date(date))
</script>

<template>
  <article class="news-card">
    <NuxtImg
      v-if="article.cover"
      class="news-card__cover"
      :src="article.cover"
      :alt="`${article.title}封面`"
      width="520"
      height="300"
      loading="lazy"
    />
    <div class="news-card__body">
      <div class="news-card__meta">
        <span>{{ article.category }}</span>
        <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
      </div>
      <h2>
        <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
      </h2>
      <p>{{ article.description }}</p>
      <BaseButton
        :to="article.path"
        variant="text"
      >
        阅读全文
      </BaseButton>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: var(--color-bg-card);
}

.news-card__cover {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.news-card__body {
  padding: 1.5rem;
}

.news-card__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: var(--color-accent-cyan);
  font-size: 0.875rem;
}

.news-card h2 {
  margin: 1rem 0 0;
  color: var(--color-text-primary);
  font-size: 1.25rem;
}

.news-card h2 a:hover {
  color: var(--color-accent-cyan);
}

.news-card p {
  display: -webkit-box;
  overflow: hidden;
  margin: 0.75rem 0;
  color: var(--color-text-muted);
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
