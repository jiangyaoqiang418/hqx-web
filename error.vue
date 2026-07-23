<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page">
    <div class="site-container error-page__content">
      <p class="error-page__code">
        {{ error.statusCode || 500 }}
      </p>
      <h1>{{ error.statusCode === 404 ? '页面不存在' : '页面暂时无法访问' }}</h1>
      <p>{{ error.statusMessage || '请稍后重试，或返回首页继续浏览。' }}</p>
      <BaseButton @click="handleError">
        返回首页
      </BaseButton>
    </div>
  </main>
</template>
