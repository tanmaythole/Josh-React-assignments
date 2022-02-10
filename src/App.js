import './App.css';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import {
  Routes,
  Route
} from 'react-router-dom';
import UserDetailsContainer from './Containers/UserDetailsContainer';
import PrivateRoutes from './PrivateRoutes';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path='/userDetails/:userId' element={<UserDetailsContainer />} />
        </Route>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default App;
