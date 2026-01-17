import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegance Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-6">
            Benvenuti nel nostro salone
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6"
        >
          L'Arte della<br />
          <span className="text-gradient-gold italic">Bellezza</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Trasformiamo ogni capello in un'opera d'arte. Esperienza, passione e stile si uniscono per creare il tuo look perfetto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contatti"
            className="bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider px-10 py-4 rounded hover:shadow-gold transition-all duration-300"
          >
            Prenota Ora
          </a>
          <a
            href="#servizi"
            className="border border-gold text-gold font-body text-sm uppercase tracking-wider px-10 py-4 rounded hover:bg-gold hover:text-primary-foreground transition-all duration-300"
          >
            I Nostri Servizi
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold rounded-full flex justify-center"
        >
          <motion.div className="w-1.5 h-3 bg-gold rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};
