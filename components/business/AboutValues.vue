<script setup lang="ts">
const values = [
  ['客户至上', '以客户价值为核心'],
  ['专业专注', '深耕行业，追求卓越'],
  ['创新驱动', '持续探索前沿技术'],
  ['合作共赢', '开放协作，共创价值'],
]

const certificates = [
  { title: '高新技术企业', image: '/images/about/certificate-high-tech.png' },
  { title: '软件企业认证', image: '/images/about/certificate-software.png' },
  { title: 'ISO 9001认证', image: '/images/about/certificate-quality.png' },
  { title: '专利证书', image: '/images/about/certificate-patent.png' },
]
</script>

<template>
  <section class="about-values">
    <article class="about-values__message">
      <NuxtImg
        src="/images/about/mission.png"
        alt="企业使命"
        width="54"
        height="54"
      />
      <p>让气象数据成为可预测的商业价值，助力全球能源转型与可持续发展。</p>
    </article>
    <article class="about-values__message">
      <NuxtImg
        src="/images/about/vision.png"
        alt="企业愿景"
        width="54"
        height="54"
      />
      <p>以技术创新成就，通过客户价值为导向，提供领先的气象与能源智能解决方案，让决策更科学，让未来更可期。</p>
    </article>
    <article class="about-values__core">
      <h2>核心价值观</h2>
      <div>
        <article
          v-for="([title, description]) in values"
          :key="title"
        >
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </article>
      </div>
    </article>
    <article class="about-values__certificates">
      <div class="about-values__certificates-heading">
        <h2>资质与荣誉</h2>
        <NuxtLink to="/contact">查看全部 <span>→</span></NuxtLink>
      </div>
      <div class="about-values__certificates-grid">
        <article
          v-for="certificate in certificates"
          :key="certificate.title"
        >
          <NuxtImg
            :src="certificate.image"
            :alt="certificate.title"
            width="136"
            height="88"
            loading="lazy"
          />
          <h3>{{ certificate.title }}</h3>
        </article>
      </div>
    </article>
  </section>
</template>

<style scoped>
.about-values {
  display: grid;
  grid-template-columns: 1fr 1fr 1.12fr 1.8fr;
  gap: 10px;
}

.about-values > article {
  border: 1px solid rgb(52 118 194 / 44%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.about-values__message {
  padding: 22px 28px;
}

.about-values__message img {
  width: 46px;
  height: 46px;
  object-fit: contain;
}

.about-values__message p {
  margin: 10px 0 0;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.8;
}

.about-values__core {
  padding: 18px 24px;
}

.about-values h2,
.about-values h3,
.about-values p {
  margin: 0;
}

.about-values h2 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.about-values__core > div {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px 18px;
  margin-top: 18px;
}

.about-values__core > div article:nth-child(even) {
  padding-left: 18px;
  border-left: 1px solid rgb(177 184 199 / 20%);
}

.about-values__core h3 {
  color: #18b9fd;
  font-size: 14px;
  font-weight: 600;
}

.about-values__core p {
  margin-top: 5px;
  color: var(--color-text-secondary);
  font-size: 11px;
}

.about-values__certificates {
  padding: 18px 22px;
}

.about-values__certificates-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about-values__certificates-heading a {
  color: var(--color-text-primary);
  font-size: 12px;
}

.about-values__certificates-heading a span {
  margin-left: 6px;
  color: var(--color-accent-cyan);
}

.about-values__certificates-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.about-values__certificates-grid article {
  min-width: 0;
  text-align: center;
}

.about-values__certificates-grid img {
  width: 100%;
  height: 72px;
  object-fit: contain;
}

.about-values__certificates-grid h3 {
  margin-top: 5px;
  color: var(--color-text-secondary);
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
}

@media (max-width: 1439px) {
  .about-values {
    grid-template-columns: 1fr 1fr 1.08fr 1.65fr;
    gap: 8px;
  }

  .about-values__message,
  .about-values__core,
  .about-values__certificates {
    padding: 14px;
  }

  .about-values__message p {
    font-size: 11px;
  }

  .about-values__certificates-grid {
    gap: 6px;
  }

  .about-values__certificates-grid img {
    height: 62px;
  }
}

@media (max-width: 1199px) {
  .about-values {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .about-values {
    grid-template-columns: 1fr;
  }
}
</style>
