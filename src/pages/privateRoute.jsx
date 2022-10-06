import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import SideBar from "../components/header/sidebar";


function PrivateRoute({children, ...rest }){
    const isAuth = localStorage.getItem('isAuth');
    const auth = useSelector((state)=>state.authReducer.auth);

    return(
        <Route {...rest} render= {()=>{            
            return isAuth === 'true' && auth === true ? 
            <div className="App">
                <SideBar/>
                {children}
            </div> :
                <Redirect to="/login"/>            
        }}/>
    )
}

export default PrivateRoute;