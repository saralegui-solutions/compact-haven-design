import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-20 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">
            Artículo no encontrado
          </h1>
          <Link to="/blog">
            <Button variant="outline" className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Navbar />
      <main className="flex-grow">
        <article className="container max-w-5xl py-8 md:py-16">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4 hover:bg-accent/10 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Button>
          </Link>

          {/* Header Section */}
          <div className="mb-12 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-1.5 text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary leading-tight animate-fade-in">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="font-medium">{format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: es })}</span>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-accent pl-6 py-2">
              {post.excerpt}
            </p>
          </div>

          {/* Content with Images */}
          <div className="prose prose-lg max-w-none">
            {post.content && (
              <div className="text-foreground leading-relaxed space-y-8">
                {post.content.split('\n').map((line, index) => {
                  // Handle images with special styling
                  if (line.trim().startsWith('![')) {
                    const match = line.match(/!\[(.*?)\]\((.*?)\)/);
                    if (match) {
                      const [, alt, src] = match;
                      return (
                        <div key={index} className="my-12 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in">
                          <img 
                            src={src} 
                            alt={alt} 
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                          {alt && (
                            <p className="text-sm text-center text-muted-foreground italic mt-4 px-4">
                              {alt}
                            </p>
                          )}
                        </div>
                      );
                    }
                  }
                  
                  // Handle headings
                  if (line.startsWith('# ')) {
                    return (
                      <h1 key={index} className="font-serif text-3xl md:text-4xl font-bold text-primary mt-16 mb-8 pb-4 border-b-2 border-accent/20">
                        {line.substring(2)}
                      </h1>
                    );
                  }
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-serif text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-accent rounded-full"></span>
                        {line.substring(3)}
                      </h2>
                    );
                  }
                  if (line.startsWith('### ')) {
                    return (
                      <h3 key={index} className="font-serif text-xl md:text-2xl font-semibold text-primary mt-10 mb-4">
                        {line.substring(4)}
                      </h3>
                    );
                  }
                  
                  // Handle lists
                  if (line.startsWith('- ') || line.startsWith('* ')) {
                    return (
                      <li key={index} className="ml-6 text-muted-foreground leading-relaxed my-2 pl-2 hover:text-foreground transition-colors">
                        <span className="text-accent mr-2">•</span>
                        {line.substring(2)}
                      </li>
                    );
                  }
                  
                  // Handle bold text
                  if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                    const text = line.trim().slice(2, -2);
                    return (
                      <p key={index} className="font-semibold text-foreground mt-6 mb-3 text-lg">
                        {text}
                      </p>
                    );
                  }
                  
                  // Handle empty lines
                  if (line.trim() === '') {
                    return <div key={index} className="h-4"></div>;
                  }
                  
                  // Handle regular paragraphs
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed text-lg my-4">
                      {line}
                    </p>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="mt-20 pt-12 border-t-2 border-border">
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                ¿Te gustó este artículo?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Descubre más consejos y estrategias para maximizar tu espacio
              </p>
              <Link to="/blog">
                <Button size="lg" className="group hover:scale-105 transition-transform">
                  <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  Ver Todos los Artículos
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
