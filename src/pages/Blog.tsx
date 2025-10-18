import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { getAllPosts } from "@/data/blogPosts";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Blog = () => {
  const posts = getAllPosts();

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
