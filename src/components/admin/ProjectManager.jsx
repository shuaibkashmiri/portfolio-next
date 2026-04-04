"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import Modal from "./Modal";

export default function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    technologies: "",
    order: 0,
  });
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "", type: "success" });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techArray = formData.technologies.split(",").map((t) => t.trim());
    const payload = { ...formData, technologies: techArray };

    try {
      if (editingId) {
        await fetch(`/api/projects/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setModal({ isOpen: true, title: "Success", message: "Project updated successfully!", type: "success" });
      } else {
        await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setModal({ isOpen: true, title: "Success", message: "Project added successfully!", type: "success" });
      }
      resetForm();
      fetchProjects();
    } catch (error) {
      console.error("Error:", error);
      setModal({ isOpen: true, title: "Error", message: "Failed to save project. Please try again.", type: "error" });
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      technologies: project.technologies.join(", "),
      order: project.order,
    });
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setModal({
      isOpen: true,
      title: "Confirm Delete",
      message: "Are you sure you want to delete this project? This action cannot be undone.",
      type: "confirm",
    });
  };

  const confirmDelete = async () => {
    try {
      await fetch(`/api/projects/${deleteId}`, { method: "DELETE" });
      setModal({ isOpen: true, title: "Success", message: "Project deleted successfully!", type: "success" });
      fetchProjects();
    } catch (error) {
      console.error("Error:", error);
      setModal({ isOpen: true, title: "Error", message: "Failed to delete project. Please try again.", type: "error" });
    }
    setDeleteId(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: "", description: "", image: "", technologies: "", order: 0 });
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="space-y-6">
      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onConfirm={modal.type === "confirm" ? confirmDelete : undefined}
      />
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h2 className="text-xl font-bold text-white mb-4">
          {editingId ? "Edit Project" : "Add New Project"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-24"
            required
          />
          <div>
            <input
              type="text"
              placeholder="Image URL or Path (e.g., /projects/project-1.png or https://...)"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <p className="text-gray-400 text-xs mt-2">
              Use local path (e.g., /projects/project-1.png) or external URL (e.g., https://images.unsplash.com/...)
            </p>
          </div>
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={formData.technologies}
            onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            required
          />
          <input
            type="number"
            placeholder="Order"
            value={formData.order}
            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <div className="flex gap-2">
            <button type="submit" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
              <FaSave /> {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg">
                <FaTimes /> Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(project)} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(project._id)} className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
