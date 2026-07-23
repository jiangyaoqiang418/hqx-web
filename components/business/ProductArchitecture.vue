<script setup lang="ts">
defineProps<{
  layers: Array<{
    title: string
    items: string[]
  }>
}>()
</script>

<template>
  <section class="product-architecture">
    <div class="product-architecture__intro">
      <h2>我们的产品架构</h2>
      <p>以数据中台为核心，融合AI能力与行业知识，支撑各类产品与解决方案的快速落地。</p>
      <BaseButton to="/contact">
        查看架构详情
      </BaseButton>
    </div>
    <div class="product-architecture__flow">
      <template
        v-for="(layer, index) in layers"
        :key="layer.title"
      >
        <article class="product-architecture__layer">
          <h3>{{ layer.title }}</h3>
          <ul>
            <li
              v-for="item in layer.items"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </article>
        <NuxtImg
          v-if="index < layers.length - 1"
          class="product-architecture__arrow"
          src="/images/products/architecture-arrow.png"
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
      </template>
    </div>
  </section>
</template>

<style scoped>
.product-architecture {
  display: grid;
  grid-template-columns: 270px 1fr;
  gap: 28px;
  padding: 20px 28px;
  border: 1px solid rgb(66 126 190 / 48%);
  border-radius: 8px;
  background: linear-gradient(145deg, rgb(7 29 64 / 92%), rgb(4 20 44 / 88%));
}

.product-architecture__intro h2 {
  margin: 4px 0 0;
  color: var(--color-text-primary);
  font-size: 22px;
  font-weight: 700;
}

.product-architecture__intro p {
  margin: 14px 0 22px;
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.8;
}

.product-architecture__intro :deep(.base-button) {
  width: 154px;
  min-height: 38px;
  border-radius: 5px;
  background: linear-gradient(100deg, #2072f4, #0242ab);
  font-size: 13px;
  white-space: nowrap;
}

.product-architecture__flow {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr) 24px) minmax(0, 1fr);
  align-items: stretch;
  gap: 8px;
}

.product-architecture__layer {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 166px;
  padding: 12px 12px 10px;
  border: 1px solid rgb(1 236 244 / 34%);
  border-radius: 7px;
  background: linear-gradient(180deg, rgb(10 36 73 / 86%), rgb(5 22 48 / 90%));
}

.product-architecture__layer h3 {
  margin: 0 0 10px;
  color: var(--color-text-primary);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
}

.product-architecture__layer ul {
  display: grid;
  flex: 1;
  align-content: space-between;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.product-architecture__layer li {
  display: grid;
  min-height: 25px;
  place-items: center;
  border-radius: 5px;
  color: var(--color-text-secondary);
  background: rgb(24 68 116 / 55%);
  font-size: 12px;
  white-space: nowrap;
}

.product-architecture__arrow {
  align-self: center;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

@media (max-width: 1439px) {
  .product-architecture {
    grid-template-columns: 210px minmax(0, 1fr);
    gap: 18px;
    padding: 18px;
  }

  .product-architecture__intro h2 {
    font-size: 19px;
  }

  .product-architecture__intro p {
    font-size: 12px;
    line-height: 1.7;
  }

  .product-architecture__intro :deep(.base-button) {
    width: 138px;
    font-size: 12px;
  }

  .product-architecture__flow {
    grid-template-columns: repeat(4, minmax(0, 1fr) 18px) minmax(0, 1fr);
    gap: 5px;
  }

  .product-architecture__layer {
    min-height: 154px;
    padding: 10px 8px 8px;
  }

  .product-architecture__layer h3 {
    font-size: 12px;
  }

  .product-architecture__layer li {
    min-height: 23px;
    font-size: 11px;
  }

  .product-architecture__arrow {
    width: 18px;
    height: 18px;
  }
}
</style>
