import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/templates/home';

function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return <Home />;
}

export default App;