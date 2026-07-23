<script setup lang="ts">
import type { NewsDocument } from '~/types/site'

type Article = NewsDocument & { path: string }

defineProps<{
  featured: Article
  highlights: Article[]
}>()

const formatDate = (date: string) => date.replaceAll('-', '.')
</script>

<template>
  <section class="news-hero">
    <div class="news-hero__background" />
    <div class="site-container news-hero__inner">
      <div class="news-hero__copy">
        <h1>新闻动态</h1>
        <h2>洞察行业趋势，分享创新成果</h2>
        <p>关注微恩熵算的最新动态，了解公司发展、产品更新、技术突破与行业洞察，与我们一起探索气象与能源的无限可能。</p>
      </div>
      <article class="news-hero__feature">
        <NuxtImg
          :src="featured.cover"
          :alt="featured.title"
          width="600"
          height="300"
          preload
        />
        <div>
          <span>{{ featured.category }}</span>
          <h2>{{ featured.title }}</h2>
          <p>{{ featured.description }}</p>
          <time :datetime="featured.publishedAt">{{ formatDate(featured.publishedAt) }}</time>
          <NuxtLink
            :to="featured.path"
            :aria-label="`阅读：${featured.title}`"
          >→</NuxtLink>
        </div>
      </article>
      <div class="news-hero__highlights">
        <article
          v-for="article in highlights"
          :key="article.path"
        >
          <NuxtImg
            :src="article.cover"
            :alt="article.title"
            width="100"
            height="72"
            loading="lazy"
          />
          <div>
            <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
            <p>{{ article.description }}</p>
            <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
          </div>
          <NuxtLink
            class="news-hero__highlight-link"
            :to="article.path"
            :aria-label="`阅读：${article.title}`"
          >→</NuxtLink>
        </article>
        <NuxtLink
          class="news-hero__more"
          to="#news-list"
        >查看更多 <span>→</span></NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-hero {
  position: relative;
  min-width: 1200px;
  height: 420px;
  overflow: hidden;
  background: #031127;
}

.news-hero__background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 88%) 0%, rgb(3 12 29 / 34%) 43%, rgb(3 12 29 / 28%) 100%),
    linear-gradient(180deg, rgb(3 12 29 / 7%) 0%, rgb(3 12 29 / 70%) 100%),
    url('/images/news/hero-background.png') center / cover no-repeat;
}

.news-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 306px minmax(410px, 1fr) minmax(370px, 0.88fr);
  align-items: center;
  gap: 28px;
  padding-top: 52px;
}

.news-hero__copy h1,
.news-hero__copy h2,
.news-hero__copy p,
.news-hero__feature h2,
.news-hero__feature p {
  margin: 0;
}

.news-hero__copy h1 {
  color: var(--color-text-primary);
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
}

.news-hero__copy h2 {
  margin-top: 9px;
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
}

.news-hero__copy p {
  margin-top: 14px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.85;
}

.news-hero__feature {
  position: relative;
  height: 356px;
  overflow: hidden;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: #071e43;
}

.news-hero__feature > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-hero__feature > div {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  min-height: 160px;
  padding: 18px 20px;
  background: linear-gradient(180deg, transparent 0%, rgb(3 16 39 / 96%) 23%);
}

.news-hero__feature span {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: 14px;
  color: #b9edff;
  background: rgb(8 118 198 / 64%);
  font-size: 11px;
}

.news-hero__feature h2 {
  margin-top: 12px;
  color: var(--color-text-primary);
  font-size: 19px;
  font-weight: 600;
}

.news-hero__feature p {
  display: -webkit-box;
  overflow: hidden;
  margin-top: 6px;
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.news-hero__feature time {
  display: block;
  margin-top: 12px;
  color: var(--color-text-secondary);
  font-size: 11px;
}

.news-hero__feature > div > a {
  position: absolute;
  right: 20px;
  bottom: 16px;
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid rgb(75 130 209 / 70%);
  border-radius: 50%;
  color: var(--color-text-primary);
  font-size: 26px;
  line-height: 1;
}

.news-hero__highlights {
  min-height: 356px;
  padding: 8px 20px 12px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: rgb(3 22 54 / 72%);
}

.news-hero__highlights > article {
  display: grid;
  grid-template-columns: 100px minmax(0, 1fr) 26px;
  gap: 12px;
  align-items: center;
  min-height: 90px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(177 184 199 / 14%);
}

.news-hero__highlights img {
  width: 100px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
}

.news-hero__highlights a {
  color: var(--color-text-primary);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.45;
}

.news-hero__highlights p,
.news-hero__highlights time {
  display: block;
  overflow: hidden;
  margin: 4px 0 0;
  color: var(--color-text-secondary);
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-hero__highlights time {
  margin-top: 5px;
}

.news-hero__highlight-link {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
  border: 1px solid rgb(75 130 209 / 56%);
  border-radius: 50%;
  font-size: 17px !important;
}

.news-hero__more {
  display: inline-flex;
  gap: 8px;
  margin-top: 12px;
  color: var(--color-accent-cyan) !important;
  font-size: 12px !important;
}

@media (max-width: 1439px) {
  .news-hero {
    height: 386px;
  }

  .news-hero__inner {
    grid-template-columns: 270px minmax(350px, 1fr) minmax(300px, 0.84fr);
    gap: 18px;
  }

  .news-hero__copy h1 {
    font-size: 36px;
  }

  .news-hero__copy h2 {
    font-size: 17px;
  }

  .news-hero__copy p {
    font-size: 12px;
  }

  .news-hero__feature,
  .news-hero__highlights {
    min-height: 326px;
    height: 326px;
  }

  .news-hero__feature h2 {
    font-size: 16px;
  }

  .news-hero__highlights {
    padding-inline: 12px;
  }

  .news-hero__highlights > article {
    grid-template-columns: 76px minmax(0, 1fr) 22px;
    gap: 8px;
    min-height: 82px;
  }

  .news-hero__highlights img {
    width: 76px;
    height: 56px;
  }

  .news-hero__highlights a {
    font-size: 11px;
  }
}

@media (max-width: 1199px) {
  .news-hero {
    min-width: 0;
    height: auto;
  }

  .news-hero__inner {
    grid-template-columns: 1fr 1fr;
    padding-block: 112px 34px;
  }

  .news-hero__copy {
    grid-column: span 2;
    max-width: 580px;
  }
}

@media (max-width: 767px) {
  .news-hero__inner {
    grid-template-columns: 1fr;
    padding-block: 104px 32px;
  }

  .news-hero__copy {
    grid-column: auto;
  }

  .news-hero__copy h1 {
    font-size: 32px;
  }

  .news-hero__feature,
  .news-hero__highlights {
    height: auto;
    min-height: 0;
  }

  .news-hero__feature {
    height: 310px;
  }
}
</style>
