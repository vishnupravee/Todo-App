import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import Navabar from './Navabar';
import Register from './Register';
import Login from './Login';
import Todotable from './Todotable';
import Adddata from './Adddata';
function App() {
  return (
    <div className="App">
      <Navabar />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path='/reg' element={<Login />}/>
        <Route path='/tod' element={<Todotable />}/>
        <Route path='/add' element={<Adddata />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
