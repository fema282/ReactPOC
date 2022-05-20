import './App.css';
import './Sources/styles/styles.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home/home';
import Customers from './Components/Customers/customers';
import Register from './Components/Register/register';
import Login from './Components/Login/login';

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={ Home } />
            <Route path="/customers" component={Customers}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>  
        </Switch>    
      </BrowserRouter>     
    </div>
  );
}

export default App;
