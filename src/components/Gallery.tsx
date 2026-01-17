import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Acconciatura bionda elegante" },
  { src: gallery2, alt: "Taglio uomo moderno" },
  { src: gallery3, alt: "Onde morbide castane" },
  { src: gallery4, alt: "Bob corto trendy" },
];

export const Gallery = () => {
  return (
    <section id="galleria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Il Nostro Lavoro
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            <span className="text-gradient-gold italic">Galleria</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-lg text-foreground text-center px-4">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
