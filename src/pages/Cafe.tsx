import { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Star,
  Heart,
  Clock,
  Wifi,
  Zap,
  Coffee,
  Laptop,
  Volume2,
  CheckCircle,
  Navigation,
  Users,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import AuthModal from '../components/modals/AuthModal';

const cafes = [
  {
    id: 1,
    name: 'Study Grounds',
    description: 'Quiet study cafe with plenty of outlets',
    location: 'Library Building, Ground Floor',
    distance: '0.1 miles',
    rating: 4.9,
    reviews: 423,
    priceRange: '$',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
    hours: '6:00 AM - 12:00 AM',
    features: {
      wifi: true,
      outlets: true,
      quiet: true,
      groupFriendly: false,
    },
    noiseLevel: 'Quiet',
    seating: '40 seats',
    studentDiscount: '10% off with ID',
    specialties: ['Espresso', 'Pastries', 'Sandwiches'],
  },
  {
    id: 2,
    name: 'The Grind',
    description: 'Hip cafe perfect for group study sessions',
    location: 'Student Center',
    distance: '0.2 miles',
    rating: 4.6,
    reviews: 289,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop',
    hours: '7:00 AM - 11:00 PM',
    features: {
      wifi: true,
      outlets: true,
      quiet: false,
      groupFriendly: true,
    },
    noiseLevel: 'Moderate',
    seating: '60 seats',
    studentDiscount: 'Free refill with ID',
    specialties: ['Cold Brew', 'Bagels', 'Smoothies'],
  },
  {
    id: 3,
    name: 'Campus Perks',
    description: '24/7 coffee shop for late night cramming',
    location: 'Science Complex',
    distance: '0.4 miles',
    rating: 4.4,
    reviews: 198,
    priceRange: '$',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
    hours: 'Open 24/7',
    features: {
      wifi: true,
      outlets: true,
      quiet: true,
      groupFriendly: false,
    },
    noiseLevel: 'Quiet',
    seating: '30 seats',
    studentDiscount: '15% off after 10 PM',
    specialties: ['Late Night Coffee', 'Snacks'],
  },
  {
    id: 4,
    name: 'Bean There',
    description: 'Artisan coffee with cozy atmosphere',
    location: 'Arts District',
    distance: '0.6 miles',
    rating: 4.8,
    reviews: 312,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=600&fit=crop',
    hours: '7:00 AM - 9:00 PM',
    features: {
      wifi: true,
      outlets: true,
      quiet: false,
      groupFriendly: true,
    },
    noiseLevel: 'Moderate',
    seating: '50 seats',
    studentDiscount: 'Student combo deal',
    specialties: ['Pour Over', 'Croissants', 'Quiche'],
  },
  {
    id: 5,
    name: 'Focus Cafe',
    description: 'Silent study zone with premium coffee',
    location: 'Graduate Building',
    distance: '0.3 miles',
    rating: 4.7,
    reviews: 156,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop',
    hours: '8:00 AM - 10:00 PM',
    features: {
      wifi: true,
      outlets: true,
      quiet: true,
      groupFriendly: false,
    },
    noiseLevel: 'Silent',
    seating: '25 seats',
    studentDiscount: 'Grad student special: 20% off',
    specialties: ['Single Origin', 'Study Snacks'],
  },
  {
    id: 6,
    name: 'Social Brew',
    description: 'Great for group projects and meetings',
    location: 'Business School',
    distance: '0.5 miles',
    rating: 4.5,
    reviews: 234,
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    hours: '7:00 AM - 8:00 PM',
    features: {
      wifi: true,
      outlets: true,
      quiet: false,
      groupFriendly: true,
    },
    noiseLevel: 'Lively',
    seating: '80 seats',
    studentDiscount: 'Group discounts available',
    specialties: ['Latte Art', 'Paninis', 'Desserts'],
  },
];

const noiseLevelColors: Record<string, string> = {
  'Silent': 'bg-red-100 text-red-700',
  'Quiet': 'bg-green-100 text-green-700',
  'Moderate': 'bg-yellow-100 text-yellow-700',
  'Lively': 'bg-blue-100 text-blue-700',
};

export default function Cafe() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'quiet' | 'group' | '24h'>('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
    toast.success(favorites.includes(id) ? 'Removed from favorites' : 'Added to favorites');
  };

  const filteredCafes = cafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cafe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'quiet') return matchesSearch && cafe.features.quiet;
    if (selectedFilter === 'group') return matchesSearch && cafe.features.groupFriendly;
    if (selectedFilter === '24h') return matchesSearch && cafe.hours.includes('24/7');
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
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
                <div>
                  <h1 className="text-xl font-bold text-brand-dark-blue">Study Cafes</h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Find the perfect spot to study</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                <Coffee className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-amber-700">{cafes.length} cafes nearby</span>
              </div>
              <Button 
                variant="ghost" 
                className="hidden sm:flex"
                onClick={() => setIsAuthOpen(true)}
              >
                Sign In
              </Button>
              <Button 
                className="hidden sm:flex bg-brand-blue hover:bg-brand-dark-blue rounded-xl"
                onClick={() => setIsAuthOpen(true)}
              >
                Get Started
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {isMobileMenuOpen && (
            <div className="sm:hidden mt-4 pt-4 border-t">
              <div className="flex flex-col gap-2">
                <Button variant="ghost" onClick={() => setIsAuthOpen(true)}>Sign In</Button>
                <Button className="bg-brand-blue" onClick={() => setIsAuthOpen(true)}>Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search & Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search cafes by name or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('all')}
              className="rounded-full whitespace-nowrap"
            >
              All Cafes
            </Button>
            <Button
              variant={selectedFilter === 'quiet' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('quiet')}
              className="rounded-full whitespace-nowrap gap-2"
            >
              <Volume2 className="w-4 h-4" />
              Quiet Study
            </Button>
            <Button
              variant={selectedFilter === 'group' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('group')}
              className="rounded-full whitespace-nowrap gap-2"
            >
              <Users className="w-4 h-4" />
              Group Friendly
            </Button>
            <Button
              variant={selectedFilter === '24h' ? 'default' : 'outline'}
              onClick={() => setSelectedFilter('24h')}
              className="rounded-full whitespace-nowrap gap-2"
            >
              <Clock className="w-4 h-4" />
              Open 24/7
            </Button>
          </div>
        </div>
      </div>

      {/* Cafes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-brand-dark-blue">{filteredCafes.length}</span> cafes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCafes.map((cafe) => (
            <div 
              key={cafe.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cafe.image} 
                  alt={cafe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(cafe.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${favorites.includes(cafe.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur text-gray-800 text-sm font-semibold rounded-full">
                  {cafe.priceRange}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-lg text-brand-dark-blue">{cafe.name}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{cafe.rating}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-3">{cafe.description}</p>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {cafe.location}
                  <span className="text-gray-400">• {cafe.distance}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  {cafe.hours}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {cafe.features.wifi && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">
                      <Wifi className="w-3 h-3" />
                      Free WiFi
                    </span>
                  )}
                  {cafe.features.outlets && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md">
                      <Zap className="w-3 h-3" />
                      Outlets
                    </span>
                  )}
                  <span className={`px-2 py-1 text-xs rounded-md ${noiseLevelColors[cafe.noiseLevel]}`}>
                    {cafe.noiseLevel}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    <Laptop className="w-3 h-3 inline mr-1" />
                    {cafe.seating}
                  </span>
                </div>

                {cafe.studentDiscount && (
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg mb-4">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-700 font-medium">{cafe.studentDiscount}</span>
                  </div>
                )}

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cafe.specialties.map((specialty) => (
                    <span 
                      key={specialty}
                      className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl gap-2"
                    onClick={() => toast.info(`Viewing menu for ${cafe.name}...`)}
                  >
                    <Coffee className="w-4 h-4" />
                    Menu
                  </Button>
                  <Button 
                    className="flex-1 bg-brand-blue hover:bg-brand-dark-blue rounded-xl gap-2"
                    onClick={() => toast.info(`Getting directions to ${cafe.name}...`)}
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCafes.length === 0 && (
          <div className="text-center py-16">
            <Coffee className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No cafes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} defaultMode="signin" />
    </div>
  );
}
