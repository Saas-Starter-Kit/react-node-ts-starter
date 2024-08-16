import React from 'react';
import BasicCard from './TodoItem';
import { Todo } from '@/types/types';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }: TodoListProps) => {
  return (
    <div className="space-y-4">
      {todos.map((todo: Todo) => (
        <BasicCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default TodoList;
