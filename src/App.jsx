import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Monitor, Smartphone, Globe, ChevronRight, Maximize2, Minimize2, LayoutGrid, Layers } from 'lucide-react';

// --- MOCK DATA (Replace URLs with your actual hosted projects) ---
// NOTE: Many big sites (Google, GitHub) block iframes via X-Frame-Options. 
// This works best with your own deployed Netlify/Vercel projects.
const PROJECTS = [
  {
    id: 1,
    title: "OTG Stats",
    description: "Real-time analytics and tracking platform.",
    url: "https://otgstats.com", 
    category: "Analytics",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 2,
    title: "Jeet.ing",
    description: "Web utility and interaction tool.",
    url: "https://jeet.ing", 
    category: "Tool",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 3,
    title: "Xeenon Space",
    description: "Immersive space-themed visual experience.",
    url: "https://xeenon.space/", 
    category: "Creative",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 4,
    title: "Parti Panels",
    description: "Interactive panel components and UI experiments.",
    url: "https://f7ashp0int.github.io/partipanels/", 
    category: "UI Kit",
    color: "from-emerald-400 to-teal-600"
  },
  {
    id: 5,
    title: "Marblex Frame",
    description: "Web3 integration framework display.",
    url: "https://f7ashp0int.github.io/marblex-frame", 
    category: "Web3",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 6,
    title: "Parti",
    description: "Social interaction and community platform.",
    url: "https://f7ashp0int.github.io/parti", 
    category: "Social",
    color: "from-slate-400 to-gray-600"
  },
  {
    id: 7,
    title: "P2E Calculator",
    description: "Economics calculator for Play-to-Earn gaming.",
    url: "https://p2ecalculator.site/", 
    category: "Tool",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 8,
    title: "Aspect Flow",
    description: "Fluid design and layout showcase.",
    url: "https://rjarivi.github.io/aspect-flow", 
    category: "Design",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 9,
    title: "Catstanbul",
    description: "A playful adventure in a feline world.",
    url: "https://rjarivi.github.io/catstanbul", 
    category: "Game",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 10,
    title: "Web3 Graveyard",
    description: "A memorial for sunsetted Web3 games.",
    url: "https://f7ashp0int.github.io/Web3-Games-Graveyard/", 
    category: "Archive",
    color: "from-teal-600 to-emerald-400"
  },
  {
    id: 11,
    title: "Gallaxia Frame",
    description: "Galactic visual framing tool.",
    url: "https://f7ashp0int.github.io/Gallaxia-Frame/", 
    category: "Creative",
    color: "from-red-500 to-orange-400"
  }
];

const App = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [viewMode, setViewMode] = useState('desktop'); // desktop, mobile, tablet
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handle closing via Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden relative">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-pink-900/10 rounded-full blur-[100px]" />
        
        {/* Grid Mesh Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className={`relative z-10 transition-all duration-500 ${activeProject ? 'scale-95 opacity-0 pointer-events-none' : 'opacity-100 scale-100'}`}>
        
        {/* Header */}
        <header className="p-8 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Layers size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">DevPort<span className="text-purple-400">.io</span></h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Interactive Portfolio</p>
            </div>
          </div>
          
          <a 
            href="#" 
            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 text-sm font-medium backdrop-blur-md"
          >
            Contact Me
          </a>
        </header>

        {/* Grid */}
        <main className="max-w-7xl mx-auto px-6 pb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              I build digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 animate-gradient-x">
                experiences.
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Select a project below to launch the live preview directly in this window without leaving the portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative cursor-pointer"
              >
                {/* Glass Card */}
                <div className="relative h-80 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:border-purple-500/30">
                  
                  {/* Inner Gradient/Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 bg-gradient-to-b from-transparent via-black/50 to-black/90">
                    <div className={`w-12 h-12 rounded-2xl mb-4 bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                      <Globe size={24} className="text-white" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1 block">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">{project.title}</h3>
                        <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300">{project.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Fake "Preview" visual behind glass */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* --- IMMERSIVE VIEWER OVERLAY --- */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex flex-col animate-in fade-in duration-300">
          
          {/* Viewer Background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          {/* Top Navigation Bar */}
          <div className="relative z-50 h-16 flex items-center justify-between px-6 border-b border-white/10 bg-black/40 backdrop-blur-md">
            
            {/* Left: Back & Info */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Close Preview"
              >
                <X size={20} />
              </button>
              <div className="h-6 w-px bg-white/10 hidden md:block" />
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-bold text-white">{activeProject.title}</span>
                <a href={activeProject.url} target="_blank" rel="noreferrer" className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1">
                  {activeProject.url} <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Center: Device Toggles */}
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5">
              <button 
                onClick={() => setViewMode('desktop')}
                className={`p-2 rounded-full transition-all ${viewMode === 'desktop' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Monitor size={16} />
              </button>
              <button 
                onClick={() => setViewMode('tablet')}
                className={`p-2 rounded-full transition-all ${viewMode === 'tablet' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <LayoutGrid size={16} />
              </button>
              <button 
                onClick={() => setViewMode('mobile')}
                className={`p-2 rounded-full transition-all ${viewMode === 'mobile' ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Smartphone size={16} />
              </button>
            </div>

            {/* Right: Sidebar Toggle */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-lg transition-colors ${isSidebarOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'}`}
            >
              {isSidebarOpen ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
            </button>
          </div>

          {/* Main Viewer Area */}
          <div className="flex-1 relative flex overflow-hidden">
            
            {/* Sidebar Project Switcher */}
            <div className={`
              bg-black/20 border-r border-white/10 backdrop-blur-md flex flex-col
              transition-all duration-300 ease-in-out absolute md:relative z-40 h-full
              ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full md:translate-x-0 md:w-0 opacity-0'}
            `}>
              <div className="p-4 border-b border-white/5">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Projects</h3>
              </div>
              <div className="overflow-y-auto p-2 space-y-2 flex-1">
                {PROJECTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProject(p)}
                    className={`
                      w-full text-left p-3 rounded-xl transition-all flex items-center gap-3
                      ${activeProject.id === p.id 
                        ? 'bg-white/10 border border-white/10 shadow-lg shadow-purple-900/20' 
                        : 'hover:bg-white/5 border border-transparent hover:border-white/5 opacity-60 hover:opacity-100'}
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center text-[10px] font-bold shrink-0`}>
                      {p.title.charAt(0)}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium truncate text-white">{p.title}</p>
                      <p className="text-xs text-gray-400 truncate">{p.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 relative bg-white/5 flex items-center justify-center p-4 md:p-8" onClick={() => window.innerWidth < 768 && setIsSidebarOpen(false)}>
              
              <div className={`
                relative bg-white transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden
                ${viewMode === 'desktop' ? 'w-full h-full rounded-lg' : ''}
                ${viewMode === 'tablet' ? 'w-[768px] h-[1024px] max-h-full rounded-[2rem] border-[12px] border-gray-800' : ''}
                ${viewMode === 'mobile' ? 'w-[375px] h-[812px] max-h-full rounded-[3rem] border-[14px] border-gray-800' : ''}
              `}>
                {/* Loading Spinner overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white -z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>

                {/* The Actual Website */}
                <iframe
                  src={activeProject.url}
                  title={activeProject.title}
                  className="w-full h-full bg-white"
                  frameBorder="0"
                  allowFullScreen
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups" // Sandbox for security
                />
              </div>

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default App;