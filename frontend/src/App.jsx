import './App.css'
import { Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import HelpSupportPage from './pages/HelpSupportPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/help-support' element={<HelpSupportPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
