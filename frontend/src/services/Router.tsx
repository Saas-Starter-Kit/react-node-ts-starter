import HomePage from '@/pages/HomeView';
import TodoListPage from '@/pages/TodoListView';
import TodosCreateForm from '@/pages/TodoCreateView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderNav } from '@/components/HeaderNav';

export const HeaderNavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Todos', path: '/todos' },
  { name: 'Create', path: '/todo/create' }
];

function RoutesPage() {
  return (
    <Router>
      <HeaderNav links={HeaderNavLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodoListPage />} />
        <Route path="/todo/create" element={<TodosCreateForm />} />
      </Routes>
    </Router>
  );
}

export default RoutesPage;
