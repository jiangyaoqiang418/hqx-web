<script setup lang="ts">
const metrics = [
  { value: '1000+', label: '成功应用项目', icon: 'i-lucide-layers-3' },
  { value: '20+', label: '覆盖行业', icon: 'i-lucide-building-2' },
  { value: '1000+', label: '服务客户', icon: 'i-lucide-users-round' },
  { value: '全球级', label: '数据能力覆盖', icon: 'i-lucide-globe-2' },
  { value: '7×24小时', label: '专业技术支持', icon: 'i-lucide-shield-check' },
]

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="scenarios-hero"
  >
    <div class="scenarios-hero__background" />
    <div class="site-container scenarios-hero__inner">
      <div class="scenarios-hero__copy">
        <h1 data-entrance>应用场景</h1>
        <h2 data-entrance>多领域深度应用，赋能行业智能化升级</h2>
        <p data-entrance>
          微恩熵算将气象、能源、遥感与人工智能技术深度融合，为政府、企业和行业客户提供专业、可靠、智能的数据与解决方案。
        </p>
      </div>
      <div
        class="scenarios-hero__metrics"
        data-entrance
      >
        <article
          v-for="metric in metrics"
          :key="metric.label"
          class="scenarios-hero__metric"
        >
          <UIcon
            :name="metric.icon"
            aria-hidden="true"
          />
          <div>
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scenarios-hero {
  position: relative;
  min-width: 1200px;
  height: 400px;
  overflow: hidden;
  background: #031127;
}

.scenarios-hero__background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 92%) 0%, rgb(3 12 29 / 50%) 36%, rgb(3 12 29 / 4%) 80%),
    linear-gradient(180deg, rgb(3 12 29 / 4%) 0%, rgb(3 12 29 / 68%) 100%),
    url('/images/scenarios/hero-background.png') center 44% / cover no-repeat;
}

.scenarios-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 450px 1fr;
  align-items: end;
  gap: 60px;
  padding-bottom: 34px;
}

.scenarios-hero__copy h1,
.scenarios-hero__copy h2,
.scenarios-hero__copy p {
  margin: 0;
}

.scenarios-hero__copy h1 {
  color: var(--color-text-primary);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.18;
}

.scenarios-hero__copy h2 {
  margin-top: 7px;
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.scenarios-hero__copy p {
  margin-top: 13px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.8;
}

.scenarios-hero__metrics {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  align-items: center;
}

.scenarios-hero__metric {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 0 12px;
}

.scenarios-hero__metric + .scenarios-hero__metric {
  border-left: 1px solid rgb(177 184 199 / 24%);
}

.scenarios-hero__metric svg {
  width: 34px;
  height: 34px;
  color: var(--color-accent-cyan);
}

.scenarios-hero__metric strong,
.scenarios-hero__metric span {
  display: block;
  white-space: nowrap;
}

.scenarios-hero__metric strong {
  color: #26b6ff;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.25;
}

.scenarios-hero__metric span {
  margin-top: 2px;
  color: var(--color-text-secondary);
  font-size: 11px;
}

@media (max-width: 1439px) {
  .scenarios-hero__inner {
    grid-template-columns: 392px 1fr;
    gap: 22px;
  }

  .scenarios-hero__copy h1 {
    font-size: 37px;
  }

  .scenarios-hero__copy h2 {
    font-size: 16px;
  }

  .scenarios-hero__copy p {
    font-size: 12px;
  }

  .scenarios-hero__metric {
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 5px;
    padding-inline: 7px;
  }

  .scenarios-hero__metric svg {
    width: 26px;
    height: 26px;
  }

  .scenarios-hero__metric strong {
    font-size: 15px;
  }

  .scenarios-hero__metric span {
    font-size: 9px;
  }
}

@media (max-width: 1199px) {
  .scenarios-hero {
    min-width: 0;
    height: auto;
    min-height: 420px;
  }

  .scenarios-hero__inner {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-block: 116px 34px;
  }

  .scenarios-hero__metrics {
    max-width: 900px;
  }
}

@media (max-width: 767px) {
  .scenarios-hero {
    min-height: 0;
  }

  .scenarios-hero__inner {
    padding-block: 105px 32px;
  }

  .scenarios-hero__copy h1 {
    font-size: 32px;
  }

  .scenarios-hero__copy h2 {
    font-size: 17px;
    line-height: 1.5;
  }

  .scenarios-hero__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .scenarios-hero__metric {
    padding: 0;
  }

  .scenarios-hero__metric + .scenarios-hero__metric {
    border-left: 0;
  }

  .scenarios-hero__metric:last-child {
    display: none;
  }
}
</style>
