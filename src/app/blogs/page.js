// src/app/blogs/page.js
"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import blogsData from "../../../public/data/blog.json";

// Simple loading component
function LoadingBlog() {
  return <div className="container py-5 text-center">Loading blogs...</div>;
}

// Main blog list content
function BlogListContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  
  const categories = ["All", "WhatsApp Service", "Bulk SMS Service", "OTP Service", "Voice Call"];
  
  // Filter blogs by category
  const filteredBlogs = selectedCategory === "All" 
    ? blogsData 
    : blogsData.filter(blog => blog.category === selectedCategory);
  
  // Get current page of blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Blog</h1>
      
      {/* Category Filter */}
      <div className="mb-4 text-center">
        {categories.map(category => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"} me-2 mb-2`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Blog Cards */}
      <div className="row">
        {currentBlogs.length > 0 ? (
          currentBlogs.map(blog => (
            <div className="col-md-4 mb-4" key={blog.id}>
              <Link href={`/blogs/${blog.slug}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm">
                  <img
                    src={blog.image || "/images/blog.jpg"}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text text-muted">{blog.category}</p>
                    <p>{blog.description}</p>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No blogs found in this category.</p>
          </div>
        )}
      </div>
      
      {/* Simple Pagination */}
      {filteredBlogs.length > blogsPerPage && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }).map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                <button 
                  className="page-link" 
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

// Main component with Suspense boundary
export default function BlogList() {
  return (
    <Suspense fallback={<LoadingBlog />}>
      <BlogListContent />
    </Suspense>
  );
}