"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import Modal from "./Modal";

export default function TechnologyManager() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    icon: "FaNodeJs",
    color: "text-green-500",
    duration: 3,
    order: 0,
  });
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "", type: "success" });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const fetchTechnologies = async () => {
    try {
      const res = await fetch("/api/technologies");
      const data = await res.json();
      setTechnologies(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(`/api/technologies/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setModal({ isOpen: true, title: "Success", message: "Technology updated successfully!", type: "success" });
      } else {
        await fetch("/api/technologies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setModal({ isOpen: true, title: "Success", message: "Technology added successfully!", type: "success" });
      }
      resetForm();
      fetchTechnologies();
    } catch (error) {
      console.error("Error:", error);
      setModal({ isOpen: true, title: "Error", message: "Failed to save technology. Please try again.", type: "error" });
    }
  };

  const handleEdit = (tech) => {
    setEditingId(tech._id);
    setFormData({
      name: tech.name,
      icon: tech.icon,
      color: tech.color,
      duration: tech.duration,
      order: tech.order,
    });
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setModal({
      isOpen: true,
      title: "Confirm Delete",
      message: "Are you sure you want to delete this technology? This action cannot be undone.",
      type: "confirm",
    });
  };

  const confirmDelete = async () => {
    try {
      await fetch(`/api/technologies/${deleteId}`, { method: "DELETE" });
      setModal({ isOpen: true, title: "Success", message: "Technology deleted successfully!", type: "success" });
      fetchTechnologies();
    } catch (error) {
      console.error("Error:", error);
      setModal({ isOpen: true, title: "Error", message: "Failed to delete technology. Please try again.", type: "error" });
    }
    setDeleteId(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ name: "", icon: "FaNodeJs", color: "text-green-500", duration: 3, order: 0 });
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
          {editingId ? "Edit Technology" : "Add New Technology"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Icon (e.g., FaNodeJs)"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="text"
              placeholder="Color (e.g., text-green-500)"
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="number"
              placeholder="Duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: parseFloat(e.target.value) })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              step="0.1"
              required
            />
          </div>
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div key={tech._id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">{tech.name}</h3>
              <div className="flex gap-1">
                <button onClick={() => handleEdit(tech)} className="p-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(tech._id)} className="p-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs">
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{tech.icon}</p>
            <p className="text-gray-400 text-sm">{tech.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
