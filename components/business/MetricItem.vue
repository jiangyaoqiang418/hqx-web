<script setup lang="ts">
import type { MetricItem } from '~/types/site'

defineProps<{
  metric: MetricItem
}>()
</script>

<template>
  <div
    class="metric-item"
    :aria-label="metric.accessibleValue || `${metric.value}${metric.unit || ''}${metric.label}`"
  >
    <strong aria-hidden="true">
      {{ metric.value }}<span v-if="metric.unit">{{ metric.unit }}</span>
    </strong>
    <span aria-hidden="true">{{ metric.label }}</span>
  </div>
</template>

<style scoped>
.metric-item {
  display: grid;
  gap: 0.125rem;
  padding: 0.75rem 1rem;
  border-left: 1px solid var(--color-border);
}

.metric-item strong {
  color: var(--color-accent-cyan);
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.2;
}

.metric-item strong span {
  margin-left: 0.125rem;
  font-size: 0.85em;
}

.metric-item > span {
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}
</style>
