import * as z from 'zod';

export const todoFormSchema = z.object({
  title: z
    .string({
      required_error: 'Please enter a Title.'
    })
    .max(30, {
      message: 'Title must not be longer than 30 characters.'
    }),
  description: z.string().min(8, {
    message: 'Description Must be at least 8 characters'
  })
});

export type todoFormValues = z.infer<typeof todoFormSchema>;
