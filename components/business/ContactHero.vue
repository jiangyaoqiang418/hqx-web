<script setup lang="ts">
const strengths = [
  { title: '专业团队', description: '7×24小时服务支持', icon: '/images/contact/hero-team.png' },
  { title: '数据安全', description: '严格的数据安全保障', icon: '/images/contact/hero-security.png' },
  { title: '合作共赢', description: '长期合作伙伴关系', icon: '/images/contact/hero-cooperation.png' },
  { title: '优质服务', description: '高效响应客户需求', icon: '/images/contact/hero-service.png' },
]

const root = ref<HTMLElement | null>(null)
usePageEntrance(root)
</script>

<template>
  <section
    ref="root"
    class="contact-hero"
  >
    <div class="contact-hero__background" />
    <div class="site-container contact-hero__inner">
      <div class="contact-hero__copy">
        <h1 data-entrance>联系我们</h1>
        <h2 data-entrance>携手微恩熵算，探索气象与能源的无限可能</h2>
        <p data-entrance>我们致力于为客户提供专业、高效、可靠的气象与能源数据智能服务，期待与您建立长期合作关系，共创价值。</p>
      </div>
      <div
        class="contact-hero__strengths"
        data-entrance
      >
        <article
          v-for="strength in strengths"
          :key="strength.title"
        >
          <NuxtImg
            :src="strength.icon"
            :alt="strength.title"
            width="56"
            height="56"
          />
          <h3>{{ strength.title }}</h3>
          <p>{{ strength.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-hero {
  position: relative;
  min-width: 1200px;
  height: 220px;
  overflow: hidden;
  background: #031127;
}

.contact-hero__background {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(3 12 29 / 94%) 0%, rgb(3 12 29 / 54%) 38%, rgb(3 12 29 / 10%) 78%),
    linear-gradient(180deg, rgb(3 12 29 / 5%) 0%, rgb(3 12 29 / 72%) 100%),
    url('/images/contact/hero-background.png') center 45% / cover no-repeat;
}

.contact-hero__inner {
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 570px 1fr;
  align-items: center;
  gap: 72px;
  padding-top: 36px;
}

.contact-hero__copy h1,
.contact-hero__copy h2,
.contact-hero__copy p {
  margin: 0;
}

.contact-hero__copy h1 {
  color: var(--color-text-primary);
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
}

.contact-hero__copy h2 {
  margin-top: 8px;
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.contact-hero__copy p {
  max-width: 550px;
  margin-top: 12px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.75;
}

.contact-hero__strengths {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.contact-hero__strengths article {
  display: grid;
  justify-items: center;
  min-width: 0;
  text-align: center;
}

.contact-hero__strengths img {
  width: 54px;
  height: 54px;
  object-fit: contain;
}

.contact-hero__strengths h3,
.contact-hero__strengths p {
  margin: 0;
}

.contact-hero__strengths h3 {
  margin-top: 7px;
  color: var(--color-text-primary);
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
}

.contact-hero__strengths p {
  margin-top: 2px;
  color: var(--color-text-secondary);
  font-size: 11px;
  white-space: nowrap;
}

@media (max-width: 1439px) {
  .contact-hero {
    height: 212px;
  }

  .contact-hero__inner {
    grid-template-columns: 480px 1fr;
    gap: 26px;
  }

  .contact-hero__copy h1 {
    font-size: 36px;
  }

  .contact-hero__copy h2 {
    font-size: 16px;
  }

  .contact-hero__copy p {
    font-size: 12px;
  }

  .contact-hero__strengths {
    gap: 8px;
  }

  .contact-hero__strengths img {
    width: 46px;
    height: 46px;
  }

  .contact-hero__strengths h3 {
    font-size: 13px;
  }

  .contact-hero__strengths p {
    font-size: 9px;
  }
}

@media (max-width: 1199px) {
  .contact-hero {
    min-width: 0;
    height: auto;
  }

  .contact-hero__inner {
    grid-template-columns: 1fr;
    gap: 22px;
    padding-block: 106px 32px;
  }

  .contact-hero__strengths {
    max-width: 720px;
  }
}

@media (max-width: 767px) {
  .contact-hero__copy h1 {
    font-size: 32px;
  }

  .contact-hero__copy h2 {
    font-size: 17px;
    line-height: 1.5;
  }

  .contact-hero__strengths {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 18px;
  }
}
</style>
