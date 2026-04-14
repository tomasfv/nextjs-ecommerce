import { Code2, Cpu, Globe, Layers, Rocket, ShieldCheck, User } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-black">
          HARDLINE BIKES
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          Engineering the ultimate riding experience
        </p>
      </section>

      {/* Project Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">
            <Rocket size={14} /> The Project
          </div>
          <h2 className="text-3xl font-bold text-black italic">A modern frontier for cyclism.</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
            <p className="text-sm text-amber-800 font-medium">
              <span className="font-bold">Disclaimer:</span> This is a personal portfolio project designed to demonstrate advanced frontend engineering skills. No actual products are sold, and all transactions are in test mode.
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Hardline Bikes is more than just an e-commerce platform; it's a high-performance digital storefront built to match the precision of the bikes it sells. 
            Designed for riders who demand excellence, the platform focuses on speed, reliability, and a seamless user experience from browsing to checkout.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-gray-100 p-2 rounded-lg">
                <ShieldCheck size={18} className="text-black" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Secure Payments</h4>
                <p className="text-xs text-gray-500">Stripe Integration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-gray-100 p-2 rounded-lg">
                <Cpu size={18} className="text-black" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Modern Stack</h4>
                <p className="text-xs text-gray-500">Next.js & React 19</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-2xl group">
          <Image
            src="/img1.jpg"
            alt="Product showcase"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-1">E-Commerce Architecture</p>
            <h3 className="text-2xl font-bold leading-tight">Built for Performance</h3>
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll/Marquee feel */}
      <section className="py-12 border-y border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 font-black text-xl italic"><Layers className="w-6 h-6" /> NEXT.JS</div>
        <div className="flex items-center gap-2 font-black text-xl italic"><Code2 className="w-6 h-6" /> TYPESCRIPT</div>
        <div className="flex items-center gap-2 font-black text-xl italic"><Globe className="w-6 h-6" /> TAILWIND CSS</div>
        <div className="flex items-center gap-2 font-black text-xl italic"><Layers className="w-6 h-6" /> ZUSTAND</div>
      </section>

      {/* Developer Profile */}
      <section className="bg-black text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          <div className="space-y-6">
            <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/10 p-1">
              <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center">
                 <User size={80} className="text-white/20" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Tomás Fernández Valdés</h3>
              <p className="text-gray-400 font-medium">Frontend Software Engineer</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-white">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> English C1 Advanced
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Meet the Architect</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Frontend Software Engineer with extensive experience developing scalable web and desktop applications. 
              My expertise lies in building maintainable frontend architectures with a strong focus on performance, usability, and clean code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Having worked across international agile teams on production applications, Electron-based desktop systems, and SaaS platforms, 
              I bring a disciplined approach to user interface development and REST API integration using 
              <span className="text-white font-semibold"> React, TypeScript, Next.js, </span> and 
              <span className="text-white font-semibold"> Node.js.</span>
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Electron', 'Performance Opt.'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:bg-white/10 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="text-center pt-16 border-t border-gray-100">
        <p className="text-gray-400 italic">"The science of engineering. The art of the ride."</p>
      </footer>
    </div>
  );
}