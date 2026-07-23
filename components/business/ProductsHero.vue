<script setup lang="ts">
defineProps<{
  features: Array<{
    title: string
    description: string
    icon: string
  }>
}>()

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="products-hero"
  >
    <div class="products-hero__bg" />
    <div class="site-container products-hero__inner">
      <div class="products-hero__copy">
        <h1 data-entrance>
          产品中心
        </h1>
        <p data-entrance>
          以数据为基础，算法为核心，打造覆盖气象预报、新能源预测、遥感智能与数字化管理的产品体系，为客户提供高效、精准、智能的一体化产品与服务。
        </p>
      </div>
      <div
        class="products-hero__features"
        data-entrance
      >
        <article
          v-for="feature in features"
          :key="feature.title"
          class="products-hero__feature"
        >
          <NuxtImg
            :src="feature.icon"
            :alt="feature.title"
            width="46"
            height="46"
          />
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products-hero {
  position: relative;
  min-width: 1200px;
  height: 330px;
  overflow: hidden;
  background: #06142a;
}

.products-hero__bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 96%) 0%, rgb(3 12 29 / 66%) 42%, rgb(3 12 29 / 12%) 100%),
    linear-gradient(180deg, rgb(3 12 29 / 6%) 0%, rgb(3 12 29 / 70%) 100%),
    url('/images/products/hero-background.png') center 42% / cover no-repeat;
}

.products-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 670px 1fr;
  align-items: end;
  gap: 60px;
  padding-bottom: 52px;
}

.products-hero__copy h1 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 46px;
  font-weight: 700;
  line-height: 1.12;
}

.products-hero__copy p {
  max-width: 650px;
  margin: 18px 0 0;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 2;
}

.products-hero__features {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  padding-bottom: 8px;
}

.products-hero__feature {
  position: relative;
  min-width: 0;
  padding-left: 24px;
}

.products-hero__feature + .products-hero__feature {
  border-left: 1px solid rgb(177 184 199 / 13%);
}

.products-hero__feature img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.products-hero__feature h2 {
  margin: 8px 0 0;
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.products-hero__feature p {
  margin: 3px 0 0;
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.45;
  white-space: nowrap;
}
</style>
