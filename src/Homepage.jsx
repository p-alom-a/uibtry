import React from 'react';

export default function BTRYHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden font-sans">
      <div className="flex min-h-screen">
        {/* Left Blue Section - Enhanced */}
        <div className="w-2/5 relative overflow-hidden" style={{backgroundColor: '#002768'}}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center px-8 h-full">
            {/* Logo avec animation */}
            <div className="mb-12 transform transition-all duration-700 hover:scale-105 text-center">
              <div className="bg-white p-6 rounded-2xl inline-block shadow-xl">
                <img src="./logobtry.jpg" alt="BTRY Logo" className="h-40" />
              </div>
            </div>
            
            {/* Title and Subtitle avec animations */}
            <div className="text-center space-y-6">
              <h1 className="text-xl lg:text-2xl font-light text-white leading-tight tracking-wide animate-fade-in">
                L'exigence au cœur de notre <span className="font-medium bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">expertise.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Right White Section - Enhanced */}
        <div className="w-3/5 bg-gray-100 flex flex-col justify-center px-12 relative">
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-100 rounded-full opacity-20 blur-2xl"></div>
          
          {/* Services Cards - Redesigned */}
          <div className="relative z-10 flex flex-col gap-6 max-w-2xl mx-auto">
            {/* Solution Card */}
            <div className="group bg-white rounded-3xl p-8 border border-gray-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                {/* Icon container */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img src="./btrySolution_logo.png" alt="Solutions" className="w-12 h-12" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <img src="./logotypo-solution.jpg" alt="Solutions" className="h-16" />
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light text-sm mb-4 max-w-sm">
                    btry solution est un bureau d'études spécialisé dans la sécurité incendie, l'exploitation et l'optimisation des bâtiments.
                  </p>
                  <a
                    href="https://btryrefacto.vercel.app/"
                    className="inline-flex items-center gap-2 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{backgroundColor: 'var(--color-blue-900)'}}
                  >
                    Découvrir nos solutions
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formation Card */}
            <div className="group bg-white rounded-3xl p-8 border border-gray-200/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-6">
                {/* Icon container */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img src="./btryFormation.png" alt="Formation" className="w-12 h-12" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <img src="./logotypo-formation.jpg" alt="Formation" className="h-16" />
                  </div>
                  <p className="text-gray-600 leading-relaxed font-light text-sm mb-4 max-w-sm">
                    Programmes de formation professionnelle et développement des compétences métier.
                  </p>
                  <a
                    href="https://btryrefacto.vercel.app/formation/"
                    className="inline-flex items-center gap-2 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{backgroundColor: 'var(--color-blue-900)'}}
                  >
                    Explorer nos formations
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}