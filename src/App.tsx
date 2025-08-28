import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Planes from './pages/Planes';
import Terminos from './pages/Terminos';

function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
                           <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/planes" element={<Planes />} />
                   <Route path="/terminos" element={<Terminos />} />
                 </Routes>
        </main>
        <Footer />
              </div>
    </Router>
  );
}

export default App;