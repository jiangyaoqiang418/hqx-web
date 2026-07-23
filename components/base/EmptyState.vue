<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    description?: string
  }>(),
  {
    title: '暂无内容',
    description: '相关内容正在整理中，请稍后再来查看。',
  },
)
</script>

<template>
  <div
    class="empty-state"
    role="status"
  >
    <UIcon
      class="empty-state__icon"
      name="i-lucide-inbox"
      aria-hidden="true"
    />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <slot />
  </div>
</template>

<style scoped>
.empty-state {
  display: grid;
  min-height: 18rem;
  place-items: center;
  align-content: center;
  gap: 0.75rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: rgb(6 26 54 / 64%);
  text-align: center;
}

.empty-state__icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-accent-cyan);
}

.empty-state h2,
.empty-state p {
  margin: 0;
}

.empty-state h2 {
  color: var(--color-text-primary);
  font-size: 1.25rem;
}

.empty-state p {
  color: var(--color-text-muted);
}
</style>
