import axiosClient from '../services/axios';
import { Todo } from '@/types/types';
import { AxiosResponse } from 'axios';

export const fetchAllPolygons = async (): Promise<Todo[]> => {
  const res: AxiosResponse<Todo[]> = await axiosClient.get('/all-polygons');
  return res.data;
};

//export const fetchOnePolygon = async (id: string): Promise<Polygon> => {
//  const res: AxiosResponse<Polygon> = await axiosClient.get(`/polygon/${id}`);
//  return res.data;
//};

//export const postPolygon = async (polygonData: Polygon) => {
//  return await axiosClient.post('/polygon', polygonData);
//};

//export const putPolygon = async (polygonData: Polygon) => {
//  return await axiosClient.put('/polygon', polygonData);
//};

//export const deletePolygon = async (id: string) => {
//  return await axiosClient.delete(`/polygon/${id}`);
//};
