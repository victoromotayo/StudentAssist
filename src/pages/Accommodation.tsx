import { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Home, 
  Bed, 
  Bath, 
  Users, 
  Star,
  Heart,
  Filter,
  CheckCircle,
  Wifi,
  Car,
  Droplets,
  Flame,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import AuthModal from '../components/modals/AuthModal';

const listings = [
  {
    id: 1,
    title: 'Modern Studio Near Campus',
    location: '0.3 miles from University',
    price: 850,
    rating: 4.8,
    reviews: 24,
    beds: 1,
    baths: 1,
    guests: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    amenities: ['wifi', 'parking', 'laundry'],
    verified: true,
    featured: true,
  },
  {
    id: 2,
    title: 'Shared Student Apartment',
    location: '0.5 miles from University',
    price: 650,
    rating: 4.6,
    reviews: 18,
    beds: 2,
    baths: 1,
    guests: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    amenities: ['wifi', 'laundry'],
    verified: true,
    featured: false,
  },
  {
    id: 3,
    title: 'Cozy Private Room',
    location: '0.8 miles from University',
    price: 550,
    rating: 4.9,
    reviews: 32,
    beds: 1,
    baths: 1,
    guests: 1,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    amenities: ['wifi', 'parking'],
    verified: true,
    featured: false,
  },
  {
    id: 4,
    title: 'Luxury Student Housing',
    location: '0.2 miles from University',
    price: 1200,
    rating: 4.7,
    reviews: 45,
    beds: 2,
    baths: 2,
    guests: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    amenities: ['wifi', 'parking', 'laundry', 'gym'],
    verified: true,
    featured: true,
  },
  {
    id: 5,
    title: 'Budget Friendly Dorm',
    location: 'On Campus',
    price: 400,
    rating: 4.3,
    reviews: 67,
    beds: 1,
    baths: 1,
    guests: 1,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop',
    amenities: ['wifi', 'laundry'],
    verified: true,
    featured: false,
  },
  {
    id: 6,
    title: 'Spacious 3BR House',
    location: '1.2 miles from University',
    price: 1800,
    rating: 4.8,
    reviews: 12,
    beds: 3,
    baths: 2,
    guests: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    amenities: ['wifi', 'parking', 'laundry'],
    verified: true,
    featured: true,
  },
];

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Car className="w-4 h-4" />,
  laundry: <Droplets className="w-4 h-4" />,
  gym: <Flame className="w-4 h-4" />,
};

export default function Accommodation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
    toast.success(favorites.includes(id) ? 'Removed from favorites' : 'Added to favorites');
  };

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (priceRange === 'low') return matchesSearch && listing.price < 600;
    if (priceRange === 'mid') return matchesSearch && listing.price >= 600 && listing.price < 1000;
    if (priceRange === 'high') return matchesSearch && listing.price >= 1000;
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
                  <h1 className="text-xl font-bold text-brand-dark-blue">Accommodation</h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Find your perfect home away from home</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700">{listings.length} verified listings</span>
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
          
          {/* Mobile Menu */}
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
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by location or property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 rounded-xl"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button 
                variant={priceRange === 'all' ? 'default' : 'outline'}
                onClick={() => setPriceRange('all')}
                className="rounded-xl whitespace-nowrap"
              >
                All Prices
              </Button>
              <Button 
                variant={priceRange === 'low' ? 'default' : 'outline'}
                onClick={() => setPriceRange('low')}
                className="rounded-xl whitespace-nowrap"
              >
                Under $600
              </Button>
              <Button 
                variant={priceRange === 'mid' ? 'default' : 'outline'}
                onClick={() => setPriceRange('mid')}
                className="rounded-xl whitespace-nowrap"
              >
                $600-$1000
              </Button>
              <Button 
                variant={priceRange === 'high' ? 'default' : 'outline'}
                onClick={() => setPriceRange('high')}
                className="rounded-xl whitespace-nowrap"
              >
                $1000+
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-brand-dark-blue">{filteredListings.length}</span> properties
          </p>
          <Button 
            variant="outline" 
            className="rounded-xl gap-2"
            onClick={() => toast.info('More filters coming soon!')}
          >
            <Filter className="w-4 h-4" />
            More Filters
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div 
              key={listing.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button
                  onClick={() => toggleFavorite(listing.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${favorites.includes(listing.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
                  />
                </button>
                {listing.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brand-blue text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
                {listing.verified && (
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-brand-dark-blue line-clamp-1">{listing.title}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{listing.rating}</span>
                    <span className="text-gray-400">({listing.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {listing.location}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {listing.beds} {listing.beds === 1 ? 'Bed' : 'Beds'}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {listing.baths} {listing.baths === 1 ? 'Bath' : 'Baths'}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {listing.guests} Guests
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {listing.amenities.map(amenity => (
                    <div key={amenity} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600" title={amenity}>
                      {amenityIcons[amenity]}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-brand-dark-blue">${listing.price}</span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                  <Button 
                    className="bg-brand-blue hover:bg-brand-dark-blue rounded-xl"
                    onClick={() => toast.info('Property details - coming soon!')}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-16">
            <Home className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No listings found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} defaultMode="signin" />
    </div>
  );
}
