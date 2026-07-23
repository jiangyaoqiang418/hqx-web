<script setup lang="ts">
import { siteConfig } from '~/config/site'

const route = useRoute()
const mobileOpen = ref(false)
const isHome = computed(() => route.path === '/')

const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  },
)
</script>

<template>
  <header :class="['site-header', { 'site-header--home': isHome }]">
    <a
      class="skip-link"
      href="#main-content"
    >跳到主要内容</a>
    <div class="site-container site-header__inner">
      <NuxtLink
        class="site-brand"
        to="/"
        aria-label="微恩熵算科技首页"
      >
        <NuxtImg
          src="/images/brand/logo.png"
          width="56"
          height="56"
          alt=""
          densities="1x 2x"
          preload
        />
        <span class="site-brand__text">
          <strong>{{ siteConfig.name }}</strong>
          <small>{{ siteConfig.englishName }}</small>
        </span>
      </NuxtLink>

      <nav
        class="desktop-nav"
        aria-label="主要导航"
      >
        <NuxtLink
          v-for="item in siteConfig.navigation"
          :key="item.to"
          :to="item.to"
          :class="['desktop-nav__link', { 'is-active': isActive(item.to) }]"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <button
        class="mobile-menu-button"
        type="button"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-navigation"
        aria-label="打开网站导航"
        @click="mobileOpen = true"
      >
        <UIcon
          name="i-lucide-menu"
          aria-hidden="true"
        />
      </button>
    </div>

    <USlideover
      v-model:open="mobileOpen"
      title="网站导航"
      description="访问官网主要页面"
    >
      <template #body>
        <nav
          id="mobile-navigation"
          class="mobile-nav"
          aria-label="移动端导航"
        >
          <NuxtLink
            v-for="item in siteConfig.navigation"
            :key="item.to"
            :to="item.to"
            :class="['mobile-nav__link', { 'is-active': isActive(item.to) }]"
            :aria-current="isActive(item.to) ? 'page' : undefined"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </template>
    </USlideover>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  z-index: 40;
  top: 0;
  height: var(--ui-header-height);
  border-bottom: 1px solid rgb(66 126 190 / 16%);
  background: rgb(4 4 20 / 88%);
  backdrop-filter: blur(16px);
}

.site-header--home {
  position: absolute;
  right: 0;
  left: 0;
  height: 88px;
  border-bottom-color: transparent;
  background: rgb(1 9 24 / 16%);
  backdrop-filter: none;
}

.skip-link {
  position: fixed;
  z-index: 100;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.5rem 0.75rem;
  color: var(--color-bg-deep);
  background: var(--color-accent-cyan);
  transform: translateY(-150%);
}

.skip-link:focus {
  transform: translateY(0);
}

.site-header__inner {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.site-brand {
  display: inline-flex;
  min-width: 15rem;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-primary);
}

.site-brand img {
  width: 3.25rem;
  height: 3.25rem;
  object-fit: contain;
}

.site-brand__text {
  display: grid;
  line-height: 1.2;
}

.site-brand__text strong {
  font-size: 1.1rem;
  white-space: nowrap;
}

.site-brand__text small {
  margin-top: 0.25rem;
  font-size: 0.5rem;
  white-space: nowrap;
}

.desktop-nav {
  display: flex;
  height: 100%;
  align-items: stretch;
  gap: clamp(1rem, 2vw, 2.5rem);
}

.desktop-nav__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: var(--color-text-primary);
  font-weight: 500;
  white-space: nowrap;
}

.site-header--home .desktop-nav__link {
  padding-bottom: 10px;
}

.desktop-nav__link::after {
  position: absolute;
  right: 0;
  bottom: 0.75rem;
  left: 0;
  height: 2px;
  background: var(--color-accent-cyan);
  content: '';
  opacity: 0;
  transform: scaleX(0.5);
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.desktop-nav__link:hover,
.desktop-nav__link.is-active {
  color: var(--color-accent-cyan);
}

.desktop-nav__link.is-active::after {
  opacity: 1;
  transform: scaleX(1);
}

.mobile-menu-button {
  display: none;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  background: var(--color-bg-card);
  cursor: pointer;
}

.mobile-menu-button svg {
  width: 1.5rem;
  height: 1.5rem;
}

.mobile-nav {
  display: grid;
  gap: 0.5rem;
}

.mobile-nav__link {
  display: flex;
  min-height: 48px;
  align-items: center;
  padding-inline: 1rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  color: var(--color-text-primary);
}

.mobile-nav__link.is-active {
  border-color: var(--color-border-active);
  color: var(--color-accent-cyan);
  background: rgb(1 236 244 / 8%);
}

@media (max-width: 1199px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-button {
    display: grid;
  }
}

@media (max-width: 767px) {
  .site-brand {
    min-width: 0;
  }

  .site-brand img {
    width: 2.75rem;
    height: 2.75rem;
  }

  .site-brand__text strong {
    font-size: 0.875rem;
  }

  .site-brand__text small {
    display: none;
  }
}
</style>
