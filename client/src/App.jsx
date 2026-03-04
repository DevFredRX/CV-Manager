import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Activation from './pages/Activation'
import Login from './pages/Login'

import 'src/assets/styles/theme.css'
import 'src/assets/styles/scrollbar.css'

export const routes = [
  {
    element: <MainLayout variant="default" />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> }
    ]
  },
  {
    element: <MainLayout variant="auth" />,
    children: [
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> }
    ]
  },
  {
    element: <MainLayout variant="none" />,
    children: [
      { path: '/activation', element: <Activation /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]