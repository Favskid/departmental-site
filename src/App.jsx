import Navbar from './components/Navbar'
import MarqueeBar from './components/MarqueeBar';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';


function App() {

  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />
       <MarqueeBar />
       <PhotoGallery />
       <Footer />

    </div>
  );
}

export default App
