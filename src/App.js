import './App.css';
import React,{Suspense}  from 'react';
import {Spinner} from "react-bootstrap"
import HomePage from './pages/HomePage/HomePage';
import {AOS} from "aos"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import MyNavbar from './components/Navbar/Navbar';
import {routes} from "./routes"
import Footer from "./components/Footer/Footer"
function App() {
  
  return (
    <div className="App">
      <Router> 
  <MyNavbar/>
  <Switch>
    <Suspense fallback={<Spinner animation="grow" style={{backgroundColor:'red'}}/>}> 
{
  routes.map(route=>(
    <Route path={route.path} component={route.page} exact={route.exact}/>
  ))
} 
</Suspense> 
</Switch>
<Footer/>
      </Router>     
    </div>
  );
}

export default App;
