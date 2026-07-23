<script setup lang="ts">
interface HomeSolution {
  title: string
  image: string
  icon: string
  to: string
}

defineProps<{
  solutions: HomeSolution[]
}>()
</script>

<template>
  <section
    class="home-solutions"
    aria-labelledby="home-solutions-title"
  >
    <div class="site-container home-solutions__inner">
      <div
        class="home-solutions__intro"
        data-entrance
      >
        <h2 id="home-solutions-title">
          行业解决方案
        </h2>
        <p>以专业的技术和丰富的经验，助力各行业实现智能化升级与可持续发展。</p>
        <BaseButton to="/solutions">
          查看全部方案
        </BaseButton>
      </div>

      <div class="home-solutions__grid">
        <NuxtLink
          v-for="solution in solutions"
          :key="solution.title"
          class="home-solution-card"
          :to="solution.to"
          data-entrance
        >
          <NuxtImg
            class="home-solution-card__image"
            :src="solution.image"
            width="768"
            height="512"
            :alt="solution.title"
            loading="lazy"
          />
          <div class="home-solution-card__caption">
            <span>
              <NuxtImg
                :src="solution.icon"
                width="64"
                height="64"
                alt=""
              />
            </span>
            <h3>{{ solution.title }}</h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-solutions {
  height: 192px;
  padding-block: 24px;
  background: #020d21;
}

.home-solutions__inner {
  display: grid;
  height: 144px;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 30px;
}

.home-solutions__intro h2 {
  margin: 0;
  color: #fff;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.25;
}

.home-solutions__intro p {
  margin: 8px 0 16px;
  color: rgb(255 255 255 / 62%);
  font-size: 14px;
  line-height: 1.65;
}

.home-solutions__intro :deep(.base-button) {
  min-height: 38px;
  padding: 7px 16px;
  border-radius: 4px;
  font-size: 13px;
}

.home-solutions__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}

.home-solution-card {
  position: relative;
  height: 144px;
  overflow: hidden;
  border: 1px solid rgb(65 119 188 / 36%);
  border-radius: 7px;
  background: #061a36;
}

.home-solution-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 360ms ease;
}

.home-solution-card::after {
  position: absolute;
  inset: 0;
  background: rgb(0 10 29 / 15%);
  content: '';
  transition: box-shadow 300ms ease;
}

.home-solution-card__caption {
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 6px;
  left: 0;
  display: grid;
  justify-items: center;
}

.home-solution-card__caption span {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 50%;
  background: var(--solution-icon-bg);
}

.home-solution-card__caption img {
  width: 22px;
  height: 22px;
}

.home-solution-card h3 {
  margin: 5px 8px 0;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  text-shadow: 0 2px 8px rgb(0 0 0 / 80%);
}

.home-solution-card:hover::after {
  box-shadow: inset 0 0 30px rgb(1 236 244 / 24%);
}

.home-solution-card:hover .home-solution-card__image {
  transform: scale(1.045);
}

.home-solution-card:nth-child(1) {
  --solution-icon-bg: var(--color-solution-energy-icon-bg);
}

.home-solution-card:nth-child(2) {
  --solution-icon-bg: var(--color-solution-engineering-icon-bg);
}

.home-solution-card:nth-child(3) {
  --solution-icon-bg: var(--color-solution-disaster-icon-bg);
}

.home-solution-card:nth-child(4) {
  --solution-icon-bg: var(--color-solution-satellite-icon-bg);
}

.home-solution-card:nth-child(5) {
  --solution-icon-bg: var(--color-solution-government-icon-bg);
}

@media (max-width: 1439px) {
  .home-solutions__inner {
    grid-template-columns: 250px minmax(0, 1fr);
    gap: 20px;
  }

  .home-solutions__grid {
    gap: 10px;
  }

  .home-solution-card h3 {
    font-size: 14px;
  }
}
</style>
