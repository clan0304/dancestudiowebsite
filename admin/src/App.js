import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import PricePage from './pages/PricePage';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
