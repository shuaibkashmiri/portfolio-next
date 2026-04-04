"use client";

import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import Modal from "./Modal";

export default function ServiceManager() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "FaStore",
    features: "",
    order: 0,
  });
  const [modal, setModal] = useState({ isOpen: false, title: "", message: "", type: "success" });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/services");
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const featuresArray = formData.features.split(",").map((f) => f.trim());
    const payload = { ...formData, features: featuresArray };

    try {
      if (editingId) {
        await fetch(`/api/services/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setModal({ isOpen: true, title: "Success", message: "Service updated successfully!", type: "success" });
      } else {
        await fetch("/api/services", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        setModal({ isOpen: true, title: "Success", message: "Service added successfully!", type: "success" });
      }
      resetForm();
      fetchServices();
    } catch (error) {
      console.error("Error:", error);
      setModal({ isOpen: true, title: "Error", message: "Failed to save service. Please try again.", type: "error" });
    }
  };

  const handleEdit = (service) => {
    setEditingId(service._id);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: service.features.join(", "),
      order: service.order,
    });
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setModal({
      isOpen: true,
      title: "Confirm Delete",
      message: "Are you sure you want to delete this service? This action cannot be undone.",
      type: "confirm",
    });
  };

  const confirmDelete = async () => {
    try {
      await fetch(`/api/services/${deleteId}`, { method: "DELETE" });
      setModal({ isOpen: true, title: "Success", message: "Service deleted successfully!", type: "success" });
      fetchServices();
    } catch (error) {
      console.error("Error:", error);
      setModal({ isOpen: true, title: "Error", message: "Failed to delete service. Please try again.", type: "error" });
    }
    setDeleteId(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: "", description: "", icon: "FaStore", features: "", order: 0 });
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
          {editingId ? "Edit Service" : "Add New Service"}
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
          <select
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500"
          >
            <option value="FaStore">Store</option>
            <option value="FaHospital">Hospital</option>
            <option value="FaGraduationCap">Graduation Cap</option>
            <option value="FaUserTie">User Tie</option>
            <option value="FaPlus">Plus</option>
          </select>
          <textarea
            placeholder="Features (comma separated)"
            value={formData.features}
            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-24"
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
        {services.map((service) => (
          <div key={service._id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(service)} className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(service._id)} className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <div className="space-y-1">
              {service.features.map((feature, idx) => (
                <div key={idx} className="text-gray-400 text-sm">• {feature}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
