import './App.css'
import { Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import HelpSupportPage from './pages/HelpSupportPage';




function App() {

  return (
    <>
       <div className="min-h-screen flex flex-col">
      {/* Navbar will go here later */}
      <main className="flex-grow">
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/help-support' element={<HelpSupportPage />} />
        </Routes>
      </main>
      {/* Footer will go here later */}
    </div>
    </>
  )
}

export default App;
