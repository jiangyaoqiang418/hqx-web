<script setup lang="ts">
withDefaults(
  defineProps<{
    rows?: number
  }>(),
  { rows: 3 },
)
</script>

<template>
  <div
    class="loading-skeleton"
    aria-busy="true"
    aria-label="内容加载中"
  >
    <div
      v-for="index in rows"
      :key="index"
      class="loading-skeleton__item"
    />
  </div>
</template>

<style scoped>
.loading-skeleton {
  display: grid;
  gap: 1rem;
}

.loading-skeleton__item {
  min-height: 9rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: linear-gradient(
    90deg,
    var(--color-bg-card) 0%,
    var(--color-bg-card-strong) 50%,
    var(--color-bg-card) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.6s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: -100% 0;
  }
}
</style>
