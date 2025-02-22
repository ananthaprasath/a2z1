// src/app/blogs/[slug]/page.js
import { notFound } from "next/navigation";
import blogsData from "../../../../public/data/blog.json";

// Import blog components directly
import Dec13 from "@/app/Component/Blogs/December/Dec13";
import Dec14 from "@/app/Component/Blogs/December/Dec14";
import Dec15 from "@/app/Component/Blogs/December/Dec15";
import Dec16 from "@/app/Component/Blogs/December/Dec16";
import Dec17 from "@/app/Component/Blogs/December/Dec17";
import Dec18 from "@/app/Component/Blogs/December/Dec18";
import Dec19 from "@/app/Component/Blogs/December/Dec19";
import Dec20 from "@/app/Component/Blogs/December/Dec20";
import Dec21 from "@/app/Component/Blogs/December/Dec21";
import Dec22 from "@/app/Component/Blogs/December/Dec22";
import Dec23 from "@/app/Component/Blogs/December/Dec23";
import Dec24 from "@/app/Component/Blogs/December/Dec24";
import Jan1 from "@/app/Component/Blogs/January/Jan1";
import Jan2 from "@/app/Component/Blogs/January/Jan2";
import Jan3 from "@/app/Component/Blogs/January/Jan3";
import Jan4 from "@/app/Component/Blogs/January/Jan4";
import Jan5 from "@/app/Component/Blogs/January/Jan5";
import Jan6 from "@/app/Component/Blogs/January/Jan6";
import Jan7 from "@/app/Component/Blogs/January/Jan7";
import Jan8 from "@/app/Component/Blogs/January/Jan8";
import Jan9 from "@/app/Component/Blogs/January/Jan9";
import Jan10 from "@/app/Component/Blogs/January/Jan10";

// Simple component mapping 
const BlogComponents = {
  "dec13": Dec13,
  "dec14": Dec14,
  "dec15": Dec15,
  "dec16": Dec16,
  "dec17": Dec17,
  "dec18": Dec18,
  "dec19": Dec19,
  "dec20": Dec20,
  "dec21": Dec21,
  "dec22": Dec22,
  "dec23": Dec23,
  "dec24": Dec24,
  "jan1": Jan1,
  "jan2": Jan2,
  "jan3": Jan3,
  "jan4": Jan4,
  "jan5": Jan5,
  "jan6": Jan6,
  "jan7": Jan7,
  "jan8": Jan8,
  "jan9": Jan9,
  "jan10": Jan10,
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