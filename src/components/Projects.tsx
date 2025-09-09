import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

const GITHUB_API = 'https://api.github.com/users/MakChay/repos?per_page=100';

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    fetch(GITHUB_API)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch repositories');
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        const langs = Array.from(new Set(data.map(repo => repo.language).filter(Boolean)));
        setLanguages(langs);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load GitHub repositories. Please try again later.');
        setLoading(false);
      });
  }, []);

  const filteredRepos = repos.filter(repo =>
    (filter === '' || repo.language === filter) &&
    (search === '' ||
      repo.name.toLowerCase().includes(search.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()))
    )
  );

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 relative" role="region" aria-label="Projects section">
      {/* Animated Section Divider (Top) */}
      <div className="absolute -top-8 left-0 w-full overflow-hidden leading-none rotate-180" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="#f59e0b" fillOpacity="0.2" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,37.3C672,21,768,11,864,21.3C960,32,1056,64,1152,74.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my best work including competition wins, hackathon solutions, and community platforms
          </p>
        </div>
        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Highlighted Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* USAs Competition Project */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-400">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏆</span>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">USSAs Competition</h4>
                  <p className="text-amber-600 dark:text-amber-300 font-semibold">1st Place Winner</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Managed the University Basketball team to victory in the University Students Association competition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-200 rounded text-sm">Basketball</span>
                <span className="px-2 py-1 bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-200 rounded text-sm">Management</span>
                <span className="px-2 py-1 bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-200 rounded text-sm">Leadership</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">2025</div>
            </div>

            {/* JCI Hackathon Project */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-400">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🥉</span>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">JCI Hackathon</h4>
                  <p className="text-blue-600 dark:text-blue-300 font-semibold">3rd Place Winner</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Developed a creative solution during the Junior Chamber International hackathon, showcasing rapid prototyping skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded text-sm">C#</span>
                <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded text-sm">Innovation</span>
                <span className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded text-sm">Teamwork</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">2025</div>
            </div>

            {/* Hybrid Demo Monday Platform */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎤</span>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Hybrid Demo Monday</h4>
                  <p className="text-green-600 dark:text-green-300 font-semibold">Platform Creator & Host</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Created and hosted a platform for DUT students to showcase innovation and collaborate across disciplines.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded text-sm">Community</span>
                <span className="px-2 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded text-sm">Event Management</span>
                <span className="px-2 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded text-sm">Leadership</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">2025</div>
            </div>
          </div>
        </div>

        {/* GitHub Projects Filter */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">GitHub Projects</h3>
          <div className="flex flex-wrap gap-2 items-center">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 mr-2"
              aria-label="Search projects"
            />
            <button
              className={`px-4 py-2 rounded ${filter === '' ? 'bg-amber-400 text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
              onClick={() => setFilter('')}
              aria-label="Show all languages"
            >
              All
            </button>
            {languages.map(lang => (
              <button
                key={lang}
                className={`px-4 py-2 rounded ${filter === lang ? 'bg-amber-400 text-black' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
                onClick={() => setFilter(lang)}
                aria-label={`Filter by ${lang}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        {loading ? (
          <div className="text-center py-10 text-lg text-gray-600 dark:text-gray-300 animate-pulse">Loading projects...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">{error}</div>
        ) : filteredRepos.length === 0 ? (
          <div className="text-center py-10 text-gray-600 dark:text-gray-300">No projects found.</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-amber-400 hover:border-amber-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fadeIn group"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <div className="flex items-center mb-2">
                    <img
                      src={`https://github.com/MakChay.png`}
                      alt="MakChay GitHub avatar"
                      className="w-8 h-8 rounded-full mr-3 border border-gray-300 group-hover:border-amber-400 transition-all duration-300"
                      loading="lazy"
                    />
                    <h3 className="text-xl font-semibold text-amber-400 group-hover:text-amber-500 transition-colors duration-300">{repo.name}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{repo.description}</p>
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs mr-2">
                    {repo.language}
                  </span>
                </a>
              ))}
            </div>
            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Interested in collaborating or want to know more?</h3>
              <a href="#contact" className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-lg shadow hover:bg-amber-500 transition-all duration-300 text-lg">Contact Me</a>
            </div>
          </>
        )}
      </div>
      {/* Animated Section Divider (Bottom) */}
      <div className="absolute -bottom-8 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path fill="#f59e0b" fillOpacity="0.2" d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,37.3C672,21,768,11,864,21.3C960,32,1056,64,1152,74.7C1248,85,1344,75,1392,69.3L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z" />
        </svg>
      </div>
    </section>
  );
};

export default Projects;
