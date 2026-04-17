import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, FolderKanban, PlusCircle, LogOut, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/59663358e291026026b733e05a456c1f287e3e58.png';

export const AdminLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Project Portfolio', path: '/admin/projects', icon: <FolderKanban size={18} /> },
    { name: 'Register New Project', path: '/admin/add-project', icon: <PlusCircle size={18} /> },
  ];

  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    if (path === 'dashboard') return 'System Dashboard';
    if (path === 'projects') return 'Project Inventory';
    if (path === 'add-project') return 'Add New Project';
    if (location.pathname.includes('/edit-project')) return 'Modify Project Details';
    return 'CMS Administration';
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row text-slate-900">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white border-r border-slate-200 flex flex-col md:min-h-screen shadow-sm z-30">
        <div className="h-20 flex items-center px-8 border-b border-slate-100">
          <Link to="/admin/dashboard" className="flex items-center gap-3 group">
            <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
              <img src={logo} alt="Civiltech Logo" className="h-7 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-blue-900 tracking-tight leading-none uppercase">Civiltech</span>
              <span className="text-[10px] font-bold text-green-600 tracking-[0.2em] uppercase mt-0.5">Admin CMS</span>
            </div>
          </Link>
        </div>
        
        <div className="px-4 py-6">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Main Navigation</p>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== '/admin/dashboard' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/20 font-bold' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-blue-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`${isActive ? 'text-green-400' : 'text-slate-400 group-hover:text-blue-900'}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm tracking-tight">{item.name}</span>
                  </div>
                  {isActive && <ChevronRight size={14} className="text-white/50" />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto px-4 py-8 border-t border-slate-100">
          <div className="bg-slate-50 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">CT</div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-slate-900 truncate">Administrator</span>
                <span className="text-[10px] text-slate-500 truncate">admin@civiltech.in</span>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 font-bold text-sm"
          >
            <LogOut size={18} />
            Terminte Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-20 sticky top-0">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
              <span>Admin</span>
              <ChevronRight size={10} />
              <span className="text-blue-900">{location.pathname.split('/').pop()?.replace(/-/g, ' ')}</span>
            </div>
            <h1 className="text-xl font-black text-slate-900 tracking-tight">
              {getPageTitle()}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-xs font-bold text-slate-900">Civiltech Construction</span>
              <span className="text-[10px] font-medium text-green-600 uppercase tracking-tighter">System Online</span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shadow-sm">
               <img src={logo} alt="" className="w-full h-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-help" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 relative">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-50/50 rounded-full blur-[100px] -z-10"></div>
          
          <div className="relative z-10">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
