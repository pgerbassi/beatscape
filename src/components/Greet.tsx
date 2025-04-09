
import { Mail, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

const Greet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-electric-blue to-electric-gold p-6 sm:p-10">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-2">
                Thank You for Your Purchase!
              </h1>
              <p className="text-white text-center text-lg opacity-90">
                
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="p-6 sm:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800">
                Your buying is not finished — you must know this below...
              </h2>

              {/* Cards with information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {/* Card 1 */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-full bg-electric-blue/10 flex items-center justify-center">
                        <FileCheck className="h-6 w-6 text-electric-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">DrumKit Delivery</h3>
                      <p className="text-gray-600">
                        Your Drumkit will be delivered to your email. Be sure to check spam or trash folder.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-full bg-electric-gold/10 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-electric-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Need Help?</h3>
                      <p className="text-gray-600">
                        If you have any issues, contact us at: <a href="mailto:prodpipcontato@gmail.com" className="text-electric-blue hover:underline">prodpipcontato@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Return to home button */}
              <div className="mt-10 text-center">
                <a 
                  href="/" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-electric-blue to-electric-gold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue transition-all duration-300 hover:shadow-lg"
                >
                  Return to Homepage
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Greet;