import React from 'react';
import { Github, Linkedin, Mail, Sword, Shield, Target } from 'lucide-react';

function Home() {
  return (
    <>
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden titan-bg">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-8 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
              Hi, I'm <span className="text-red-500">Satya</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 font-semibold tracking-wide">
              Student at GGU Kalvium | Aspiring Developer | Titan Shifter
            </p>
            <div className="flex justify-center gap-8">
              <a href="#" className="text-red-500 hover:text-red-400 transition-all transform hover:scale-110">
                <Github size={32} className="hover-titan" />
              </a>
              <a href="#" className="text-red-500 hover:text-red-400 transition-all transform hover:scale-110">
                <Linkedin size={32} className="hover-titan" />
              </a>
              <a href="mailto:your.email@example.com" className="text-red-500 hover:text-red-400 transition-all transform hover:scale-110">
                <Mail size={32} className="hover-titan" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            Titan Abilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/80 p-8 rounded-lg text-center hover-titan backdrop-blur-sm border border-red-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sword size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Warrior</h3>
              <p className="text-gray-300">Conquering complex challenges with unwavering determination and tactical precision.</p>
            </div>
            <div className="bg-gray-800/80 p-8 rounded-lg text-center hover-titan backdrop-blur-sm border border-red-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Defender</h3>
              <p className="text-gray-300">Protecting code integrity with an impenetrable shield of best practices.</p>
            </div>
            <div className="bg-gray-800/80 p-8 rounded-lg text-center hover-titan backdrop-blur-sm border border-red-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Strategist</h3>
              <p className="text-gray-300">Orchestrating victory through calculated planning and strategic execution.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578165219176-ece04edbd053?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      </section>
    </>
  );
}

export default Home;