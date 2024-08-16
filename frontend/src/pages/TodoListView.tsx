import React from 'react';
import TodoList from '../components/TodoList';
import { useQuery } from '@tanstack/react-query';
import { fetchAllTodos } from '@/api/todo';

//const todos: Todo[] = [
//  { id: 'id1', title: 'Card 1', description: 'This is the first card.' },
//  { id: 'id2', title: 'Card 2', description: 'This is the second card.' },
//  { id: 'id3', title: 'Card 3', description: 'This is the third card.' }
//];

const TodoListPage: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['allTodos'],
    queryFn: () => fetchAllTodos()
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1>Todos:</h1>
      {isLoading ? <div>...Loading</div> : <div>None Found</div>}
      {error && <div>{error.message} </div>}
      {data && <TodoList todos={data} />}
    </div>
  );
};

export default TodoListPage;
