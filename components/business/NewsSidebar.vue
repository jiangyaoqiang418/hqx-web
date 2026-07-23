<script setup lang="ts">
import type { NewsDocument } from '~/types/site'

defineProps<{
  articles: Array<NewsDocument & { path: string }>
}>()

const email = ref('')
const message = ref('')

const subscribe = () => {
  message.value = email.value ? '订阅服务暂未接入，请关注后续动态。' : '请输入您的邮箱地址。'
}
</script>

<template>
  <aside class="news-sidebar">
    <section class="news-sidebar__headlines">
      <div class="news-sidebar__heading"><h2>公司要闻</h2><NuxtLink to="#news-list">查看更多 <span>→</span></NuxtLink></div>
      <ol>
        <li
          v-for="article in articles.slice(0, 6)"
          :key="article.path"
        >
          <time :datetime="article.publishedAt">{{ article.publishedAt.slice(5).replace('-', '-') }}</time>
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </li>
      </ol>
    </section>
    <section class="news-sidebar__subscribe">
      <NuxtImg
        src="/images/news/subscribe.png"
        alt=""
        width="42"
        height="42"
      />
      <div><h2>订阅我们的资讯</h2><p>第一时间获取公司最新动态与行业洞察</p></div>
      <form @submit.prevent="subscribe">
        <input
          v-model="email"
          type="email"
          aria-label="订阅邮箱"
          placeholder="请输入您的邮箱地址"
        >
        <button type="submit" aria-label="订阅资讯"><NuxtImg src="/images/news/send.png" alt="" width="18" height="18" /></button>
      </form>
      <p
        v-if="message"
        class="news-sidebar__message"
        role="status"
      >{{ message }}</p>
    </section>
  </aside>
</template>

<style scoped>
.news-sidebar {
  display: grid;
  align-content: start;
  gap: 12px;
}

.news-sidebar section {
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.news-sidebar__headlines {
  padding: 15px 18px;
}

.news-sidebar__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.news-sidebar h2,
.news-sidebar p {
  margin: 0;
}

.news-sidebar h2 {
  color: var(--color-text-primary);
  font-size: 17px;
  font-weight: 600;
}

.news-sidebar__heading a {
  color: var(--color-text-secondary);
  font-size: 11px;
}

.news-sidebar__heading span {
  margin-left: 5px;
  color: var(--color-accent-cyan);
}

.news-sidebar ol {
  display: grid;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

.news-sidebar li {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 8px;
  align-items: center;
  min-width: 0;
}

.news-sidebar li::before {
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent-cyan);
  box-shadow: 0 0 7px var(--color-accent-cyan);
  content: '';
}

.news-sidebar time {
  padding-left: 15px;
  color: #9fc8fb;
  font-size: 11px;
}

.news-sidebar li a {
  overflow: hidden;
  color: var(--color-text-secondary);
  font-size: 11px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-sidebar li a:hover {
  color: var(--color-accent-cyan);
}

.news-sidebar__subscribe {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  padding: 15px 18px;
}

.news-sidebar__subscribe > img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.news-sidebar__subscribe h2 {
  font-size: 16px;
}

.news-sidebar__subscribe p {
  margin-top: 3px;
  color: var(--color-text-secondary);
  font-size: 10px;
}

.news-sidebar__subscribe form {
  display: flex;
  grid-column: span 2;
  margin-top: 2px;
}

.news-sidebar__subscribe input {
  min-width: 0;
  height: 34px;
  flex: 1;
  padding: 0 10px;
  border: 1px solid rgb(55 119 191 / 64%);
  border-radius: 4px 0 0 4px;
  outline: none;
  color: var(--color-text-primary);
  background: rgb(3 24 55 / 78%);
  font-size: 11px;
}

.news-sidebar__subscribe input:focus {
  border-color: var(--color-border-active);
}

.news-sidebar__subscribe button {
  display: grid;
  width: 42px;
  place-items: center;
  border: 0;
  border-radius: 0 4px 4px 0;
  background: linear-gradient(100deg, var(--color-action-start), var(--color-action-end));
  cursor: pointer;
}

.news-sidebar__subscribe button img {
  width: 16px;
  height: 16px;
}

.news-sidebar__message {
  grid-column: span 2;
  margin-top: -4px !important;
  color: var(--color-warning) !important;
}
</style>
