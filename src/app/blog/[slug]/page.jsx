"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendar, FaClock, FaTag } from "react-icons/fa";

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs?slug=${slug}`, { cache: 'no-store' });
        if (!res.ok) {
          setError("Blog not found");
          setLoading(false);
          return;
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setBlog(data[0]);
        } else if (data && data.title) {
          setBlog(data);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p>Loading blog...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-8">{error || "The blog you're looking for doesn't exist."}</p>
          <Link href="/#blogs" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
            <FaArrowLeft />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/#blogs" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
          <FaArrowLeft />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
            <FaTag className="text-xs" />
            {blog.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-purple-400" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-purple-400" />
            <span>{blog.readTime}</span>
          </div>
          <div className="text-gray-400">
            By <span className="text-purple-400 font-semibold">{blog.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12 border border-white/10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <div className="prose prose-invert max-w-none">
          <div
            className="text-gray-300 leading-relaxed space-y-6 text-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </motion.div>

      {/* Back to Blogs CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-12 border-t border-white/10">
        <Link href="/#blogs" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
          <FaArrowLeft />
          Back to All Blogs
        </Link>
      </div>
    </div>
  );
}
