
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';


import Home from './pages/Home';


function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <Home />

      <Routes>
        {/* <Route path='/' element={Home} /> */}
        <Route path='/login' element={Login} />
        <Route path='/signup' element={SignUp} />
      </Routes>


    </div>
  );
}

export default App;
