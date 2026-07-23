<script setup lang="ts">
import { siteConfig } from '~/config/site'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-container site-footer__grid">
      <div class="site-footer__brand">
        <NuxtLink
          to="/"
          class="site-footer__logo"
        >
          <NuxtImg
            src="/images/brand/logo.png"
            width="48"
            height="48"
            alt=""
            loading="lazy"
          />
          <strong>{{ siteConfig.name }}</strong>
        </NuxtLink>
        <p>{{ siteConfig.description }}</p>
      </div>

      <nav
        class="site-footer__nav"
        aria-label="页脚导航"
      >
        <NuxtLink
          v-for="item in siteConfig.navigation"
          :key="item.to"
          :to="item.to"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <address class="site-footer__contact">
        <a :href="`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`">
          {{ siteConfig.contact.phone }}
        </a>
        <a :href="`mailto:${siteConfig.contact.businessEmail}`">
          {{ siteConfig.contact.businessEmail }}
        </a>
        <span>{{ siteConfig.contact.address }}</span>
      </address>
    </div>
    <div class="site-container site-footer__legal">
      <span>© {{ currentYear }} {{ siteConfig.name }}</span>
      <span>保留所有权利</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-deep);
}

.site-footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr;
  gap: 3rem;
  padding-block: 3.5rem;
}

.site-footer__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-primary);
}

.site-footer__brand p {
  max-width: 32rem;
  margin: 1rem 0 0;
  color: var(--color-text-muted);
}

.site-footer__nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-content: start;
  gap: 0.75rem 1rem;
}

.site-footer__nav a:hover,
.site-footer__contact a:hover {
  color: var(--color-accent-cyan);
}

.site-footer__contact {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  color: var(--color-text-secondary);
  font-style: normal;
}

.site-footer__legal {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1.25rem;
  border-top: 1px solid rgb(66 126 190 / 20%);
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

@media (max-width: 1023px) {
  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .site-footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 767px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-block: 2.5rem;
  }

  .site-footer__brand {
    grid-column: auto;
  }

  .site-footer__legal {
    flex-direction: column;
  }
}
</style>
