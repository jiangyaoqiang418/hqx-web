<script setup lang="ts">
defineProps<{
  metrics: Array<{
    value: string
    label: string
    icon: string
  }>
}>()

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="solutions-hero"
  >
    <div class="solutions-hero__bg" />
    <div class="site-container solutions-hero__inner">
      <div class="solutions-hero__copy">
        <h1 data-entrance>
          解决方案
        </h1>
        <p
          class="solutions-hero__subtitle"
          data-entrance
        >
          以数据驱动决策，用智能创造价值
        </p>
        <p
          class="solutions-hero__description"
          data-entrance
        >
          微恩熵算融合气象、能源、遥感与人工智能技术，为不同行业和场景提供全链条、全流程的数字化解决方案，助力客户实现智能化升级。
        </p>
      </div>

      <div
        class="solutions-hero__metrics"
        data-entrance
      >
        <div
          v-for="metric in metrics"
          :key="metric.label"
          class="solutions-hero__metric"
        >
          <NuxtImg
            :src="metric.icon"
            :alt="metric.label"
            width="42"
            height="42"
          />
          <div>
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.solutions-hero {
  position: relative;
  min-width: 1200px;
  height: 402px;
  overflow: hidden;
  border-bottom: 1px solid rgb(66 126 190 / 24%);
  background: #06142a;
}

.solutions-hero__bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 96%) 0%, rgb(3 12 29 / 75%) 38%, rgb(3 12 29 / 20%) 100%),
    linear-gradient(180deg, rgb(3 12 29 / 8%) 0%, rgb(3 12 29 / 78%) 100%),
    url('/images/solutions/hero-background.png') center 32% / cover no-repeat;
}

.solutions-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 780px;
  align-items: start;
  gap: 32px;
  padding-top: 136px;
}

.solutions-hero__copy {
  max-width: 670px;
}

.solutions-hero h1 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.12;
}

.solutions-hero__subtitle {
  margin: 8px 0 0;
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 600;
  line-height: 1.35;
}

.solutions-hero__description {
  max-width: 650px;
  margin: 22px 0 0;
  color: var(--color-text-secondary);
  font-size: 15px;
  line-height: 2;
}

.solutions-hero__metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-self: end;
  margin-bottom: 54px;
  padding: 14px 72px 13px 52px;
  background: linear-gradient(105deg, rgb(4 17 38 / 28%), rgb(7 33 72 / 72%));
  clip-path: polygon(6% 0, 100% 0, 95% 100%, 0 100%);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 9%);
}

.solutions-hero__metric {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  min-width: 0;
}

.solutions-hero__metric + .solutions-hero__metric {
  border-left: 1px solid rgb(177 184 199 / 22%);
  padding-left: 24px;
}

.solutions-hero__metric img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.solutions-hero__metric strong {
  display: block;
  color: var(--color-accent-cyan);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  white-space: nowrap;
}

.solutions-hero__metric span {
  display: block;
  margin-top: 5px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.1;
  white-space: nowrap;
}

@media (max-width: 1439px) {
  .solutions-hero {
    height: 370px;
  }

  .solutions-hero__inner {
    grid-template-columns: 1fr 650px;
    gap: 24px;
    padding-top: 126px;
  }

  .solutions-hero h1 {
    font-size: 38px;
  }

  .solutions-hero__subtitle {
    font-size: 20px;
  }

  .solutions-hero__description {
    max-width: 560px;
    font-size: 14px;
    line-height: 1.9;
  }

  .solutions-hero__metrics {
    margin-bottom: 46px;
    padding: 13px 54px 12px 42px;
  }

  .solutions-hero__metric {
    gap: 10px;
  }

  .solutions-hero__metric + .solutions-hero__metric {
    padding-left: 16px;
  }

  .solutions-hero__metric img {
    width: 36px;
    height: 36px;
  }

  .solutions-hero__metric strong {
    font-size: 20px;
  }

  .solutions-hero__metric span {
    font-size: 12px;
  }
}
</style>
