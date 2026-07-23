<script setup lang="ts">
type ArchitectureItem = {
  title: string
  description?: string
  image?: string
  icon?: string
}

type ArchitectureLayer = {
  title: string
  description: string
  icon: string
  variant?: 'image'
  itemVariant?: 'inline-icon' | 'side-icon' | 'stacked-icon'
  oneLineColumns?: number
  items: ArchitectureItem[]
}

defineProps<{
  layers: ArchitectureLayer[]
}>()
</script>

<template>
  <section class="technology-architecture">
    <article
      v-for="(layer, index) in layers"
      :key="layer.title"
      class="technology-architecture__row"
    >
      <div class="technology-architecture__layer">
        <NuxtImg
          :src="layer.icon"
          :alt="layer.title"
          width="50"
          height="50"
        />
        <h2>{{ layer.title }}</h2>
        <p>{{ layer.description }}</p>
      </div>
      <div
        :class="[
          'technology-architecture__items',
          {
            'technology-architecture__items--image': layer.variant === 'image',
            'technology-architecture__items--one-line': layer.oneLineColumns,
            'technology-architecture__items--inline-icon': layer.itemVariant === 'inline-icon',
            'technology-architecture__items--side-icon': layer.itemVariant === 'side-icon',
            'technology-architecture__items--stacked-icon': layer.itemVariant === 'stacked-icon',
          },
        ]"
        :style="layer.oneLineColumns ? { '--item-columns': String(layer.oneLineColumns) } : undefined"
      >
        <article
          v-for="item in layer.items"
          :key="item.title"
          :class="[
            'technology-architecture__item',
            {
              'technology-architecture__item--image': item.image,
              'technology-architecture__item--with-icon': item.icon,
            },
          ]"
          :style="item.image ? { '--item-image': `url(${item.image})` } : undefined"
        >
          <NuxtImg
            v-if="item.icon"
            class="technology-architecture__item-icon"
            :src="item.icon"
            :alt="item.title"
            width="28"
            height="28"
          />
          <h3>{{ item.title }}</h3>
          <p v-if="item.description">{{ item.description }}</p>
        </article>
      </div>
      <div
        v-if="index < layers.length - 1"
        class="technology-architecture__down"
        aria-hidden="true"
      >
        <UIcon name="i-lucide-chevron-down" />
      </div>
    </article>
  </section>
</template>

<style scoped>
.technology-architecture {
  display: grid;
  gap: 20px;
}

.technology-architecture__row {
  position: relative;
  display: grid;
  grid-template-columns: 152px minmax(0, 1fr);
  gap: 12px;
}

.technology-architecture__layer {
  align-self: end;
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 94px;
  padding: 12px;
  border: 1px solid rgb(43 113 199 / 48%);
  border-radius: 7px;
  background: linear-gradient(135deg, rgb(14 56 117 / 94%), rgb(5 29 67 / 94%));
  text-align: center;
}

.technology-architecture__layer img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

.technology-architecture__layer h2 {
  margin: 4px 0 0;
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 700;
}

.technology-architecture__layer p {
  margin: 2px 0 0;
  color: var(--color-text-secondary);
  font-size: 11px;
}

.technology-architecture__items {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid rgb(42 107 188 / 38%);
  border-radius: 7px;
  background: rgb(2 18 47 / 54%);
}

.technology-architecture__items--image {
  padding: 8px;
}

.technology-architecture__items--one-line {
  grid-template-columns: repeat(var(--item-columns), minmax(0, 1fr));
}

.technology-architecture__item {
  position: relative;
  display: grid;
  min-width: 0;
  min-height: 56px;
  align-content: center;
  padding: 7px 9px;
  border: 1px solid rgb(58 126 201 / 38%);
  border-radius: 5px;
  background: rgb(7 39 82 / 78%);
  cursor: pointer;
  isolation: isolate;
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.technology-architecture__item::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  border-radius: inherit;
  content: '';
  transition: box-shadow 300ms ease;
}

.technology-architecture__item:hover {
  border-color: var(--color-border-active);
  transform: translateY(-3px);
}

.technology-architecture__item:hover::after {
  box-shadow: inset 0 0 28px rgb(1 236 244 / 24%);
}

.technology-architecture__items--inline-icon .technology-architecture__item--with-icon {
  grid-template-columns: 22px minmax(0, 1fr);
  grid-template-rows: auto auto;
  row-gap: 4px;
  column-gap: 6px;
}

.technology-architecture__item-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

.technology-architecture__items--inline-icon .technology-architecture__item-icon {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
}

.technology-architecture__items--inline-icon .technology-architecture__item h3 {
  grid-column: 2;
  grid-row: 1;
}

.technology-architecture__items--inline-icon .technology-architecture__item p {
  grid-column: 1 / -1;
  grid-row: 2;
}

.technology-architecture__items--side-icon .technology-architecture__item--with-icon {
  grid-template-columns: 30px minmax(0, 1fr);
  grid-template-rows: auto auto;
  min-height: 94px;
  align-content: center;
  row-gap: 4px;
  column-gap: 8px;
  padding: 12px;
}

.technology-architecture__items--side-icon .technology-architecture__item-icon {
  grid-column: 1;
  grid-row: span 2;
  width: 30px;
  height: 30px;
  align-self: start;
}

.technology-architecture__items--side-icon .technology-architecture__item h3 {
  grid-column: 2;
  grid-row: 1;
  white-space: normal;
}

.technology-architecture__items--side-icon .technology-architecture__item p {
  grid-column: 2;
  grid-row: 2;
  margin-top: 0;
}

.technology-architecture__item h3,
.technology-architecture__item p {
  margin: 0;
}

.technology-architecture__item h3 {
  color: var(--color-text-primary);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
  white-space: nowrap;
}

.technology-architecture__item p {
  margin-top: 4px;
  color: var(--color-text-secondary);
  font-size: 10px;
  line-height: 1.45;
}

.technology-architecture__item--image {
  position: relative;
  min-height: 112px;
  overflow: hidden;
  align-content: start;
  padding: 12px;
  border-color: rgb(78 145 210 / 44%);
  background: rgb(3 13 34 / 88%);
}

.technology-architecture__item--image::before {
  position: absolute;
  z-index: 0;
  inset: 0;
  background: var(--item-image) center / cover no-repeat;
  content: '';
  transition: transform 360ms ease;
}

.technology-architecture__item--image::after {
  z-index: 1;
  background: linear-gradient(180deg, rgb(3 13 34 / 10%) 15%, rgb(3 13 34 / 88%) 100%);
}

.technology-architecture__item--image > * {
  position: relative;
  z-index: 2;
}

.technology-architecture__item--image:hover::before {
  transform: scale(1.045);
}

.technology-architecture__item--image.technology-architecture__item--with-icon {
  grid-template-columns: 38px minmax(0, 1fr);
  grid-template-rows: auto auto;
  align-content: center;
  column-gap: 8px;
}

.technology-architecture__item--image.technology-architecture__item--with-icon .technology-architecture__item-icon {
  grid-column: 1;
  grid-row: span 2;
  width: 38px;
  height: 38px;
  align-self: start;
}

.technology-architecture__item--image.technology-architecture__item--with-icon h3 {
  grid-column: 2;
  grid-row: 1;
  white-space: normal;
}

.technology-architecture__item--image.technology-architecture__item--with-icon p {
  grid-column: 2;
  grid-row: 2;
}

.technology-architecture__item--image h3 {
  position: relative;
  font-size: 13px;
}

.technology-architecture__item--image p {
  position: relative;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.technology-architecture__items--stacked-icon .technology-architecture__item {
  min-height: 104px;
  justify-items: center;
  align-content: center;
  gap: 5px;
  padding: 8px 5px;
  text-align: center;
}

.technology-architecture__items--stacked-icon .technology-architecture__item-icon {
  width: 28px;
  height: 28px;
}

.technology-architecture__items--stacked-icon .technology-architecture__item h3 {
  font-size: 12px;
}

.technology-architecture__items--stacked-icon .technology-architecture__item p {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 0;
}

.technology-architecture__down {
  position: absolute;
  z-index: 1;
  bottom: -26px;
  left: 60px;
  display: grid;
  width: 1em;
  height: 1em;
  place-items: center;
  color: var(--color-brand-blue);
  background: transparent;
  font-size: 32px;
}

.technology-architecture__down svg {
  width: 1em;
  height: 1em;
}

@media (max-width: 1439px) {
  .technology-architecture__row {
    grid-template-columns: 132px minmax(0, 1fr);
    gap: 8px;
  }

  .technology-architecture__layer h2 {
    font-size: 16px;
  }

  .technology-architecture__items {
    gap: 6px;
    padding: 7px;
  }

  .technology-architecture__item {
    min-height: 54px;
    padding: 6px;
  }

  .technology-architecture__item h3 {
    font-size: 11px;
  }

  .technology-architecture__item p {
    font-size: 9px;
  }

  .technology-architecture__item--image {
    min-height: 105px;
    padding: 12px;
  }

  .technology-architecture__items--inline-icon .technology-architecture__item--with-icon,
  .technology-architecture__item--image.technology-architecture__item--with-icon {
    grid-template-columns: 26px minmax(0, 1fr);
    column-gap: 6px;
  }

  .technology-architecture__item--image.technology-architecture__item--with-icon .technology-architecture__item-icon {
    width: 34px;
    height: 34px;
    align-self: start;
  }

  .technology-architecture__item--image.technology-architecture__item--with-icon {
    grid-template-columns: 34px minmax(0, 1fr);
  }

  .technology-architecture__item-icon {
    width: 18px;
    height: 18px;
  }

  .technology-architecture__items--side-icon .technology-architecture__item--with-icon {
    grid-template-columns: 26px minmax(0, 1fr);
    min-height: 90px;
    column-gap: 6px;
  }

  .technology-architecture__items--side-icon .technology-architecture__item-icon {
    width: 26px;
    height: 26px;
    align-self: start;
  }

  .technology-architecture__items--stacked-icon .technology-architecture__item {
    min-height: 92px;
    gap: 4px;
    padding: 7px 3px;
  }

  .technology-architecture__items--stacked-icon .technology-architecture__item-icon {
    width: 22px;
    height: 22px;
  }

  .technology-architecture__items--stacked-icon .technology-architecture__item h3 {
    font-size: 11px;
  }

  .technology-architecture__down {
    left: 50px;
  }
}

@media (max-width: 1199px) {
  .technology-architecture__items {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .technology-architecture__items--one-line {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .technology-architecture__item--image {
    min-height: 130px;
  }

  .technology-architecture__items--stacked-icon .technology-architecture__item {
    min-height: 100px;
    padding: 10px 8px;
  }

  .technology-architecture__items--stacked-icon .technology-architecture__item-icon {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 767px) {
  .technology-architecture__row {
    grid-template-columns: 1fr;
  }

  .technology-architecture__layer {
    min-height: 0;
    grid-template-columns: 42px auto 1fr;
    justify-items: start;
    gap: 0 10px;
    padding: 10px 14px;
    text-align: left;
  }

  .technology-architecture__layer img {
    grid-row: span 2;
    align-self: center;
  }

  .technology-architecture__layer h2 {
    margin: 0;
  }

  .technology-architecture__layer p {
    margin: 0;
  }

  .technology-architecture__items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .technology-architecture__item--image {
    min-height: 125px;
  }

  .technology-architecture__items--stacked-icon .technology-architecture__item {
    min-height: 112px;
  }

  .technology-architecture__down {
    position: relative;
    bottom: auto;
    left: auto;
    margin: -4px auto -12px;
  }
}
</style>
