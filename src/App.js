import './App.css';
import StarterPage from './Pages/StarterPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AuthProvider from './Pages/Context/AuthContext';
import Homepage from './Pages/Homepage';
import PrivateRoute from './Pages/Context/PrivateRouter';
import Querypage from './Pages/Queypage'
import DiscussionPage from './Pages/DiscussionPage'
import About from './Pages/About';
function App() {
  return (
    <div className="App">
       <Router>
         <AuthProvider>
         <Switch>
            <Route exact path="/" component={StarterPage}/>
            <Route path ="/query" component={Querypage}/>
            <Route path="/discussion" component={DiscussionPage}/>
            <Route path="/about" component={About}/>
            <PrivateRoute path="/homepage" component={Homepage}/>
         </Switch>
         </AuthProvider>
       </Router>
    </div>
  );
}

export default App;
