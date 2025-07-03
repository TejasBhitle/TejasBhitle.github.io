"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedin, 
  faGithub, 
  faInstagram, 
  faFacebook 
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import PhotographyImage from "@/components/PhotographyImage";
import PhotographyGrid from "@/components/PhotographyGrid";
import ImagePopup from "@/components/ImagePopup";
import TypewriterText from "@/components/TypewriterText";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressBar from "@/components/ProgressBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ThemeToggle from "@/components/ThemeToggle";
import CursorTrail from "@/components/CursorTrail";
import FloatingActionButton from "@/components/FloatingActionButton";
import Toast from "@/components/Toast";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";
import LoadingScreen from "@/components/LoadingScreen";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

// Import JSON data directly
import experienceData from "../../public/experience.json";
import projectsData from "../../public/projects.json";
import photographyData from "../../public/photography.json";
import introData from "../../public/intro.json";

export default function Home() {
  const [activeTab, setActiveTab] = useState("developer");
  const [loading, setLoading] = useState(false); // Set to false since data is imported
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [toast, setToast] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Get the appropriate image based on active tab
  const getProfileImage = () => {
    if (!introData?.images) return "/profile_pic.jpeg";
    return activeTab === "developer" ? introData.images.developer : introData.images.photographer;
  };

  // Get Font Awesome icon component
  const getFontAwesomeIcon = (iconClass) => {
    const iconMap = {
      'fab fa-linkedin': faLinkedin,
      'fab fa-github': faGithub,
      'fab fa-instagram': faInstagram,
      'fab fa-facebook': faFacebook,
      'fas fa-code': faCode,
      'fas fa-envelope': faEnvelope
    };
    return iconMap[iconClass] || faEnvelope;
  };

  // Handle image click for popup
  const handleImageClick = (image) => {
    setSelectedPhoto(image);
    setIsPopupOpen(true);
  };

  // Handle popup close
  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setSelectedPhoto(null);
  };

  // Handle loading screen complete
  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
    setToast({ message: `Switched to ${!isDarkTheme ? 'dark' : 'light'} mode`, type: 'info' });
  };

  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle toast close
  const handleToastClose = () => {
    setToast(null);
  };

  return (
    <>
      {/* Loading Screen */}
      {showLoadingScreen && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      <div className={`min-h-screen transition-all duration-700 ease-in-out ${
        activeTab === "developer" 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" 
          : "bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 text-gray-900"
      }`}>
        <ProgressBar />
        <ParticleBackground activeTab={activeTab} />
        <CursorTrail />
        
        {/* Keyboard Shortcuts */}
        <KeyboardShortcuts 
          onTabChange={setActiveTab}
          activeTab={activeTab}
          onScrollToTop={handleScrollToTop}
          onToggleTheme={handleThemeToggle}
        />
        
        {/* Performance Optimizer */}
        <PerformanceOptimizer />
      {/* Intro Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Photo with enhanced styling */}
          {loading ? (
            <LoadingSkeleton type="profile" />
          ) : (
            <div className="mb-12">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src={getProfileImage()}
                  alt="Tejas Bhitle - Software Developer and Photographer"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 ring-4 ring-white/20 rounded-full"></div>
              </div>
            </div>
          )}
          
          {/* Enhanced Intro Text */}
          <div className="mb-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse font-display text-balance">
              {introData?.title || "Hi, I'm Tejas"}
            </h1>
            
            {/* Dynamic Role Section with enhanced styling */}
            <div className="text-2xl md:text-3xl mb-8 font-medium font-display">
              <span className="text-gray-300 dark:text-gray-600">I am a </span>
              {introData?.dynamicRoles && (
                <span className="inline-block">
                  <TypewriterText texts={introData.dynamicRoles} />
                </span>
              )}
            </div>
            
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl opacity-90 font-light text-pretty">
              {introData?.introText || "A passionate Software Developer who loves crafting scalable backend systems and a Photographer capturing stories through the lens."}
            </p>
          </div>

          {/* Enhanced Social Links */}
          {introData?.socialLinks && (
            <div className="flex justify-center gap-3 md:gap-6 mb-10 overflow-x-auto pb-2">
              {introData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-base md:text-xl hover:bg-white/20 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl flex-shrink-0"
                  title={link.name}
                >
                  <FontAwesomeIcon 
                    icon={getFontAwesomeIcon(link.icon)} 
                    className="text-sm md:text-lg"
                  />
                </a>
              ))}
            </div>
          )}

          {/* Enhanced Resume/Instagram Button */}
          {introData?.resume && (
            <div className="mb-10">
              {activeTab === "photographer" && introData?.socialLinks ? (
                // Instagram button for photographer tab
                <a
                  href={introData.socialLinks.find(link => link.icon === 'fab fa-instagram')?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 hover:from-pink-700 hover:via-purple-700 hover:to-pink-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                >
                  <FontAwesomeIcon 
                    icon={faInstagram} 
                    className="mr-3 text-xl"
                  />
                  clicked.by.tejas
                </a>
              ) : (
                // Resume button for developer tab
                <a
                  href={introData.resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                >
                  {introData.resume.text}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Tabbed Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full mx-auto"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 mb-16 shadow-2xl h-14 mx-auto">
            <TabsTrigger 
              value="developer"
              className="rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:text-white hover:scale-105"
            >
              💻 Work Mode
            </TabsTrigger>
            <TabsTrigger 
              value="photographer"
              className="rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-gray-300 data-[state=inactive]:hover:text-white hover:scale-105"
            >
              📸 Creative Mode
            </TabsTrigger>
          </TabsList>

          <TabsContent value="developer" className="space-y-20 animate-in fade-in-50 duration-700">
            {/* Enhanced Experience Section */}
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-display text-balance">
                  Professional Journey
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-300 font-light text-pretty">
                  Experienced in building scalable backend systems with Spring Boot and Python. Passionate about automation and designing efficient architectures.
                </p>
              </div>
              
              {/* Experience Cards */}
              <div className="space-y-8 max-w-6xl mx-auto">
                {loading ? (
                  <LoadingSkeleton type="experience" count={3} />
                ) : (
                  experienceData.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                  ))
                )}
              </div>
            </div>

            {/* Enhanced Projects Section */}
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-display text-balance">
                  Featured Projects
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-300 font-light text-pretty">
                  A collection of projects showcasing my skills in full-stack development, mobile apps, and innovative solutions.
                </p>
              </div>
              
              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {loading ? (
                  <LoadingSkeleton type="project" count={6} />
                ) : (
                  projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="photographer" className="space-y-12 animate-in fade-in-50 duration-700">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-display text-balance">
                Photography Showcase
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-700 font-light text-pretty">
                I capture street, landscape, and architectural photography. Each image tells a story, carefully framed through my lens.
              </p>
            </div>
            
            {/* Enhanced Photography Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <LoadingSkeleton type="photography" count={6} />
              </div>
            ) : (
              <PhotographyGrid 
                photos={photographyData} 
                onImageClick={handleImageClick}
              />
            )}

            {/* Enhanced Instagram Call-to-Action */}
            {introData?.socialLinks && (
              <div className="mt-20 text-center">
                <div className="max-w-3xl mx-auto p-12 bg-gradient-to-r from-stone-50 via-white to-stone-100 rounded-3xl border border-stone-200 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-6">
                    <FontAwesomeIcon 
                      icon={faInstagram} 
                      className="text-4xl text-pink-600 mr-4"
                    />
                    <h3 className="text-3xl font-bold text-gray-800">
                      Explore More Photography
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xl mb-8 leading-relaxed font-light">
                    Discover my complete collection of street photography, landscapes, and architectural captures on Instagram.
                  </p>
                  <a
                    href={introData.socialLinks.find(link => link.icon === 'fab fa-instagram')?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 hover:from-pink-700 hover:via-purple-700 hover:to-pink-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
                  >
                    <FontAwesomeIcon 
                      icon={faInstagram} 
                      className="mr-3 text-xl"
                    />
                    Follow @clicked.by.tejas
                  </a>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>

      {/* Contact Section */}
      <ContactSection socialLinks={introData?.socialLinks} activeTab={activeTab} />

      {/* Footer */}
      <Footer activeTab={activeTab} />

      {/* Image Popup */}
      <ImagePopup 
        image={selectedPhoto}
        onClose={handlePopupClose}
      />
      
      {/* Scroll to Top Button */}
      <ScrollToTop activeTab={activeTab} />
      
      {/* Toast Notifications */}
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
        />
      )}
    </div>
  </>
  );
}
