import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import MarqueeBar from './components/MarqueeBar';
import Welcome from './components/Welcome';
import PhotoCard from './components/PhotoCard';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Administration from './pages/Administration'
import Foundation from './pages/Foundation'
import Readings from './pages/Readings'
import Seminar from './pages/Seminar'
import Olympiad from './pages/Olympiad'


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MarqueeBar />
      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <PhotoCard />
          </>
        } />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/olympiad" element={<Olympiad />} />
        <Route path="/seminar" element={<Seminar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
