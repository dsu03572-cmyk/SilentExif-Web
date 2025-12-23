import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { FeatureCard } from "@/components/FeatureCard";
import { ScreenshotSlider } from "@/components/ScreenshotSlider";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
    const {
        theme,
        toggleTheme
    } = useTheme();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const features = [{
        title: "Quick Actions",
        description: "Edit photo metadata with iOS Shortcuts integration for seamless workflow",
        icon: "bolt"
    }, {
        title: "Offline Processing",
        description: "All operations are performed locally on your device, no internet required",
        icon: "wifi-slash"
    }, {
        title: "Batch Modification",
        description: "Process multiple photos at once to save time and effort",
        icon: "batch"
    }];

    return (
        <div className="flex flex-col min-h-screen">
            {}
            <motion.header
                initial={{
                    opacity: 0,
                    y: -20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.5
                }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md` : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">
                                <i className="fa-solid fa-camera text-blue-500"></i>
                            </span>
                            <h1
                                className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Silent Exif
                                                                              </h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <></>
                            <a
                                href="#features"
                                className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.header>
            <main className="flex-grow pt-24 flex flex-col">
                {}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -50
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2
                            }}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Take Control of Your{" "}
                                <span
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Photo Metadata
                                                                                        </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">Silent Exif helps you modify or delete sensitive metadata from your iOS photos quickly and securely,
                                                                                giving you complete privacy control over your images.
                                                                              </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a
                                    href="#download"
                                    className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors text-center">Download on the App Store
                                                                                        </a>
                                <a
                                    href="#screenshots"
                                    className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-center">See Features
                                                                                        </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4
                            }}
                            className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                            <img
                                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=iPhone%20screen%20displaying%20a%20photo%20metadata%20editor%20app%20interface%20with%20clean%20design&sign=52f981c2576edd86a56af8ac5b7e7906"
                                alt="Silent Exif App Preview"
                                className="relative z-10 rounded-3xl shadow-xl w-full object-cover" />
                        </motion.div>
                    </div>
                </section>
                {}
                <section
                    id="features"
                    className={`py-16 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}
                            className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Silent Exif?</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Designed specifically for iOS users who value their privacy and want a simple, efficient way to manage photo metadata.
                                                                              </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                delay={index * 0.2} />)}
                        </div>
                    </div>
                </section>
                {}
                <section id="screenshots" className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}
                            className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">See Silent Exif in Action</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">A powerful and intuitive interface that makes metadata management a breeze.
                                                                              </p>
                        </motion.div>
                        <ScreenshotSlider />
                    </div>
                </section>
                {}
                <section
                    id="download"
                    className={`py-20 ${theme === "dark" ? "bg-gray-800/50" : "bg-blue-50"}`}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.6
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Privacy?</h2>
                            <p
                                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Download Silent Exif today and take control of your photo metadata. Your privacy matters.
                                                                              </p>
                            <a
                                href="#"
                                className="inline-flex items-center px-8 py-4 rounded-full bg-blue-500 text-white font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                                <i className="fa-brands fa-apple text-2xl mr-3"></i>Download on the App Store
                                                                              </a>
                        </motion.div>
                    </div>
                </section>
                {}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.6
                                }}
                                viewport={{
                                    once: true
                                }}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Have questions about Silent Exif? We'd love to hear from you.
                                                                                        </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div
                                            className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                                            <i className="fa-solid fa-envelope text-blue-500"></i>
                                        </div>
                                        <span>support@silentexif.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div
                                            className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                                            <i className="fa-brands fa-twitter text-blue-500"></i>
                                        </div>
                                        <span>@SilentExifApp</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    duration: 0.6
                                }}
                                viewport={{
                                    once: true
                                }}>
                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
             {}
            <footer className={`py-12 ${theme === "dark" ? "bg-gray-900" : "bg-white"} border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-2"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-2xl">
                                    <i className="fa-solid fa-camera text-blue-500"></i>
                                </span>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Silent Exif</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                                Take control of your photo metadata with Silent Exif. Protect your privacy by easily modifying or removing sensitive information from your iOS photos.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}>
                                    <i className="fa-brands fa-twitter text-blue-500"></i>
                                </a>
                                <a href="#" className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}>
                                    <i className="fa-brands fa-facebook text-blue-600"></i>
                                </a>
                                <a href="#" className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}>
                                    <i className="fa-brands fa-instagram text-pink-500"></i>
                                </a>
                                <a href="#" className={`w-10 h-10 rounded-full ${theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} flex items-center justify-center transition-colors`}>
                                    <i className="fa-brands fa-github text-gray-700 dark:text-gray-300"></i>
                                </a>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Features</a></li>
                                <li><a href="#screenshots" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Screenshots</a></li>
                                <li><a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Download</a></li>
                                <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-semibold text-lg mb-4">Contact</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fa-solid fa-envelope text-blue-500 mt-1 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">support@silentexif.com</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fa-brands fa-twitter text-blue-500 mt-1 mr-3"></i>
                                    <span className="text-gray-600 dark:text-gray-300">@SilentExifApp</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            © {new Date().getFullYear()} Silent Exif. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link to="/privacy" className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <a href="#" className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}