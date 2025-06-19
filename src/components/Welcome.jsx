import hod from '../assets/hod_picture.jpg'
import { motion } from 'framer-motion';

const Welcome = () => {
    return (
      <motion.div 
        className="w-full bg-white p-6 md:p-10 mt-10 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/3 p-10 md:pr-10">
          <img src={hod} alt="HOD Image" className="w-full max-w-[200px] rounded-lg mx-auto" />
        </div>
    
        {/* Text Section */}
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-2xl font-bold text-[#003087] mb-2 font-poppins">
            Welcome Message From The HOD
          </h1>
          <h2 className="text-lg text-[#003087] mb-1 font-poppins">Computer Science Programme</h2>
          <h2 className="text-lg text-[#003087] mb-4 font-poppins ">Oluchi Jennie Bamidele</h2>
          <p className="text-gray-700 text-sm leading-relaxed font-inter">
            <strong>Motto:</strong>International Centre Of Excellence<br /><br />
            Computer Science programme, The National Mathematical Centre (NMC) is known for its role in promoting and developing computer science in Nigeria, particularly at all levels of education. It's a key institution for training and developing personnel in mathematical sciences, fostering research, and encouraging interest in mathematics among young people. 
          </p>
    
          <a
            href="#"
            className="inline-block mt-6 px-5 py-2 bg-[#003087] hover:bg-[#0056b3] text-white rounded-md font-semibold transition font-inter"
          >
            Continue Reading →
          </a>
        </div>
      </motion.div>
    );
  };
  
export default Welcome;
  