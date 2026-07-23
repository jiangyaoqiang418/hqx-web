<script setup lang="ts">
const milestones = [
  ['2021', '公司成立', '微恩熵算科技有限公司正式成立，专注于气象与能源数据智能分析服务。'],
  ['2022', '产品研发', '完成气象预报与风光功率预测核心算法研发，推出首款商业化产品。'],
  ['2023', '业务拓展', '服务项目突破500+，业务覆盖新能源、工程建设、政府等多个行业领域。'],
  ['2024', '平台升级', '发布新一代数据智能平台，整合卫星遥感与AI能力，实现全链路数字化服务。'],
  ['2025', '持续创新', '持续加大研发投入，深化创新，推动产品智能化与服务全球化发展。'],
]
</script>

<template>
  <section class="about-journey">
    <article class="about-journey__timeline">
      <h2>发展历程</h2>
      <div class="about-journey__line" aria-hidden="true" />
      <div class="about-journey__milestones">
        <article
          v-for="([year, title, description]) in milestones"
          :key="year"
        >
          <span aria-hidden="true" />
          <strong>{{ year }}</strong>
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </article>
      </div>
    </article>
    <article class="about-journey__team">
      <div>
        <h2>我们的团队</h2>
        <p>我们拥有一支由气象、能源、遥感、AI、大数据等领域专家组成的高素质团队，具备深厚的技术积累和丰富的行业经验。</p>
        <NuxtLink to="/contact">了解团队 <span>→</span></NuxtLink>
      </div>
      <div class="about-journey__team-metrics">
        <article><strong>100+</strong><span>专业技术人才</span></article>
        <article><strong>60%+</strong><span>硕士及以上学历</span></article>
        <article><strong>20+</strong><span>核心行业专家</span></article>
      </div>
    </article>
  </section>
</template>

<style scoped>
.about-journey {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 10px;
}

.about-journey > article {
  border: 1px solid rgb(52 118 194 / 44%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.about-journey h2,
.about-journey h3,
.about-journey p {
  margin: 0;
}

.about-journey h2 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.about-journey__timeline {
  position: relative;
  overflow: hidden;
  padding: 16px 22px 18px;
}

.about-journey__line {
  height: 2px;
  margin: 24px 10px 0;
  background: linear-gradient(90deg, var(--color-brand-blue), var(--color-accent-cyan), var(--color-brand-blue));
}

.about-journey__milestones {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.about-journey__milestones article {
  position: relative;
  padding-top: 19px;
}

.about-journey__milestones span {
  position: absolute;
  top: -6px;
  left: 0;
  width: 12px;
  height: 12px;
  border: 3px solid rgb(138 202 255 / 72%);
  border-radius: 50%;
  background: var(--color-bg-card);
  box-shadow: 0 0 10px rgb(1 236 244 / 56%);
}

.about-journey__milestones strong {
  color: #9fc8fb;
  font-size: 18px;
  font-weight: 600;
}

.about-journey__milestones h3 {
  margin-top: 3px;
  color: var(--color-text-primary);
  font-size: 12px;
  font-weight: 500;
}

.about-journey__milestones p {
  margin-top: 8px;
  color: var(--color-text-secondary);
  font-size: 10px;
  line-height: 1.6;
}

.about-journey__team {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 196px;
  padding: 16px 22px 18px;
  background:
    linear-gradient(90deg, rgb(4 20 48 / 98%) 8%, rgb(4 20 48 / 45%) 100%),
    url('/images/about/technology-team.png') right center / 62% 100% no-repeat !important;
}

.about-journey__team > div:first-child {
  max-width: 58%;
}

.about-journey__team p {
  margin-top: 10px;
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.7;
}

.about-journey__team a {
  display: inline-flex;
  gap: 8px;
  margin-top: 6px;
  color: var(--color-accent-cyan);
  font-size: 12px;
}

.about-journey__team-metrics {
  display: flex;
  gap: 36px;
}

.about-journey__team-metrics article {
  display: grid;
  gap: 2px;
}

.about-journey__team-metrics strong {
  color: #3c8eff;
  font-size: 23px;
  font-weight: 600;
}

.about-journey__team-metrics span {
  color: var(--color-text-secondary);
  font-size: 11px;
}

@media (max-width: 1439px) {
  .about-journey__timeline,
  .about-journey__team {
    padding: 14px;
  }

  .about-journey__milestones {
    gap: 10px;
  }

  .about-journey__milestones p {
    font-size: 9px;
  }
}

@media (max-width: 1199px) {
  .about-journey {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .about-journey__timeline {
    overflow-x: auto;
  }

  .about-journey__milestones {
    width: 720px;
  }

  .about-journey__team {
    min-height: 270px;
    background-size: 100% auto !important;
    background-position: center bottom !important;
  }

  .about-journey__team > div:first-child {
    max-width: 100%;
  }

  .about-journey__team-metrics {
    gap: 18px;
  }

  .about-journey__team-metrics strong {
    font-size: 18px;
  }
}
</style>
