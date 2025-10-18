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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <article className="container max-w-4xl py-12 md:py-20">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Button>
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3 mb-6">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: es })}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {post.content && (
              <div 
                className="text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="font-serif text-3xl md:text-4xl font-bold text-primary mt-12 mb-6">${line.substring(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="font-serif text-2xl md:text-3xl font-bold text-primary mt-10 mb-4">${line.substring(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="font-serif text-xl md:text-2xl font-semibold text-primary mt-8 mb-3">${line.substring(4)}</h3>`;
                      }
                      if (line.startsWith('- ') || line.startsWith('* ')) {
                        return `<li class="ml-6 text-muted-foreground">${line.substring(2)}</li>`;
                      }
                      if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                        const text = line.trim().slice(2, -2);
                        return `<p class="font-semibold text-foreground mt-4">${text}</p>`;
                      }
                      if (line.trim() === '') {
                        return '<br />';
                      }
                      return `<p class="text-muted-foreground leading-relaxed">${line}</p>`;
                    })
                    .join('\n')
                }}
              />
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver Todos los Artículos
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
