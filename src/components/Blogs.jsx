import React from "react";
import { BLOGS } from "../constants";
import { motion } from "framer-motion";
import { FaClock, FaCalendar, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Blogs = () => {
  const isExternalUrl = (url) => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  return (
    <div
      id="blogs"
      className="scroll-mt-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blogs Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 md:p-12 mb-2"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Blogs
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Insights, tutorials, and thoughts on web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOGS.map((blog, index) => {
              const isExternal = isExternalUrl(blog.url);
              const BlogLink = isExternal ? 'a' : Link;
              const linkProps = isExternal 
                ? { href: blog.url, target: "_blank", rel: "noopener noreferrer" }
                : { href: blog.url };

              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/30"
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
                        <span className="text-purple-400 text-xs font-bold">SM</span>
                      </div>
                      <span className="text-white text-xs font-medium">Shoaib Mushtaq Bhat</span>
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

                    <BlogLink 
                      {...linkProps}
                      className="flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                    >
                      Read More
                      <FaArrowRight className="text-xs" />
                    </BlogLink>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
