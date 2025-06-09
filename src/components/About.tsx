
import { motion } from "framer-motion";
import { Heart, Target, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    "Élaboration de stratégies éditoriales et de calendriers de contenu",
    "Création de visuels attractifs & rédaction de contenus percutants",
    "Maîtrise des outils : Meta Business Suite, Canva, Trello, Notion",
    "Animation de communautés sur Facebook, Instagram, TikTok et LinkedIn",
    "Analyse de performance et optimisation continue"
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Heart className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-800">À propos</h2>
        </div>
        
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Il fut un temps où je veillais sur les premiers souffles de vie, aujourd'hui je donne vie à des marques sur les réseaux. Diplômée en soins obstétricaux, mon parcours d'infirmière accoucheuse m'a appris la rigueur, l'écoute et l'attention aux moindres détails — des qualités que je transpose désormais dans le monde du digital.
          </p>
          
          <p>
            Passionnée par l'univers du social media, je me forme et je me spécialise activement en communication digitale à l'École 241. Chaque jour, je développe une vision stratégique orientée vers l'authenticité, l'émotion et l'engagement. Je ne me contente pas de publier, je crée des connexions durables entre les marques et leurs communautés.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Sparkles className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-800">Mes compétences clés</h3>
        </div>
        
        <ul className="space-y-3">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-3 text-slate-600"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>{skill}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-6 h-6" />
          <h3 className="text-xl font-bold">Mon objectif</h3>
        </div>
        
        <p className="leading-relaxed">
          Accompagner les entreprises et les entrepreneurs à révéler leur univers, renforcer leur présence en ligne et transformer l'audience en clients fidèles.
        </p>
        
        <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <p className="text-sm leading-relaxed">
            ✨ Si vous recherchez une professionnelle déterminée, agile, avec un regard neuf et humain sur la communication, alors je serais ravie de collaborer avec vous.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
