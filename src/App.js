import './App.css';
import HomeContainer from './Containers/HomeContainer';
import LoginContainer from './Containers/LoginContainer';
import {
  Routes,
  Route
} from 'react-router-dom';
import UserDetailsContainer from './Containers/UserDetailsContainer';
import PrivateRoutes from './PrivateRoutes';
import BlogContainer from './Containers/BlogContainer';
import ViewBlogContainer from './Containers/ViewBlogContainer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PrivateRoutes />}>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/users" element={<HomeContainer />} />
          <Route path='/userDetails/:userId' element={<UserDetailsContainer />} />
          <Route path='/blogs' element={<BlogContainer />} />
          <Route path='/blog/:blogId' element={<ViewBlogContainer />} />
        </Route>
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default App;
