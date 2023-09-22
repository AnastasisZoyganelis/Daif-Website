import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import './App.css';
import Blog from '../pages/Blog';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
