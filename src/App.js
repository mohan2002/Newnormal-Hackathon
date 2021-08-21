import './App.css';
import StarterPage from './Pages/StarterPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './Pages/Authentication Pages/Login';


function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
            <Route exact path="/" component={StarterPage}/>
            <Route path="/login" component={Login}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
