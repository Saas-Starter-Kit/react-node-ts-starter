import axiosClient from '../services/axios';
import { Todo, TodoCreate } from '@/types/types';
import { AxiosResponse } from 'axios';

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const res: AxiosResponse<Todo[]> = await axiosClient.get('/todos');
  return res.data;
};

export const fetchOneTodo = async (id: string): Promise<Todo> => {
  const res: AxiosResponse<Todo> = await axiosClient.get(`/todos/${id}`);
  return res.data;
};

export const postTodo = async (todoData: TodoCreate): Promise<void> => {
  await axiosClient.post('/todos', todoData);
};

export const putTodo = async (todoData: Todo): Promise<void> => {
  await axiosClient.put(`/todos/${todoData.id}`, todoData);
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axiosClient.delete(`/todos/${id}`);
};
