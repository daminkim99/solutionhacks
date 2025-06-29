import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './views/signup';
import { Homepage } from './views/homepage';
import { Add } from './views/add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/add-task" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;

