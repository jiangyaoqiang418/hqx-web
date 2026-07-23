<script setup lang="ts">
interface HomeMetric {
  value: string
  label: string
  icon: string
}

defineProps<{
  metrics: HomeMetric[]
}>()
</script>

<template>
  <section
    class="home-metrics"
    aria-label="服务数据"
  >
    <div class="site-container home-metrics__grid">
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="home-metric"
        data-entrance
      >
        <NuxtImg
          :src="metric.icon"
          width="64"
          height="64"
          alt=""
          loading="lazy"
        />
        <div>
          <strong>{{ metric.value }}</strong>
          <span>{{ metric.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-metrics {
  height: 88px;
  border-top: 1px solid rgb(39 91 151 / 36%);
  border-bottom: 1px solid rgb(39 91 151 / 46%);
  background: #03152f;
}

.home-metrics__grid {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.home-metric {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.home-metric:not(:last-child)::after {
  position: absolute;
  top: 22px;
  right: 0;
  width: 1px;
  height: 44px;
  background: rgb(108 137 172 / 36%);
  content: '';
}

.home-metric img {
  width: 52px;
  height: 52px;
}

.home-metric div {
  display: grid;
  line-height: 1.15;
}

.home-metric strong {
  color: #00e6ef;
  font-size: 25px;
  font-weight: 500;
}

.home-metric span {
  margin-top: 5px;
  color: rgb(255 255 255 / 80%);
  font-size: 13px;
  white-space: nowrap;
}

@media (max-width: 1439px) {
  .home-metric {
    gap: 12px;
  }

  .home-metric img {
    width: 42px;
    height: 42px;
  }

  .home-metric strong {
    font-size: 22px;
  }

  .home-metric span {
    font-size: 12px;
  }
}
</style>
