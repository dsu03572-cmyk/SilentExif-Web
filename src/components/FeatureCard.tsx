import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

export function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  const { theme } = useTheme();
  
  // Map icon names to Font Awesome classes
  const iconMap: Record<string, string> = {
    "bolt": "fa-bolt",
    "wifi-slash": "fa-wifi-slash",
    "batch": "fa-layer-group"
  };
  
  const iconClass = iconMap[icon] || "fa-check";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`p-6 rounded-2xl ${
        theme === "dark" 
          ? "bg-gray-800 hover:bg-gray-750" 
          : "bg-white hover:bg-gray-50"
      } shadow-lg hover:shadow-xl transition-all group`}
    >
      <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white`}>
        <i className={`fa-solid ${iconClass} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"></div>
    </motion.div>
  );
}