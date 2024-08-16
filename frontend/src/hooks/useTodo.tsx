import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchOneTodo } from '@/api/todo';
import { Todo } from '@/types/types';

export function useTodo(id: string) {
  const queryClient = useQueryClient();

  const cachedData: Todo[] | undefined = queryClient.getQueryData(['todos']);
  const todoFromCache = cachedData?.find((todo) => todo.id === id);

  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchOneTodo(id),
    initialData: todoFromCache,
    enabled: !todoFromCache
  });
}
