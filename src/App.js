import './App.scss';
import { Switch}  from "react-router-dom";


// pages
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
// routes
import Private from './Routes/Private';
import Public from './Routes/Public';
function App() {
return <>



        <Switch>
          <Public exact   path='/' component={Login}/>
          <Private  path='/admin' component={Admin} />
        </Switch>
</>
}

export default App;
