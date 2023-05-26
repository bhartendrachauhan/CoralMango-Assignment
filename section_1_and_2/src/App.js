import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginAuth from './utils/LoginAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginAuth><Dashboard/></LoginAuth>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
