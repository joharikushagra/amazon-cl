import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useStateValue } from "./Context/StateProvider";
import { auth } from "./Firebase";

function App() {
  const [{user},dispatch]  = useStateValue();

  //useEffect <<<<<<<<<
  //piece of code which runs based on a given condition
  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })

    return ()=>{
      //any cleanup operation
      unsubscribe();
    }
  },[])

  console.log("user is",user);

  return (
    <Router>
      <div className="App">
        <Switch>
         <Route path = '/checkout'>
         <Header/>
         <Checkout/>
         </Route>
         <Route path = '/login'>
         <Login/>
         </Route>
         <Route path = '/'>
          <Header/>
          <Home/>
         </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
