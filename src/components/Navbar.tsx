import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servizi", label: "Servizi" },
  { href: "#galleria", label: "Galleria" },
  { href: "#team", label: "Team" },
  { href: "#contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <Scissors className="w-6 h-6 text-gold transition-transform group-hover:rotate-45" />
            <span className="font-display text-2xl font-semibold text-foreground">
              Elegance<span className="text-gold">.</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider px-6 py-2.5 rounded hover:shadow-gold transition-all duration-300"
            >
              Prenota
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contatti"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-gold text-primary-foreground font-body text-sm uppercase tracking-wider px-6 py-2.5 rounded text-center"
                >
                  Prenota
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
