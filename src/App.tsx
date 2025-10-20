import { AuthProvider, useAuth } from '@vritti/quantum-ui';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Loading } from './pages/Loading';

// Import auth routes from vritti-auth MF
// @ts-ignore - Remote module
import { authRoutes } from 'vritti_auth/routes';

const AppRoutes = () => {
  const { isAuthenticated: loggedIn, isLoading: loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      {/* Root route - redirect based on auth state */}
      <Route
        path="/"
        element={<Navigate to={loggedIn ? '/home' : '/auth/login'} replace />}
      />

      {/* Home route - protected */}
      <Route
        path="/home"
        element={loggedIn ? <Home /> : <Navigate to="/auth/login" replace />}
      />

      {/* Auth routes from vritti-auth MF */}
      <Route path="/auth">
        {!loggedIn ? (
          authRoutes.map((route: any) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        ) : (
          <Route path="*" element={<Navigate to="/home" replace />} />
        )}
      </Route>

      {/* Catch all - redirect to home or auth */}
      <Route
        path="*"
        element={<Navigate to={loggedIn ? '/home' : '/auth/login'} replace />}
      />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
