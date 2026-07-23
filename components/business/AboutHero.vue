<script setup lang="ts">
const metrics = [
  { value: '2021年', label: '公司成立', icon: '/images/about/metric-founded.png' },
  { value: '100+', label: '专业技术团队', icon: '/images/about/metric-team.png' },
  { value: '50+', label: '知识产权与专利', icon: '/images/about/metric-patent.png' },
  { value: '1000+', label: '成功服务项目', icon: '/images/about/metric-project.png' },
]

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="about-hero"
  >
    <div class="about-hero__background" />
    <div class="site-container about-hero__inner">
      <div class="about-hero__copy">
        <h1 data-entrance>关于我们</h1>
        <h2 data-entrance>用数据与智能，探索天气的未来，创造可持续的价值</h2>
        <p data-entrance>
          微恩熵算是一家以新一代信息技术为核心，深度服务于商业气象与新能源发电等领域的高科技企业。我们依托人工智能、大数据、云计算及卫星遥感等前沿技术，将复杂的气象与地理空间数据转化为可量化、可预测、可决策的商业价值，为行业客户提供全链条的智能化解决方案。
        </p>
        <div
          class="about-hero__metrics"
          data-entrance
        >
          <article
            v-for="metric in metrics"
            :key="metric.label"
          >
            <NuxtImg
              :src="metric.icon"
              :alt="metric.label"
              width="46"
              height="46"
            />
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </article>
        </div>
      </div>
      <article
        class="about-hero__profile"
        data-entrance
      >
        <NuxtImg
          src="/images/about/company-lobby.png"
          alt="微恩熵算公司前台"
          width="440"
          height="220"
        />
        <div class="about-hero__profile-copy">
          <h2>公司简介</h2>
          <p>微恩熵算总部位于中国，致力于通过多源数据融合、人工智能算法和行业知识的深度结合，打造领先的气象与能源智能服务体系，赋能千行百业实现数字化转型与可持续发展。</p>
          <NuxtLink to="/contact">了解更多 <span>→</span></NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about-hero {
  position: relative;
  min-width: 1200px;
  height: 510px;
  overflow: hidden;
  background: #031127;
}

.about-hero__background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 89%) 0%, rgb(3 12 29 / 49%) 44%, rgb(3 12 29 / 20%) 100%),
    linear-gradient(180deg, rgb(3 12 29 / 4%) 0%, rgb(3 12 29 / 74%) 100%),
    url('/images/about/hero-background.png') center 46% / cover no-repeat;
}

.about-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: minmax(0, 1fr) 405px;
  align-items: end;
  gap: 30px;
  padding-bottom: 10px;
}

.about-hero__copy {
  align-self: end;
  max-width: 630px;
  padding-top: 128px;
}

.about-hero__copy h1,
.about-hero__copy h2,
.about-hero__copy p {
  margin: 0;
}

.about-hero__copy h1 {
  color: var(--color-text-primary);
  font-size: 42px;
  font-weight: 700;
  line-height: 1.16;
}

.about-hero__copy h2 {
  margin-top: 8px;
  color: var(--color-text-primary);
  font-size: 19px;
  font-weight: 600;
}

.about-hero__copy > p {
  margin-top: 14px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.8;
}

.about-hero__metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 24px;
}

.about-hero__metrics article {
  display: grid;
  justify-items: start;
  gap: 2px;
  min-width: 0;
  padding-left: 16px;
}

.about-hero__metrics article:first-child {
  padding-left: 0;
}

.about-hero__metrics article + article {
  border-left: 1px solid rgb(177 184 199 / 25%);
}

.about-hero__metrics img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.about-hero__metrics strong {
  color: #1fb9ff;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
}

.about-hero__metrics span {
  color: var(--color-text-primary);
  font-size: 12px;
  white-space: nowrap;
}

.about-hero__profile {
  align-self: end;
  overflow: hidden;
  border: 1px solid rgb(78 133 193 / 56%);
  border-radius: 7px;
  background: linear-gradient(160deg, rgb(8 35 75 / 90%), rgb(4 21 48 / 96%));
}

.about-hero__profile > img {
  display: block;
  width: 100%;
  height: 185px;
  object-fit: cover;
}

.about-hero__profile-copy {
  padding: 12px 24px 14px;
}

.about-hero__profile-copy h2,
.about-hero__profile-copy p {
  margin: 0;
}

.about-hero__profile-copy h2 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.about-hero__profile-copy p {
  margin-top: 6px;
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.65;
}

.about-hero__profile-copy a {
  display: inline-flex;
  gap: 8px;
  margin-top: 8px;
  color: var(--color-accent-cyan);
  font-size: 12px;
}

@media (max-width: 1439px) {
  .about-hero {
    height: 510px;
  }

  .about-hero__inner {
    grid-template-columns: minmax(0, 1fr) 340px;
    gap: 24px;
  }

  .about-hero__copy {
    padding-top: 120px;
  }

  .about-hero__copy h1 {
    font-size: 37px;
  }

  .about-hero__copy h2 {
    font-size: 17px;
  }

  .about-hero__copy > p {
    font-size: 12px;
  }

  .about-hero__metrics {
    margin-top: 16px;
  }

  .about-hero__metrics article {
    padding-left: 10px;
  }

  .about-hero__metrics strong {
    font-size: 21px;
  }

  .about-hero__profile > img {
    height: 154px;
  }

  .about-hero__profile-copy {
    padding: 10px 16px 12px;
  }

  .about-hero__profile-copy h2 {
    font-size: 16px;
  }

  .about-hero__profile-copy p {
    font-size: 11px;
  }
}

@media (max-width: 1199px) {
  .about-hero {
    min-width: 0;
    height: auto;
  }

  .about-hero__inner {
    grid-template-columns: 1fr;
    padding-block: 112px 32px;
  }

  .about-hero__copy {
    max-width: 720px;
    padding: 0;
  }

  .about-hero__profile {
    max-width: 560px;
  }
}

@media (max-width: 767px) {
  .about-hero__inner {
    padding-block: 104px 32px;
  }

  .about-hero__copy h1 {
    font-size: 32px;
  }

  .about-hero__copy h2 {
    font-size: 17px;
    line-height: 1.5;
  }

  .about-hero__metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px 0;
  }

  .about-hero__metrics article:nth-child(3) {
    padding-left: 0;
    border-left: 0;
  }
}
</style>
