import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-20">
        <h1 className="font-serif text-5xl font-bold text-center mb-6 text-primary">
          Catálogo de Mobiliario
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Explora nuestra colección completa de muebles diseñados para espacios pequeños
        </p>
        
        <div className="bg-muted/30 rounded-lg p-12 text-center">
          <p className="text-muted-foreground">
            El catálogo completo de productos estará disponible próximamente.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
