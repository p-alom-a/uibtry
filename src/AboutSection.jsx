import React, { useEffect, useRef } from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

// Styles CSS intégrés
const styles = `
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .fade-in-up.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);
  const valuesRef = useRef([]);
  const valuesGridRef = useRef(null);
  const hasAnimatedMain = useRef(false);
  const hasAnimatedValues = useRef(false);

  const values = [
    {
      title: "Professionnalisme",
      description: "Engagement dans la réussite des parcours et la qualité des formations"
    },
    {
      title: "Inclusion",
      description: "Accessibilité pour tous et accompagnement personnalisé"
    },
    {
      title: "Certification",
      description: "Titres RNCP et formations orientées compétences métier"
    },
    {
      title: "Innovation",
      description: "Pédagogies actives et outils numériques adaptés"
    }
  ];

  useEffect(() => {
    // Observer pour la section principale (titre et cartes)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const mainObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimatedMain.current) {
          hasAnimatedMain.current = true;
          animateMainElements();
        }
      });
    }, observerOptions);

    // Observer pour la section des valeurs
    const valuesObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimatedValues.current) {
          hasAnimatedValues.current = true;
          animateValues();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      mainObserver.observe(sectionRef.current);
    }

    if (valuesGridRef.current) {
      valuesObserver.observe(valuesGridRef.current);
    }

    const animateMainElements = () => {
      // Title animation
      if (titleRef.current) {
        titleRef.current.style.opacity = '0';
        titleRef.current.style.transform = 'translateY(30px)';
        titleRef.current.animate([
          { opacity: 0, transform: 'translateY(30px)' },
          { opacity: 1, transform: 'translateY(0px)' }
        ], {
          duration: 800,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          fill: 'forwards'
        });
      }

      // Description animation
      if (descriptionRef.current) {
        descriptionRef.current.style.opacity = '0';
        descriptionRef.current.style.transform = 'translateY(20px)';
        setTimeout(() => {
          descriptionRef.current.animate([
            { opacity: 0, transform: 'translateY(20px)' },
            { opacity: 1, transform: 'translateY(0px)' }
          ], {
            duration: 700,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards'
          });
        }, 200);
      }

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.style.opacity = '0';
          card.style.transform = 'translateY(40px)';
          setTimeout(() => {
            card.animate([
              { opacity: 0, transform: 'translateY(40px)' },
              { opacity: 1, transform: 'translateY(0px)' }
            ], {
              duration: 600,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              fill: 'forwards'
            });
          }, 600 + (index * 150));
        }
      });
    };

    const animateValues = () => {
      // Values animation - une par une avec classes CSS
      valuesRef.current.forEach((value, index) => {
        if (value) {
          setTimeout(() => {
            if (value) {
              value.classList.add('animate');
            }
          }, index * 200); // Décalage de 200ms entre chaque valeur
        }
      });
    };

    return () => {
      if (sectionRef.current) {
        mainObserver.unobserve(sectionRef.current);
      }
      if (valuesGridRef.current) {
        valuesObserver.unobserve(valuesGridRef.current);
      }
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 
            ref={titleRef}
            className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight"
          >
            Votre partenaire formation professionnelle
          </h2>
          <p 
            ref={descriptionRef}
            className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Nous accompagnons jeunes, adultes et entreprises vers la maîtrise des compétences 
            et l'employabilité durable grâce à des parcours personnalisés et certifiants.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div 
            ref={el => cardsRef.current[0] = el}
            className="bg-gray-50 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center mb-8 mx-auto">
              <Target className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Favoriser la montée en compétence et la professionnalisation 
              par des formations adaptées aux besoins individuels et des entreprises.
            </p>
          </div>

          <div 
            ref={el => cardsRef.current[1] = el}
            className="bg-gray-50 rounded-3xl p-12 text-center"
          >
            <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center mb-8 mx-auto">
              <Lightbulb className="w-9 h-9 text-white" />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Notre Vision</h3>
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              Être l'acteur référent de la formation professionnelle en proposant 
              des parcours innovants et une démarche qualité reconnue.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div ref={valuesGridRef} className="grid md:grid-cols-4 gap-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              ref={el => valuesRef.current[index] = el}
              className="text-center fade-in-up"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                {index === 0 && <Target className="w-7 h-7 text-blue-900" />}
                {index === 1 && <Users className="w-7 h-7 text-blue-900" />}
                {index === 2 && <Award className="w-7 h-7 text-blue-900" />}
                {index === 3 && <Lightbulb className="w-7 h-7 text-blue-900" />}
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
          </section>
    </>
  );
};

export default AboutSection;