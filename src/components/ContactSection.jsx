"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLinkedin, 
  faGithub, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactSection = ({ socialLinks, activeTab = "developer" }) => {
  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "tejas.bhitle@gmail.com",
      href: "mailto:tejas.bhitle@gmail.com",
      color: "text-blue-400"
    },
    // {
    //   icon: faMapMarkerAlt,
    //   label: "Location",
    //   value: "San Francisco Bay Area, CA",
    //   color: "text-green-400"
    // },
    // {
    //   icon: faPhone,
    //   label: "Phone",
    //   value: "+1 (555) 123-4567",
    //   href: "tel:+15551234567",
    //   color: "text-purple-400"
    // }
  ];

  // Theme classes based on active tab
  const isDarkTheme = activeTab === "developer";
  
  const sectionClasses = isDarkTheme 
    ? "py-20 bg-gradient-to-br from-gray-900/50 via-gray-800/50 to-gray-900/50 backdrop-blur-sm"
    : "py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 backdrop-blur-sm";
    
  const headingClasses = isDarkTheme
    ? "text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-display text-balance"
    : "text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-display text-balance";
    
  const textClasses = isDarkTheme
    ? "text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-300 font-light text-pretty"
    : "text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-700 font-light text-pretty";

  return (
    <section className={sectionClasses}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={headingClasses}>
            Let's Connect
          </h2>
          <p className={textClasses}>
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology and photography.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="group bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-white/10 p-8 hover:bg-white/90 dark:hover:bg-white/10 hover:border-gray-300/50 dark:hover:border-white/20 transition-all duration-500 hover:scale-[1.02] shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-blue-100/80 dark:bg-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 ${info.color}`}>
                  <FontAwesomeIcon icon={info.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info.label}</h3>
                </div>
              </div>
              {info.href ? (
                <a 
                  href={info.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-300 text-lg"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 text-lg">{info.value}</p>
              )}
            </div>
          ))}
        </div> */}

        {socialLinks && (
          <div className="text-center">
            {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-display">
              Follow My Journey
            </h3> */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((link, index) => {
                const iconMap = {
                  'fab fa-linkedin': faLinkedin,
                  'fab fa-github': faGithub,
                  'fab fa-instagram': faInstagram
                };
                
                const icon = iconMap[link.icon];
                if (!icon) return null;

                const socialButtonClasses = isDarkTheme
                  ? "w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-2xl hover:bg-white/20 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
                  : "w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center text-2xl hover:bg-blue-100/80 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl text-gray-700";

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={socialButtonClasses}
                    title={link.name}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection; 