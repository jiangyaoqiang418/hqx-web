<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
  to?: string
}>()
</script>

<template>
  <article class="business-card">
    <UIcon
      v-if="icon"
      :name="icon"
      class="business-card__icon"
      aria-hidden="true"
    />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <BaseButton
      v-if="to"
      :to="to"
      variant="text"
    >
      了解更多
    </BaseButton>
  </article>
</template>

<style scoped>
.business-card {
  min-height: 13rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: linear-gradient(145deg, rgb(6 26 54 / 92%), rgb(4 20 44 / 80%));
  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.business-card:hover {
  border-color: var(--color-border-active);
  transform: translateY(-3px);
}

.business-card__icon {
  width: 2rem;
  height: 2rem;
  color: var(--color-accent-cyan);
}

.business-card h3 {
  margin: 1rem 0 0;
  color: var(--color-text-primary);
  font-size: 1.25rem;
}

.business-card p {
  margin: 0.75rem 0 1rem;
  color: var(--color-text-muted);
}
</style>
