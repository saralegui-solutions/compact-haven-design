import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import furniture1 from "@/assets/furniture-1.jpg";
import furniture2 from "@/assets/furniture-2.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sistema Modular Oslo",
      category: "Nordic Line",
      price: "12,500",
      image: furniture1,
      description: "Estantería modular con cajones integrados"
    },
    {
      id: 2,
      name: "Escritorio Compacto Bergen",
      category: "Nordic Line",
      price: "8,900",
      image: furniture2,
      description: "Escritorio multifuncional con almacenamiento"
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            Mobiliario Destacado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Piezas diseñadas específicamente para maximizar espacio sin sacrificar estilo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-medium transition-all duration-300">
              <div className="aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-accent font-medium mb-2">{product.category}</p>
                <h3 className="font-serif text-2xl font-bold mb-2 text-primary">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                  <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link to="/catalogo">Ver Catálogo Completo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
