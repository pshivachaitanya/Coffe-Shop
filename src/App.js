import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
