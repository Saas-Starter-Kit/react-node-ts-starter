import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomeView';
import TodoListPage from '@/pages/TodoListView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/todos',
    element: <TodoListPage />
  }
]);

export default router;
