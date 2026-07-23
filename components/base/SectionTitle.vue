<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <header class="section-title">
    <h2>{{ title }}</h2>
    <p v-if="description">
      {{ description }}
    </p>
  </header>
</template>

<style scoped>
.section-title {
  max-width: 48rem;
  margin-bottom: 2rem;
}

.section-title h2 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.25;
}

.section-title p {
  max-width: 42rem;
  margin: 0.75rem 0 0;
  color: var(--color-text-muted);
}
</style>
