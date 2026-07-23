<script setup lang="ts">
const services = [
  { title: '售前咨询', description: '专业团队为您解答方案与产品相关问题', icon: '/images/contact/service-consulting.png' },
  { title: '方案定制', description: '根据您的需求提供定制化解决方案', icon: '/images/contact/service-custom.png' },
  { title: '技术实施', description: '专业技术团队保障项目顺利实施', icon: '/images/contact/service-implementation.png' },
  { title: '售后服务', description: '7×24小时持续服务与技术支持', icon: '/images/contact/service-support.png' },
]
</script>

<template>
  <section class="contact-support">
    <div class="contact-support__intro">
      <h2>我们随时为您提供帮助</h2>
      <p>无论您有任何问题、需求或合作意向，都可以通过以下方式与我们取得联系。</p>
      <a href="/company-profile.pdf" download>
        下载公司介绍
        <NuxtImg
          src="/images/contact/download-company.png"
          alt=""
          width="18"
          height="18"
        />
      </a>
    </div>
    <article
      v-for="service in services"
      :key="service.title"
      class="contact-support__service"
    >
      <NuxtImg
        :src="service.icon"
        :alt="service.title"
        width="40"
        height="40"
      />
      <div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </article>
    <div class="contact-support__follow">
      <NuxtImg
        src="/images/contact/qr-code.png"
        alt="关注微恩熵算二维码"
        width="66"
        height="66"
      />
      <div><strong>关注我们</strong><span>获取更多资讯</span></div>
    </div>
  </section>
</template>

<style scoped>
.contact-support {
  display: grid;
  grid-template-columns: 1.22fr repeat(4, minmax(0, 1fr)) 1.12fr;
  align-items: stretch;
  gap: 8px;
  margin-top: 12px;
  padding: 18px 24px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.contact-support h2,
.contact-support h3,
.contact-support p {
  margin: 0;
}

.contact-support__intro h2 {
  color: var(--color-text-primary);
  font-size: 17px;
  font-weight: 600;
}

.contact-support__intro p {
  margin-top: 6px;
  color: var(--color-text-secondary);
  font-size: 11px;
  line-height: 1.65;
}

.contact-support__intro a {
  display: inline-flex;
  min-height: 28px;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  padding: 4px 12px;
  border-radius: 14px;
  color: var(--color-text-primary);
  background: linear-gradient(100deg, var(--color-action-start), var(--color-action-end));
  font-size: 11px;
}

.contact-support__intro a img {
  width: 15px;
  height: 15px;
}

.contact-support__service {
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: center;
  gap: 8px;
  padding: 4px 10px;
  border-left: 1px solid rgb(177 184 199 / 16%);
}

.contact-support__service img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.contact-support__service h3 {
  color: var(--color-text-primary);
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}

.contact-support__service p {
  margin-top: 3px;
  color: var(--color-text-secondary);
  font-size: 10px;
  line-height: 1.45;
}

.contact-support__follow {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 12px;
  border-left: 1px solid rgb(177 184 199 / 16%);
}

.contact-support__follow img {
  width: 62px;
  height: 62px;
  object-fit: contain;
}

.contact-support__follow strong,
.contact-support__follow span {
  display: block;
  color: var(--color-text-primary);
  font-size: 13px;
}

.contact-support__follow span {
  margin-top: 5px;
  font-size: 12px;
}

@media (max-width: 1439px) {
  .contact-support {
    padding: 13px 16px;
  }

  .contact-support__service {
    grid-template-columns: 29px 1fr;
    padding-inline: 6px;
  }

  .contact-support__service img {
    width: 27px;
    height: 27px;
  }

  .contact-support__service h3 {
    font-size: 11px;
  }

  .contact-support__service p {
    font-size: 9px;
  }

  .contact-support__follow img {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 1199px) {
  .contact-support {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-support__intro,
  .contact-support__follow {
    grid-column: span 2;
  }

  .contact-support__service,
  .contact-support__follow {
    border-left: 0;
  }
}

@media (max-width: 767px) {
  .contact-support {
    grid-template-columns: 1fr;
  }

  .contact-support__intro,
  .contact-support__follow {
    grid-column: auto;
  }

  .contact-support__service {
    padding-left: 0;
  }
}
</style>
