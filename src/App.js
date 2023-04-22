import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {Route, Routes} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() { 
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // Logged out
        dispatch(logout());
      }
    });
  
    return unsubscribe;
  }, [dispatch]);
    return (
      <div className="App">
        <Routes>
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <Route path="/" element={<AuthenticatedRoutes />} />
          )}
        </Routes>
    </div>
  );
}

function AuthenticatedRoutes() {
  return (    
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
    </Routes>
  );
}

export default App;
