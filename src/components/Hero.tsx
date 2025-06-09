
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div className="relative z-10 text-center space-y-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="/lovable-uploads/fceef259-3453-4116-96af-7cf861762541.png" 
              alt="Yasmine Franchella BAKOUDISSA MOULANDA"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-white">Yasmine Franchella</span>
            <span className="block text-blue-300 text-3xl md:text-4xl font-light mt-2">BAKOUDISSA MOULANDA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
            Social Media Manager en devenir
          </p>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            De l'accompagnement des premiers souffles de vie à donner vie aux marques sur les réseaux
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <a 
            href="mailto:franchellay@gmail.com"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Collaborons ensemble
          </a>
          <a 
            href="tel:+241065454313"
            className="px-8 py-3 border-2 border-white/30 hover:border-white rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
