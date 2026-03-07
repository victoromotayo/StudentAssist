import { ArrowLeft, Zap, MapPin, Briefcase, DollarSign, CheckCircle, ArrowRight, Users, Coffee, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'We offer market-leading compensation packages.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage.',
  },
  {
    icon: Coffee,
    title: 'Flexible PTO',
    description: 'Unlimited paid time off to recharge and refresh.',
  },
  {
    icon: Users,
    title: 'Remote Friendly',
    description: 'Work from anywhere or join us at our HQ.',
  },
];

const openings = [
  {
    id: 1,
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    salary: '$120K - $180K',
    description: 'Build scalable features that impact 50K+ students daily.',
    requirements: ['5+ years experience', 'React & Node.js', 'Database design'],
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$90K - $140K',
    description: 'Create beautiful, intuitive experiences for students.',
    requirements: ['3+ years experience', 'Figma expert', 'User research'],
  },
  {
    id: 3,
    title: 'University Partnerships Manager',
    department: 'Growth',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80K - $120K',
    description: 'Expand our network of university partners nationwide.',
    requirements: ['Sales experience', 'Relationship building', 'Travel required'],
  },
  {
    id: 4,
    title: 'Customer Success Specialist',
    department: 'Support',
    location: 'Remote',
    type: 'Full-time',
    salary: '$50K - $70K',
    description: 'Help students get the most out of StudentAssist.',
    requirements: ['Customer service exp', 'Excellent communication', 'Problem solver'],
  },
  {
    id: 5,
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Remote',
    type: 'Internship',
    salary: '$20/hr',
    description: 'Learn marketing while helping grow our student community.',
    requirements: ['Currently enrolled', 'Social media savvy', 'Creative mindset'],
  },
];

export default function Careers() {
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
      <section className="bg-gradient-to-br from-brand-blue to-brand-dark-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            We're Hiring!
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Join our mission to <br /> simplify student life
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Be part of a team that's making a real difference in the lives of students across the country.
          </p>
          <Button 
            className="bg-white text-brand-blue hover:bg-gray-100 rounded-xl px-8 h-12 font-semibold"
            onClick={() => {
              document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Openings
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take care of our team so they can focus on taking care of students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-bg transition-colors">
                <div className="w-14 h-14 rounded-xl bg-brand-blue flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-brand-dark-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-dark-blue mb-6">Our Culture</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark-blue mb-1">Impact-Driven</h3>
                    <p className="text-gray-600">Everything we do is focused on making students' lives better.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark-blue mb-1">Growth Mindset</h3>
                    <p className="text-gray-600">We invest in your professional development and learning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark-blue mb-1">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible schedules and unlimited PTO to keep you refreshed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-dark-blue mb-1">Diverse & Inclusive</h3>
                    <p className="text-gray-600">We celebrate diversity and create an inclusive environment for all.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                alt="Team meeting"
                className="rounded-2xl mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop" 
                alt="Office space"
                className="rounded-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop" 
                alt="Team celebration"
                className="rounded-2xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-dark-blue mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Find your perfect role and help us make a difference.
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div 
                key={job.id}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-brand-blue/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-xl text-brand-dark-blue">{job.title}</h3>
                      <span className="px-3 py-1 bg-brand-bg text-brand-blue text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <Button 
                    className="bg-brand-blue hover:bg-brand-dark-blue rounded-xl"
                    onClick={() => toast.info(`Application for ${job.title} - coming soon!`)}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-500 mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req) => (
                      <span key={req} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-brand-bg rounded-2xl">
            <h3 className="font-bold text-xl text-brand-dark-blue mb-2">Don't see your role?</h3>
            <p className="text-gray-600 mb-4">
              We're always looking for talented people. Send us your resume and we'll keep you in mind.
            </p>
            <Button 
              variant="outline" 
              className="rounded-xl"
              onClick={() => toast.info('General application - coming soon!')}
            >
              Send General Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
