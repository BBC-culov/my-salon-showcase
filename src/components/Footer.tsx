import { Scissors } from "lucide-react";
export const Footer = () => {
  return <footer className="py-12 bg-charcoal-dark border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-gold" />
            <span className="font-display text-xl font-semibold text-foreground">
              Elegance<span className="text-gold">.</span>
            </span>
          </a>

          <p className="font-body text-sm text-muted-foreground text-center">© 2026 StudioNavi.it  tutti i diritti riservati. </p>

          <div className="flex gap-6">
            <a href="#" className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors">
              Termini
            </a>
          </div>
        </div>
      </div>
    </footer>;
};