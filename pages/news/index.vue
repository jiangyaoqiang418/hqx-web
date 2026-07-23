<script setup lang="ts">
const { data: articles, status, error } = await useAsyncData('news-list', () =>
  queryCollection('news').order('publishedAt', 'DESC').all(),
)

const selectedCategory = ref('全部动态')
const keyword = ref('')
const categories = ['全部动态', '公司动态', '产品更新', '技术创新', '行业洞察', '活动资讯']

const orderedArticles = computed(() => articles.value ?? [])
const featured = computed(() => orderedArticles.value.find(article => article.featured) ?? orderedArticles.value[0])
const highlights = computed(() => orderedArticles.value.filter(article => article.path !== featured.value?.path).slice(0, 3))
const filteredArticles = computed(() => {
  const normalizedKeyword = keyword.value.trim().toLowerCase()
  return orderedArticles.value.filter((article) => {
    const categoryMatches = selectedCategory.value === '全部动态' || article.category === selectedCategory.value
    const textMatches = !normalizedKeyword || `${article.title}${article.description}`.toLowerCase().includes(normalizedKeyword)
    return categoryMatches && textMatches && article.path !== featured.value?.path
  })
})

usePageSeo({
  title: '新闻动态',
  description: '关注微恩熵算最新动态、产品更新、技术成果与气象能源行业洞察。',
  path: '/news',
})
</script>

<template>
  <div class="news-page">
    <NewsHero
      v-if="featured"
      :featured="featured"
      :highlights="highlights"
    />
    <main
      id="news-list"
      class="news-page__content"
    >
      <div class="site-container news-page__layout">
        <section class="news-page__list">
          <div class="news-page__filters">
            <div role="tablist" aria-label="新闻分类">
              <button
                v-for="category in categories"
                :key="category"
                type="button"
                :class="{ 'is-active': selectedCategory === category }"
                :aria-selected="selectedCategory === category"
                @click="selectedCategory = category"
              >{{ category }}</button>
            </div>
            <label>
              <span class="sr-only">搜索新闻</span>
              <input v-model="keyword" type="search" placeholder="输入关键词搜索">
              <UIcon name="i-lucide-search" aria-hidden="true" />
            </label>
          </div>
          <LoadingSkeleton v-if="status === 'pending'" />
          <EmptyState
            v-else-if="error"
            title="新闻加载失败"
            description="当前无法获取新闻内容，请稍后再试。"
          />
          <EmptyState
            v-else-if="!filteredArticles.length"
            title="没有匹配的新闻"
            description="请尝试调整分类或搜索关键词。"
          />
          <div v-else class="news-page__grid">
            <NewsListCard
              v-for="article in filteredArticles"
              :key="article.path"
              :article="article"
            />
          </div>
        </section>
        <NewsSidebar :articles="orderedArticles" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.news-page {
  min-width: 1200px;
  background: #04142c;
}

.news-page__content {
  padding: 16px 0 30px;
}

.news-page__layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  align-items: start;
  gap: 26px;
}

.news-page__filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 15px;
}

.news-page__filters > div {
  display: flex;
  overflow: hidden;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 5px;
}

.news-page__filters button {
  min-width: 94px;
  height: 40px;
  padding: 0 14px;
  border: 0;
  border-right: 1px solid rgb(52 118 194 / 36%);
  color: var(--color-text-secondary);
  background: rgb(3 24 55 / 66%);
  font-size: 12px;
  cursor: pointer;
}

.news-page__filters button:last-child {
  border-right: 0;
}

.news-page__filters button:hover,
.news-page__filters button.is-active {
  color: var(--color-text-primary);
  background: linear-gradient(100deg, var(--color-action-start), var(--color-action-end));
}

.news-page__filters label {
  position: relative;
  display: block;
  width: 188px;
}

.news-page__filters input {
  width: 100%;
  height: 40px;
  padding: 0 36px 0 12px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 5px;
  outline: none;
  color: var(--color-text-primary);
  background: rgb(3 24 55 / 66%);
  font-size: 12px;
}

.news-page__filters input:focus {
  border-color: var(--color-border-active);
}

.news-page__filters svg {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 16px;
  height: 16px;
  color: var(--color-text-secondary);
}

.news-page__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

@media (max-width: 1439px) {
  .news-page__layout {
    grid-template-columns: minmax(0, 1fr) 278px;
    gap: 16px;
  }

  .news-page__filters button {
    min-width: 72px;
    padding-inline: 8px;
    font-size: 11px;
  }

  .news-page__filters label {
    width: 160px;
  }

  .news-page__grid {
    gap: 8px;
  }
}

@media (max-width: 1199px) {
  .news-page {
    min-width: 0;
  }

  .news-page__content {
    padding-block: 24px 40px;
  }

  .news-page__layout {
    grid-template-columns: 1fr;
  }

  .news-page__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .news-page__filters {
    display: grid;
  }

  .news-page__filters > div {
    overflow-x: auto;
  }

  .news-page__filters label {
    width: 100%;
  }

  .news-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
