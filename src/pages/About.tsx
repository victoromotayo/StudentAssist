import { ArrowLeft, Zap, Users, Target, Heart, Globe, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const stats = [
  { value: '50K+', label: 'Active Students', icon: Users },
  { value: '200+', label: 'Partner Universities', icon: Globe },
  { value: '4.9', label: 'App Rating', icon: Award },
  { value: '1M+', label: 'Monthly Searches', icon: TrendingUp },
];

const values = [
  {
    icon: Users,
    title: 'Student-First',
    description: 'Every decision we make starts with what\'s best for students.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every feature and interaction.',
  },
  {
    icon: Heart,
    title: 'Community',
    description: 'Building connections that make campus life better for everyone.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Your safety and privacy are our top priorities.',
  },
];

import { Shield } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Former student housing advocate with a passion for improving campus life.',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Tech enthusiast who believes technology should simplify student life.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Product leader focused on creating intuitive user experiences.',
  },
  {
    name: 'Emily Park',
    role: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    bio: 'Building relationships with universities and service providers nationwide.',
  },
];

export default function About() {
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
            About Us
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-brand-dark-blue mb-6">
            Simplifying student life, <span className="text-gradient">one click at a time</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            StudentAssist was born from a simple idea: make campus life easier for students. 
            What started as a dorm room project has grown into a platform serving 50,000+ students 
            across 200+ universities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-brand-blue hover:bg-brand-dark-blue rounded-xl px-8 h-12"
              onClick={() => toast.info('Join team - coming soon!')}
            >
              Join Our Team
            </Button>
            <Link to="/">
              <Button variant="outline" className="rounded-xl px-8 h-12">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <p className="text-4xl font-bold text-brand-dark-blue mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-to-br from-brand-dark-blue to-[#0f1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                We believe every student deserves easy access to the resources they need to thrive. 
                Our mission is to create a connected campus ecosystem where students can effortlessly 
                find housing, discover great food, connect with roommates, and navigate their university 
                with confidence.
              </p>
              <p className="text-lg text-gray-300">
                By bringing essential services together in one platform, we're not just saving students 
                time—we're helping them build communities and make the most of their college experience.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <value.icon className="w-10 h-10 text-brand-blue mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to improving student life across the country.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg text-brand-dark-blue">{member.name}</h3>
                <p className="text-brand-blue text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-dark-blue mb-6">Join the Movement</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're a student looking to simplify your life or a university wanting to partner 
            with us, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-brand-blue hover:bg-brand-dark-blue rounded-xl px-8 h-12"
              onClick={() => toast.info('Partner form - coming soon!')}
            >
              Partner With Us
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl px-8 h-12"
              onClick={() => toast.info('Contact form - coming soon!')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
