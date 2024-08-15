import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './services/router';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <div>
        <div>React starter</div>
      </div>
    </div>
  );
}

export default App;
