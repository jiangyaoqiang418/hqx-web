<script setup lang="ts">
import { siteConfig } from '~/config/site'

const entries = [
  { label: '联系电话', value: siteConfig.contact.phone, description: '周一至周五 9:00-18:00', href: `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`, icon: '/images/contact/phone.png' },
  { label: '商务合作', value: siteConfig.contact.businessEmail, description: '商务合作与咨询', href: `mailto:${siteConfig.contact.businessEmail}`, icon: '/images/contact/business-email.png' },
  { label: '技术支持', value: siteConfig.contact.supportEmail, description: '技术支持与售后服务', href: `mailto:${siteConfig.contact.supportEmail}`, icon: '/images/contact/support-email.png' },
  { label: '公司地址', value: siteConfig.contact.address, description: '邮编：610000', icon: '/images/contact/address.png' },
]
</script>

<template>
  <section class="contact-details">
    <h2>联系方式</h2>
    <div class="contact-details__title-line" aria-hidden="true" />
    <address>
      <article
        v-for="entry in entries"
        :key="entry.label"
      >
        <NuxtImg
          :src="entry.icon"
          :alt="entry.label"
          width="44"
          height="44"
        />
        <div>
          <h3>{{ entry.label }}</h3>
          <a
            v-if="entry.href"
            :href="entry.href"
          >{{ entry.value }}</a>
          <p v-else>{{ entry.value }}</p>
          <small>{{ entry.description }}</small>
        </div>
      </article>
    </address>
  </section>
</template>

<style scoped>
.contact-details {
  min-height: 430px;
  padding: 20px 24px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.contact-details h2,
.contact-details h3,
.contact-details p {
  margin: 0;
}

.contact-details h2 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.contact-details__title-line {
  width: 38px;
  height: 2px;
  margin-top: 8px;
  background: var(--color-accent-cyan);
}

.contact-details address {
  display: grid;
  gap: 17px;
  margin-top: 22px;
  font-style: normal;
}

.contact-details article {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 12px;
}

.contact-details article + article {
  padding-top: 14px;
  border-top: 1px solid rgb(177 184 199 / 15%);
}

.contact-details img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.contact-details h3 {
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 600;
}

.contact-details a,
.contact-details p {
  display: block;
  margin-top: 2px;
  color: var(--color-text-primary);
  font-size: 14px;
  line-height: 1.45;
  word-break: break-all;
}

.contact-details a:hover {
  color: var(--color-accent-cyan);
}

.contact-details small {
  display: block;
  margin-top: 2px;
  color: var(--color-text-secondary);
  font-size: 11px;
}

@media (max-width: 1439px) {
  .contact-details {
    min-height: 386px;
    padding: 16px;
  }

  .contact-details address {
    gap: 11px;
    margin-top: 16px;
  }

  .contact-details article + article {
    padding-top: 10px;
  }

  .contact-details h3,
  .contact-details a,
  .contact-details p {
    font-size: 12px;
  }
}
</style>
