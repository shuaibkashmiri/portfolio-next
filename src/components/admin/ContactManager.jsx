"use client";

import { useState, useEffect } from "react";
import { FaTrash, FaEnvelope, FaPhone, FaBuilding, FaEye } from "react-icons/fa";
import Modal from "./Modal";

export default function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modal, setModal] = useState({ isOpen: false, type: "success", title: "", message: "" });
  const [deleteConfirm, setDeleteConfirm] = useState({ isOpen: false, id: null });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteConfirm({ isOpen: true, id });
  };

  const handleDeleteConfirm = async () => {
    try {
      await fetch(`/api/contacts/${deleteConfirm.id}`, { method: "DELETE" });
      setModal({
        isOpen: true,
        type: "success",
        title: "Success",
        message: "Contact deleted successfully!"
      });
      fetchContacts();
    } catch (error) {
      console.error("Error:", error);
      setModal({
        isOpen: true,
        type: "error",
        title: "Error",
        message: "Failed to delete contact"
      });
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await fetch(`/api/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchContacts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Total Contacts</p>
            <p className="text-3xl font-bold text-white">{contacts.length}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-gray-400 text-sm mb-1">New</p>
            <p className="text-3xl font-bold text-purple-400">
              {contacts.filter(c => c.status === 'new').length}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-gray-400 text-sm mb-1">Replied</p>
            <p className="text-3xl font-bold text-green-400">
              {contacts.filter(c => c.status === 'replied').length}
            </p>
          </div>
        </div>

        {/* Contacts List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Contact Messages</h2>
          
          {contacts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No contacts yet</p>
          ) : (
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact._id}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-bold text-white">{contact.name}</h3>
                        <select
                          value={contact.status}
                          onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <FaEnvelope className="text-purple-400" />
                          <a href={`mailto:${contact.email}`} className="hover:text-purple-400">
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <FaPhone className="text-purple-400" />
                          <a href={`tel:${contact.phone}`} className="hover:text-purple-400">
                            {contact.phone}
                          </a>
                        </div>
                        {contact.company && (
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <FaBuilding className="text-purple-400" />
                            {contact.company}
                          </div>
                        )}
                      </div>

                      <p className="text-gray-300 mb-3">{contact.message}</p>
                      
                      <p className="text-gray-500 text-xs">
                        Received: {formatDate(contact.createdAt)}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteClick(contact._id)}
                        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
        message="Are you sure you want to delete this contact? This action cannot be undone."
        type="confirm"
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
}
