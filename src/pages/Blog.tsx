import { ArrowLeft, Zap, Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useState } from 'react';

const featuredPost = {
  id: 1,
  title: 'The Ultimate Guide to Finding Your Perfect College Roommate',
  excerpt: 'Finding the right roommate can make or break your college experience. Learn the essential tips and strategies to find someone compatible with your lifestyle.',
  image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
  author: 'Sarah Chen',
  date: 'Mar 5, 2026',
  readTime: '8 min read',
  category: 'Housing',
};

const posts = [
  {
    id: 2,
    title: '10 Best Study Spots on Campus You Didn\'t Know About',
    excerpt: 'Discover hidden gems perfect for focused study sessions, from quiet libraries to cozy cafes.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
    author: 'Marcus Johnson',
    date: 'Mar 3, 2026',
    readTime: '5 min read',
    category: 'Campus Life',
  },
  {
    id: 3,
    title: 'How to Eat Well on a Student Budget',
    excerpt: 'Nutritious meals don\'t have to break the bank. Here are our top tips for eating healthy while saving money.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    author: 'Emily Park',
    date: 'Mar 1, 2026',
    readTime: '6 min read',
    category: 'Food',
  },
  {
    id: 4,
    title: 'Mastering Campus Navigation: Tips from Upperclassmen',
    excerpt: 'Never be late to class again with these insider tips for getting around campus efficiently.',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop',
    author: 'Alex Rivera',
    date: 'Feb 28, 2026',
    readTime: '4 min read',
    category: 'Tips',
  },
  {
    id: 5,
    title: 'The Complete Guide to On-Campus Laundry',
    excerpt: 'Everything you need to know about doing laundry at college, from machine locations to stain removal hacks.',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc1725a542c?w=600&h=400&fit=crop',
    author: 'Sarah Chen',
    date: 'Feb 25, 2026',
    readTime: '7 min read',
    category: 'Life Hacks',
  },
  {
    id: 6,
    title: 'Building Your College Network: Beyond the Classroom',
    excerpt: 'Learn how to build meaningful connections that will benefit you throughout your college years and beyond.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
    author: 'Marcus Johnson',
    date: 'Feb 22, 2026',
    readTime: '6 min read',
    category: 'Social',
  },
  {
    id: 7,
    title: 'Student Discounts You\'re Probably Missing Out On',
    excerpt: 'From software to streaming services, discover all the discounts available to students.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    author: 'Emily Park',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    category: 'Money',
  },
];

const categories = ['All', 'Housing', 'Campus Life', 'Food', 'Tips', 'Life Hacks', 'Social', 'Money'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
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
      <section className="bg-gradient-to-br from-brand-blue to-brand-dark-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            StudentAssist Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tips, Guides & Campus Life
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about making the most of your college experience.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {!searchQuery && selectedCategory === 'All' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="bg-white rounded-3xl overflow-hidden shadow-card cursor-pointer hover:shadow-card-hover transition-shadow"
              onClick={() => toast.info(`Reading: ${featuredPost.title}`)}
            >
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-brand-bg text-brand-blue text-sm font-medium rounded-full w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark-blue mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button className="w-fit bg-brand-blue hover:bg-brand-dark-blue rounded-xl gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-dark-blue mb-8">
            {searchQuery ? 'Search Results' : 'Latest Articles'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
                onClick={() => toast.info(`Reading: ${post.title}`)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-brand-bg text-brand-blue text-xs font-medium rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-lg text-brand-dark-blue mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
          <p className="text-white/80 mb-8">
            Get the latest tips, guides, and campus news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button 
              className="h-12 bg-white text-brand-blue hover:bg-gray-100 rounded-xl font-semibold"
              onClick={() => toast.success('Subscribed successfully!')}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
