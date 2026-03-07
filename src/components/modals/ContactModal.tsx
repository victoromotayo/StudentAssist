import { useState } from 'react';
import { X, Mail, Send, User, CheckCircle, HelpCircle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

const faqs = [
  {
    question: 'How do I verify my student status?',
    answer: 'You can verify your student status by uploading your student ID or using your university email during registration.',
  },
  {
    question: 'Are the listings verified?',
    answer: 'Yes! All accommodation and service listings are verified by our team to ensure safety and accuracy.',
  },
  {
    question: 'How does the roommate matching work?',
    answer: 'Our algorithm matches you based on lifestyle preferences, budget, cleanliness habits, and interests.',
  },
  {
    question: 'Is StudentAssist free to use?',
    answer: 'Yes! StudentAssist is completely free for students. Some premium features may be added in the future.',
  },
];

export default function ContactModal({ isOpen, onClose, defaultSubject = '' }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<'contact' | 'faq'>('contact');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject,
    message: '',
    category: 'general',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you within 24 hours.',
    });

    setIsLoading(false);
    onClose();
    setFormData({ name: '', email: '', subject: '', message: '', category: 'general' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-brand-blue to-brand-dark-blue p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Help Center</h2>
          <p className="text-white/80">Get support or find answers to common questions</p>
          
          {/* Tabs */}
          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'contact' 
                  ? 'bg-white text-brand-blue' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'faq' 
                  ? 'bg-white text-brand-blue' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'contact' ? (
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="pl-10 h-12 rounded-xl"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="you@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12 rounded-xl"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              >
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Support</option>
                <option value="listing">Listing Issue</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="h-12 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                placeholder="Describe your issue or question in detail..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-32 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-brand-blue hover:bg-brand-dark-blue rounded-xl text-base font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </span>
              )}
            </Button>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-4">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Response within 24h
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-brand-blue" />
                Secure & Private
              </span>
            </div>
          </form>
        ) : (
          <div className="p-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <span className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-brand-bg rounded-2xl text-center">
              <HelpCircle className="w-12 h-12 text-brand-blue mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Still have questions?</h3>
              <p className="text-gray-600 text-sm mb-4">Can't find the answer you're looking for?</p>
              <Button
                onClick={() => setActiveTab('contact')}
                className="bg-brand-blue hover:bg-brand-dark-blue rounded-xl"
              >
                Contact Support
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
