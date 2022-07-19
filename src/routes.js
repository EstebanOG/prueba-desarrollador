import Home from './pages/Home'
import Information from './pages/Information'
import Test from './pages/Test'
import NotFound from './pages/NotFound'

export default [
  {
    path : '/',
    component: Home
  },
  {
    path : '/information',
    component: Information
  },
  {
    path : '/test',
    component: Test
  },
  {
    path: '*',
    component: NotFound
  }
];