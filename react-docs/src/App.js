
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import TaskList from './pages/TaskList';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import Login from './auth/Login';
import Register from './auth/Register';
import { AuthProvider } from './contexts/AuthContexts';
import { TaskProvider } from './contexts/TaskContexts';
import ProtectedRoute from './auth/ProtectedRoute';



function App() {
 return(
      <>
      <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
      <Navigation />
      <Routes>
        <Route element={<Home />} path='/'>
          <Route element={<Login />} path='/login'></Route>
          <Route element={<Register />} path='/register'></Route>
        </Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<ProtectedRoute><CreateTask /></ProtectedRoute>} path='/createtask'></Route>
        <Route element={<ProtectedRoute><TaskList /></ProtectedRoute> } path='/tasklist'></Route>
        <Route element={<ProtectedRoute><Profile /></ProtectedRoute>} path='/profile'></Route>
        <Route path='*'></Route>
      </Routes>
      </TaskProvider>
      </AuthProvider>
      </BrowserRouter>
      </>
  );
}

export default App;
