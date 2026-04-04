"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheck, FaExclamationTriangle } from "react-icons/fa";

export default function Modal({ isOpen, onClose, title, message, type = "success", onConfirm }) {
  const isConfirm = type === "confirm";

  const icons = {
    success: <FaCheck className="w-12 h-12 text-green-500" />,
    error: <FaExclamationTriangle className="w-12 h-12 text-red-500" />,
    confirm: <FaExclamationTriangle className="w-12 h-12 text-yellow-500" />,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  {icons[type]}
                  <p className="text-gray-300 text-lg">{message}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex gap-3 p-6 border-t border-white/10">
                {isConfirm ? (
                  <>
                    <button
                      onClick={onClose}
                      className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        onConfirm();
                        onClose();
                      }}
                      className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    OK
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
