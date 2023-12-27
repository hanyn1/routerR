import './App.css';
import Info from './components/Info'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Pc from './components/Pc';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Info' element={<Info/>}/>
          <Route path='/Pc' element={<Pc/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
