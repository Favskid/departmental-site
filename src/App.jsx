import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import MarqueeBar from './components/MarqueeBar';
import Welcome from './components/Welcome';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App
