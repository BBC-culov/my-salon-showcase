import { motion } from "framer-motion";
import { Scissors, Sparkles, Palette, Crown, Wind, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Taglio",
    description: "Taglio personalizzato per donna e uomo con consulenza di stile",
    price: "Da €25",
  },
  {
    icon: Palette,
    title: "Colore",
    description: "Colorazione professionale, meches, balayage e sfumature",
    price: "Da €45",
  },
  {
    icon: Sparkles,
    title: "Trattamenti",
    description: "Ricostruzione, cheratina e trattamenti nutrienti",
    price: "Da €35",
  },
  {
    icon: Crown,
    title: "Acconciature",
    description: "Look da sposa, cerimonia ed eventi speciali",
    price: "Da €50",
  },
  {
    icon: Wind,
    title: "Piega",
    description: "Piega classica, onde morbide e styling creativo",
    price: "Da €20",
  },
  {
    icon: Heart,
    title: "Barba",
    description: "Rifinitura barba, rasatura tradizionale e trattamenti",
    price: "Da €15",
  },
];

export const Services = () => {
  return (
    <section id="servizi" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Cosa Offriamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            I Nostri <span className="text-gradient-gold italic">Servizi</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border hover:border-gold p-8 rounded transition-all duration-500 hover:shadow-gold"
            >
              <service.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="font-display text-xl text-gold font-semibold">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
