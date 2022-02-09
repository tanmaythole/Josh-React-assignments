import { useEffect, useState } from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import {
  Routes,
  Route
} from 'react-router-dom';
import UserDetailsContainer from './Containers/UserDetailsContainer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if(localStorage.getItem("token")){
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginContainer setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<HomeContainer setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/userDetails/:userId' element={<UserDetailsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
