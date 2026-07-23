<script setup lang="ts">
const features = [
  { title: '多源数据融合', icon: '/images/technology/feature-data.png' },
  { title: 'AI智能算法', icon: '/images/technology/feature-ai.png' },
  { title: '数字化平台', icon: '/images/technology/feature-platform.png' },
  { title: '行业应用落地', icon: '/images/technology/feature-applications.png' },
]

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="technology-hero"
  >
    <div class="technology-hero__background" />
    <div class="site-container technology-hero__inner">
      <div class="technology-hero__copy">
        <h1 data-entrance>
          技术能力
        </h1>
        <h2 data-entrance>
          数据 + 算法 + 平台，构建全栈技术壁垒
        </h2>
        <p data-entrance>
          微恩熵算拥有多源数据融合、AI算法研发、卫星遥感智能分析与数字化平台开发的全栈技术能力，为行业客户提供高精度、高可靠、可落地的产品与<span class="technology-hero__nowrap">服务</span>。
        </p>
      </div>
      <div
        class="technology-hero__features"
        data-entrance
      >
        <article
          v-for="feature in features"
          :key="feature.title"
          class="technology-hero__feature"
        >
          <NuxtImg
            :src="feature.icon"
            :alt="feature.title"
            width="62"
            height="62"
          />
          <h3>{{ feature.title }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology-hero {
  position: relative;
  min-width: 1200px;
  height: 400px;
  overflow: hidden;
  background: #031127;
}

.technology-hero__background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 95%) 0%, rgb(3 12 29 / 68%) 31%, rgb(3 12 29 / 8%) 76%),
    linear-gradient(180deg, rgb(3 12 29 / 12%), rgb(3 12 29 / 68%)),
    url('/images/technology/hero-background.png') center 45% / cover no-repeat;
}

.technology-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 460px minmax(0, 1fr);
  align-items: end;
  gap: 54px;
  padding-bottom: 32px;
}

.technology-hero__copy h1,
.technology-hero__copy h2,
.technology-hero__copy p {
  margin: 0;
}

.technology-hero__nowrap {
  white-space: nowrap;
}

.technology-hero__copy h1 {
  color: var(--color-text-primary);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.18;
}

.technology-hero__copy h2 {
  margin-top: 8px;
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 600;
}

.technology-hero__copy p {
  margin-top: 14px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.85;
}

.technology-hero__features {
  display: grid;
  width: min(100%, 900px);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  justify-self: end;
  padding-top: 54px;
}

.technology-hero__feature {
  display: grid;
  min-width: 0;
  justify-items: center;
  text-align: center;
}

.technology-hero__feature img {
  width: 62px;
  height: 62px;
  object-fit: contain;
}

.technology-hero__feature h3 {
  margin: 7px 0 0;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

@media (max-width: 1439px) {
  .technology-hero__inner {
    grid-template-columns: 400px 1fr;
    gap: 28px;
  }

  .technology-hero__copy h1 {
    font-size: 38px;
  }

  .technology-hero__copy h2 {
    font-size: 17px;
  }

  .technology-hero__copy p {
    font-size: 12px;
  }

  .technology-hero__features {
    gap: 8px;
  }

  .technology-hero__feature img {
    width: 54px;
    height: 54px;
  }

  .technology-hero__feature h3 {
    font-size: 12px;
  }
}

@media (max-width: 1199px) {
  .technology-hero {
    min-width: 0;
    height: auto;
    min-height: 440px;
  }

  .technology-hero__inner {
    grid-template-columns: 1fr;
    gap: 28px;
    padding-block: 120px 38px;
  }

  .technology-hero__features {
    max-width: 720px;
    padding-top: 0;
  }
}

@media (max-width: 767px) {
  .technology-hero {
    min-height: 0;
  }

  .technology-hero__inner {
    padding-block: 104px 32px;
  }

  .technology-hero__copy h1 {
    font-size: 32px;
  }

  .technology-hero__copy h2 {
    font-size: 17px;
    line-height: 1.5;
  }

  .technology-hero__copy p {
    font-size: 13px;
  }

  .technology-hero__features {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 12px;
  }
}
</style>
