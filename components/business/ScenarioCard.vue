<script setup lang="ts">
type Scenario = {
  index: string
  title: string
  description: string
  points: string[]
  image: string
  icon: string
  accent: string
}

defineProps<{
  scenario: Scenario
}>()
</script>

<template>
  <article class="scenario-card">
    <div
      class="scenario-card__image"
      :style="{ '--card-image': `url(${scenario.image})` }"
    >
      <div class="scenario-card__heading">
        <span :style="{ color: scenario.accent }">{{ scenario.index }}</span>
        <h2>{{ scenario.title }}</h2>
      </div>
      <NuxtImg
        class="scenario-card__icon"
        :src="scenario.icon"
        :alt="scenario.title"
        width="30"
        height="30"
      />
    </div>
    <div class="scenario-card__body">
      <p>{{ scenario.description }}</p>
      <ul>
        <li
          v-for="point in scenario.points"
          :key="point"
        >{{ point }}</li>
      </ul>
      <NuxtLink
        class="scenario-card__link"
        to="/contact"
      >
        了解详情
        <NuxtImg
          src="/images/scenarios/link-arrow.png"
          alt=""
          width="20"
          height="10"
        />
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.scenario-card {
  display: grid;
  min-width: 0;
  min-height: 294px;
  overflow: hidden;
  border: 1px solid rgb(58 129 204 / 48%);
  border-radius: 5px;
  background: linear-gradient(150deg, rgb(7 34 76 / 94%), rgb(3 20 48 / 96%));
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.scenario-card:hover {
  border-color: var(--color-border-active);
  box-shadow: 0 0 24px rgb(1 236 244 / 14%), inset 0 0 20px rgb(2 128 242 / 10%);
  transform: translateY(-3px);
}

.scenario-card__image {
  position: relative;
  min-height: 166px;
  padding: 14px;
  background:
    linear-gradient(180deg, rgb(3 12 29 / 4%) 22%, rgb(3 12 29 / 88%) 100%),
    var(--card-image) center / cover no-repeat;
}

.scenario-card__heading {
  display: flex;
  align-items: center;
  gap: 8px;
}

.scenario-card__heading span {
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
}

.scenario-card__heading h2 {
  overflow: hidden;
  margin: 0;
  color: var(--color-text-primary);
  font-size: 17px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.scenario-card__icon {
  position: absolute;
  bottom: 14px;
  left: 14px;
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.scenario-card__body {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 10px 14px 13px;
}

.scenario-card__body > p {
  display: -webkit-box;
  overflow: hidden;
  margin: 0;
  color: var(--color-text-secondary);
  font-size: 11px;
  line-height: 1.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.scenario-card__body ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px 8px;
  margin: 8px 0 0;
  padding: 0;
  color: #9ecdf8;
  font-size: 10px;
  line-height: 1.45;
  list-style: none;
}

.scenario-card__body li {
  min-width: 0;
}

.scenario-card__body li::before {
  margin-right: 4px;
  color: var(--color-accent-cyan);
  content: '•';
}

.scenario-card__link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  padding-top: 9px;
  color: var(--color-accent-cyan);
  font-size: 12px;
  line-height: 1;
}

.scenario-card__link img {
  width: 16px;
  height: 8px;
  object-fit: contain;
}

@media (max-width: 1439px) {
  .scenario-card {
    min-height: 270px;
  }

  .scenario-card__image {
    min-height: 148px;
    padding: 11px;
  }

  .scenario-card__heading {
    gap: 6px;
  }

  .scenario-card__heading span {
    font-size: 20px;
  }

  .scenario-card__heading h2 {
    font-size: 14px;
  }

  .scenario-card__icon {
    bottom: 10px;
    left: 11px;
    width: 25px;
    height: 25px;
  }

  .scenario-card__body {
    padding: 8px 11px 10px;
  }

  .scenario-card__body > p {
    font-size: 10px;
  }

  .scenario-card__body ul {
    gap: 3px 5px;
    margin-top: 6px;
    font-size: 9px;
  }

  .scenario-card__link {
    padding-top: 7px;
    font-size: 11px;
  }
}

@media (max-width: 1199px) {
  .scenario-card {
    min-height: 288px;
  }
}
</style>
