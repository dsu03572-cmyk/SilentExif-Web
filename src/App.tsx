import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useTheme } from "@/hooks/useTheme";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";

export default function App() {
  const { theme } = useTheme();
  
  return (
    <div className={cn(`min-h-screen transition-colors duration-300 flex flex-col`, 
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    )}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<div className="max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">Silent Exif respects your privacy. This app processes all your photos locally on your device and does not upload any of your data to external servers.</p>
          <p className="mb-4">We do not collect, store, or share any personal information or photo content. All metadata modifications are performed entirely offline.</p>
          <p>By using Silent Exif, you agree to our privacy practices as outlined here.</p>
        </div>} />
      </Routes>
      <Toaster />
    </div>
  );
}
