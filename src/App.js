import './App.scss';
import {Route, Switch}  from "react-router-dom";


// pages
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
// routes
import Private from './Routes/Private';

function App() {
return <>



        <Switch>
          <Route exact path='/' component={Login}/>
          <Private path='/admin' component={Admin} />
        </Switch>
</>
}

export default App;
