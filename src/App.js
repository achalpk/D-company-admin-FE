import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import Home from './components/home/home';
import Services from "./components/services/services";
import ViewService from "./components/services/viewService/viewService";
import Welcome from "./components/welcome/welcome";
import ViewWelcome from "./components/welcome/viewWelcome/viewWelcome";
import Job from './components/job/job';
import JobApplicant from './components/jobApplicant/jobApplicant';
import Login from './components/login/login';
import ViewJobApplicant from './components/jobApplicant/viewJobApplicant/viewJobApplicant';
import PrivateRoute from './pages/privateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <ToastContainer autoClose={3000}/>
        <BrowserRouter>
            <Switch>
              <PrivateRoute exact path='/'><Home/></PrivateRoute>
              <PrivateRoute path='/services'><Services/></PrivateRoute>
              <PrivateRoute path='/viewService'><ViewService/></PrivateRoute>
              <PrivateRoute path='/welcome'><Welcome/></PrivateRoute>
              <PrivateRoute path='/viewWelcome'><ViewWelcome/></PrivateRoute>
              <PrivateRoute path='/job'><Job/></PrivateRoute>
              <PrivateRoute path='/job Applicant'><JobApplicant/></PrivateRoute>
              <PrivateRoute path='/ViewJobApplicant'><ViewJobApplicant/></PrivateRoute>
              <Route path='/login'><Login/></Route>
              <Route path='*'><h1 style={{textAlign:"center", flex:'1'}}>404 error <br/> Page not found</h1></Route>
            </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
