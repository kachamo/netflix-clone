import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Switch, Route, Router } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() { 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        // Logged in
        console.log(userAuth);
        dispatch(login)
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      }else{
        // Logged Out
        dispatch(logout);
      }
    });
    return unsubscribe;
  })
    return (
      <div className="App">
        <Router>
            {!user ? (
              <LoginScreen />
            ) : (
              <Switch> 
                <Route 
                  path="/" element={<HomeScreen />}>
                </Route>
              </Switch>             
            )}
        </Router>
      </div>
    );
  }

export default App;
