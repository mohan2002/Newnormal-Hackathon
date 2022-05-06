import './App.css';
import StarterPage from './Pages/StarterPage';
import {BrowserRouter as Router,Switch,Route,useParams} from 'react-router-dom'
import AuthProvider from './Pages/Context/AuthContext';
import Homepage from './Pages/Homepage';
import PrivateRoute from './Pages/Context/PrivateRouter';
import Querypage from './Pages/Queypage'
import DiscussionPage from './Pages/DiscussionPage'
import About from './Pages/About';
import Addposts from './Pages/Addposts'
import ReplyfromQuery from './Pages/QueryComponent/ReplyfromQuery';
import ChatRooms from './Pages/DiscussionComponent/ChatRooms';
import Savedposts from './Pages/HomepageComponents/Savedposts';
import Profile from './Pages/ProfileComponent/Profile';
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
            <Route path="/add" component={Addposts}/>
            <Route path="/savedposts/:email" component={Savedposts}/>
            <Route path="/profile" component={Profile}/>

            <Route path="/replies/:id">
              <ReplyfromQuery/>
            </Route>
            <Route path="/chatroom/:id">
              <ChatRooms/>
            </Route>
            
            <PrivateRoute path="/homepage" component={Homepage}/>
         </Switch>
         </AuthProvider>
       </Router>
    </div>
  );
}

export default App;



