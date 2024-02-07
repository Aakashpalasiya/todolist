import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProductList from './components/ProductList ';
import Record from './components/Record';


const AppRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/productlist',
    element:<ProductList/>
  },
  {
    path:'/record',
    element:<Record/>
  },

])

function App() {
  return (
    <>
    <RouterProvider  router={AppRouter}/>
    </>
  );
}

export default App;
