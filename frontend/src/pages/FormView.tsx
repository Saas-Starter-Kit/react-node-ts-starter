'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { todoFormSchema, todoFormValues } from '@/types/validations';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { CreateTodo } from '@/lib/API/Database/todos/mutations';
import { toast } from 'react-toastify';
import { errorMessageGeneral } from '@/utils/constants';

export default function TodosCreateForm() {
  const form = useForm<todoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const {
    reset,
    register,
    formState: { isSubmitting }
  } = form;

  const onSubmit = async (values: todoFormValues) => {
    const title = values.title;
    const description = values.description;
    const props = { title, description };

    try {
      await CreateTodo(props);
    } catch (err) {
      toast.error(errorMessageGeneral);
      throw err;
    }

    reset({ title: '', description: '' });
    toast.success('Todo Submitted');
  };

  return (
    <div>
      <Card className="bg-background-light dark:bg-background-dark">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">New Todo</CardTitle>
          <CardDescription>Create a Todo with Title and Description</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormMessage /> <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...register('title')}
                        type="text"
                        className="bg-background-light dark:bg-background-dark"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-background-light dark:bg-background-dark"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isSubmitting} className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
