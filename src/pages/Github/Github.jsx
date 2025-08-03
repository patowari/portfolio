import React from 'react';
import { ExternalLink, MapPin, Star, GitFork, Eye } from 'lucide-react';

const GitHubProfileSection = () => {
  const generateContributionGraph = () => {
    // Generate mock contribution data for visualization
    const weeks = 52;
    const daysPerWeek = 7;
    const contributions = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < daysPerWeek; day++) {
        const contribution = Math.floor(Math.random() * 5);
        weekData.push(contribution);
      }
      contributions.push(weekData);
    }
    return contributions;
  };

  const getContributionColor = (level) => {
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    return colors[level] || colors[0];
  };

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      HTML: '#e34c26',
      CSS: '#563d7c',
      React: '#61dafb'
    };
    return colors[language] || '#586069';
  };

  const contributionData = generateContributionGraph();

  const repositories = [
    {
      name: 'portfolio',
      description: '🔥 A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.',
      language: 'JavaScript',
      stars: 149,
      forks: 77
    },
    {
      name: 'portfolio-v2',
      description: 'A sleek portfolio built with React and Tailwind CSS to showcase your skills, projects, and experience in a modern design.',
      language: 'TypeScript',
      stars: 11,
      forks: 5
    },
    {
      name: 'CodeKori',
      description: 'CodeKori is an open-source online code editor with built-in AI, completely free to use',
      language: 'JavaScript',
      stars: 5,
      forks: 5
    },
    {
      name: 'Agency-Website',
      description: 'No description provided.',
      language: 'JavaScript',
      stars: 3,
      forks: 2
    }
  ];

  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <div className="bg-[#0d1117] text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Sidebar */}
        <div className="space-y-6">
          
          {/* Availability Status */}
          <div className="border border-green-500 rounded-lg p-4 bg-[#161b22]">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="font-medium">Available for work: freelance</span>
            </div>
            <div className="text-gray-300">USD 30/hr</div>
          </div>

          {/* Connect Section */}
          <div className="bg-[#161b22] rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                  <ExternalLink size={12} />
                </div>
                <span>Portfolio</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <span>Twitter</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-[#161b22] rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Details</h3>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} />
              <span>Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Biography */}
          <div className="bg-[#161b22] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Biography</h2>
            <div className="space-y-2 text-gray-300">
              <p>Turning ideas into code with OlovaJS 🔻 | JavaScript isn't just a language — it's my playground 🚀 |</p>
              <p>Building frameworks, breaking limits 🏗️ | Always up for the next big thing ✨</p>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="bg-[#161b22] rounded-lg p-6">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-4 text-xs text-gray-400">
                  {months.map((month, index) => (
                    <span key={index}>{month}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-1 overflow-x-auto mb-4">
                {contributionData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <div key={dayIndex} className="w-2.5 h-2.5 rounded-sm" 
                           style={{backgroundColor: getContributionColor(day)}}
                           title={`${day} contributions`}></div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">1408 contributions in the last year</span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map(level => (
                      <div key={level} className="w-2.5 h-2.5 rounded-sm" 
                           style={{backgroundColor: getContributionColor(level)}}></div>
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Repositories */}
          <div className="bg-[#161b22] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Top Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repositories.map((repo, index) => (
                <div key={index} className="border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-blue-400 hover:text-blue-300 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5A1 1 0 014.5 1.5h8z"/>
                        </svg>
                        {repo.name}
                      </div>
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full" 
                           style={{backgroundColor: getLanguageColor(repo.language)}}></div>
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={12} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="text-blue-400 hover:text-blue-300 text-sm cursor-pointer">
                Show more ↓
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfileSection;