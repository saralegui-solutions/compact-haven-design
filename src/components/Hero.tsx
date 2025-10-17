import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-space.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.95) 40%, hsl(var(--background) / 0.4) 70%, transparent 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary">
            Vive Grande en
            <span className="block text-accent mt-2">Espacios Pequeños</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Diseñamos y creamos mobiliario inteligente que transforma departamentos 
            pequeños en espacios funcionales, confortables y llenos de estilo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-medium">
              <Link to="/catalogo">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/paquetes">
                Ver Paquetes de Diseño
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Nuestros valores</p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-primary mb-1">Funcionalidad</p>
                <p className="text-xs text-muted-foreground">Cada centímetro cuenta</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">Diseño</p>
                <p className="text-xs text-muted-foreground">Estética profesional</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">Confort</p>
                <p className="text-xs text-muted-foreground">Espacios que inspiran</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
