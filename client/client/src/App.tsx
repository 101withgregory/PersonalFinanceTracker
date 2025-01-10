
import './App.css'
import {BrowserRouter, Routes , Route } from "react-router-dom";
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';

function App() {

  return ( <BrowserRouter>
  <div className='app-container'>
<Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/auth" element={<Auth/>}/>
</Routes>
  </div>
  </BrowserRouter> )
}

export default App
