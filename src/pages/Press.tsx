import { ArrowLeft, Zap, Download, ExternalLink, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const pressReleases = [
  {
    id: 1,
    title: 'StudentAssist Reaches 50,000 Student Milestone',
    date: 'March 1, 2026',
    excerpt: 'The student assistance platform celebrates major growth milestone as it expands to 200+ universities.',
  },
  {
    id: 2,
    title: 'StudentAssist Launches New Roommate Matching Algorithm',
    date: 'February 15, 2026',
    excerpt: 'AI-powered matching system helps students find compatible roommates with 95% satisfaction rate.',
  },
  {
    id: 3,
    title: 'StudentAssist Partners with Major University Housing Providers',
    date: 'January 28, 2026',
    excerpt: 'Strategic partnerships expand verified housing options for students nationwide.',
  },
  {
    id: 4,
    title: 'StudentAssist Raises $5M in Series A Funding',
    date: 'December 10, 2025',
    excerpt: 'Investment will fuel expansion and development of new student-focused features.',
  },
];

const mediaAssets = [
  { name: 'StudentAssist Logo Pack', format: 'PNG, SVG', size: '2.4 MB' },
  { name: 'Brand Guidelines', format: 'PDF', size: '1.8 MB' },
  { name: 'Executive Team Photos', format: 'JPG', size: '5.2 MB' },
  { name: 'Product Screenshots', format: 'PNG', size: '3.1 MB' },
];

const mediaCoverage = [
  {
    outlet: 'TechCrunch',
    title: 'How StudentAssist is Transforming Campus Life',
    date: 'Feb 2026',
    link: '#',
  },
  {
    outlet: 'Forbes',
    title: 'The Startup Making Student Housing Easier',
    date: 'Jan 2026',
    link: '#',
  },
  {
    outlet: 'EdTech Magazine',
    title: 'Innovation in Student Services',
    date: 'Dec 2025',
    link: '#',
  },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                Student<span className="text-brand-blue">Assist</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-bg to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg text-brand-blue text-sm font-semibold mb-6">
            Press & Media
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-brand-dark-blue mb-6">
            StudentAssist in the <span className="text-gradient">News</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Get the latest news, press releases, and media assets about StudentAssist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-brand-blue hover:bg-brand-dark-blue rounded-xl px-8 h-12 gap-2"
              onClick={() => toast.info('Press kit download - coming soon!')}
            >
              <Download className="w-5 h-5" />
              Download Press Kit
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl px-8 h-12 gap-2"
              onClick={() => window.location.href = 'mailto:press@studentassist.com'}
            >
              <Mail className="w-5 h-5" />
              Contact Press Team
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-brand-dark-blue mb-2">50K+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-dark-blue mb-2">200+</p>
              <p className="text-gray-600">Universities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-dark-blue mb-2">$5M</p>
              <p className="text-gray-600">Series A Funding</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-dark-blue mb-2">25</p>
              <p className="text-gray-600">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div 
                key={release.id}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-brand-bg transition-colors cursor-pointer"
                onClick={() => toast.info(`Reading: ${release.title}`)}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </div>
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2">{release.title}</h3>
                <p className="text-gray-600">{release.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-8">Media Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaCoverage.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
                onClick={() => toast.info(`Opening: ${article.title}`)}
              >
                <p className="text-brand-blue font-semibold mb-2">{article.outlet}</p>
                <h3 className="font-bold text-brand-dark-blue mb-3">{article.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark-blue mb-8">Media Assets</h2>
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            {mediaAssets.map((asset, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-6 ${index !== mediaAssets.length - 1 ? 'border-b' : ''}`}
              >
                <div>
                  <h3 className="font-semibold text-brand-dark-blue">{asset.name}</h3>
                  <p className="text-sm text-gray-500">{asset.format} • {asset.size}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl gap-2"
                  onClick={() => toast.info(`Downloading: ${asset.name}`)}
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-brand-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Media Inquiries</h2>
          <p className="text-white/80 mb-8">
            For press inquiries, interview requests, or additional information, please contact our press team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-white text-brand-blue hover:bg-gray-100 rounded-xl gap-2"
              onClick={() => window.location.href = 'mailto:press@studentassist.com'}
            >
              <Mail className="w-5 h-5" />
              press@studentassist.com
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
