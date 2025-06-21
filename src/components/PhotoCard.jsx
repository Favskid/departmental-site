import { motion } from 'framer-motion';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo11.jpg';

const photoCards = [
  { 
    src: photo1, 
    alt: 'Computer Science Lab', 
    title: 'NUCPC 2018',
    description: 'Third Place Winners - Ebonyi State University [EBSU].'
  },
  { 
    src: photo2, 
    alt: 'Students in Class', 
    title: 'NUCPC 2018',
    description: 'Second Place Winner - Federal University of Technology Akure [FUTA].'
  },
  { 
    src: photo3, 
    alt: 'Research Activities', 
    title: 'NUCPC 2018',
    description: 'First Place Winner - Ahamadu Bello University, Zaria [ABU]. The defending Champions.'
  },
  { 
    src: photo4, 
    alt: 'Campus View', 
    title: 'COMPUTER PROGRAMMING CONTEST',
    description: 'THE 7th nigerian university computer programming contest [NUCPC 2018]'
  },
  { 
    src: photo5, 
    alt: 'Student Projects', 
    title: 'Algorithm Thinking',
    description: 'The seminar provided students with an opportunity to gain practical experience in data algorithms, enhancing their problem-solving skills..'
  },
  { 
    src: photo6, 
    alt: 'Faculty Members', 
    title: 'Computer Programming',
    description: 'our students are learning and developing skills in computer programming.'
  },
  { 
    src: photo7, 
    alt: 'Department Events', 
    title: 'AFRICA CODE WEEK',
    description: 'A memorable moment from Africa Code Week with students of Government Secondary School, Yangoji. Everyone can code!'
  },
  { 
    src: photo8, 
    alt: 'Faculty Members', 
    title: 'Faculty Software Engineers',
    description: 'Our experienced faculty members (MR NONSO) dedicated to nurturing the next generation of tech leaders.'
  },
  { 
    src: photo9, 
    alt: 'Faculty Members', 
    title: 'Faculty Software Engineers',
    description: 'Our experienced faculty members (MR VICTOR) dedicated to nurturing the next generation of tech leaders.'
  },
  { 
    src: photo10, 
    alt: 'Faculty Members', 
    title: 'Olympiad Competitions',
    description: 'we are proud of our students winning olympiad competitions'
  },
  { 
    src: photo11, 
    alt: 'Faculty Members', 
    title: 'Computer Programming',
    description: 'Our IT students are immersed in a hackathon programming project'
  },
];

const PhotoCard = () => {
  return (
    <section className="pt-16 pb-0 bg-gradient-to-br from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Photo gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our vibrant campus life and cutting-edge facilities through these captivating snapshots.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhotoCard; 