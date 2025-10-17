import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import renderSerie10 from "@/assets/render-serie-10.jpg";
import renderSerie20 from "@/assets/render-serie-20.jpg";
import renderSerie30 from "@/assets/render-serie-30.jpg";

const DesignPackages = () => {
  const packages = [
    {
      series: "Serie 10",
      area: "10-15 m²",
      price: "500",
      image: renderSerie10,
      features: [
        "Planta arquitectónica amueblada",
        "2 renders fotorrealistas",
        "Catálogo de mobiliario incluido",
        "Lista de decoraciones",
      ]
    },
    {
      series: "Serie 20",
      area: "20-25 m²",
      price: "600",
      popular: true,
      image: renderSerie20,
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
      area: "30-40 m²",
      price: "700",
      image: renderSerie30,
      features: [
        "Planta arquitectónica amueblada",
        "4 renders fotorrealistas",
        "Catálogo premium de mobiliario",
        "Lista completa de decoraciones",
        "Guía de compras personalizada"
      ]
    }
  ];

  const styles = ["Nordic Line", "Boho Vibes", "Urban Steel"];

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

        <div className="space-y-12 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.series} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={pkg.series === "Serie 20" || pkg.series === "Serie 30" ? "md:order-2" : ""}>
                <img 
                  src={pkg.image} 
                  alt={`Render ${pkg.series} - ${pkg.area}`}
                  className="rounded-lg shadow-medium w-full"
                />
              </div>
              
              <div className={pkg.series === "Serie 20" || pkg.series === "Serie 30" ? "md:order-1" : ""}>
                <Card 
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
              </div>
            </div>
          ))}
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
