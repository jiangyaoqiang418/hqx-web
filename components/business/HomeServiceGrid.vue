<script setup lang="ts">
interface HomeService {
  title: string
  description: string
  icon: string
  image: string
  to: string
}

defineProps<{
  services: HomeService[]
}>()
</script>

<template>
  <div class="home-services">
    <NuxtLink
      v-for="service in services"
      :key="service.title"
      class="home-service-card"
      :to="service.to"
      data-entrance
    >
      <NuxtImg
        class="home-service-card__image"
        :src="service.image"
        width="887"
        height="444"
        :alt="service.title"
        loading="lazy"
      />
      <div class="home-service-card__content">
        <div class="home-service-card__heading">
          <NuxtImg
            :src="service.icon"
            width="64"
            height="64"
            alt=""
          />
          <h2>{{ service.title }}</h2>
        </div>
        <p>{{ service.description }}</p>
        <span class="home-service-card__link">
          了解更多
          <NuxtImg
            src="/images/home/link-arrow.png"
            width="64"
            height="64"
            alt=""
          />
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.home-services {
  position: absolute;
  z-index: 3;
  right: max(65px, calc((100% - 1542px) / 2));
  bottom: 15px;
  left: max(65px, calc((100% - 1542px) / 2));
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.home-service-card {
  position: relative;
  height: 180px;
  overflow: hidden;
  border: 1px solid rgb(65 119 188 / 40%);
  border-radius: 8px;
  color: #fff;
  background: #061a36;
  isolation: isolate;
}

.home-service-card__image {
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 360ms ease;
}

.home-service-card::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  background: rgb(0 13 38 / 26%);
  content: '';
  transition: box-shadow 300ms ease;
}

.home-service-card__content {
  height: 100%;
  padding: 18px 16px 14px;
}

.home-service-card__heading {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.home-service-card__heading img {
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
}

.home-service-card h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
}

.home-service-card p {
  display: -webkit-box;
  max-width: 290px;
  margin: 0 0 0 58px;
  overflow: hidden;
  color: rgb(255 255 255 / 80%);
  font-size: 13px;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.home-service-card__link {
  position: absolute;
  bottom: 16px;
  left: 74px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #01c7f4;
  font-size: 13px;
  font-weight: 600;
}

.home-service-card__link img {
  width: 24px;
  height: 24px;
}

.home-service-card:hover::after {
  box-shadow: inset 0 0 34px rgb(1 236 244 / 24%);
}

.home-service-card:hover .home-service-card__image {
  transform: scale(1.035);
}

@media (max-width: 1439px) {
  .home-service-card h2 {
    font-size: 17px;
  }

  .home-service-card p {
    margin-left: 58px;
  }
}
</style>
