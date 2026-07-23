<script setup lang="ts">
import type { CSSProperties } from 'vue'

interface HomeAbility {
  label: string
  icon: string
}

defineProps<{
  abilities: HomeAbility[]
}>()

const radarStyle = {
  '--radar-image': 'url(\'/images/home/radar-panel.png\')',
} as CSSProperties
</script>

<template>
  <section
    class="home-hero"
    aria-labelledby="home-hero-title"
  >
    <div
      class="home-hero__shade"
      aria-hidden="true"
    />

    <div class="home-hero__content site-container">
      <div class="home-hero__copy">
        <h1
          id="home-hero-title"
          data-entrance
        >
          让气象数据<br>
          成为 <span>可预测的商业价值</span>
        </h1>
        <p data-entrance>
          微息熵算融合人工智能、大数据、云计算与卫星遥感技术，<br>
          为商业气象、新能源发电及地理空间智能提供<br>
          数据、算法与平台一体化解决方案。
        </p>
        <div
          class="home-hero__actions"
          data-entrance
        >
          <BaseButton to="/solutions">
            了解解决方案
          </BaseButton>
          <BaseButton
            to="/contact"
            variant="secondary"
          >
            商务合作
          </BaseButton>
        </div>
      </div>

      <div
        class="home-radar-stage"
        data-entrance
      >
        <div
          class="home-radar"
          :style="radarStyle"
          aria-label="15分钟、1公里精细化气象预报"
        >
          <strong>15分钟 / 1km</strong>
          <span>精细化气象预报</span>
          <NuxtImg
            class="home-radar__icon"
            src="/images/home/ability-forecast.png"
            width="64"
            height="64"
            alt=""
          />
        </div>
      </div>

      <ul
        class="home-abilities"
        aria-label="核心技术能力"
      >
        <li
          v-for="ability in abilities"
          :key="ability.label"
          data-entrance
        >
          <span class="home-abilities__icon">
            <NuxtImg
              :src="ability.icon"
              width="64"
              height="64"
              alt=""
            />
          </span>
          <strong>{{ ability.label }}</strong>
        </li>
      </ul>
    </div>

    <slot />
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;
  height: 662px;
  overflow: hidden;
  background-color: #020a19;
  background-image: url('/images/home/hero-background.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.home-hero__shade {
  position: absolute;
  inset: 0;
  background: rgb(0 8 22 / 16%);
}

.home-hero__content {
  position: relative;
  height: 100%;
}

.home-hero__copy {
  position: absolute;
  z-index: 2;
  top: 140px;
  left: 0;
  width: 580px;
}

.home-hero h1 {
  margin: 0;
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.34;
  text-shadow: 0 2px 16px rgb(0 0 0 / 24%);
}

.home-hero h1 span {
  color: #07bdf4;
}

.home-hero__copy p {
  margin: 12px 0 0;
  color: rgb(255 255 255 / 90%);
  font-size: 16px;
  line-height: 1.8;
}

.home-hero__actions {
  display: flex;
  gap: 20px;
  margin-top: 24px;
}

.home-hero__actions :deep(.base-button) {
  min-width: 154px;
  border-radius: 5px;
  font-size: 14px;
}

.home-hero__actions :deep(.base-button--secondary) {
  border-color: rgb(255 255 255 / 60%);
  background: rgb(2 12 32 / 48%);
}

.home-radar-stage {
  position: absolute;
  z-index: 2;
  top: 217px;
  left: 51%;
  width: 280px;
  height: 230px;
  perspective: 900px;
}

.home-radar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 18px 16px;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  opacity: 0.7;
  color: #fff;
  background-image: var(--radar-image);
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 32px rgb(19 157 255 / 28%);
  transform: rotateX(20deg) rotateY(30deg) rotateZ(-12deg);
  transform-style: preserve-3d;
  transform-origin: center center;
  transition:
    opacity 320ms ease,
    box-shadow 320ms ease,
    transform 420ms cubic-bezier(0.2, 0.75, 0.2, 1);
}

.home-radar:hover {
  opacity: 1;
  box-shadow:
    inset 0 0 42px rgb(1 236 244 / 34%),
    0 14px 30px rgb(0 14 45 / 32%);
  transform: translateY(-6px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1.015);
}

.home-radar strong,
.home-radar span {
  position: relative;
  z-index: 1;
  display: block;
  text-shadow: 0 2px 8px rgb(0 19 54 / 80%);
}

.home-radar strong {
  font-size: 20px;
  line-height: 1.2;
}

.home-radar span {
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
}

.home-radar__icon {
  position: absolute;
  bottom: 62px;
  left: 28px;
  width: 52px;
  height: 52px;
}

.home-abilities {
  position: absolute;
  z-index: 2;
  top: 128px;
  right: 0;
  display: grid;
  width: 190px;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}

.home-abilities li {
  display: grid;
  height: 56px;
  align-items: center;
  grid-template-columns: 36px max-content;
  justify-content: end;
  gap: 10px;
  cursor: pointer;
  color: rgb(255 255 255 / 80%);
  transition: transform 260ms ease;
}

.home-abilities__icon {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgb(31 138 249 / 56%);
  border-radius: 50%;
  background: rgb(4 31 76 / 70%);
  transition:
    border-color 260ms ease,
    box-shadow 260ms ease,
    transform 260ms ease;
}

.home-abilities__icon img {
  width: 22px;
  height: 22px;
}

.home-abilities strong {
  color: rgb(255 255 255 / 82%);
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  transition: color 260ms ease;
}

.home-abilities li:hover {
  transform: translateX(-4px);
}

.home-abilities li:hover .home-abilities__icon {
  border-color: rgb(1 236 244 / 74%);
  box-shadow: 0 0 16px rgb(1 236 244 / 30%);
  transform: scale(1.12) rotate(5deg);
}

.home-abilities li:hover strong {
  color: #fff;
}

@media (max-width: 1439px) {
  .home-hero {
    height: 620px;
  }

  .home-hero__copy {
    top: 128px;
    width: 520px;
  }

  .home-hero h1 {
    font-size: 42px;
  }

  .home-radar-stage {
    top: 210px;
    left: 52%;
    width: 250px;
    height: 205px;
  }

  .home-abilities {
    top: 124px;
    width: 150px;
  }
}
</style>
