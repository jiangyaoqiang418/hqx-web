import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, '请输入至少 2 个字符的姓名').max(40, '姓名不能超过 40 个字符'),
  phone: z.string().trim().regex(/^1\d{10}$|^0\d{2,3}-?\d{7,8}$/, '请输入有效的联系电话'),
  company: z.string().trim().max(100, '公司名称不能超过 100 个字符').optional(),
  email: z.email('请输入有效的电子邮箱'),
  message: z.string().trim().min(10, '请至少填写 10 个字符的需求说明').max(1000, '留言不能超过 1000 个字符'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
