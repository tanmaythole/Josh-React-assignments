import './App.css';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import {
  Routes,
  Route
} from 'react-router-dom';
import UserDetailsContainer from './Containers/UserDetailsContainer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<HomeContainer />} />
        <Route path='/userDetails/:userId' element={<UserDetailsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
