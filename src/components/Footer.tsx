import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">SpaceLab</h3>
            <p className="text-sm text-primary-foreground/80">
              Transformando departamentos pequeños en espacios funcionales y confortables.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link to="/catalogo" className="text-primary-foreground/80 hover:text-accent transition-colors">Catálogo</Link></li>
              <li><Link to="/paquetes" className="text-primary-foreground/80 hover:text-accent transition-colors">Paquetes</Link></li>
              <li><Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Líneas de Diseño</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Nordic Line</li>
              <li>Boho Vibes</li>
              <li>Urban Steel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@spacelab.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              info@spacelab.com
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 SpaceLab. Diseño inteligente para espacios pequeños.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
