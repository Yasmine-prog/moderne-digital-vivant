
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "franchellay@gmail.com",
      href: "mailto:franchellay@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+241 065454313",
      href: "tel:+241065454313",
      primary: false
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+241 074668662",
      href: "tel:+241074668662",
      primary: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
    >
      <div className="flex items-center space-x-3 mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h3 className="text-2xl font-bold text-slate-800">Contact</h3>
      </div>

      <p className="text-slate-600 mb-6 leading-relaxed">
        📩 Envie de collaborer? Discutons ensemble de vos projets digitaux !
      </p>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
              method.primary 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              method.primary 
                ? 'bg-white/20' 
                : 'bg-blue-100'
            }`}>
              <method.icon className={`w-6 h-6 ${
                method.primary 
                  ? 'text-white' 
                  : 'text-blue-600'
              }`} />
            </div>
            
            <div className="flex-1">
              <div className={`text-sm font-medium ${
                method.primary 
                  ? 'text-blue-100' 
                  : 'text-slate-500'
              }`}>
                {method.label}
              </div>
              <div className={`font-medium ${
                method.primary 
                  ? 'text-white' 
                  : 'text-slate-800'
              }`}>
                {method.value}
              </div>
            </div>
            
            <ArrowRight className={`w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1 ${
              method.primary 
                ? 'text-white' 
                : 'text-slate-400'
            }`} />
          </motion.a>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl border border-blue-100">
        <p className="text-sm text-slate-600 text-center leading-relaxed">
          <span className="font-medium text-blue-600">Disponible pour nouveaux projets</span><br />
          Réponse garantie sous 24h
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
