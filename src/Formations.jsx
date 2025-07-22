import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';

const styles = `
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .fade-in-up.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }
  
  .accordion-content.open {
    max-height: 200px;
  }
`;

const FormationsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const desktopCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);
  const hasAnimated = useRef(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const formations = [
    {
      title: "Prévention des risques",
      description: "Formations en sécurité, gestes et postures, premiers secours pour assurer la protection au travail.",
      image: "./preventionrisques.png",
      tags: ["SST", "Gestes & Postures"]
    },
    {
      title: "Bilan de compétences et VAE",
      description: "Accompagnement personnalisé pour valoriser votre expérience et valider vos acquis professionnels.",
      image: "./bilanC_Vae.png",
      tags: ["Reconversion", "Évolution pro"]
    },
    {
      title: "Formation continue",
      description: "Actions de perfectionnement professionnel pour développer vos compétences tout au long de votre carrière.",
      image: "./formationContinue.png",
      tags: ["Management", "Bureautique"]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateElements();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const animateElements = () => {
      if (titleRef.current) {
        setTimeout(() => titleRef.current?.classList.add('animate'), 100);
      }
      
      // Animate desktop cards
      desktopCardsRef.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => card.classList.add('animate'), 300 + (index * 150));
        }
      });
      
      // Animate mobile cards
      mobileCardsRef.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => card.classList.add('animate'), 300 + (index * 150));
        }
      });
    };

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section ref={sectionRef} className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-12 lg:p-16">
            
            <div ref={titleRef} className="fade-in-up text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Nos <span className="text-blue-900 font-normal">formations</span>
              </h2>
            </div>

            {/* Desktop Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {formations.map((formation, index) => (
                <div 
                  key={`desktop-${index}`}
                  ref={el => desktopCardsRef.current[index] = el}
                  className="fade-in-up bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-28 h-28 flex items-center justify-center mb-6">
                    <img 
                      src={formation.image} 
                      alt={`${formation.title} icon`}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {formation.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm flex-grow">
                    {formation.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {formation.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <button className="group inline-flex items-center text-blue-900 font-medium hover:text-blue-800 transition-colors">
                      En voir plus
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className="lg:hidden space-y-4 max-w-4xl mx-auto">
              {formations.map((formation, index) => (
                <div 
                  key={`mobile-${index}`}
                  ref={el => mobileCardsRef.current[index] = el}
                  className="fade-in-up bg-blue-50 rounded-2xl overflow-hidden"
                >
                  {/* Accordion Header */}
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={formation.image} 
                          alt={`${formation.title} icon`}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {formation.title}
                      </h3>
                    </div>
                    {openAccordion === index ? (
                      <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {/* Accordion Content */}
                  <div className={`accordion-content ${openAccordion === index ? 'open' : ''}`}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">
                        {formation.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {formation.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="group inline-flex items-center text-blue-900 font-medium hover:text-blue-800 transition-colors">
                        En voir plus
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              <div className="text-right">
                <h3 className="text-2xl font-medium text-gray-900 leading-tight">
                  L'ensemble de nos formations sont accessibles aux personnes en situation d'handicap.
                </h3>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  Afin de garantir une formation de qualité, nous vous invitons à nous informer en amont. 
                  Nous vous rappelons également que pour les formations dans vos locaux, l'accessibilité de 
                  ceux-ci reste à votre charge.
                </p>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                  Consulter notre règlement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationsSection;