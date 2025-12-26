import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, ArrowRight, X, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { User as UserType } from '../App';

interface BlogPageProps {
  user?: UserType;
  onLogout: () => void;
}

const blogPosts = [
  // Travel Tips Category (3 blogs)
  {
    id: 1,
    title: '10 Essential Tips for Road Trips in Pakistan',
    excerpt: 'Planning a road trip? Here are the essential tips to make your journey safe and memorable across Pakistan\'s scenic routes. From optimizing your route to preparing your vehicle, we cover it all.',
    content: 'Pakistan offers some of the most breathtaking road trip experiences in the world. Whether you are driving through the Karakoram Highway or exploring the coastal lines of Makran, preparation is key. Make sure your vehicle is in top condition, carry extra fuel in remote areas, and always have offline maps downloaded. Don\'t forget to respect local customs and drive safely on winding mountain roads.',
    image: 'https://images.unsplash.com/photo-1759323050196-8afd2b91bc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByb2FkJTIwdHJpcCUyMHBha2lzdGFuJTIwbW91bnRhaW5zfGVufDF8fHx8MTc2Njc2Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'December 20, 2025',
    category: 'Travel Tips'
  },
  {
    id: 2,
    title: 'Best Routes for Family Trips in Pakistan',
    excerpt: 'Discover the most family-friendly routes and destinations for your next car rental adventure with Gogari. Safe, scenic, and fun for everyone.',
    content: 'Traveling with family requires careful planning. The Islamabad-Lahore Motorway (M2) is perfect for a quick and safe getaway. For nature lovers, a trip to Naran and Kaghan valleys offers accessible beauty without extreme off-roading. We recommend our SUVs for these trips to ensure comfort for children and ample space for luggage.',
    image: 'https://images.unsplash.com/photo-1761047321481-abbdcfb7ff00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjByb2FkJTIwdHJpcCUyMGNhciUyMHZhY2F0aW9ufGVufDF8fHx8MTc2Njc2Mjc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'December 18, 2025',
    category: 'Travel Tips'
  },
  {
    id: 3,
    title: 'Northern Areas Travel Guide',
    excerpt: 'Complete guide to exploring Pakistan\'s beautiful northern areas with your rental car. Roads, weather, and must-visit spots.',
    content: 'The Northern Areas of Pakistan are a paradise on earth. When driving to Hunza or Skardu, timing is everything. The best time to visit is from May to October. Ensure your rental car has good ground clearance—our Toyota Fortuner or Prado fleet is ideal. Be prepared for changing weather conditions and enjoy the hospitality of the locals.',
    image: 'https://images.unsplash.com/photo-1658938221509-5ff328504d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGFyZWFzJTIwcGFraXN0YW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY2NzYyNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'December 15, 2025',
    category: 'Travel Tips'
  },

  // Technology Category (3 blogs)
  {
    id: 4,
    title: 'The Future of Electric Vehicles in Pakistan',
    excerpt: 'Explore how electric vehicles are transforming the automotive landscape in Pakistan and what it means for car rentals.',
    content: 'Electric Vehicles (EVs) are slowly but surely making their mark in Pakistan. With the government introducing friendly policies and charging infrastructure growing in major cities like Lahore and Islamabad, renting an EV is becoming a viable option. EVs offer a quiet, smooth ride and significant savings on fuel costs.',
    image: 'https://images.unsplash.com/photo-1765272088009-100c96a4cd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzY2NzYyNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'December 12, 2025',
    category: 'Technology'
  },
  {
    id: 5,
    title: 'Smart Dashboard Technology Explained',
    excerpt: 'Modern cars come with advanced dashboard technology. Learn how to make the most of these features in your rental.',
    content: 'Gone are the days of simple analog dials. Modern cars in our fleet feature digital cockpits, Apple CarPlay, and Android Auto. These technologies help you navigate safely, stay connected, and monitor vehicle health in real-time. We ensure all our customers know how to use these features before driving off.',
    image: 'https://images.unsplash.com/photo-1761264889291-52edcd3979b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmQlMjBtb2Rlcm4lMjBkaWdpdGFsJTIwZGlzcGxheXxlbnwxfHx8fDE3NjY3NjI3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'December 10, 2025',
    category: 'Technology'
  },
  {
    id: 6,
    title: 'Navigation Systems in Modern Cars',
    excerpt: 'Understanding GPS and navigation technology that comes with your rental vehicle for a hassle-free journey.',
    content: 'Getting lost is not an option when you have advanced GPS systems at your fingertips. Our vehicles come equipped with the latest navigation systems that provide real-time traffic updates, alternative routes, and points of interest. This is especially useful for foreigners or those unfamiliar with the city layout.',
    image: 'https://images.unsplash.com/photo-1758872014553-f0deb7b12d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncHMlMjBuYXZpZ2F0aW9uJTIwc3lzdGVtJTIwY2FyJTIwbWFwfGVufDF8fHx8MTc2Njc2Mjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'December 8, 2025',
    category: 'Technology'
  },

  // Safety Category (3 blogs)
  {
    id: 7,
    title: 'Understanding Modern Car Safety Features',
    excerpt: 'Learn about the latest safety technologies in modern vehicles and how they protect you on the road.',
    content: 'Safety is our priority. Modern cars feature ABS, EBD, Lane Keep Assist, and Blind Spot Monitoring. Understanding these acronyms can save lives. For instance, ABS prevents wheel lockup during emergency braking, allowing you to steer to safety. We maintain all these systems to the highest standards.',
    image: 'https://images.unsplash.com/photo-1680454832347-f6016a0d94f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBzYWZldHklMjBmZWF0dXJlcyUyMGFpcmJhZyUyMGNyYXNoJTIwdGVzdHxlbnwxfHx8fDE3NjY3NjI3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'December 6, 2025',
    category: 'Safety'
  },
  {
    id: 8,
    title: 'Road Safety Tips for Pakistan',
    excerpt: 'Essential safety guidelines for driving on Pakistani roads during your rental period.',
    content: 'Driving in Pakistan can be chaotic. Always wear seatbelts, adhere to speed limits, and be defensive. Watch out for motorcycles and pedestrians. On highways, use the fast lane only for overtaking. Being patient and alert is the best way to ensure a safe journey for you and your passengers.',
    image: 'https://images.unsplash.com/photo-1629635212903-176d7e241af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwc2FmZXR5JTIwdHJhZmZpYyUyMHNpZ25zJTIwcGFraXN0YW58ZW58MXx8fHwxNzY2NzYyNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'December 4, 2025',
    category: 'Safety'
  },
  {
    id: 9,
    title: 'Child Safety in Rental Cars',
    excerpt: 'Important guidelines for ensuring children\'s safety when traveling in rental vehicles.',
    content: 'Never compromise on child safety. We offer certified child safety seats for all age groups upon request. Always ensure the child lock is active on rear doors. It is illegal and dangerous to have children sitting in the front seat or on laps. Let\'s keep our little ones safe.',
    image: 'https://images.unsplash.com/photo-1539022963534-c93ba43fbb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNhciUyMHNlYXQlMjBzYWZldHklMjBiYWJ5fGVufDF8fHx8MTc2Njc2Mjc0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'December 2, 2025',
    category: 'Safety'
  },

  // Luxury Category (3 blogs)
  {
    id: 10,
    title: 'Luxury Car Features Worth Paying For',
    excerpt: 'Discover the premium features that make luxury car rentals a worthwhile investment for special occasions.',
    content: 'Luxury cars aren\'t just about the brand; they are about the experience. Features like heated/ventilated seats, premium sound systems like Burmester or Bose, and ambient lighting transform a drive into an event. For long journeys or special nights out, these features provide unmatched comfort and style.',
    image: 'https://images.unsplash.com/photo-1741088088676-45ea7f7aafbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBzZWF0c3xlbnwxfHx8fDE3NjY3NjI3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'November 30, 2025',
    category: 'Luxury'
  },
  {
    id: 11,
    title: 'Top Luxury Cars for Weddings',
    excerpt: 'Make your special day memorable with our selection of luxury vehicles perfect for weddings.',
    content: 'Your wedding day deserves the best. The Mercedes C-Class and Audi A6 are our top picks for bridal cars. They offer elegance, class, and wonderful photo opportunities. We also provide decorated car services to take one more worry off your plate. Arrive in style!',
    image: 'https://images.unsplash.com/photo-1704667457448-0d0fad593c72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwY2FyJTIwZGVjb3JhdGlvbiUyMHBha2lzdGFufGVufDF8fHx8MTc2Njc2Mjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'November 28, 2025',
    category: 'Luxury'
  },
  {
    id: 12,
    title: 'Business Class Travel with Luxury Rentals',
    excerpt: 'Why luxury car rentals are perfect for business travelers and executives.',
    content: 'First impressions matter. Arriving at a business meeting in a pristine BMW 5 Series makes a statement of success and professionalism. Beyond image, the reliability and comfort allow you to focus on your work or relax between meetings. Our corporate packages are tailored for such needs.',
    image: 'https://images.unsplash.com/photo-1758956932487-123392fc62a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMGdldHRpbmclMjBpbnRvJTIwbHV4dXJ5JTIwY2FyfGVufDF8fHx8MTc2Njc2Mjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'November 26, 2025',
    category: 'Luxury'
  },

  // Maintenance Category (3 blogs)
  {
    id: 13,
    title: 'Car Maintenance: What Renters Should Know',
    excerpt: 'Understanding basic car maintenance can help you have a smoother rental experience. Here\'s what you need to know.',
    content: 'While we maintain our fleet, knowing basics helps. Check fluid levels if renting for a week or more. Listen for unusual noises. If a warning light appears, contact us immediately rather than ignoring it. Being proactive ensures you don\'t get stranded and helps us keep our cars in prime condition.',
    image: 'https://images.unsplash.com/photo-1713019023680-e531ce0e01d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGNoZWNraW5nJTIwY2FyJTIwZW5naW5lJTIwb2lsfGVufDF8fHx8MTc2Njc2Mjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'November 24, 2025',
    category: 'Maintenance'
  },
  {
    id: 14,
    title: 'Pre-Trip Vehicle Inspection Guide',
    excerpt: 'Learn how to properly inspect your rental car before hitting the road.',
    content: 'Always inspect the car with our agent before driving off. Check for scratches, dents, and ensure all lights work. Verify the spare tire and tools are present. Taking photos of existing damage protects you from liability. It takes 5 minutes but saves potential headaches later.',
    image: 'https://images.unsplash.com/photo-1691994877641-36e673ad4236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lvdGElMjBjb3JvbGxhJTIwY2FyfGVufDF8fHx8MTc2NjcwMTE0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Usman Siddique',
    date: 'November 22, 2025',
    category: 'Maintenance'
  },
  {
    id: 15,
    title: 'Tire Care and Maintenance Tips',
    excerpt: 'Essential tire maintenance knowledge for a safe and smooth journey.',
    content: 'Tires are your only contact with the road. Check tire pressure regularly, especially when temperature changes. Look out for cuts or bulges. Properly inflated tires improve fuel economy and handling. If you experience a flat, our roadside assistance is just a call away.',
    image: 'https://images.unsplash.com/photo-1713949145294-5f569bb65567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja2luZyUyMGNhciUyMHRpcmVzJTIwcHJlc3N1cmUlMjBhaXJ8ZW58MXx8fHwxNzY2NzYyNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Muhammad Mohsin',
    date: 'November 20, 2025',
    category: 'Maintenance'
  }
];

const categories = ['All', 'Travel Tips', 'Technology', 'Safety', 'Luxury', 'Maintenance'];

export default function BlogPage({ user, onLogout }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={onLogout} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white mb-4 font-bold"
          >
            Gogari Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Latest insights, tips, and news about car rentals and automotive industry
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {selectedCategory !== 'All' && (
              <button 
                onClick={() => setSelectedCategory('All')}
                className="flex items-center gap-2 text-blue-600 hover:underline font-medium"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to All
              </button>
            )}
            
            <div className="flex flex-wrap gap-3 justify-center flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer group flex flex-col h-full"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <button 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPost(post);
                    }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-20 group"
              >
                <X className="w-6 h-6 text-gray-800 group-hover:text-red-500" />
              </button>

              <div className="relative h-72 md:h-96">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-3">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedPost.title}</h2>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {selectedPost.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedPost.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <p className="text-xl text-gray-600 font-medium mb-8 italic border-l-4 border-blue-600 pl-4">
                  {selectedPost.excerpt}
                </p>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{selectedPost.content}</p>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why this matters</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </div>
  );
}