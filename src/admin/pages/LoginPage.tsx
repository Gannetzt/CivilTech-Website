import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { api } from '../../services/api';
import { Lock, Mail, AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import logo from 'figma:asset/59663358e291026026b733e05a456c1f287e3e58.png';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@civiltech.in');
  const [password, setPassword] = useState('civiltech2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await api.login(email, password);
      login(response.token);
      navigate('/admin/dashboard');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-900 to-blue-700 -skew-y-3 origin-top-left -translate-y-20 z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm mb-6">
            <img src={logo} alt="Civiltech Logo" className="h-12 w-auto" />
          </div>
          <h2 className="text-center text-3xl font-extrabold text-white sm:text-gray-900">
            Internal CMS Access
          </h2>
          <p className="mt-2 text-center text-sm text-blue-100 sm:text-gray-600 max-w-xs mx-auto">
            Authorized employee portal for project and content management.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-10 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-gray-100 mx-4 sm:mx-0">
          
          {error && (
            <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-md flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="shrink-0 mt-0.5" size={18} />
              <span className="text-sm font-semibold">{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                User Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm bg-gray-50 transition-all placeholder:text-gray-300"
                  placeholder="name@civiltech.in"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Access Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm bg-gray-50 transition-all placeholder:text-gray-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-900/10 text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Verifying...
                  </>
                ) : (
                  'Secure Login'
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-8 border-t border-gray-100 pt-6">
            <a 
              href="/" 
              className="group flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-blue-900 transition-colors font-medium"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Return to Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
