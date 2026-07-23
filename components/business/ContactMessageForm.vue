<script setup lang="ts">
import { contactFormSchema, type ContactFormValues } from '~/schemas/contact'

const form = reactive<ContactFormValues>({
  name: '',
  phone: '',
  company: '',
  email: '',
  message: '',
})

const errors = ref<Partial<Record<keyof ContactFormValues, string>>>({})
const submitMessage = ref('')

const handleSubmit = () => {
  const result = contactFormSchema.safeParse(form)
  errors.value = {}
  submitMessage.value = ''

  if (!result.success) {
    errors.value = result.error.issues.reduce<Partial<Record<keyof ContactFormValues, string>>>((accumulator, issue) => {
      const key = issue.path[0] as keyof ContactFormValues
      if (!accumulator[key]) accumulator[key] = issue.message
      return accumulator
    }, {})
    return
  }

  submitMessage.value = '留言提交服务暂未接入，请通过商务合作邮箱与我们联系。'
}
</script>

<template>
  <section class="contact-message-form">
    <h2>在线留言</h2>
    <div class="contact-message-form__title-line" aria-hidden="true" />
    <form @submit.prevent="handleSubmit">
      <label>
        <span>您的姓名 <b>*</b></span>
        <input
          v-model="form.name"
          name="name"
          autocomplete="name"
          placeholder="请输入您的姓名"
          :aria-invalid="Boolean(errors.name)"
        >
        <small v-if="errors.name">{{ errors.name }}</small>
      </label>
      <label>
        <span>联系电话 <b>*</b></span>
        <input
          v-model="form.phone"
          name="phone"
          autocomplete="tel"
          placeholder="请输入联系电话"
          :aria-invalid="Boolean(errors.phone)"
        >
        <small v-if="errors.phone">{{ errors.phone }}</small>
      </label>
      <label>
        <span>公司名称</span>
        <input
          v-model="form.company"
          name="company"
          autocomplete="organization"
          placeholder="请输入公司名称"
          :aria-invalid="Boolean(errors.company)"
        >
        <small v-if="errors.company">{{ errors.company }}</small>
      </label>
      <label>
        <span>电子邮箱 <b>*</b></span>
        <input
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="请输入电子邮箱"
          :aria-invalid="Boolean(errors.email)"
        >
        <small v-if="errors.email">{{ errors.email }}</small>
      </label>
      <label class="contact-message-form__message-field">
        <span>留言内容 <b>*</b></span>
        <textarea
          v-model="form.message"
          name="message"
          placeholder="请输入您的需求或留言内容..."
          :aria-invalid="Boolean(errors.message)"
        />
        <small v-if="errors.message">{{ errors.message }}</small>
      </label>
      <button type="submit">
        提交留言
        <UIcon
          name="i-lucide-send"
          aria-hidden="true"
        />
      </button>
      <p
        v-if="submitMessage"
        class="contact-message-form__submit-message"
        role="status"
      >{{ submitMessage }}</p>
      <p class="contact-message-form__hint">提交后，我们的团队将尽快与您联系。</p>
    </form>
  </section>
</template>

<style scoped>
.contact-message-form {
  min-height: 430px;
  padding: 20px 24px;
  border: 1px solid rgb(52 118 194 / 46%);
  border-radius: 7px;
  background: linear-gradient(145deg, rgb(7 31 68 / 94%), rgb(3 20 48 / 94%));
}

.contact-message-form h2,
.contact-message-form p {
  margin: 0;
}

.contact-message-form h2 {
  color: var(--color-text-primary);
  font-size: 18px;
  font-weight: 600;
}

.contact-message-form__title-line {
  width: 38px;
  height: 2px;
  margin-top: 8px;
  background: var(--color-accent-cyan);
}

.contact-message-form form {
  display: grid;
  gap: 10px;
  margin-top: 14px;
}

.contact-message-form label {
  display: grid;
  grid-template-columns: 94px minmax(0, 1fr);
  align-items: start;
  gap: 8px;
}

.contact-message-form label > span {
  padding-top: 9px;
  color: var(--color-text-primary);
  font-size: 13px;
  font-weight: 500;
}

.contact-message-form b {
  color: var(--color-error);
}

.contact-message-form input,
.contact-message-form textarea {
  width: 100%;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  color: var(--color-text-primary);
  background: rgb(17 51 101 / 54%);
  transition: border-color 180ms ease, background-color 180ms ease;
}

.contact-message-form input {
  height: 37px;
  padding: 0 12px;
}

.contact-message-form textarea {
  min-height: 82px;
  padding: 10px 12px;
  resize: vertical;
}

.contact-message-form input::placeholder,
.contact-message-form textarea::placeholder {
  color: var(--color-text-muted);
}

.contact-message-form input:focus,
.contact-message-form textarea:focus {
  border-color: var(--color-border-active);
  background: rgb(17 51 101 / 74%);
}

.contact-message-form input[aria-invalid='true'],
.contact-message-form textarea[aria-invalid='true'] {
  border-color: var(--color-error);
}

.contact-message-form label small {
  grid-column: 2;
  color: var(--color-error);
  font-size: 11px;
}

.contact-message-form button {
  display: inline-flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2px;
  border: 0;
  border-radius: 5px;
  color: var(--color-text-primary);
  background: linear-gradient(100deg, var(--color-action-start), var(--color-action-end));
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.contact-message-form button:hover {
  filter: brightness(1.12);
}

.contact-message-form button:active {
  transform: scale(0.99);
}

.contact-message-form__submit-message {
  color: var(--color-warning);
  font-size: 11px;
  text-align: center;
}

.contact-message-form__hint {
  color: var(--color-text-secondary);
  font-size: 11px;
  text-align: center;
}

@media (max-width: 1439px) {
  .contact-message-form {
    min-height: 386px;
    padding: 16px;
  }

  .contact-message-form form {
    gap: 7px;
  }

  .contact-message-form label {
    grid-template-columns: 78px minmax(0, 1fr);
  }

  .contact-message-form label > span {
    font-size: 12px;
  }

  .contact-message-form input {
    height: 34px;
  }

  .contact-message-form textarea {
    min-height: 70px;
  }
}

@media (max-width: 767px) {
  .contact-message-form label {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .contact-message-form label > span {
    padding-top: 0;
  }

  .contact-message-form label small {
    grid-column: auto;
  }
}
</style>
