import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DanceClassPage from './pages/DanceClassPage';
import PricePage from './pages/PricePage';
import AboutUsPage from './pages/AboutUsPage';
import Navbar from './components/Navbar';

import CheckoutSuccess from './components/CheckoutSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/danceclass" element={<DanceClassPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="/checkout-success" element={<CheckoutSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
