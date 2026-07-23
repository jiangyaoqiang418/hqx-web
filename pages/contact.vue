<script setup lang="ts">
import { siteConfig } from '~/config/site'

const services = [
  ['售前咨询', '专业团队解答方案与产品相关问题。'],
  ['方案定制', '根据业务需求提供定制化解决方案。'],
  ['技术实施', '专业技术团队保障项目顺利实施。'],
  ['售后服务', '提供持续服务与技术支持。'],
]

usePageSeo({
  title: '联系我们',
  description: '联系微恩熵算科技，获取气象、能源、遥感和数字化平台相关的产品咨询、方案定制与技术支持。',
  path: '/contact',
})
</script>

<template>
  <div>
    <PageHero
      title="联系我们"
      subtitle="携手微恩熵算，探索气象与能源的无限可能"
      description="我们致力于为客户提供专业、高效、可靠的气象与能源数据智能服务，期待与您建立长期合作关系。"
      :primary-cta="{ label: '发送商务邮件', to: `mailto:${siteConfig.contact.businessEmail}` }"
    />
    <section class="content-section">
      <SectionContainer>
        <SectionTitle
          title="联系方式"
          description="通过电话或电子邮件与我们取得联系。在线留言将在服务接口确认后开放。"
        />
        <div class="contact-grid">
          <address class="contact-panel">
            <div>
              <UIcon
                name="i-lucide-phone"
                aria-hidden="true"
              />
              <span>联系电话</span>
              <a :href="`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`">{{ siteConfig.contact.phone }}</a>
            </div>
            <div>
              <UIcon
                name="i-lucide-mail"
                aria-hidden="true"
              />
              <span>商务合作</span>
              <a :href="`mailto:${siteConfig.contact.businessEmail}`">{{ siteConfig.contact.businessEmail }}</a>
            </div>
            <div>
              <UIcon
                name="i-lucide-headphones"
                aria-hidden="true"
              />
              <span>技术支持</span>
              <a :href="`mailto:${siteConfig.contact.supportEmail}`">{{ siteConfig.contact.supportEmail }}</a>
            </div>
            <div>
              <UIcon
                name="i-lucide-map-pin"
                aria-hidden="true"
              />
              <span>公司地址</span>
              <p>{{ siteConfig.contact.address }}</p>
            </div>
          </address>
          <div class="contact-services">
            <BusinessCard
              v-for="([title, description]) in services"
              :key="title"
              :title="title"
              :description="description"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  </div>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: minmax(18rem, 0.8fr) minmax(0, 1.2fr);
  gap: 1rem;
}

.contact-panel {
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: var(--color-bg-card);
  font-style: normal;
}

.contact-panel div {
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 0.25rem 0.75rem;
}

.contact-panel svg {
  grid-row: 1 / 3;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-accent-cyan);
}

.contact-panel span { color: var(--color-text-muted); }
.contact-panel a,
.contact-panel p { margin: 0; color: var(--color-text-primary); }
.contact-panel a:hover { color: var(--color-accent-cyan); }

.contact-services {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1023px) {
  .contact-grid { grid-template-columns: 1fr; }
}

@media (max-width: 767px) {
  .contact-services { grid-template-columns: 1fr; }
}
</style>
