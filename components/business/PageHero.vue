<script setup lang="ts">
import type { PageHeroProps } from '~/types/site'

defineProps<PageHeroProps>()

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="page-hero"
  >
    <div
      class="page-hero__globe"
      aria-hidden="true"
    />
    <div class="site-container page-hero__inner">
      <div class="page-hero__copy">
        <h1 data-entrance>
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="page-hero__subtitle"
          data-entrance
        >
          {{ subtitle }}
        </p>
        <p
          class="page-hero__description"
          data-entrance
        >
          {{ description }}
        </p>
        <div
          v-if="primaryCta || secondaryCta"
          class="page-hero__actions"
          data-entrance
        >
          <BaseButton
            v-if="primaryCta"
            :to="primaryCta.to"
          >
            {{ primaryCta.label }}
          </BaseButton>
          <BaseButton
            v-if="secondaryCta"
            :to="secondaryCta.to"
            variant="secondary"
          >
            {{ secondaryCta.label }}
          </BaseButton>
        </div>
      </div>

      <div
        v-if="metrics?.length"
        class="page-hero__metrics"
        data-entrance
      >
        <MetricItem
          v-for="metric in metrics"
          :key="metric.label"
          :metric="metric"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 28rem;
  border-bottom: 1px solid var(--color-border);
  background:
    radial-gradient(circle at 72% 40%, rgb(2 128 242 / 24%), transparent 18rem),
    linear-gradient(110deg, rgb(4 12 28 / 96%) 24%, rgb(4 20 44 / 70%));
}

.page-hero::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image:
    linear-gradient(rgb(1 236 244 / 5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(1 236 244 / 5%) 1px, transparent 1px);
  background-size: 4rem 4rem;
  content: '';
  mask-image: linear-gradient(90deg, transparent, black 60%, transparent);
}

.page-hero__globe {
  position: absolute;
  z-index: -1;
  top: 50%;
  right: 8%;
  width: min(38vw, 32rem);
  aspect-ratio: 1;
  border: 1px solid rgb(1 236 244 / 30%);
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 35%, rgb(1 236 244 / 18%), transparent 35%),
    repeating-radial-gradient(circle, transparent 0 2.8rem, rgb(1 236 244 / 8%) 3rem);
  box-shadow: 0 0 5rem rgb(2 128 242 / 14%);
  opacity: 0.72;
  transform: translateY(-50%);
}

.page-hero__inner {
  display: grid;
  min-height: inherit;
  grid-template-columns: minmax(0, 1.15fr) minmax(18rem, 0.85fr);
  align-items: center;
  gap: 3rem;
  padding-block: 4rem;
}

.page-hero__copy {
  max-width: 46rem;
}

.page-hero h1 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
}

.page-hero__subtitle {
  margin: 1rem 0 0;
  color: var(--color-text-primary);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 600;
}

.page-hero__description {
  max-width: 42rem;
  margin: 1rem 0 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.8;
}

.page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.page-hero__metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1023px) {
  .page-hero__inner {
    grid-template-columns: 1fr;
  }

  .page-hero__metrics {
    max-width: 42rem;
  }

  .page-hero__globe {
    right: -10%;
    width: 28rem;
    opacity: 0.4;
  }
}

@media (max-width: 767px) {
  .page-hero {
    min-height: 26rem;
  }

  .page-hero__inner {
    align-content: center;
    gap: 2rem;
    padding-block: 3rem;
  }

  .page-hero h1 {
    max-width: 10ch;
  }

  .page-hero__description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  .page-hero__actions > :deep(:not(:first-child)) {
    display: none;
  }

  .page-hero__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
