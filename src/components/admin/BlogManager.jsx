"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";
import Modal from "./Modal";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <div className="text-gray-300">Loading editor...</div>,
});

import "react-quill/dist/quill.snow.css";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    date: "",
    readTime: "",
    category: "",
    image: "",
    slug: "",
    order: 0,
  });
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "success",
  });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: !editingId ? generateSlug(title) : formData.slug,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await fetch(`/api/blogs/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setModal({
          isOpen: true,
          title: "Success",
          message: "Blog updated successfully!",
          type: "success",
        });
      } else {
        await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setModal({
          isOpen: true,
          title: "Success",
          message: "Blog added successfully!",
          type: "success",
        });
      }
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Error:", error);
      setModal({
        isOpen: true,
        title: "Error",
        message: "Failed to save blog. Please try again.",
        type: "error",
      });
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
      date: blog.date,
      readTime: blog.readTime,
      category: blog.category,
      image: blog.image,
      slug: blog.slug,
      order: blog.order,
    });
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setModal({
      isOpen: true,
      title: "Confirm Delete",
      message:
        "Are you sure you want to delete this blog? This action cannot be undone.",
      type: "confirm",
    });
  };

  const confirmDelete = async () => {
    try {
      await fetch(`/api/blogs/${deleteId}`, { method: "DELETE" });
      setModal({
        isOpen: true,
        title: "Success",
        message: "Blog deleted successfully!",
        type: "success",
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error:", error);
      setModal({
        isOpen: true,
        title: "Error",
        message: "Failed to delete blog. Please try again.",
        type: "error",
      });
    }
    setDeleteId(null);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      date: "",
      readTime: "",
      category: "",
      image: "",
      slug: "",
      order: 0,
    });
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
          {editingId ? "Edit Blog" : "Add New Blog"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            required
          />
          <textarea
            placeholder="Excerpt (short summary)"
            value={formData.excerpt}
            onChange={(e) =>
              setFormData({ ...formData, excerpt: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 h-20"
            required
          />
          <div className="w-full rounded-lg border border-white/10 bg-white/5 p-2 text-white">
            <label className="mb-2 block text-sm text-gray-300">
              Blog Content
            </label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={(value) => setFormData({ ...formData, content: value })}
              placeholder="Write your blog content here..."
              className="bg-transparent text-white"
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["blockquote", "code-block"],
                  [{ align: [] }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
            />
          </div>
          {formData.content && (
            <div className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-gray-400 text-xs mb-2 font-semibold">
                Content Preview:
              </p>
              <div
                className="text-gray-300 text-sm prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: formData.content }}
              />
            </div>
          )}
          <input
            type="text"
            placeholder="Author Name"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Date (e.g., March 15, 2024)"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="text"
              placeholder="Read Time (e.g., 5 min read)"
              value={formData.readTime}
              onChange={(e) =>
                setFormData({ ...formData, readTime: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Image URL (e.g., https://images.unsplash.com/... or /blog/image.jpg)"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <p className="text-gray-400 text-xs mt-2">
              Use external URL (e.g., https://images.unsplash.com/...) or local
              path (e.g., /blog/image.jpg)
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Slug (auto-generated from title)"
              value={formData.slug}
              onChange={(e) =>
                setFormData({ ...formData, slug: e.target.value })
              }
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              required
            />
            <p className="text-gray-400 text-xs mt-2">
              URL-friendly slug (e.g., my-blog-post). Auto-generated from title
              when creating new blog.
            </p>
          </div>
          <input
            type="number"
            placeholder="Order"
            value={formData.order}
            onChange={(e) =>
              setFormData({ ...formData, order: parseInt(e.target.value) })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
            >
              <FaSave /> {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
              >
                <FaTimes /> Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{blog.title}</h3>
                <p className="text-purple-400 text-sm">/{blog.slug}</p>
                <p className="text-gray-400 text-xs mt-1">
                  {blog.category} • By {blog.author}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
            <p className="text-gray-300 mb-2 line-clamp-2">{blog.excerpt}</p>
            <p className="text-gray-400 text-sm">
              {blog.date} • {blog.readTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
