import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchOneTodo } from '@/api/todo';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const TodoViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isPending, error, data } = useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchOneTodo(id!)
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isPending && <div>...Loading</div>}
      {error && <div>{error.message}</div>}
      {data && (
        <Card className="max-w-md mx-auto mt-10 shadow-lg">
          <CardHeader className="bg-blue-500 text-white p-4">
            <CardTitle className="text-2xl font-bold">{data.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-700">{data.description}</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TodoViewPage;
