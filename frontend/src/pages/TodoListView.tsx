import React from 'react';
import TodoList from '../components/TodoList';
import { Todo } from '@/types/types';

const todos: Todo[] = [
  { id: 'id1', title: 'Card 1', description: 'This is the first card.' },
  { id: 'id2', title: 'Card 2', description: 'This is the second card.' },
  { id: 'id3', title: 'Card 3', description: 'This is the third card.' }
];

const TodoListPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoListPage;
