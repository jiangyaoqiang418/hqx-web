<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'text'

const props = withDefaults(
  defineProps<{
    to?: string
    variant?: ButtonVariant
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    disabled: false,
    type: 'button',
  },
)

const classes = computed(() => ['base-button', `base-button--${props.variant}`])
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <span><slot /></span>
    <UIcon
      name="i-lucide-arrow-right"
      aria-hidden="true"
    />
  </NuxtLink>
  <button
    v-else
    :type="type"
    :class="classes"
    :disabled="disabled"
  >
    <span><slot /></span>
    <UIcon
      name="i-lucide-arrow-right"
      aria-hidden="true"
    />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.625rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  color: var(--color-text-primary);
  font-weight: 600;
  line-height: 1.25;
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background-color 180ms ease;
}

.base-button:hover {
  transform: translateY(-1px);
}

.base-button:active {
  transform: scale(0.98);
}

.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.base-button--primary {
  background: linear-gradient(100deg, var(--color-action-start), var(--color-action-end));
  box-shadow: 0 10px 30px rgb(2 66 171 / 22%);
}

.base-button--secondary {
  border-color: var(--color-border);
  background: rgb(6 26 54 / 70%);
}

.base-button--secondary:hover {
  border-color: var(--color-border-active);
}

.base-button--text {
  padding-inline: 0;
  color: var(--color-accent-cyan);
  background: transparent;
}
</style>
