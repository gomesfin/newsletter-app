// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic (check credentials, set isLoggedIn to true)
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    // Implement logout logic
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      isLoggedIn === true
        ? <Component {...props} handleLogout={handleLogout} />
        : <Redirect to='/login' />
    )} />
  );

  return (
    <Router>
      <div className="App">
        <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
