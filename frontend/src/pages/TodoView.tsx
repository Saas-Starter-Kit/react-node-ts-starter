import React from 'react';
import { useParams } from 'react-router-dom';

import { useTodo } from '@/hooks/useTodo';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const TodoViewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Fetch the id from the URL params
  if (!id) throw 'id not found';

  const { data: todo, isLoading, error } = useTodo(id);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isLoading && <div>...Loading</div>}
      {error && <div>{error.message}</div>}
      {todo && (
        <Card className="max-w-md mx-auto mt-10 shadow-lg">
          <CardHeader className=" p-4">
            <CardTitle className="text-2xl font-bold">{todo.title}</CardTitle>
            <hr />
          </CardHeader>
          <CardContent className="p-4">
            <CardDescription className="text-gray-700">{todo.description}</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TodoViewPage;
