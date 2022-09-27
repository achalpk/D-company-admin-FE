import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import SideBar from "./components/header/sidebar";
import Home from './components/home/home';
import Services from "./components/services/services";
import ViewService from "./components/services/viewService/viewService";
import Welcome from "./components/welcome/welcome";
import ViewWelcome from "./components/welcome/viewWelcome/viewWelcome";
import Job from './components/job/job';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
            <SideBar/>
            <Switch>
                <Route exact path='/'><Home/></Route>
                <Route path='/services'><Services/></Route>
                <Route path='/viewService'><ViewService/></Route>
                <Route path='/welcome'><Welcome/></Route>
                <Route path='/viewWelcome'><ViewWelcome/></Route>
                <Route path='/job'><Job/></Route>
                <Route path='*'><h1 style={{textAlign:"center", flex:'1'}}>404 error <br/> Page not found</h1></Route>
            </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
