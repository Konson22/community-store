// import {lazy} from 'react'
import { Route } from 'react-router-dom';
import Navbar, {MobileNav} from './components/navbar/Navbar'
import ProtectedRoutes from './helpers/ProtectedRoutes'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Account from './pages/account/Account'
import Upload from './pages/forms/Upload';
import ItemDetails from './pages/shop/ItemDetails';
import Login from './pages/forms/Login';
import Register from './pages/forms/Register';


// const Home = lazy(() => import('./pages/home/Home'));
// const Account = lazy(() => import('./pages/account/Account'));
// const ItemDetails = lazy(() => import('./pages/shop/ItemDetails'));
// const Shop = lazy(() => import('./pages/shop/Shop'));
// const Login = lazy(() => import('./pages/forms/Login'));
// const Upload = lazy(() => import('./pages/forms/Upload'));
// const Register = lazy(() => import('./pages/forms/Register'));

function App() {
  return (
    <>
    <Navbar />
    <div className="app-wraper"> 
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoutes exact path="/upload" component={Upload} />
      <Route exact path="/register" component={Register} /> 
      <Route exact path="/items/:category" component={Shop} />
      <Route exact path="/item/:id" component={ItemDetails} />
      <ProtectedRoutes exact path="/account" component={Account} />
    </div>
    <MobileNav />
    </>
  );
}


export default App;
