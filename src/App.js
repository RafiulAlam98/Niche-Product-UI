import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore/Explore';
import Navigation from './Pages/Shared/Navigation/Navigation';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path='/login'>
            <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/purchase/:carId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/purchase'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashboardHome></DashboardHome>
            </PrivateRoute>
            <Route path='*'>
            <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
