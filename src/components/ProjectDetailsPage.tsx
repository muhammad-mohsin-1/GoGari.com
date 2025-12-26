import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { GraduationCap, Users, BookOpen, Calendar, Code, Award, Layers, GitBranch, Database } from 'lucide-react';
import { User } from '../App';

interface ProjectDetailsPageProps {
  user?: User;
  onLogout: () => void;
}

export default function ProjectDetailsPage({ user, onLogout }: ProjectDetailsPageProps) {
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
            Project Details
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Software Design and Architecture Project
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Project Overview */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-blue-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Project Overview</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Gogari - Car Rental Website</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Gogari is a comprehensive car rental platform built using advanced Software Design and Architecture 
                  principles. The project demonstrates the implementation of design patterns, architectural styles, 
                  and best practices in software engineering to create a scalable, maintainable, and robust web application.
                </p>
              </div>
            </motion.div>

            {/* Course Information */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl font-bold text-gray-800">Course Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                  <p className="text-gray-500 mb-2 text-sm uppercase tracking-wider font-semibold">Subject</p>
                  <p className="text-gray-800 text-xl font-bold">Software Design and Architecture</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                  <p className="text-gray-500 mb-2 text-sm uppercase tracking-wider font-semibold">Semester</p>
                  <p className="text-gray-800 text-xl font-bold">5th Semester</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                  <p className="text-gray-500 mb-2 text-sm uppercase tracking-wider font-semibold">Instructor</p>
                  <p className="text-gray-800 text-xl font-bold">Sir Salman</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                  <p className="text-gray-500 mb-2 text-sm uppercase tracking-wider font-semibold">Submission Date</p>
                  <p className="text-gray-800 text-xl font-bold">December 2025</p>
                </div>
              </div>
            </motion.div>

            {/* Instructor Appreciation */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-green-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  About Our Instructor - Sir Salman
                </h3>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p className="leading-relaxed">
                    Sir Salman is an exceptional educator whose teaching methodology makes complex Software Design and 
                    Architecture concepts accessible and engaging. His systematic approach to explaining design patterns, 
                    SOLID principles, and architectural styles has greatly enhanced our understanding of software engineering.
                  </p>
                  <p className="leading-relaxed">
                    His emphasis on practical implementation alongside theoretical knowledge has been invaluable. 
                    Sir Salman encourages creative problem-solving while maintaining industry standards, which has 
                    helped us develop both technical skills and professional mindset.
                  </p>
                  <p className="leading-relaxed font-medium text-green-800">
                    We are grateful for his dedication to student success and his ability to inspire us to pursue 
                    excellence in software development.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Team Members */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-purple-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800">Development Team</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full border-2 border-white/50 overflow-hidden shadow-md">
                      <img 
                        src="/mohsin.jpg" 
                        alt="Muhammad Mohsin" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Muhammad Mohsin</h3>
                      <p className="text-blue-200 font-medium">Lead Developer</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-blue-50 leading-relaxed">
                      Full-stack developer responsible for system architecture, frontend development, 
                      implementing design patterns, and ensuring code quality.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full border-2 border-white/50 overflow-hidden shadow-md">
                      <img 
                        src="/usman.jpg" 
                        alt="Usman Siddique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Usman Siddique</h3>
                      <p className="text-purple-200 font-medium">Co-Developer</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <p className="text-purple-50 leading-relaxed">
                      Backend specialist handling data architecture, business logic implementation, 
                      state management, and system integration.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                <p className="text-gray-600 mb-2 font-medium">Contact Email</p>
                <a 
                  href="mailto:mohsinimran203@gmail.com" 
                  className="text-blue-600 hover:text-blue-700 hover:underline text-xl font-bold"
                >
                  mohsinimran203@gmail.com
                </a>
              </div>
            </motion.div>

            {/* SDA Principles Applied */}
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-teal-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-8 h-8 text-teal-600" />
                <h2 className="text-3xl font-bold text-gray-800">SDA Principles Applied</h2>
              </div>
              <div className="bg-teal-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    { title: 'Component-Based Architecture', desc: 'Modular design with reusable components' },
                    { title: 'State Management Pattern', desc: 'Centralized state using Context API' },
                    { title: 'MVC Pattern', desc: 'Separation of Data, UI, and Logic' },
                    { title: 'SOLID Principles', desc: 'Adhering to best coding practices' },
                    { title: 'Repository Pattern', desc: 'Data abstraction layer implementation' },
                    { title: 'Observer Pattern', desc: 'Event-driven notifications system' },
                    { title: 'Layered Architecture', desc: 'Distinct Presentation and Logic layers' },
                    { title: 'Design for Scalability', desc: 'Flexible structure for future growth' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-teal-200 rounded-full flex items-center justify-center">
                        <span className="text-teal-700 text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <strong className="text-gray-900 block">{item.title}</strong>
                        <span className="text-gray-600 text-sm">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}