import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Contattaci
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Prenota un <span className="text-gradient-gold italic">Appuntamento</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Indirizzo</h4>
                <p className="font-body text-muted-foreground">
                  Via Roma 123, 20121 Milano, Italia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Telefono</h4>
                <a href="tel:+390212345678" className="font-body text-muted-foreground hover:text-gold transition-colors">
                  +39 02 1234 5678
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Email</h4>
                <a href="mailto:info@elegance.it" className="font-body text-muted-foreground hover:text-gold transition-colors">
                  info@elegance.it
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-display text-xl text-foreground mb-1">Orari</h4>
                <p className="font-body text-muted-foreground">
                  Mar - Sab: 9:00 - 19:00<br />
                  Domenica e Lunedì: Chiuso
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center hover:border-gold hover:shadow-gold transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-card border border-border rounded flex items-center justify-center hover:border-gold hover:shadow-gold transition-all duration-300"
              >
                <Facebook className="w-5 h-5 text-gold" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded p-8"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-background border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors"
                    placeholder="+39 ..."
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-background border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors"
                  placeholder="email@esempio.com"
                />
              </div>

              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Servizio
                </label>
                <select className="w-full bg-background border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors">
                  <option value="">Seleziona un servizio</option>
                  <option value="taglio">Taglio</option>
                  <option value="colore">Colore</option>
                  <option value="trattamento">Trattamento</option>
                  <option value="acconciatura">Acconciatura</option>
                  <option value="piega">Piega</option>
                  <option value="barba">Barba</option>
                </select>
              </div>

              <div>
                <label className="font-body text-sm text-muted-foreground uppercase tracking-wider block mb-2">
                  Messaggio
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded px-4 py-3 font-body text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Descrivi cosa desideri..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider px-8 py-4 rounded hover:shadow-gold transition-all duration-300"
              >
                Invia Richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
