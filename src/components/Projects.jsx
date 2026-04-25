"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const ProjectCard = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleVisitSite = (e) => {
    e.stopPropagation();
    if (project.websiteUrl && (project.websiteUrl.startsWith('http://') || project.websiteUrl.startsWith('https://'))) {
      window.open(project.websiteUrl, '_blank');
    }
  };

  const handleCardClick = () => {
    // On mobile, toggle flip on click
    if (window.innerWidth < 768) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      onMouseEnter={() => window.innerWidth >= 768 && setIsFlipped(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsFlipped(false)}
      onClick={handleCardClick}
      className="h-80 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
        className="relative w-full h-full"
      >
        {/* Front Side - Project Image and Title */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute w-full h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 flex flex-col"
        >
          {/* Project Image */}
          <div className="relative w-full h-40 flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="p-4 flex-1 flex flex-col overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-xs mb-3 line-clamp-2 flex-1">
              {project.description}
            </p>

            {/* Project Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-purple-600/20 text-purple-400 px-2 py-0.5 text-xs font-medium border border-purple-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Side - Full Description and Visit Button */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute w-full h-full bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/30 flex flex-col p-4 justify-between"
        >
          <div className="overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Visit Site Button */}
          {project.websiteUrl && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVisitSite}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg transition-colors font-medium mt-4 flex-shrink-0"
            >
              <span>Visit Site</span>
              <FaExternalLinkAlt className="text-sm" />
            </motion.button>
          )}
          {!project.websiteUrl && (
            <div className="text-center text-gray-400 text-sm py-2.5 mt-4 flex-shrink-0">
              No website available
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(6); // Show 2 rows (3 cols on desktop, 2 cols on tablet)
  const projectsPerBatch = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects", { cache: 'no-store' });
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const displayedProjects = projects.slice(0, displayCount);
  const hasMore = displayCount < projects.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + projectsPerBatch);
  };

  if (loading) {
    return (
      <div id="projects" className="scroll-mt-24 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl p-8 md:p-12 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center lg:text-left">Projects</h2>
            <div className="text-center text-gray-400">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="scroll-mt-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black rounded-3xl p-8 md:p-12 mb-2"
        >
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center lg:text-left">
              Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              Explore my recent work and creative solutions
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="block sm:hidden">
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
              className="projects-swiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project._id}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
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
                Load More Projects
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
