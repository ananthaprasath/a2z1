// src/app/blogs/[slug]/page.js
import { notFound } from "next/navigation";
import blogsData from "../../../../public/data/blog.json";

// Import blog components directly
import Dec13 from "@/app/Component/Blogs/December/Dec13";
import Dec14 from "@/app/Component/Blogs/December/Dec14";

// Simple component mapping 
const BlogComponents = {
  "dec13": Dec13,
  "dec14": Dec14,
};

export function generateMetadata({ params }) {
  const blog = blogsData.find((post) => post.slug === params.slug);
  return {
    title: blog?.title || "Blog Post",
    description: blog?.description || "",
  };
}

export default function BlogPost({ params }) {
  // Find the blog post data
  const blog = blogsData.find((post) => post.slug === params.slug);
  
  if (!blog) {
    return notFound();
  }
  
  // Get the component from our mapping
  const BlogComponent = BlogComponents[blog.componentKey.toLowerCase()];
  
  if (!BlogComponent) {
    return (
      <div className="container py-5 text-center">
        <h2>Blog component not found</h2>
        <p>We couldn't find the requested blog content.</p>
      </div>
    );
  }
  
  return <BlogComponent />;
}