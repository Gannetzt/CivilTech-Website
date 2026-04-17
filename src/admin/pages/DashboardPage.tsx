import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { api } from '../../services/api';
import { ProjectDetail } from '../../data/projects';
import { FolderKanban, TrendingUp, PlusCircle, Loader2 } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-primary w-8 h-8" />
      </div>
    );
  }

  const recentProjects = projects.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Projects</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">{projects.length}</h3>
            </div>
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <FolderKanban size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>Active system</span>
          </div>
        </div>
        
        {/* Add more stat cards as needed */}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Link 
          to="/admin/add-project" 
          className="bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
        >
          <PlusCircle size={20} />
          New Project
        </Link>
        <Link 
          to="/admin/projects" 
          className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          View All Projects
        </Link>
      </div>

      {/* Recent Projects Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Recent Projects</h2>
          <Link to="/admin/projects" className="text-sm text-primary hover:underline font-medium">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
                <th className="px-6 py-3 font-medium">Project Name</th>
                <th className="px-6 py-3 font-medium">Location</th>
                <th className="px-6 py-3 font-medium">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentProjects.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                    No projects found.
                  </td>
                </tr>
              ) : (
                recentProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {project.image && (
                          <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 shrink-0">
                            <img src={project.image} alt="" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <span className="font-medium text-gray-900 line-clamp-1">{project.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm whitespace-nowrap">{project.location}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {project.category || 'General'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
