import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export function ContactForm() {
    const {
        theme
    } = useTheme();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Thanks for your message! We'll get back to you soon.");

            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }, 1500);
    };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-8 rounded-2xl shadow-lg ${
        theme === "dark" 
          ? "bg-gray-800" 
          : "bg-white"
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-xl border ${
              theme === "dark" 
                ? "bg-gray-700 border-gray-600 focus:border-blue-500" 
                : "bg-gray-50 border-gray-200 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-xl border ${
              theme === "dark" 
                ? "bg-gray-700 border-gray-600 focus:border-blue-500" 
                : "bg-gray-50 border-gray-200 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`w-full px-4 py-3 rounded-xl border ${
              theme === "dark" 
                ? "bg-gray-700 border-gray-600 focus:border-blue-500" 
                : "bg-gray-50 border-gray-200 focus:border-blue-500"
            } focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none`}
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all flex items-center justify-center ${
            isSubmitting ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <i className="fa-solid fa-spinner fa-spin mr-2"></i>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </motion.div>
  );
}