import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Code, 
  Megaphone, 
  Mail, 
  Linkedin, 
  Github, 
  Menu, 
  X, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Zap, 
  TrendingUp, 
  Server, 
  Target, 
  ChevronRight, 
  ChevronLeft, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Download, 
  Sparkles, 
  FileText, 
  Image as ImageIcon, 
  ChartBar, 
  Shield, 
  Globe, 
  Database 
} from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedSkillArea, setSelectedSkillArea] = useState('all');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    dataAnalyst: [
      { name: 'Python (Pandas, NumPy)', level: 90 },
      { name: 'SQL & Databases', level: 95 },
      { name: 'Power BI & Tableau', level: 88 },
      { name: 'Statistical Analysis', level: 85 },
      { name: 'Data Visualization', level: 92 },
      { name: 'Excel Wizardry', level: 97 }
    ],
    itSupport: [
      { name: 'Windows & Linux', level: 93 },
      { name: 'Network Ninja Skills', level: 87 },
      { name: 'Hardware & Software', level: 90 },
      { name: 'Active Directory', level: 89 },
      { name: 'Cybersecurity', level: 85 },
      { name: 'Cloud (AWS, Azure)', level: 88 }
    ],
    digitalMarketing: [
      { name: 'SEO & SEM Mastery', level: 91 },
      { name: 'Google Analytics', level: 94 },
      { name: 'Social Media Magic', level: 89 },
      { name: 'Content Strategy', level: 87 },
      { name: 'Email Campaigns', level: 92 },
      { name: 'Marketing Automation', level: 86 }
    ]
  };

  const dashboards = [
  {
    title: 'Heroes Campaign Dashboard',
    description: 'Comprehensive Excel dashboard for campaign analysis',
    icon: ChartBar,
    downloadUrl: '/assets/dashboards/Dashboard Data (HEROES.xlsx', 
    previewUrl: 'https://res.cloudinary.com/dxwzdftzm/raw/upload/v1765288665/Dashboard_Data_HEROES_igmnok.xlsx', 
    color: 'from-red-500 to-pink-500',
    category: 'Excel Dashboard'
  },
  {
    title: 'Marvel MCU Dashboard',
    description: 'Interactive dashboard analyzing MCU data',
    icon: Shield,
    downloadUrl: '/assets/dashboards/MCU DASHBOARD.xlsx', 
    previewUrl: 'https://res.cloudinary.com/dxwzdftzm/raw/upload/v1765288812/MCU_DASHBOARD_esmatu.xlsx',
    color: 'from-blue-500 to-indigo-500',
    category: 'Excel Dashboard'
  }
];

  const posters = [
  {
    title: 'Bluecover Father\'s Day',
    imageUrl: "https://res.cloudinary.com/dxwzdftzm/image/upload/v1765285343/BLUECOVER_FATHER_S_DAY_tvkeaw.png",
    downloadUrl: "https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765285343/BLUECOVER_FATHER_S_DAY_tvkeaw.png",
    category: 'Marketing Campaign',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Maestroville Father\'s Day',
    imageUrl: "https://res.cloudinary.com/dxwzdftzm/image/upload/v1765285370/MAESTRO_FATHER_S_DAY2_o668rk.png",
    downloadUrl: "https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765285370/MAESTRO_FATHER_S_DAY2_o668rk.png",
    category: 'Marketing Campaign',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Undersea Campaign',
    imageUrl: "https://res.cloudinary.com/dxwzdftzm/image/upload/v1765285387/UNDERSEA_nvoehh.png",
    downloadUrl: "https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765285387/UNDERSEA_nvoehh.png",
    category: 'Creative Design',
    color: 'from-teal-500 to-blue-500'
  }
];

  const certifications = [
  {
    title: 'BCG Forage GenAI Certificate',
    description: 'Awarded for completing a job simulation in GenAI and data processing for BCG via Forage.',
    icon: Award,
    viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1765290012/BCG-FORAGE_GEN_AI_CERTIFICATE_aqemie.pdf',
    downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765290012/BCG-FORAGE_GEN_AI_CERTIFICATE_aqemie.pdf',
    color: 'from-red-500 to-orange-500',
    issuer: 'BCG via Forage',
    date: '2025'
  },
  {
    title: 'Delloitte Data Analytics Professional',
    description: 'Comprehensive data analytics certification Delloitte',
    icon: Award,
    viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1765290012/DELOITTE_DATA_ANALYTICS_lbhwnj.pdf',
    downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765290012/DELOITTE_DATA_ANALYTICS_lbhwnj.pdf',
    color: 'from-blue-500 to-cyan-500',
    issuer: 'Delloitte',
    date: '2025'
  }
];

  const stats = [
    { label: 'Dashboards Created', value: '50+', color: 'text-blue-400', icon: ChartBar },
    { label: 'Posters Designed', value: '30+', color: 'text-purple-400', icon: ImageIcon },
    { label: 'Certifications', value: '15+', color: 'text-pink-400', icon: Award },
    { label: 'Happy Clients', value: '25+', color: 'text-cyan-400', icon: Globe }
  ];

  const tabs = ['about', 'skills', 'dashboards', 'posters', 'certifications', 'contact'];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="relative bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center font-black text-xl border border-slate-700">
                  CK
                </div>
              </div>
              <div>
                <div className="font-black text-xl bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Catherine Kamau
                </div>
                <div className="text-xs text-slate-500">Data Analyst & Marketing Specialist</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 rounded-xl capitalize font-semibold transition-all ${
                    activeTab === tab
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 rounded-xl"></div>
                  )}
                  <span className="relative">{tab}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl capitalize font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white'
                      : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        {activeTab === 'about' && (
          <div className="space-y-12">
            {/* Hero */}
            <div className="text-center space-y-6 py-12">
              <div className="inline-block">
                <div className="text-sm font-bold text-red-400 mb-2 animate-pulse">⚡ MULTI-TALENTED PROFESSIONAL ⚡</div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black">
                <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Catherine
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                  Kamau
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
                Data Analyst | IT Support Specialist | Digital Marketing Expert
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <div className="px-6 py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-300 font-semibold">
                  📊 Data Analyst
                </div>
                <div className="px-6 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-300 font-semibold">
                  💻 IT Support
                </div>
                <div className="px-6 py-2 bg-pink-500/20 border border-pink-500/50 rounded-full text-pink-300 font-semibold">
                  📈 Digital Marketer
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 text-center hover:scale-105 transition-transform">
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: BarChart3, 
                  title: 'Data Analyst', 
                  desc: 'Turning complex data into actionable insights and beautiful visualizations',
                  gradient: 'from-red-600 to-orange-600',
                  emoji: '📊',
                  skills: ['Excel', 'Power BI', 'SQL', 'Python']
                },
                { 
                  icon: Code, 
                  title: 'IT Support Specialist', 
                  desc: 'Expert in troubleshooting, system administration, and network management',
                  gradient: 'from-purple-600 to-pink-600',
                  emoji: '🛠️',
                  skills: ['Windows/Linux', 'Networking', 'Cybersecurity', 'Cloud']
                },
                { 
                  icon: Megaphone, 
                  title: 'Digital Marketer', 
                  desc: 'Creating compelling campaigns that drive engagement and conversions',
                  gradient: 'from-pink-600 to-rose-600',
                  emoji: '🚀',
                  skills: ['SEO/SEM', 'Analytics', 'Social Media', 'Content']
                }
              ].map((card, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:scale-105 transition-all">
                    <div className="text-5xl mb-4">{card.emoji}</div>
                    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800/50 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About Text */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-slate-800">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="text-yellow-400" />
                  About Me
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  I'm a passionate multi-disciplinary professional with expertise in data analysis, 
                  IT support, and digital marketing. My journey began with data analytics, where I 
                  discovered the power of insights in driving business decisions. This led me to 
                  explore IT systems that support data infrastructure and eventually to marketing, 
                  where I learned to communicate data stories effectively.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  What sets me apart is my ability to bridge technical and creative domains. 
                  I can analyze complex datasets, ensure systems run smoothly, and create 
                  compelling marketing materials that resonate with audiences. I believe in 
                  continuous learning and staying updated with the latest technologies and trends.
                </p>
              </div>
            </div>
          </div>
        )}

           {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Arsenal
              </h2>
              <p className="text-xl text-slate-400">Tools, tech, and talents that get the job done</p>
            </div>

            {/* Skill Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'dataAnalyst', 'itSupport', 'digitalMarketing'].map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedSkillArea(area)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedSkillArea === area
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {area === 'all' ? '🎯 All Skills' : 
                   area === 'dataAnalyst' ? '📊 Data' : 
                   area === 'itSupport' ? '💻 IT' : '📈 Marketing'}
                </button>
              ))}
            </div>

            {/* Skills Display */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                (selectedSkillArea === 'all' || selectedSkillArea === category) && (
                  <div key={category} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-800">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          category === 'dataAnalyst' ? 'bg-blue-500/20' :
                          category === 'itSupport' ? 'bg-purple-500/20' : 'bg-pink-500/20'
                        }`}>
                          {category === 'dataAnalyst' ? <BarChart3 className="text-blue-400" /> :
                           category === 'itSupport' ? <Code className="text-purple-400" /> :
                           <Megaphone className="text-pink-400" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">
                            {category === 'dataAnalyst' ? 'Data Analyst' :
                             category === 'itSupport' ? 'IT Support' : 'Digital Marketing'}
                          </h3>
                          <p className="text-sm text-slate-500">{skillList.length} skills</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {skillList.map((skill, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-300">{skill.name}</span>
                              <span className="font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  category === 'dataAnalyst' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                                  category === 'itSupport' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                                  'bg-gradient-to-r from-pink-500 to-rose-500'
                                }`}
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Certification & Education */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Award className="text-yellow-400" />
                    Tools & Technologies
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Data Analysis', tools: 'Excel, Python, SQL, Power BI', icon: '📊' },
                      { name: 'IT Support', tools: 'Windows/Linux, Networking, AWS', icon: '💻' },
                      { name: 'Digital Marketing', tools: 'Google Analytics, SEO, Social Media', icon: '📈' },
                      { name: 'Design', tools: 'Photoshop, Canva, Figma', icon: '🎨' }
                    ].map((tech, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{tech.icon}</div>
                          <div>
                            <div className="font-semibold">{tech.name}</div>
                            <div className="text-sm text-slate-500">{tech.tools}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <GraduationCap className="text-purple-400" />
                    Core Competencies
                  </h3>
                  <div className="space-y-4">
                    {[
                      { skill: 'Problem Solving', level: 'Expert' },
                      { skill: 'Communication', level: 'Advanced' },
                      { skill: 'Project Management', level: 'Advanced' },
                      { skill: 'Team Collaboration', level: 'Expert' }
                    ].map((comp, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors">
                        <div>
                          <div className="font-semibold">{comp.skill}</div>
                          <div className="text-sm text-slate-500">Professional Skill</div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          comp.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {comp.level}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dashboards Section */}
        {activeTab === 'dashboards' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Excel Dashboards
              </h2>
              <p className="text-xl text-slate-400">Interactive dashboards for data visualization and analysis</p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {dashboards.map((dashboard, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${dashboard.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 h-full hover:scale-105 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${dashboard.color}`}>
                        <dashboard.icon className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{dashboard.title}</h3>
                        <span className="text-sm text-slate-500">{dashboard.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 mb-6">{dashboard.description}</p>
                    
<div className="flex gap-3">
  <a 
    href={dashboard.downloadUrl}
    download
    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all flex items-center justify-center gap-2"
  >
    <Download size={18} />
    Download
  </a>
 
</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Stats */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-6">Dashboard Capabilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Data Sources', value: 'Multiple', color: 'text-red-400' },
                    { label: 'Update Frequency', value: 'Real-time', color: 'text-purple-400' },
                    { label: 'Visualizations', value: '20+ Types', color: 'text-pink-400' },
                    { label: 'User Interactivity', value: 'High', color: 'text-cyan-400' }
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl">
                      <div className={`text-2xl md:text-3xl font-black ${metric.color} mb-2`}>{metric.value}</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Posters Section */}
        {activeTab === 'posters' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Creative Posters
              </h2>
              <p className="text-xl text-slate-400">Visual designs for marketing campaigns and events</p>
            </div>

            {/* Poster Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {posters.map((poster, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${poster.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden hover:scale-105 transition-all">
                    {/* Poster Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <img 
                        src={poster.imageUrl} 
                        alt={poster.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-sm text-slate-300">
                          {poster.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Poster Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold">{poster.title}</h3>
                        <ImageIcon className="text-slate-500" />
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
  onClick={() => {
    const index = posters.findIndex(p => p.id === poster.id);
    setCurrentPosterIndex(index);
    setSelectedPoster(poster);
    setIsModalOpen(true);
  }}
  className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
>
  View Full Size
</button>
<a 
  href={poster.downloadUrl || poster.imageUrl}
  download={`${poster.title.replace(/\s+/g, '_')}.png`}
  className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2"
>
  <Download size={18} />
</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            

            {/* Design Tools */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-6">Design Tools & Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { tool: 'Adobe Photoshop', level: 'Expert' },
                    { tool: 'Canva', level: 'Advanced' },
                    { tool: 'Figma', level: 'Intermediate' },
                    { tool: 'Illustrator', level: 'Advanced' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-800/50 rounded-xl text-center">
                      <div className="font-semibold mb-1">{item.tool}</div>
                      <div className="text-sm text-slate-400">{item.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeTab === 'certifications' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Certifications
              </h2>
              <p className="text-xl text-slate-400">Professional certifications validating my expertise</p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 h-full hover:scale-105 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${cert.color}`}>
                        <cert.icon className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold">{cert.title}</h3>
                          <span className="text-sm text-slate-500 bg-slate-800 px-2 py-1 rounded-full">
                            {cert.date}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mt-1">Issued by: {cert.issuer}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 mb-6">{cert.description}</p>
                    
                   <div className="flex gap-3">
  <a 
    href={cert.viewUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all flex items-center justify-center gap-2"
  >
    <FileText size={18} />
    View Certificate
  </a>
  <a 
    href={cert.downloadUrl}
    download
    className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2"
  >
    <Download size={18} />
    Download
  </a>
</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Stats */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-6">Certification Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Certifications', value: '15+', color: 'text-red-400' },
                    { label: 'Currently Valid', value: '12', color: 'text-green-400' },
                    { label: 'Years Experience', value: '5+', color: 'text-purple-400' },
                    { label: 'Renewal Frequency', value: 'Annual', color: 'text-cyan-400' }
                  ].map((metric, idx) => (
                    <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl">
                      <div className={`text-2xl md:text-3xl font-black ${metric.color} mb-2`}>{metric.value}</div>
                      <div className="text-sm text-slate-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-slate-400">Get in touch for collaborations or opportunities</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  className="space-y-4 md:space-y-6"
>
 
  <div className="space-y-1 md:space-y-2">
    <label className="text-xs md:text-sm font-medium text-slate-400">Name</label>
    <input 
      type="text" 
      name="name"
      required
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      placeholder="Your Name"
    />
  </div>
 
  <div className="space-y-1 md:space-y-2">
    <label className="text-xs md:text-sm font-medium text-slate-400">Email</label>
    <input 
      type="email" 
      name="email"
      required
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      placeholder="your@email.com"
    />
  </div>
  
  <div className="space-y-1 md:space-y-2">
    <label className="text-xs md:text-sm font-medium text-slate-400">Inquiry Type</label>
    <select 
      name="inquiryType"
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
    >
      <option>Data Analysis Project</option>
      <option>Dashboard Development</option>
      <option>Design/Marketing Work</option>
      <option>IT Support Services</option>
      <option>General Inquiry</option>
    </select>
  </div>
  
 
  <div className="space-y-1 md:space-y-2">
    <label className="text-xs md:text-sm font-medium text-slate-400">Message</label>
    <textarea 
      name="message"
      rows="3"
      required
      className="w-full bg-slate-800/50 border border-slate-700 rounded-lg md:rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y min-h-[100px] md:min-h-[120px]"
      placeholder="Your message..."
    />
  </div>
  
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-2.5 md:py-3 rounded-lg md:rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all text-sm md:text-base"
  >
    Send Message
  </button>
  
  {/* Mobile Optimization Note (Optional) */}
  <div className="md:hidden text-center pt-2">
    <p className="text-xs text-slate-500">All fields are required</p>
  </div>
</form>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      {[
                        { icon: Mail, label: 'Email', value: 'catherine.kamau381@gmail.com', color: 'text-red-400' },
                        { icon: Briefcase, label: 'Status', value: 'Open for Opportunities', color: 'text-green-400' },
                        { icon: Zap, label: 'Response Time', value: 'Within 24 hours', color: 'text-yellow-400' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl">
                          <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                            <item.icon className="text-slate-400" />
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">{item.label}</div>
                            <div className={`font-semibold ${item.color}`}>{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-400', url: 'https://linkedin.com/in/catherine-kamau-98b83a32' },
                        { icon: Github, label: 'GitHub', color: 'from-slate-600 to-slate-400', url: 'https://github.com/CATHERINEKAMAU' },
                        { icon: Mail, label: 'Email', color: 'from-red-600 to-red-400', url: 'catherine.kamau381@gmail.com' },
                        { icon: FileText, label: 'Resume', color: 'from-purple-600 to-purple-400', url: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1765291785/CATHERINE_KAMAU_IDT_DATA_ANALYST_ckpvjc.pdf' }
                      ].map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          className="group relative overflow-hidden rounded-xl aspect-square"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-80 group-hover:opacity-100 transition-all`}></div>
                          <div className="relative h-full flex flex-col items-center justify-center p-4">
                            <social.icon size={28} />
                            <div className="mt-2 text-sm font-semibold">{social.label}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl flex items-center justify-center font-black">
                CK
              </div>
              <div>
                <div className="font-bold">Catherine Kamau</div>
               
              </div>
            </div>
            
            <div className="text-slate-500 text-sm text-center md:text-right">
            
              <p className="mt-1">© {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && (
  <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4">
    <div className="relative max-w-6xl w-full max-h-[90vh]">
      {/* Close button */}
      <button
        onClick={() => {
          setIsModalOpen(false);
          setSelectedPoster(null);
          setZoomLevel(1);
        }}
        className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10 p-2"
      >
        <X size={32} />
      </button>
      
      {/* Navigation arrows */}
      {posters.length > 1 && (
        <>
          <button
            onClick={() => {
              const newIndex = currentPosterIndex === 0 ? posters.length - 1 : currentPosterIndex - 1;
              setCurrentPosterIndex(newIndex);
              setSelectedPoster(posters[newIndex]);
              setZoomLevel(1);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              const newIndex = currentPosterIndex === posters.length - 1 ? 0 : currentPosterIndex + 1;
              setCurrentPosterIndex(newIndex);
              setSelectedPoster(posters[newIndex]);
              setZoomLevel(1);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all z-10"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 3))}
          className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-lg transition-all"
          disabled={zoomLevel >= 3}
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.5))}
          className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-lg transition-all"
          disabled={zoomLevel <= 0.5}
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={() => setZoomLevel(1)}
          className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-lg transition-all text-sm px-3"
        >
          Reset
        </button>
      </div>
      
      {/* Poster counter */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
        {currentPosterIndex + 1} / {posters.length}
      </div>
      
      {/* Modal content */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden h-full">
        {/* Image container */}
        <div className="relative h-[60vh] overflow-auto bg-slate-950">
          <div className="flex items-center justify-center h-full p-4">
            <img 
              src={selectedPoster?.imageUrl} 
              alt={selectedPoster?.title}
              className="transition-transform duration-200"
              style={{ 
                transform: `scale(${zoomLevel})`,
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
        
        {/* Info panel */}
        <div className="p-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{selectedPoster?.title}</h3>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                  {selectedPoster?.category}
                </span>
                <span className="text-sm text-slate-500">
                  Zoom: {zoomLevel.toFixed(1)}x
                </span>
              </div>
              <p className="text-slate-400">{selectedPoster?.description}</p>
            </div>
            
            <div className="flex gap-3">
              <a 
                href={selectedPoster?.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all flex items-center gap-2"
              >
                <Maximize2 size={18} />
                Open in New Tab
              </a>
<a 
  href={selectedPoster?.downloadUrl || selectedPoster?.imageUrl}
  download={`${selectedPoster?.title.replace(/\s+/g, '_')}.png`}
  className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center gap-2"
>
  <Download size={18} />
  Download
</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


{/* Preview Modal */}
{showPreview && selectedDashboard && (
  <div 
    className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
    onClick={() => {
      setShowPreview(false);
      setSelectedDashboard(null);
    }}
  >
    <div 
      className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={() => {
          setShowPreview(false);
          setSelectedDashboard(null);
        }}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
      >
        <X size={24} />
      </button>
      
      {/* Preview Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${selectedDashboard.color}`}>
            <selectedDashboard.icon className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{selectedDashboard.title}</h3>
            <p className="text-slate-400">{selectedDashboard.category}</p>
          </div>
        </div>
        
        {/* Preview Image */}
        <div className="relative h-96 bg-slate-800 rounded-xl overflow-hidden mb-6">
          <img 
            src={selectedDashboard.previewUrl} 
            alt={`${selectedDashboard.title} Preview`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
            <div className="text-white">
              <p className="text-sm opacity-75">Preview image - Download to view full dashboard</p>
            </div>
          </div>
        </div>
        
        {/* Download Button */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-slate-400">{selectedDashboard.description}</p>
          </div>
          <div className="flex gap-3">
            <a 
              href={selectedDashboard.downloadUrl}
              download
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all flex items-center gap-2"
            >
              <Download size={18} />
              Download Excel File
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}