import React from 'react';

import './App.css';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Home from './components/home';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login/Login.js';
import Protected from './components/Protected/Protected';
import Notice from './components/Notice';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import DashboardMainAdmin from './components/DashboardMainAdmin';
import DashboardTeacherAdmin from './components/DashboardTeacherAdmin';
import DashboardHostelAdmin from './components/DashboardHostelAdmin';
import Notfoundpage from './components/Notfoundpage';
import ForgotPassword from './components/ForgotPassword';

function App() 
{
  return (
          
          <div className="App">
            {(
              <Router>
                  <Switch>
                    <Route exact path='/'          component={Home}     ></Route>
                    <Route exact path='/nf'     component={Notfoundpage}    ></Route>


                    <Route exact path='/signup'    component={Signup}   ></Route>
                    <Route exact path='/login'     component={Login}    ></Route>
                    <Route exact path='/notice'    component={Notice}   ></Route>
                    <Route exact path='/admin'     component={Admin}    ></Route>
                    <Route exact path='/fpasswd'    component={ForgotPassword}   ></Route>
                    <Route exact path='/dashboard' > <Protected cmp={Dashboard}/></Route>
                    <Route path='/adminmain'><DashboardMainAdmin/> </Route>
                    <Route path='/adminteacher'><DashboardTeacherAdmin/> </Route>
                    <Route path='/adminhostel'><DashboardHostelAdmin/> </Route>
                    
                  </Switch>
              </Router> 
            )}
          </div>         
          
          );
}

export default App;
