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
  Database,
  Cloud,
  Activity,
  Eye,
  ExternalLink,
  User,
  MessageSquare,
  Send,
  Phone,
  MapPin
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
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const resultDiv = document.getElementById('result');
  
  // Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span>';
  
  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Success
      resultDiv.className = "text-green-500 text-center py-2";
      resultDiv.textContent = "Message sent successfully!";
      setContactForm({ name: '', email: '', subject: '', message: '' });
    } else {
      // Error
      resultDiv.className = "text-red-500 text-center py-2";
      resultDiv.textContent = result.message || "Something went wrong!";
    }
    
    resultDiv.classList.remove('hidden');
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
    
  } catch (error) {
    resultDiv.className = "text-red-500 text-center py-2";
    resultDiv.textContent = "Network error. Please try again.";
    resultDiv.classList.remove('hidden');
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
      <Send size={20} />
      <span>Send Message</span>
    `;
    
    // Hide message after 5 seconds
    setTimeout(() => {
      resultDiv.classList.add('hidden');
    }, 5000);
  }
};

  const skills = {
    dataAnalyst: [
      { name: 'Power BI', level: 95 },
      { name: 'Tableau', level: 92 },
      { name: 'Excel', level: 97 },
      { name: 'Google Sheets', level: 94 },
      { name: 'SQL', level: 93 },
      { name: 'Python (Pandas, NumPy)', level: 90 }
    ],
    visualization: [
      { name: 'Power BI', level: 95 },
      { name: 'Tableau', level: 92 },
      { name: 'Looker Studio', level: 89 },
      { name: 'Matplotlib', level: 87 },
      { name: 'Seaborn', level: 88 }
    ],
    dataTracking: [
      { name: 'GA4', level: 93 },
      { name: 'GTM', level: 91 },
      { name: 'APIs', level: 89 }
    ],
    cloudAI: [
      { name: 'Oracle', level: 88 },
      { name: 'Databricks', level: 85 }
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
      title: 'Power BI for Beginners',
      description: 'Certification in Power BI fundamentals for data visualization and business intelligence.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952133/POWER_BI_CERTIFICATE_p5udk7.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952133/POWER_BI_CERTIFICATE_p5udk7.pdf',
      color: 'from-yellow-500 to-orange-500',
      issuer: 'Power BI Training',
      date: 'September 2024'
    },
    {
  title: 'Bachelor of Business Information Technology',
  description: 'Second Class Honours (Upper Division) degree from Jomo Kenyatta University of Agriculture and Technology.',
  icon: Award,
  viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952130/CATHERINE_KAMAU_JKUAT_CERTIFICATE_ygwzhb.pdf',
  downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952130/CATHERINE_KAMAU_JKUAT_CERTIFICATE_ygwzhb.pdf',
  color: 'from-emerald-600 to-green-700',
  issuer: 'JKUAT',
  date: 'November 2024'
    },
    {
      title: 'Data Analysis in Excel',
      description: 'DataCamp certification for completing Data Analysis in Excel course (3 hours).',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952132/DATA_ANALYSIS_IN_EXCEL_CERTIFICATE_vfdqp6.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952132/DATA_ANALYSIS_IN_EXCEL_CERTIFICATE_vfdqp6.pdf',
      color: 'from-green-600 to-lime-600',
      issuer: 'DataCamp',
      date: 'February 2025'
    },
    {
      title: 'Understanding Machine Learning',
      description: 'DataCamp certification for completing Understanding Machine Learning course (2 hours).',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952130/MACHINE_LEARNING_CERT_omfny6.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952130/MACHINE_LEARNING_CERT_omfny6.pdf',
      color: 'from-purple-500 to-pink-500',
      issuer: 'DataCamp',
      date: 'March 2025'
    },
    {
      title: 'Understanding Data Topics',
      description: 'DataCamp certification for completing Understanding Data Topics course (10 hours).',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952125/certificate_-DATA_TOPICS_vsgyjz.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952125/certificate_-DATA_TOPICS_vsgyjz.pdf',
      color: 'from-teal-500 to-cyan-500',
      issuer: 'DataCamp',
      date: 'March 2025'
    },
    {
      title: 'BCG Forage GenAI Certificate',
      description: 'Awarded for completing a job simulation in GenAI and data processing for BCG via Forage.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1765290012/BCG-FORAGE_GEN_AI_CERTIFICATE_aqemie.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765290012/BCG-FORAGE_GEN_AI_CERTIFICATE_aqemie.pdf',
      color: 'from-red-500 to-orange-500',
      issuer: 'BCG via Forage',
      date: 'May 2025'
    },
    {
      title: 'Delloitte Data Analytics Professional',
      description: 'Comprehensive data analytics certification Delloitte',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1765290012/DELOITTE_DATA_ANALYTICS_lbhwnj.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1765290012/DELOITTE_DATA_ANALYTICS_lbhwnj.pdf',
      color: 'from-blue-500 to-cyan-500',
      issuer: 'Delloitte',
      date: 'June 2025'
    },
    {
      title: 'Data Visualisation: Empowering Business with Effective Insights',
      description: 'Tata via Forage certification covering business scenarios, visual selection, and insights communication.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952125/TATA_CERTIFICATE_ogv9w4.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952125/TATA_CERTIFICATE_ogv9w4.pdf',
      color: 'from-indigo-500 to-purple-500',
      issuer: 'Tata via Forage',
      date: 'June 2025'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      description: 'Certification in Oracle Cloud Infrastructure AI fundamentals and foundations.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952130/ORACLE_Gnerative_AI_Associate_gqyxeg.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952130/ORACLE_Gnerative_AI_Associate_gqyxeg.pdf',
      color: 'from-red-600 to-red-800',
      issuer: 'Oracle',
      date: 'July 2025'
    },
    {
      title: 'Databricks Certification',
      description: 'Databricks platform certification valid through July 2027.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952130/DATABRICKS_CERTIFICATE_y2805k.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952130/DATABRICKS_CERTIFICATE_y2805k.pdf',
      color: 'from-orange-600 to-red-600',
      issuer: 'Databricks',
      date: 'July 2025'
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
      description: 'Professional-level certification in Oracle Cloud Infrastructure Generative AI.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952136/ORACLE_Gen_AI_Professional_Certificate_jw0dch.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952136/ORACLE_Gen_AI_Professional_Certificate_jw0dch.pdf',
      color: 'from-red-700 to-orange-600',
      issuer: 'Oracle',
      date: 'September 2025'
    },
    {
      title: 'Machine Learning with Python',
      description: 'IBM certification for successfully completing Machine Learning with Python course.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952131/IBM_ML0101EN_Certificate___Cognitive_Class_usy6k2.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952131/IBM_ML0101EN_Certificate___Cognitive_Class_usy6k2.pdf',
      color: 'from-blue-600 to-indigo-600',
      issuer: 'IBM Cognitive Class',
      date: 'October 2025'
    }, 
    {
      title: 'Virtual Assistant Certificate',
      description: 'Certificate in Virtual Assistant fundamentals and introduction.',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952126/CATHERINE-KAMAU-Virtual-Assistant-Certificate-Course-Virtual-Assistant-Introduction-Certificate-EduCou_jqmvqq.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952126/CATHERINE-KAMAU-Virtual-Assistant-Certificate-Course-Virtual-Assistant-Introduction-Certificate-EduCou_jqmvqq.pdf',
      color: 'from-pink-500 to-rose-500',
      issuer: 'EduCourse',
      date: 'December 2025'
    },
    {
      title: 'Intermediate SQL',
      description: 'DataCamp certification for successfully completing Intermediate SQL course (4 hours).',
      icon: Award,
      viewUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/v1766952124/INTERMEDIATE_SQL_dj3xk7.pdf',
      downloadUrl: 'https://res.cloudinary.com/dxwzdftzm/image/upload/fl_attachment/v1766952124/INTERMEDIATE_SQL_dj3xk7.pdf',
      color: 'from-green-500 to-emerald-500',
      issuer: 'DataCamp',
      date: 'December 2025'
    },
  ];

  const stats = [
    { label: 'Dashboards Created', value: '50+', color: 'text-blue-400', icon: ChartBar },
    { label: 'Posters Designed', value: '30+', color: 'text-purple-400', icon: ImageIcon },
    { label: 'Certifications', value: '15+', color: 'text-pink-400', icon: Award },
    { label: 'Happy Clients', value: '25+', color: 'text-cyan-400', icon: Globe }
  ];

  const tabs = ['about', 'skills', 'dashboards', 'posters', 'certifications', 'contact'];

  // Skills Section Completion
  const renderSkills = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Stack
        </h2>
        <p className="text-xl text-slate-400">Tools, tech, and talents that get the job done</p>
      </div>

      {/* Skill Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {['all', 'dataAnalyst', 'visualization', 'dataTracking', 'cloudAI'].map((area) => (
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
              area === 'dataAnalyst' ? '📊 Data Analysis & BI' : 
              area === 'visualization' ? '📈 Visualization' : 
              area === 'dataTracking' ? '🌐 Tracking & Analytics' : '☁️ Cloud & AI'}
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
                    category === 'visualization' ? 'bg-purple-500/20' : 
                    category === 'dataTracking' ? 'bg-pink-500/20' : 'bg-cyan-500/20'
                  }`}>
                    {category === 'dataAnalyst' ? <BarChart3 className="text-blue-400" /> :
                      category === 'visualization' ? <Activity className="text-purple-400" /> :
                      category === 'dataTracking' ? <Globe className="text-pink-400" /> :
                      <Cloud className="text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {category === 'dataAnalyst' ? 'Data Analysis & BI' :
                        category === 'visualization' ? 'Data Visualization' : 
                        category === 'dataTracking' ? 'Tracking & Analytics' : 'Cloud & AI'}
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
                            category === 'visualization' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                            category === 'dataTracking' ? 'bg-gradient-to-r from-pink-500 to-rose-500' :
                            'bg-gradient-to-r from-cyan-500 to-blue-500'
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
    </div>
  );

  // Dashboards Section
  const renderDashboards = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Dashboard Portfolio
        </h2>
        <p className="text-xl text-slate-400">Interactive data visualizations and business insights</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {dashboards.map((dashboard, idx) => (
          <div key={idx} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r ${dashboard.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${dashboard.color}`}>
                  <dashboard.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{dashboard.title}</h3>
                  <p className="text-slate-400">{dashboard.category}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">{dashboard.description}</p>
              
              <div className="flex gap-3">
                <a
                  href={dashboard.downloadUrl}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all border border-slate-700"
                >
                  <Download size={20} />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedDashboard(dashboard);
                    setShowPreview(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <Eye size={20} />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Posters Section
  const renderPosters = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Creative Designs
        </h2>
        <p className="text-xl text-slate-400">Marketing campaigns and visual storytelling</p>
      </div>

      {/* Poster Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posters.map((poster, idx) => (
          <div key={idx} className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${poster.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 hover:scale-[1.02] transition-all">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                <img 
                  src={poster.imageUrl} 
                  alt={poster.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{poster.title}</h3>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-slate-800/50 rounded-full text-sm">
                  {poster.category}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedPoster(poster);
                      setIsModalOpen(true);
                    }}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    <Maximize2 size={20} />
                  </button>
                  <a
                    href={poster.downloadUrl}
                    download
                    className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Poster Modal */}
      {isModalOpen && selectedPoster && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedPoster.title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="relative rounded-xl overflow-hidden bg-slate-800">
                <img 
                  src={selectedPoster.imageUrl} 
                  alt={selectedPoster.title}
                  className="w-full max-h-[60vh] object-contain"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-2">
                  <button
                    onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    <ZoomOut size={20} />
                  </button>
                  <button
                    onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.1))}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    <ZoomIn size={20} />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Reset Zoom
                  </button>
                </div>
                <a
                  href={selectedPoster.downloadUrl}
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <Download size={20} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Certifications Section
  const renderCertifications = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <p className="text-xl text-slate-400">Professional credentials and achievements</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all`}></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800 hover:scale-[1.02] transition-all">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${cert.color}`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap size={16} />
                      {cert.date}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">{cert.description}</p>
              
              <div className="flex gap-3">
                <a
                  href={cert.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all border border-slate-700"
                >
                  <ExternalLink size={20} />
                  <span>View</span>
                </a>
                <a
                  href={cert.downloadUrl}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <Download size={20} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Contact Section
  const renderContact = () => (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-400">Get in touch for collaborations or opportunities</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageSquare className="text-cyan-400" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Mail className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-semibold">catherine.kamau381@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Phone className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-semibold">+254701029671</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-semibold">Kiambu, Kenya</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/catherine-kamau-98b83a326"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/CATHERINEKAMAU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl hover:from-slate-700 hover:to-slate-800 transition-all border border-slate-700"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Send className="text-purple-400" />
                Send a Message
              </h3>
              <form 
  className="space-y-6"
  action="https://api.web3forms.com/submit"
  onSubmit={handleFormSubmit}
>
  {/* W3Forms Access Key - Replace with your own */}
  <input 
    type="hidden" 
    name="access_key" 
    value="YOUR_ACCESS_KEY_HERE" 
  />
  
  {/* Honeypot spam protection */}
  <input 
    type="checkbox" 
    name="botcheck" 
    className="hidden" 
    style={{display: 'none'}}
  />

  <div className="grid md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium text-slate-400">
        Your Name
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <User size={20} className="text-slate-500" />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={contactForm.name}
          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
          className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder="John Doe"
        />
      </div>
    </div>
    
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium text-slate-400">
        Email Address
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Mail size={20} className="text-slate-500" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={contactForm.email}
          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
          className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder="john@example.com"
        />
      </div>
    </div>
  </div>
  
  <div className="space-y-2">
    <label htmlFor="subject" className="text-sm font-medium text-slate-400">
      Subject
    </label>
    <input
      type="text"
      name="subject"
      id="subject"
      value={contactForm.subject}
      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
      placeholder="Project inquiry or collaboration"
    />
  </div>
  
  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium text-slate-400">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      required
      rows="5"
      value={contactForm.message}
      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
      placeholder="Tell me about your project..."
    ></textarea>
  </div>
  
  {/* Success/Error Messages */}
  <div id="result" className="hidden text-center"></div>
  
  <button
    type="submit"
    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-semibold text-lg flex items-center justify-center gap-3"
  >
    <Send size={20} />
    <span>Send Message</span>
  </button>
</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
                  skills: ['Power BI', 'Tableau', 'SQL', 'Python']
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
        {activeTab === 'skills' && renderSkills()}

        {/* Dashboards Section */}
        {activeTab === 'dashboards' && renderDashboards()}

        {/* Posters Section */}
        {activeTab === 'posters' && renderPosters()}

        {/* Certifications Section */}
        {activeTab === 'certifications' && renderCertifications()}

        {/* Contact Section */}
        {activeTab === 'contact' && renderContact()}
      </main>

      {/* Preview Modal */}
      {showPreview && selectedDashboard && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedDashboard.title}</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="p-2 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video rounded-xl bg-slate-800 flex items-center justify-center mb-6">
                <div className="text-center">
                  <ChartBar className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-500">Dashboard preview would be displayed here</p>
                  <p className="text-sm text-slate-600 mt-2">Click download to get the actual file</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-slate-400">
                  <p className="text-sm">File format: .xlsx</p>
                  <p className="text-sm">Category: {selectedDashboard.category}</p>
                </div>
                <a
                  href={selectedDashboard.downloadUrl}
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <Download size={20} />
                  <span>Download Dashboard</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative mt-20 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="font-black text-xl bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Catherine Kamau
              </div>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved</p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/catherine-kamau-98b83a326"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/CATHERINEKAMAU"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:catherine.kamau381@gmail.com"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
