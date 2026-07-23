<script setup lang="ts">
usePageSeo({
  title: '联系我们',
  description: '联系微恩熵算科技，获取气象、能源、遥感和数字化平台相关的产品咨询、方案定制与技术支持。',
  path: '/contact',
})
</script>

<template>
  <div class="contact-page">
    <ContactHero />
    <main class="contact-page__content">
      <div class="site-container">
        <section class="contact-page__main">
          <ContactDetails />
          <section class="contact-page__map">
            <div class="contact-page__map-heading">
              <div>
                <h2>公司位置</h2>
                <span aria-hidden="true" />
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">查看大图 <UIcon name="i-lucide-external-link" aria-hidden="true" /></a>
            </div>
            <NuxtImg
              src="/images/contact/location-map.png"
              alt="微恩熵算公司位置示意图"
              width="700"
              height="380"
            />
          </section>
          <ContactMessageForm />
        </section>
        <ContactSupport />
      </div>
    </main>
  </div>
</template>

<style scoped>
.contact-page {
  min-width: 1200px;
  background: #04142c;
}

.contact-page__content {
  padding: 0 0 24px;
}

.contact-page__main {
  display: grid;
  grid-template-columns: minmax(250px, 0.77fr) minmax(460px, 1.25fr) minmax(350px, 0.9fr);
  gap: 12px;
}

.contact-page__map {
  min-height: 430px;
  padding: 20px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.contact-page__map-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
}

.contact-page__map h2 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.contact-page__map-heading span {
  display: block;
  width: 38px;
  height: 2px;
  margin-top: 8px;
  background: var(--color-accent-cyan);
}

.contact-page__map-heading a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--color-accent-cyan);
  font-size: 12px;
}

.contact-page__map-heading svg {
  width: 13px;
  height: 13px;
}

.contact-page__map > img {
  display: block;
  width: 100%;
  height: 368px;
  margin-top: 14px;
  border-radius: 5px;
  object-fit: cover;
}

@media (max-width: 1439px) {
  .contact-page__main {
    grid-template-columns: minmax(212px, 0.78fr) minmax(390px, 1.2fr) minmax(300px, 0.9fr);
    gap: 10px;
  }

  .contact-page__map {
    min-height: 386px;
    padding: 16px;
  }

  .contact-page__map > img {
    height: 318px;
    margin-top: 12px;
  }
}

@media (max-width: 1199px) {
  .contact-page {
    min-width: 0;
  }

  .contact-page__content {
    padding-block: 24px 40px;
  }

  .contact-page__main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-page__map {
    grid-column: span 2;
  }
}

@media (max-width: 767px) {
  .contact-page__main {
    grid-template-columns: 1fr;
  }

  .contact-page__map {
    grid-column: auto;
  }

  .contact-page__map > img {
    height: 260px;
  }
}
</style>
