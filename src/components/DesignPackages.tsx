import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import floorPlan from "@/assets/floor-plan.jpg";

const DesignPackages = () => {
  const packages = [
    {
      series: "Serie 10",
      area: "30-40 m²",
      price: "6,500",
      features: [
        "Planta arquitectónica amueblada",
        "2 renders fotorrealistas",
        "Catálogo de mobiliario incluido",
        "Lista de decoraciones",
      ]
    },
    {
      series: "Serie 20",
      area: "41-55 m²",
      price: "8,900",
      popular: true,
      features: [
        "Planta arquitectónica amueblada",
        "3 renders fotorrealistas",
        "Catálogo completo de mobiliario",
        "Lista de decoraciones y accesorios",
        "Guía de compras personalizada"
      ]
    },
    {
      series: "Serie 30",
      area: "56-70 m²",
      price: "11,500",
      features: [
        "Planta arquitectónica amueblada",
        "4 renders fotorrealistas",
        "Catálogo premium de mobiliario",
        "Lista completa de decoraciones",
        "Guía de compras personalizada",
        "Consultoría de diseño 1 hora"
      ]
    }
  ];

  const styles = ["Nordic Line", "Boho Vibes", "Urban Industrial"];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            Paquetes de Diseño Completos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Visualiza tu espacio transformado con nuestros paquetes de diseño profesional. 
            Incluye planos, renders y catálogo de productos listos para comprar.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <p className="text-sm text-muted-foreground mr-2">Estilos disponibles:</p>
            {styles.map((style) => (
              <span 
                key={style} 
                className="px-4 py-2 rounded-full bg-tempranillo/10 text-tempranillo text-sm font-medium"
              >
                {style}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-center justify-center">
            <img 
              src={floorPlan} 
              alt="Ejemplo de planta arquitectónica" 
              className="rounded-lg shadow-medium w-full max-w-lg"
            />
          </div>

          <div className="space-y-6">
            {packages.map((pkg) => (
              <Card 
                key={pkg.series} 
                className={`${pkg.popular ? 'border-accent border-2' : ''} relative overflow-hidden`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-medium">
                    Más Popular
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-primary">{pkg.series}</h3>
                      <p className="text-muted-foreground">{pkg.area}</p>
                    </div>
                    <p className="text-3xl font-bold text-primary">${pkg.price}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-tempranillo text-tempranillo hover:bg-tempranillo hover:text-tempranillo-foreground">
            <Link to="/paquetes">Explorar Paquetes Completos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignPackages;
