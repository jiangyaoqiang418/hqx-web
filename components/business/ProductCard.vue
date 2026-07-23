<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image: string
  points: Array<{
    text: string
    icon: string
  }>
  tone?: 'cyan' | 'green' | 'purple'
}>()
</script>

<template>
  <article :class="['product-card', tone && `product-card--${tone}`]">
    <div class="product-card__header">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
    <NuxtImg
      class="product-card__image"
      :src="image"
      :alt="title"
      width="304"
      height="224"
      loading="lazy"
    />
    <div class="product-card__content">
      <ul>
        <li
          v-for="point in points"
          :key="point.text"
        >
          <NuxtImg
            :src="point.icon"
            alt=""
            width="18"
            height="18"
            loading="lazy"
          />
          <span>{{ point.text }}</span>
        </li>
      </ul>
      <NuxtLink
        class="product-card__link"
        to="/contact"
      >
        了解详情
        <NuxtImg
          src="/images/home/link-arrow.png"
          alt=""
          width="21"
          height="10"
          loading="lazy"
        />
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  min-height: 366px;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgb(66 126 190 / 62%);
  border-radius: 8px;
  background: linear-gradient(180deg, rgb(8 31 65 / 94%), rgb(3 16 38 / 96%));
  cursor: pointer;
  isolation: isolate;
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.product-card::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: inherit;
  content: '';
  transition: box-shadow 300ms ease;
}

.product-card:hover {
  border-color: var(--color-border-active);
  transform: translateY(-4px);
}

.product-card:hover::after {
  box-shadow: inset 0 0 34px rgb(1 236 244 / 24%);
}

.product-card__header {
  padding: 18px 26px 0;
}

.product-card h2 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.25;
}

.product-card__header p {
  margin: 6px 0 0;
  color: var(--color-text-secondary);
  font-size: 15px;
  font-weight: 600;
}

.product-card__image {
  width: 100%;
  height: auto;
  margin-top: 5px;
  object-fit: contain;
  transition: transform 260ms ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.035);
}

.product-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 26px 18px;
}

.product-card ul {
  display: grid;
  gap: 7px;
  margin: 0;
  padding: 0;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.25;
  list-style: none;
}

.product-card li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-card li img {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  object-fit: contain;
}

.product-card__link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 14px;
  color: var(--color-accent-cyan);
  font-size: 14px;
  font-weight: 600;
}

.product-card--purple .product-card__link {
  color: #9277ff;
}

.product-card__link img {
  width: 21px;
  height: 10px;
  object-fit: contain;
  transition: transform 180ms ease;
}

.product-card__link:hover img {
  transform: translateX(4px);
}

@media (max-width: 1439px) {
  .product-card {
    min-height: 344px;
  }

  .product-card__header,
  .product-card__content {
    padding-inline: 18px;
  }

  .product-card h2 {
    font-size: 18px;
    white-space: nowrap;
  }

  .product-card__header p {
    font-size: 13px;
  }

  .product-card ul {
    gap: 6px;
    font-size: 12px;
  }
}
</style>
