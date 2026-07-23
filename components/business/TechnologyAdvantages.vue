<script setup lang="ts">
type Advantage = {
  title: string
  description: string
  icon: string
}

defineProps<{
  advantages: Advantage[]
}>()
</script>

<template>
  <aside class="technology-advantages">
    <h2>技术优势</h2>
    <div class="technology-advantages__list">
      <article
        v-for="advantage in advantages"
        :key="advantage.title"
        class="technology-advantages__item"
      >
        <NuxtImg
          :src="advantage.icon"
          :alt="advantage.title"
          width="44"
          height="44"
        />
        <div>
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </div>
      </article>
    </div>
    <h2 class="technology-advantages__metrics-title">技术成果</h2>
    <div class="technology-advantages__metrics">
      <div><strong>1000+</strong><span>专利与软著</span></div>
      <div><strong>98%+</strong><span>预测准确率</span></div>
      <div><strong>500+</strong><span>算法模型</span></div>
      <div><strong>1000+</strong><span>项目成功落地</span></div>
    </div>
  </aside>
</template>

<style scoped>
.technology-advantages {
  padding: 18px 16px;
  border: 1px solid rgb(50 116 192 / 46%);
  border-radius: 7px;
  background: linear-gradient(150deg, rgb(7 31 68 / 88%), rgb(3 20 48 / 88%));
}

.technology-advantages h2 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 700;
}

.technology-advantages__list {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.technology-advantages__item {
  display: grid;
  grid-template-columns: 44px 1fr;
  align-items: center;
  gap: 12px;
  min-height: 68px;
  padding: 9px 11px;
  border: 1px solid rgb(54 120 199 / 32%);
  border-radius: 6px;
  background: rgb(11 47 96 / 56%);
}

.technology-advantages__item img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.technology-advantages__item h3,
.technology-advantages__item p {
  margin: 0;
}

.technology-advantages__item h3 {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.technology-advantages__item p {
  margin-top: 3px;
  color: var(--color-text-secondary);
  font-size: 10px;
  line-height: 1.5;
}

.technology-advantages__metrics-title {
  margin-top: 16px !important;
}

.technology-advantages__metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  margin-top: 12px;
  border: 1px solid rgb(54 120 199 / 32%);
  border-radius: 6px;
  overflow: hidden;
  background: rgb(54 120 199 / 32%);
}

.technology-advantages__metrics div {
  display: grid;
  min-height: 62px;
  place-content: center;
  gap: 2px;
  background: rgb(5 28 63 / 94%);
  text-align: center;
}

.technology-advantages__metrics strong {
  color: var(--color-accent-cyan);
  font-size: 20px;
  line-height: 1.2;
}

.technology-advantages__metrics span {
  color: var(--color-text-secondary);
  font-size: 10px;
}

@media (max-width: 1439px) {
  .technology-advantages {
    padding: 14px 12px;
  }

  .technology-advantages h2 {
    font-size: 18px;
  }

  .technology-advantages__item {
    grid-template-columns: 36px 1fr;
    gap: 8px;
    min-height: 61px;
    padding: 7px;
  }

  .technology-advantages__item img {
    width: 34px;
    height: 34px;
  }

  .technology-advantages__item h3 {
    font-size: 12px;
  }

  .technology-advantages__item p {
    font-size: 9px;
  }
}

@media (max-width: 1199px) {
  .technology-advantages__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .technology-advantages__list {
    grid-template-columns: 1fr;
  }
}
</style>
