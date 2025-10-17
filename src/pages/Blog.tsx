import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-20">
        <h1 className="font-serif text-5xl font-bold text-center mb-6 text-primary">
          Blog
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tips y consejos para maximizar el espacio en departamentos pequeños
        </p>
        
        <div className="bg-muted/30 rounded-lg p-12 text-center">
          <p className="text-muted-foreground">
            Los artículos del blog estarán disponibles próximamente.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
