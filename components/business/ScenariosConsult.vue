<template>
  <section class="scenarios-consult">
    <span class="scenarios-consult__icon">
      <UIcon
        name="i-lucide-headset"
        aria-hidden="true"
      />
    </span>
    <div>
      <h2>需要定制您的专属解决方案？</h2>
      <p>我们的专家团队将为您提供一对一咨询与方案设计服务，助力您的业务成功。</p>
    </div>
    <BaseButton to="/contact">
      立即咨询
    </BaseButton>
  </section>
</template>

<style scoped>
.scenarios-consult {
  display: grid;
  grid-template-columns: 44px 1fr 142px;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 10px 22px;
  border: 1px solid rgb(40 111 196 / 40%);
  border-radius: 36px;
  background: linear-gradient(90deg, rgb(9 43 92 / 88%), rgb(3 25 59 / 62%));
}

.scenarios-consult__icon {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #2072f4, #0242ab);
}

.scenarios-consult__icon :deep(.iconify) {
  width: 20px;
  height: 20px;
  color: #fff;
}

.scenarios-consult h2,
.scenarios-consult p {
  margin: 0;
}

.scenarios-consult h2 {
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 600;
}

.scenarios-consult p {
  margin-top: 3px;
  color: var(--color-text-secondary);
  font-size: 12px;
}

.scenarios-consult :deep(.base-button) {
  min-height: 38px;
  border-radius: 5px;
  font-size: 13px;
}

@media (max-width: 767px) {
  .scenarios-consult {
    grid-template-columns: 42px 1fr;
    padding: 14px;
    border-radius: 8px;
  }

  .scenarios-consult__icon {
    width: 40px;
    height: 40px;
  }

  .scenarios-consult :deep(.base-button) {
    grid-column: 1 / -1;
    width: 100%;
  }
}
</style>
