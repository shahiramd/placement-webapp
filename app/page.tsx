export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-[#fdfaf1] overflow-hidden font-sans text-slate-900">
      
      {/* 1. Left Sidebar (Slim & Black) */}
      <aside className="w-[220px] bg-[#1a1a1a] flex flex-col p-6 shrink-0 overflow-y-auto">
        <div className="w-full justify-between items-center inline-flex mb-10 px-2">
          <div className="text-2xl font-bold italic tracking-tighter text-[#FFFFFF]">intelly</div>
          <div className="w-6 h-6 text-[#FFFFFF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6H21M3 12H21M7 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="w-full flex-1 text-[#FFFFFF]">
          <h6 className="opacity-50 text-[10px] font-bold px-3 mb-6 tracking-[0.2em] uppercase">Menu</h6>
          <ul className="flex flex-col gap-4">
            {[
              { name: 'Dashboard', icon: '田' },
              { name: 'Vote', icon: '🗳️' },
              { name: 'Upload', icon: '📤' },
              { name: 'Packs', icon: '📦' },
              { name: 'Store', icon: '🛒' }
            ].map((item, idx) => (
              <li key={item.name}>
                <div className={`flex items-center gap-4 px-3 py-2 rounded-xl transition-all cursor-pointer ${idx === 0 ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* 2. Middle Main Area - Added px-[0.3cm] to prevent widgets from sticking to sidebars */}
      <main className="flex-1 flex flex-col py-8 px-[0.3cm] overflow-y-auto">
        
        {/* Header - Stays inside the new padding */}
        <header className="flex flex-col mb-10">
          <div className="relative w-full max-w-xl mb-8">
            <span className="absolute left-5 top-3.5 opacity-30 text-sm">🔍</span>
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="w-full bg-white border border-slate-200 rounded-2xl py-3.5 pl-14 pr-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-100 transition-all text-slate-900"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">Good morning, Team</h1>
            <p className="text-slate-500 mt-1 text-base italic">Ready to master Java & OS today?</p>
          </div>
        </header>

        {/* 3. The Widget Grid - Now perfectly centered with 0.3cm gaps all around */}
        <div className="grid grid-cols-3 gap-[0.3cm] content-start w-full">
          <div className="aspect-square bg-[#fce991]/90 rounded-[3rem] p-8 flex flex-col justify-between shadow-sm border border-black/5 min-w-0">
            <h3 className="text-xl font-bold text-slate-900">Java OOPS</h3>
            <div className="text-5xl font-black italic text-slate-900">85%</div>
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest text-slate-900">Polymorphism</p>
          </div>
          
          <div className="aspect-square bg-[#fbcfe8]/90 rounded-[3rem] p-8 flex flex-col justify-between shadow-sm border border-black/5 min-w-0">
            <h3 className="text-xl font-bold text-slate-900">DSA Summary</h3>
            <div className="w-full h-12 bg-white/40 rounded-2xl mt-4"></div>
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest text-slate-900">HashMaps</p>
          </div>

          <div className="aspect-square bg-[#dcfce7]/90 rounded-[3rem] p-8 flex flex-col justify-between shadow-sm border border-black/5 min-w-0">
            <h3 className="text-xl font-bold text-slate-900">OS Status</h3>
            <div className="flex items-end gap-2.5 h-16">
              <div className="w-3 bg-green-600 h-full rounded-full"></div>
              <div className="w-3 bg-green-400 h-10 rounded-full"></div>
              <div className="w-3 bg-green-500 h-14 rounded-full"></div>
            </div>
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest text-slate-900">Memory</p>
          </div>

          <div className="aspect-square bg-[#dbeafe]/90 rounded-[3rem] p-8 flex flex-col justify-between shadow-sm border border-black/5 min-w-0">
            <h3 className="text-xl font-bold text-slate-900">Sessions</h3>
            <div className="text-4xl font-black italic text-slate-900">03:45 h</div>
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest text-slate-900">Mock Practice</p>
          </div>
        </div>
      </main>

      {/* 3. Right Sidebar (Calendar) */}
      <aside className="w-[360px] bg-stone-50 border-l border-stone-200 flex flex-col shrink-0 p-8">
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm mb-10">
          <div className="flex items-center justify-between mb-8">
            <h5 className="font-bold text-lg text-slate-900">January 2026</h5>
            <div className="flex gap-1.5 text-indigo-600 font-bold cursor-pointer">← →</div>
          </div>
          <div className="grid grid-cols-7 gap-y-4 text-center text-[10px] font-black uppercase opacity-20 mb-4 tracking-widest">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d[0]}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 31}).map((_, i) => (
              <div key={i + 1} className={`aspect-square flex items-center justify-center text-xs font-bold rounded-2xl transition-all ${i + 1 === 15 ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-indigo-50 cursor-pointer text-slate-900'}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-slate-900 mb-6 px-2 underline decoration-indigo-200 underline-offset-8">Upcoming</h2>
        <div className="p-6 rounded-[2.5rem] bg-white border border-stone-100 shadow-sm">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">10:00 AM</p>
          <h6 className="text-base font-bold text-slate-900">Java Mock Interview</h6>
        </div>
      </aside>

    </div>
  );
}