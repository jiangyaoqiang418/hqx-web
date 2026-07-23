<script setup lang="ts">
usePageSeo({
  title: '关于我们',
  description: '了解微恩熵算科技的企业定位、核心价值观、专业团队和发展方向。',
  path: '/about',
})
</script>

<template>
  <div class="about-page">
    <AboutHero />
    <main class="about-page__content">
      <div class="site-container">
        <AboutValues />
        <AboutJourney />
      </div>
    </main>
  </div>
</template>

<style scoped>
.about-page {
  min-width: 1200px;
  background: #04142c;
}

.about-page__content {
  display: grid;
  gap: 14px;
  padding: 10px 0 24px;
}

.about-page__content > .site-container {
  display: grid;
  gap: 14px;
}

@media (max-width: 1199px) {
  .about-page {
    min-width: 0;
  }

  .about-page__content {
    padding-block: 24px 40px;
  }
}
</style>
