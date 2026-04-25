"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaClock, FaCalendar, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogCard = ({ blog, index }) => {
  const handleBlogClick = (e) => {
    e.preventDefault();
    if (blog.slug) {
      window.location.href = `/blog/${blog.slug}`;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30 h-full cursor-pointer"
      onClick={handleBlogClick}
    >
      {/* Blog Image */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
            {blog.category}
          </span>
        </div>
        {/* Author */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
          <div className="w-6 h-6 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500/30">
            <span className="text-purple-400 text-xs font-bold">{(blog.author || "A").charAt(0)}</span>
          </div>
          <span className="text-white text-xs font-medium">{blog.author || "Author"}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <FaCalendar className="text-purple-400" />
            {blog.date}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-purple-400" />
            {blog.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
          Read More
          <FaArrowRight className="text-xs" />
        </div>
      </div>
    </motion.article>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(3); // Show 1 row (3 cols on desktop, 2 cols on tablet)
  const blogsPerBatch = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", { cache: 'no-store' });
        const data = await res.json();
        // Sort blogs by date (latest first)
        const sortedBlogs = data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const displayedBlogs = blogs.slice(0, displayCount);
  const hasMore = displayCount < blogs.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + blogsPerBatch);
  };

  if (loading) {
    return (
      <div id="blogs" className="scroll-mt-24 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl p-8 md:p-12 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center lg:text-left">Latest Blogs</h2>
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="blogs"
      className="scroll-mt-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Blogs Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 md:p-12 mb-2"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center lg:text-left">
              Latest Blogs
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Insights, tutorials, and thoughts on web development
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="block md:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="blogs-swiper"
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={blog._id}>
                  <BlogCard blog={blog} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedBlogs.map((blog, index) => (
              <BlogCard key={blog._id} blog={blog} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoadMore}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Load More Blogs
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
