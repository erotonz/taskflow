<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useAuth } from './features/auth/AuthContext';
import Login from './features/auth/Login';
=======
// App.jsx
import { useState, useEffect } from 'react';
>>>>>>> 3b83047746c138a056ad93b41f98afc4d82057a6
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function App() {
<<<<<<< HEAD
  const { state: authState } = useAuth();

  if (!authState.user) {
    return <Login />;
  }

  return <Dashboard />;
}

import { useState, useEffect } from 'react';
import { useAuth } from './features/auth/AuthContext';
import Login from './features/auth/Login';

  useEffect(() => {
    async function fetchData() {
      try {
export default function App() {
  const { state: authState } = useAuth();

  if (!authState.user) {
    return <Login />;
  }

  return <Dashboard />;
}

function Dashboard() {
  const { state: authState, dispatch } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [p, co] = await Promise.all([
          fetch('http://localhost:4000/projects'),
          fetch('http://localhost:4000/columns'),
        ]);
        setProjects(await p.json());
        setColumns(await co.json());
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div style={{ padding: '2rem' }}>Chargement...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        title="TaskFlow"
        onMenuClick={() => setSidebarOpen((p) => !p)}
        userName={authState.user?.name}
        onLogout={() => dispatch({ type: 'LOGOUT' })}
      />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar isOpen={sidebarOpen} projects={projects} />
        <MainContent columns={columns} />
      </div>
    </div>
  );
}
}
=======
}
>>>>>>> 3b83047746c138a056ad93b41f98afc4d82057a6
