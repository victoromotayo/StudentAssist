import { useEffect, useState } from 'react';
import { 
  Home, 
  Utensils, 
  Users, 
  Coffee, 
  MapPin, 
  WashingMachine,
  ArrowRight,
  Star,
  CheckCircle,
  Menu,
  X,
  Play,
  Shield,
  Clock,
  Zap,
  MessageCircle,
  Heart,
  Search,
  Navigation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import './App.css';

// Import Pages
import Accommodation from './pages/Accommodation';
import Restaurant from './pages/Restaurant';
import Roommates from './pages/Roommates';
import Cafe from './pages/Cafe';
import SchoolMaps from './pages/SchoolMaps';
import Laundry from './pages/Laundry';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Press from './pages/Press';

// Import Modals
import AuthModal from './components/modals/AuthModal';
import ContactModal from './components/modals/ContactModal';

// Navigation Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSignIn = () => {
    setAuthMode('signin');
    setIsAuthOpen(true);
  };

  const openSignUp = () => {
    setAuthMode('signup');
    setIsAuthOpen(true);
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-brand-dark-blue' : 'text-brand-dark-blue'}`}>
                Student<span className="text-brand-blue">Assist</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-all hover:text-brand-blue relative group ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-brand-blue hover:bg-brand-bg"
                onClick={openSignIn}
              >
                Sign In
              </Button>
              <Button 
                className="bg-brand-blue hover:bg-brand-dark-blue text-white btn-hover rounded-xl px-6"
                onClick={openSignUp}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col gap-4 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                  <Button variant="ghost" className="justify-start" onClick={openSignIn}>Sign In</Button>
                  <Button className="bg-brand-blue hover:bg-brand-dark-blue text-white" onClick={openSignUp}>Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} defaultMode={authMode} />
    </>
  );
}

// Hero Section
function HeroSection() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const services = [
    { icon: Home, label: 'Accommodation', color: 'bg-blue-500', delay: 0, link: '/accommodation' },
    { icon: Utensils, label: 'Restaurants', color: 'bg-orange-500', delay: 0.5, link: '/restaurants' },
    { icon: Users, label: 'Roommates', color: 'bg-green-500', delay: 1, link: '/roommates' },
    { icon: Coffee, label: 'Cafes', color: 'bg-amber-600', delay: 1.5, link: '/cafes' },
    { icon: MapPin, label: 'Maps', color: 'bg-red-500', delay: 2, link: '/maps' },
    { icon: WashingMachine, label: 'Laundry', color: 'bg-cyan-500', delay: 2.5, link: '/laundry' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-brand-bg to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full diagonal-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-pale-blue/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-light-blue/20 rounded-full blur-3xl animate-float-slow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-bg border border-brand-pale-blue/30 animate-fade-in">
              <Star className="w-4 h-4 text-brand-blue fill-brand-blue" />
              <span className="text-sm font-medium text-brand-dark-blue">Trusted by 50,000+ students</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark-blue leading-tight animate-slide-up">
              All-in-one{' '}
              <span className="text-gradient">student</span>{' '}
              assistant
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg animate-slide-up stagger-1">
              A comprehensive platform designed to simplify student life by connecting you with essential services, resources, and opportunities.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-dark-blue text-white btn-hover rounded-xl px-8 h-14 text-base"
                onClick={() => setIsAuthOpen(true)}
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-xl px-8 h-14 text-base border-2 hover:bg-brand-bg hover:border-brand-blue group"
                onClick={() => toast.info('Demo video coming soon!')}
              >
                <Play className="w-5 h-5 mr-2 text-brand-blue group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 animate-slide-up stagger-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Phone with Orbiting Services */}
          <div className="relative flex items-center justify-center">
            {/* Central Phone */}
            <div className="relative z-10 animate-float">
              <img 
                src="/images/hero-phone.png" 
                alt="Student Assist App" 
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
            
            {/* Orbiting Service Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              {services.map((service, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <Link
                    key={service.label}
                    to={service.link}
                    className="absolute animate-pulse-glow cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      animationDelay: `${service.delay}s`,
                    }}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-blue rounded-full opacity-20 blur-xl animate-float-slow" />
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} defaultMode="signup" />
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Accommodation',
      description: 'Find verified housing options near campus with virtual tours and price comparisons.',
      image: '/images/accommodation.png',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      link: '/accommodation',
    },
    {
      icon: Utensils,
      title: 'Restaurant & Eateries',
      description: 'Discover top-rated campus restaurants with student discounts and reviews.',
      image: '/images/restaurant.png',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      link: '/restaurants',
    },
    {
      icon: Users,
      title: 'Roommates Finder',
      description: 'Connect with compatible roommates based on lifestyle and preferences.',
      image: '/images/roommates.png',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      link: '/roommates',
    },
    {
      icon: Coffee,
      title: 'Study Cafes',
      description: 'Find the perfect study spots with Wi-Fi, power outlets, and great coffee.',
      image: '/images/cafe.png',
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      link: '/cafes',
    },
    {
      icon: MapPin,
      title: 'School Maps',
      description: 'Navigate campus with interactive maps and real-time directions.',
      image: '/images/school-maps.png',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      link: '/maps',
    },
    {
      icon: WashingMachine,
      title: 'Laundry Services',
      description: 'Find on-campus laundry facilities and track machine availability.',
      image: '/images/laundry.png',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      link: '/laundry',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg text-brand-blue text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark-blue mb-6">
            Simplifying <span className="text-gradient">student life</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need for a successful campus experience, all in one place.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-card card-hover border border-gray-100 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={`h-48 ${service.bgColor} flex items-center justify-center overflow-hidden`}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark-blue mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand-blue font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find exactly what you need with our AI-powered search that understands student needs.',
    },
    {
      icon: Shield,
      title: 'Verified Listings',
      description: 'All accommodations and services are verified for your safety and peace of mind.',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get instant notifications about availability, deals, and important updates.',
    },
    {
      icon: MessageCircle,
      title: 'Direct Messaging',
      description: 'Connect directly with landlords, roommates, and service providers.',
    },
    {
      icon: Navigation,
      title: 'Easy Navigation',
      description: 'Find your way around campus with detailed maps and turn-by-turn directions.',
    },
    {
      icon: Heart,
      title: 'Save Favorites',
      description: 'Bookmark your favorite places and create your own personalized lists.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-brand-bg to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full diagonal-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/service-center.png" 
                alt="Features"
                className="w-full max-w-lg mx-auto animate-float-slow"
              />
            </div>
            
            {/* Decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-pale-blue/20 rounded-full blur-3xl -z-10" />
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-dark-blue">50k+</p>
                  <p className="text-xs text-gray-500">Active Users</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-card animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center">
                  <Star className="w-5 h-5 text-brand-blue fill-brand-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-dark-blue">4.9</p>
                  <p className="text-xs text-gray-500">App Rating</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Features Grid */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-brand-blue text-sm font-semibold mb-4 border border-brand-pale-blue/30">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark-blue mb-6">
              Features designed for <span className="text-gradient">students</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We have built every feature with student needs in mind, making campus life easier and more enjoyable.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="group p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 hover:shadow-card-hover hover:border-brand-pale-blue/30 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:scale-110 transition-all">
                    <feature.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark-blue mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up and tell us about your preferences, needs, and campus location.',
      icon: Users,
    },
    {
      number: '02',
      title: 'Explore Services',
      description: 'Browse through our comprehensive list of student services and resources.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Connect & Enjoy',
      description: 'Connect with service providers and start enjoying a simplified student life.',
      icon: Heart,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg text-brand-blue text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark-blue mb-6">
            Get started in <span className="text-gradient">3 easy steps</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our platform is designed to be intuitive and easy to use. Start your journey in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-brand-blue to-brand-pale-blue" />
              )}
              
              <div className="relative bg-gradient-to-br from-white to-brand-bg rounded-3xl p-8 border border-gray-100 hover:shadow-card-hover transition-all group-hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center text-white text-2xl font-bold shadow-glow">
                  {step.number}
                </div>
                
                <div className="pt-8">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-brand-blue" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-dark-blue mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      avatar: 'SJ',
      content: 'StudentAssist helped me find the perfect apartment near campus. The verified listings gave me peace of mind, and I found an amazing roommate through the app!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Major',
      avatar: 'MC',
      content: 'The campus map feature is a lifesaver! I never get lost anymore, and I have discovered so many great study spots and cafes I did not know existed.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Engineering Student',
      avatar: 'ER',
      content: 'I love how easy it is to find restaurants with student discounts. The app has saved me so much money on food throughout the semester!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-brand-dark-blue to-[#0f1a2e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-pattern" />
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-light-blue/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-pale-blue text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by <span className="text-gradient">students</span> worldwide
          </h2>
          <p className="text-lg text-gray-300">
            See what students are saying about their experience with StudentAssist.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-brand-bg to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 diagonal-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-pale-blue/30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-light-blue/30 rounded-full blur-2xl animate-float-slow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-blue to-brand-dark-blue rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 grid-pattern" />
          </div>
          
          {/* Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to simplify your student life?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Join 50,000+ students already using StudentAssist to make campus life easier, more connected, and more enjoyable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-blue hover:bg-gray-100 btn-hover rounded-xl px-8 h-14 text-base font-semibold"
                  onClick={() => setIsAuthOpen(true)}
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-8 h-14 text-base"
                  onClick={() => toast.info('Contact sales - coming soon!')}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
            
            {/* Illustration */}
            <div className="relative hidden lg:block">
              <img 
                src="/images/hero-phone.png" 
                alt="Get Started"
                className="w-full max-w-md mx-auto animate-float-slow"
              />
            </div>
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} defaultMode="signup" />
    </section>
  );
}

// Footer
function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const footerLinks = {
    Services: [
      { name: 'Accommodation', link: '/accommodation' },
      { name: 'Restaurants', link: '/restaurants' },
      { name: 'Roommates', link: '/roommates' },
      { name: 'Cafes', link: '/cafes' },
      { name: 'Maps', link: '/maps' },
      { name: 'Laundry', link: '/laundry' },
    ],
    Company: [
      { name: 'About Us', link: '/about' },
      { name: 'Careers', link: '/careers' },
      { name: 'Blog', link: '/blog' },
      { name: 'Press', link: '/press' },
    ],
    Support: [
      { name: 'Help Center', action: () => setIsContactOpen(true) },
      { name: 'Contact Us', action: () => setIsContactOpen(true) },
      { name: 'Privacy Policy', action: () => toast.info('Privacy Policy - coming soon!') },
      { name: 'Terms of Service', action: () => toast.info('Terms of Service - coming soon!') },
    ],
  };

  return (
    <footer className="bg-brand-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-light-blue flex items-center justify-center shadow-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">
                Student<span className="text-brand-blue">Assist</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              The all-in-one platform designed to simplify student life by connecting you with essential services and resources.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  onClick={() => toast.info(`${social} - coming soon!`)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors"
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((service) => (
                <li key={service.name}>
                  <Link to={service.link} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((item) => (
                <li key={item.name}>
                  <Link to={item.link} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.Support.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={item.action}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 StudentAssist. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button onClick={() => toast.info('Privacy Policy - coming soon!')} className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => toast.info('Terms of Service - coming soon!')} className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </button>
            <button onClick={() => toast.info('Cookie Policy - coming soon!')} className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Main App
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" richColors />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/roommates" element={<Roommates />} />
          <Route path="/cafes" element={<Cafe />} />
          <Route path="/maps" element={<SchoolMaps />} />
          <Route path="/laundry" element={<Laundry />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
