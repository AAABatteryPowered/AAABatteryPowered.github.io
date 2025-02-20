import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
