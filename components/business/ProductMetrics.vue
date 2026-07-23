<script setup lang="ts">
defineProps<{
  metrics: Array<{
    value: string
    label: string
    icon: string
  }>
}>()
</script>

<template>
  <section class="product-metrics">
    <article
      v-for="metric in metrics"
      :key="metric.label"
      class="product-metrics__item"
    >
      <NuxtImg
        :src="metric.icon"
        :alt="metric.label"
        width="48"
        height="48"
        loading="lazy"
      />
      <div>
        <strong>{{ metric.value }}</strong>
        <span>{{ metric.label }}</span>
      </div>
    </article>
  </section>
</template>

<style scoped>
.product-metrics {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 0;
  height: 206px;
  padding: 24px 30px;
  border: 1px solid rgb(66 126 190 / 48%);
  border-radius: 8px;
  background: linear-gradient(145deg, rgb(7 29 64 / 92%), rgb(4 20 44 / 88%));
}

.product-metrics__item {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.product-metrics__item:nth-child(1),
.product-metrics__item:nth-child(2) {
  border-bottom: 1px solid rgb(177 184 199 / 12%);
}

.product-metrics__item:nth-child(2),
.product-metrics__item:nth-child(4) {
  padding-left: 14px;
}

.product-metrics__item img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.product-metrics__item strong {
  display: block;
  color: #3995ff;
  font-size: 25px;
  font-weight: 600;
  line-height: 1.1;
  white-space: nowrap;
}

.product-metrics__item:nth-child(4) strong {
  font-size: 20px;
}

.product-metrics__item span {
  display: block;
  margin-top: 7px;
  color: var(--color-text-secondary);
  font-size: 14px;
  white-space: nowrap;
}

@media (max-width: 1439px) {
  .product-metrics {
    height: 190px;
    padding: 22px 20px;
  }

  .product-metrics__item {
    gap: 10px;
  }

  .product-metrics__item:nth-child(2),
  .product-metrics__item:nth-child(4) {
    padding-left: 10px;
  }

  .product-metrics__item img {
    width: 38px;
    height: 38px;
  }

  .product-metrics__item strong {
    font-size: 22px;
  }

  .product-metrics__item:nth-child(4) strong {
    font-size: 18px;
  }

  .product-metrics__item span {
    font-size: 12px;
  }
}
</style>
