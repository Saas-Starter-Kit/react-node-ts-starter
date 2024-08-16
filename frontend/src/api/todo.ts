import axiosClient from '../services/axios';
import { Todo, TodoCreate } from '@/types/types';
import { AxiosResponse } from 'axios';

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const res: AxiosResponse<Todo[]> = await axiosClient.get('/todos');
  return res.data;
};

export const fetchOneTodo = async (id: string): Promise<Todo> => {
  const res: AxiosResponse<Todo> = await axiosClient.get(`/todo/${id}`);
  return res.data;
};

export const postTodo = async (todoData: TodoCreate): Promise<void> => {
  await axiosClient.post('/todo', todoData);
};

export const putTodo = async (todoData: Todo): Promise<void> => {
  await axiosClient.put(`/todo/${todoData.id}`, todoData);
};

export const deleteTodo = async (id: string): Promise<void> => {
  await axiosClient.delete(`/todo/${id}`);
};
