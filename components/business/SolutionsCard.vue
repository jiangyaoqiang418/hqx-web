<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
  icon: string
  iconTone: string
  points: string[]
}>()
</script>

<template>
  <article class="solution-card">
    <div class="solution-card__image">
      <NuxtImg
        :src="image"
        :alt="title"
        width="292"
        height="180"
        loading="lazy"
      />
    </div>
    <div class="solution-card__body">
      <div class="solution-card__icon">
        <NuxtImg
          :src="icon"
          :alt="`${title}图标`"
          width="34"
          height="34"
          loading="lazy"
        />
      </div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <ul>
        <li
          v-for="point in points"
          :key="point"
        >
          {{ point }}
        </li>
      </ul>
      <NuxtLink
        class="solution-card__link"
        to="/contact"
      >
        了解更多
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
.solution-card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 446px;
  border: 1px solid rgb(66 126 190 / 62%);
  border-radius: 10px;
  background: linear-gradient(180deg, rgb(8 31 65 / 94%), rgb(3 16 38 / 96%));
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 6%);
  cursor: pointer;
  isolation: isolate;
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.solution-card::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: inherit;
  content: '';
  transition: box-shadow 300ms ease;
}

.solution-card:hover {
  border-color: var(--color-border-active);
  transform: translateY(-4px);
}

.solution-card:hover::after {
  box-shadow: inset 0 0 34px rgb(1 236 244 / 24%);
}

.solution-card__image {
  height: 180px;
  overflow: hidden;
}

.solution-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 220ms ease;
}

.solution-card:hover .solution-card__image img {
  transform: scale(1.04);
}

.solution-card__body {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 58px 20px 20px;
}

.solution-card__icon {
  position: absolute;
  top: -38px;
  left: 20px;
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  border-radius: 999px;
  background: color-mix(in srgb, v-bind(iconTone) 90%, transparent);
  box-shadow:
    inset 0 0 16px rgb(255 255 255 / 10%),
    0 0 22px rgb(1 236 244 / 16%);
}

.solution-card__icon img {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.solution-card h3 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
}

.solution-card p {
  min-height: 50px;
  margin: 8px 0 0;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.7;
}

.solution-card ul {
  display: grid;
  gap: 8px;
  margin: 13px 0 0;
  padding: 0;
  color: var(--color-text-secondary);
  font-size: 13px;
  list-style: none;
}

.solution-card li {
  position: relative;
  padding-left: 16px;
}

.solution-card li::before {
  position: absolute;
  top: 0.62em;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background: var(--color-accent-cyan);
  content: '';
}

.solution-card__link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-top: auto;
  padding-top: 18px;
  color: var(--color-accent-cyan);
  font-size: 14px;
  font-weight: 500;
}

.solution-card__link img {
  width: 21px;
  height: 10px;
  object-fit: contain;
  transition: transform 180ms ease;
}

.solution-card__link:hover img {
  transform: translateX(4px);
}

@media (max-width: 1439px) {
  .solution-card {
    min-height: 412px;
  }

  .solution-card__image {
    height: 158px;
  }

  .solution-card__body {
    padding: 50px 16px 18px;
  }

  .solution-card__icon {
    top: -34px;
    left: 16px;
    width: 58px;
    height: 58px;
  }

  .solution-card__icon img {
    width: 30px;
    height: 30px;
  }

  .solution-card h3 {
    font-size: 18px;
  }

  .solution-card p,
  .solution-card ul {
    font-size: 12px;
  }

  .solution-card ul {
    gap: 7px;
  }
}
</style>
