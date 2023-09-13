import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;