import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";

const team = [
  {
    name: "Marco Rossi",
    role: "Master Stylist & Fondatore",
    image: stylist1,
    bio: "15 anni di esperienza nel settore. Specializzato in tagli moderni e colorazioni creative.",
  },
  {
    name: "Giulia Bianchi",
    role: "Color Specialist",
    image: stylist2,
    bio: "Esperta in balayage e tecniche di colorazione. Ha lavorato nelle capitali della moda.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Chi Siamo
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Il Nostro <span className="text-gradient-gold italic">Team</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-body text-gold text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
                <a
                  href="#"
                  className="absolute top-4 right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:shadow-gold"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
