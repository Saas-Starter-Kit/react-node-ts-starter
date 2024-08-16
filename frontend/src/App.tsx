import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RoutesPage from './services/Router';
const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RoutesPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
