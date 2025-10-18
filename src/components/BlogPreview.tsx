import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { getLatestPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const BlogPreview = () => {
  const posts = getLatestPosts(3);

  return (
    <section className="py-20 bg-acordeon/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-primary">
            Blog: Vivir Bien en Espacios Pequeños
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consejos profesionales sobre diseño, funcionalidad y psicología del espacio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(post.date), "d MMM yyyy", { locale: es })}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-accent hover:text-accent/80 font-medium group"
                >
                  Leer más 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-acordeon text-acordeon-foreground hover:bg-acordeon hover:text-acordeon-foreground">
            <Link to="/blog">Ver Todos los Artículos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
