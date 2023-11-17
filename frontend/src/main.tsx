import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.tsx'
import Home from './components/Home.tsx'
import './styles/main.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/home', element: <Home /> },
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
