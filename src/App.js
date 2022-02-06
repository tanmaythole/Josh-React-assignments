import { useEffect, useState } from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';

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
          <HomeContainer setIsLoggedIn={setIsLoggedIn} />
        ):(
          <LoginContainer setIsLoggedIn={setIsLoggedIn} />
        )
      }
    </div>
  );
}

export default App;
