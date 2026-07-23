<template>
  <section class="solutions-consult">
    <div class="solutions-consult__copy">
      <NuxtImg
        src="/images/solutions/icon-consult.png"
        alt=""
        width="40"
        height="40"
        loading="lazy"
      />
      <div>
        <h2>找不到您需要的解决方案？</h2>
        <p>我们的专家团队将为您量身定制专属解决方案，助力您的业务成功。</p>
      </div>
    </div>
    <BaseButton to="/contact">
      联系我们的专家
    </BaseButton>
  </section>
</template>

<style scoped>
.solutions-consult {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(calc(100% - 296px), 1348px);
  min-width: 1050px;
  margin: 22px auto 20px;
  padding: 16px 46px 16px 38px;
  border: 1px solid rgb(66 126 190 / 46%);
  border-radius: 8px;
  background: linear-gradient(100deg, rgb(8 31 67 / 94%), rgb(4 24 55 / 82%));
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 5%);
}

.solutions-consult__copy {
  display: flex;
  align-items: center;
  gap: 24px;
}

.solutions-consult__copy img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.solutions-consult h2 {
  margin: 0;
  color: var(--color-text-primary);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
}

.solutions-consult p {
  margin: 6px 0 0;
  color: var(--color-text-secondary);
  font-size: 14px;
}

.solutions-consult :deep(.base-button) {
  width: 224px;
  min-height: 40px;
  border-radius: 6px;
  background: linear-gradient(100deg, #20dce8, #006ce4);
}

@media (max-width: 1439px) {
  .solutions-consult {
    width: min(calc(100% - 160px), 1210px);
    min-width: 1050px;
    margin-top: 18px;
    padding: 14px 32px;
  }

  .solutions-consult h2 {
    font-size: 18px;
  }

  .solutions-consult p {
    font-size: 12px;
  }

  .solutions-consult :deep(.base-button) {
    width: 198px;
    font-size: 13px;
  }
}
</style>
