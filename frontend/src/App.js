import './App.css';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import {Routes,Route} from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path="/register" element={<RegisterPage/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;