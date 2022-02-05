import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import LoginPage from './components/Login/LoginPage';
import NavBar from './components/Navbar/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if(localStorage.getItem("token")){
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  

  return (
    <div className="App">
      {isLoggedIn?(
          <>
            <NavBar setIsLoggedIn={setIsLoggedIn} />
            <Home setIsLoggedIn={setIsLoggedIn} />
          </>
        ):(
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        )
      }
    </div>
  );
}

export default App;
