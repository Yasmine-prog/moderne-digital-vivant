
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Stratégie Social Media - Startup Tech",
      description: "Développement d'une stratégie complète sur LinkedIn et Instagram pour une startup technologique.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Stratégie",
      metrics: "+150% engagement",
      icon: TrendingUp
    },
    {
      title: "Campagne de contenu - E-commerce",
      description: "Création de contenu visuel et rédactionnel pour le lancement d'une boutique en ligne.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      category: "Création de contenu",
      metrics: "+200% followers",
      icon: Users
    },
    {
      title: "Calendrier éditorial - Restaurant",
      description: "Planification et animation des réseaux sociaux pour un restaurant local avec focus sur l'authenticité.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      category: "Animation communauté",
      metrics: "+300% visibilité",
      icon: Calendar
    },
    {
      title: "Formation - Meta Business Suite",
      description: "Formation personnalisée pour équipe marketing sur l'utilisation optimale des outils Meta.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      category: "Formation",
      metrics: "15 professionnels formés",
      icon: Users
    },
    {
      title: "Analyse & Optimisation - ONG",
      description: "Audit complet et optimisation de la présence digitale d'une organisation non gouvernementale.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      category: "Analytics",
      metrics: "+85% portée organique",
      icon: TrendingUp
    },
    {
      title: "Projet en cours - École 241",
      description: "Développement de ma spécialisation en communication digitale avec projets pratiques.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
      category: "Formation continue",
      metrics: "En développement",
      icon: Calendar
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left"
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Mes Projets</h2>
        <p className="text-slate-600 text-lg">
          Une sélection de projets qui illustrent mon approche stratégique et créative
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <project.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-blue-600">
                  {project.metrics}
                </span>
                <div className="text-slate-400 text-sm">
                  Voir le projet →
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-full text-slate-600">
          <Calendar className="w-5 h-5" />
          <span>Plus de projets à venir...</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
