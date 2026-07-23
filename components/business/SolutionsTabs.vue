<script setup lang="ts">
defineProps<{
  tabs: Array<{
    label: string
    value: string
  }>
  active: string
}>()

const emit = defineEmits<{
  change: [value: string]
}>()
</script>

<template>
  <div class="solutions-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      class="solutions-tabs__item"
      :class="{ 'solutions-tabs__item--active': tab.value === active }"
      type="button"
      @click="emit('change', tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped>
.solutions-tabs {
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-top: 18px;
}

.solutions-tabs__item {
  width: 146px;
  height: 38px;
  border: 1px solid rgb(66 126 190 / 58%);
  border-radius: 8px;
  color: var(--color-text-secondary);
  background: linear-gradient(180deg, rgb(10 36 73 / 86%), rgb(5 22 48 / 84%));
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  transition:
    border-color 180ms ease,
    color 180ms ease,
    background 180ms ease,
    transform 180ms ease;
}

.solutions-tabs__item:hover,
.solutions-tabs__item--active {
  border-color: transparent;
  color: #fff;
  background: linear-gradient(100deg, #20dce8, #006ce4);
}

.solutions-tabs__item:hover {
  transform: translateY(-1px);
}

@media (max-width: 1439px) {
  .solutions-tabs {
    gap: 16px;
    padding-top: 16px;
  }

  .solutions-tabs__item {
    width: 132px;
    height: 36px;
    font-size: 13px;
  }
}
</style>
