"use client";

import { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import Modal from "./Modal";

export default function ExperienceManager() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [modal, setModal] = useState({ isOpen: false, type: "success", title: "", message: "" });
  const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, id: null });
  const [formData, setFormData] = useState({
    year: "",
    role: "",
    company: "",
    description: "",
    technologies: "",
    order: 0,
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const res = await fetch("/api/experiences");
      const data = await res.json();
      setExperiences(data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
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
        await fetch(`/api/experiences/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setModal({
          isOpen: true,
          type: "success",
          title: "Success",
          message: "Experience updated successfully!"
        });
      } else {
        await fetch("/api/experiences", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setModal({
          isOpen: true,
          type: "success",
          title: "Success",
          message: "Experience added successfully!"
        });
      }
      resetForm();
      fetchExperiences();
    } catch (error) {
      console.error("Error saving experience:", error);
      setModal({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Failed to save experience"
      });
    }
  };

  const handleEdit = (exp) => {
    setEditingId(exp._id);
    setFormData({
      year: exp.year,
      role: exp.role,
      company: exp.company,
      description: exp.description,
      technologies: exp.technologies.join(", "),
      order: exp.order,
    });
  };

  const handleDeleteClick = (id) => {
    setDeleteConfirm({ isOpen: true, id });
  };

  const handleDeleteConfirm = async () => {
    try {
      await fetch(`/api/experiences/${deleteConfirm.id}`, { method: "DELETE" });
      setModal({
        isOpen: true,
        type: "success",
        title: "Success",
        message: "Experience deleted successfully!"
      });
      fetchExperiences();
    } catch (error) {
      console.error("Error deleting experience:", error);
      setModal({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Failed to delete experience"
      });
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      year: "",
      role: "",
      company: "",
      description: "",
      technologies: "",
      order: 0,
    });
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <>
      <div className="space-y-6">
        {/* Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">
            {editingId ? "Edit Experience" : "Add New Experience"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Year (e.g., 2024 - Present)"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                required
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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
              <button
                type="submit"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                <FaSave />
                {editingId ? "Update" : "Add"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  <FaTimes />
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp._id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.year}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(exp)}
                    className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(exp._id)}
                    className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={() => setModal({ ...modal, isOpen: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />

      <Modal
        isOpen={deleteConfirm.isOpen}
        onClose={() => setDeleteConfirm({ isOpen: false, id: null })}
        title="Confirm Delete"
        message="Are you sure you want to delete this experience? This action cannot be undone."
        type="confirm"
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}
