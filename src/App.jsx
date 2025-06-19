import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import MarqueeBar from './components/MarqueeBar';
import Welcome from './components/Welcome';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Administration from './pages/Administration'
import Foundation from './pages/Foundation'


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MarqueeBar />
      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <PhotoGallery />
          </>
        } />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/foundation" element={<Foundation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
