import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  WashingMachine,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  CreditCard,
  Navigation,
  Droplets,
  Wind,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import AuthModal from '../components/modals/AuthModal';

interface Machine {
  id: string;
  type: 'washer' | 'dryer';
  status: 'available' | 'in-use' | 'out-of-order';
  timeRemaining?: number;
  size: 'small' | 'medium' | 'large';
  price: number;
}

interface LaundryFacility {
  id: number;
  name: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  image: string;
  hours: string;
  machines: Machine[];
  features: string[];
  paymentMethods: string[];
}

const initialFacilities: LaundryFacility[] = [
  {
    id: 1,
    name: 'North Hall Laundry',
    location: 'North Residence Hall, Basement',
    distance: '0.1 miles',
    rating: 4.5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&h=600&fit=crop',
    hours: '24/7',
    machines: [
      { id: 'W1', type: 'washer', status: 'available', size: 'medium', price: 2.50 },
      { id: 'W2', type: 'washer', status: 'in-use', timeRemaining: 18, size: 'medium', price: 2.50 },
      { id: 'W3', type: 'washer', status: 'available', size: 'large', price: 3.50 },
      { id: 'D1', type: 'dryer', status: 'available', size: 'medium', price: 2.00 },
      { id: 'D2', type: 'dryer', status: 'in-use', timeRemaining: 32, size: 'medium', price: 2.00 },
      { id: 'D3', type: 'dryer', status: 'out-of-order', size: 'medium', price: 2.00 },
    ],
    features: ['24/7 Access', 'Card Payment', 'Detergent Vending'],
    paymentMethods: ['Card', 'App'],
  },
  {
    id: 2,
    name: 'Student Center Wash',
    location: 'Student Center, 2nd Floor',
    distance: '0.3 miles',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1517677208171-0bc1725a542c?w=800&h=600&fit=crop',
    hours: '6:00 AM - 12:00 AM',
    machines: [
      { id: 'W1', type: 'washer', status: 'available', size: 'medium', price: 2.75 },
      { id: 'W2', type: 'washer', status: 'available', size: 'medium', price: 2.75 },
      { id: 'W3', type: 'washer', status: 'in-use', timeRemaining: 12, size: 'large', price: 3.75 },
      { id: 'W4', type: 'washer', status: 'available', size: 'large', price: 3.75 },
      { id: 'D1', type: 'dryer', status: 'available', size: 'medium', price: 2.25 },
      { id: 'D2', type: 'dryer', status: 'available', size: 'medium', price: 2.25 },
      { id: 'D3', type: 'dryer', status: 'in-use', timeRemaining: 45, size: 'large', price: 3.00 },
      { id: 'D4', type: 'dryer', status: 'available', size: 'large', price: 3.00 },
    ],
    features: ['WiFi', 'Seating Area', 'Change Machine', 'Detergent Vending'],
    paymentMethods: ['Cash', 'Card', 'App'],
  },
  {
    id: 3,
    name: 'West Campus Laundry',
    location: 'West Residence Complex',
    distance: '0.5 miles',
    rating: 4.3,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&h=600&fit=crop',
    hours: '5:00 AM - 11:00 PM',
    machines: [
      { id: 'W1', type: 'washer', status: 'in-use', timeRemaining: 25, size: 'medium', price: 2.50 },
      { id: 'W2', type: 'washer', status: 'available', size: 'medium', price: 2.50 },
      { id: 'D1', type: 'dryer', status: 'available', size: 'medium', price: 2.00 },
      { id: 'D2', type: 'dryer', status: 'out-of-order', size: 'medium', price: 2.00 },
    ],
    features: ['Security Cameras', 'Vending Machines'],
    paymentMethods: ['Card', 'App'],
  },
  {
    id: 4,
    name: 'Graduate Housing Laundry',
    location: 'Graduate Village, Building C',
    distance: '0.8 miles',
    rating: 4.8,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    hours: '24/7',
    machines: [
      { id: 'W1', type: 'washer', status: 'available', size: 'medium', price: 2.00 },
      { id: 'W2', type: 'washer', status: 'available', size: 'medium', price: 2.00 },
      { id: 'W3', type: 'washer', status: 'available', size: 'large', price: 3.00 },
      { id: 'D1', type: 'dryer', status: 'available', size: 'medium', price: 1.75 },
      { id: 'D2', type: 'dryer', status: 'available', size: 'medium', price: 1.75 },
      { id: 'D3', type: 'dryer', status: 'available', size: 'large', price: 2.50 },
    ],
    features: ['24/7 Access', 'Free WiFi', 'Study Area', 'Free Detergent'],
    paymentMethods: ['App Only'],
  },
];

const statusConfig = {
  'available': { color: 'bg-green-500', icon: CheckCircle, text: 'Available', textColor: 'text-green-600' },
  'in-use': { color: 'bg-blue-500', icon: Clock, text: 'In Use', textColor: 'text-blue-600' },
  'out-of-order': { color: 'bg-red-500', icon: XCircle, text: 'Out of Order', textColor: 'text-red-600' },
};

export default function Laundry() {
  const [facilities, setFacilities] = useState<LaundryFacility[]>(initialFacilities);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFacility, setSelectedFacility] = useState<LaundryFacility | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setFacilities(prev => prev.map(facility => ({
        ...facility,
        machines: facility.machines.map(machine => {
          if (machine.status === 'in-use' && machine.timeRemaining && machine.timeRemaining > 0) {
            return { ...machine, timeRemaining: machine.timeRemaining - 1 };
          }
          if (machine.status === 'in-use' && machine.timeRemaining === 0) {
            return { ...machine, status: 'available', timeRemaining: undefined };
          }
          return machine;
        })
      })));
      setLastUpdated(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const filteredFacilities = facilities.filter(facility =>
    facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    facility.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getAvailableCount = (facility: LaundryFacility) => 
    facility.machines.filter(m => m.status === 'available').length;

  const getTotalCount = (facility: LaundryFacility) => 
    facility.machines.length;

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
                  <h1 className="text-xl font-bold text-brand-dark-blue">Laundry</h1>
                  <p className="text-xs text-gray-500 hidden sm:block">Track machine availability</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full">
                <RefreshCw className="w-4 h-4 text-cyan-600" />
                <span className="text-sm text-cyan-700">
                  Updated {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
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

      {/* Search */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search laundry facilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-brand-dark-blue">{filteredFacilities.length}</span> facilities
          </p>
          <Button 
            variant="outline" 
            className="rounded-xl gap-2" 
            onClick={() => {
              setLastUpdated(new Date());
              toast.success('Refreshed!');
            }}
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredFacilities.map((facility) => (
            <div 
              key={facility.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getAvailableCount(facility) > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm font-medium">
                    {getAvailableCount(facility)}/{getTotalCount(facility)} Available
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-brand-dark-blue">{facility.name}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{facility.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {facility.location}
                  <span className="text-gray-400">• {facility.distance}</span>
                </div>

                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  {facility.hours}
                </div>

                {/* Machine Status */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {['washer', 'dryer'].map((type) => {
                    const typeMachines = facility.machines.filter(m => m.type === type);
                    const available = typeMachines.filter(m => m.status === 'available').length;
                    return (
                      <div key={type} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          {type === 'washer' ? <Droplets className="w-4 h-4 text-blue-500" /> : <Wind className="w-4 h-4 text-amber-500" />}
                          <span className="text-xs text-gray-600 capitalize">{type}s</span>
                        </div>
                        <p className={`text-lg font-bold ${available > 0 ? 'text-green-600' : 'text-red-500'}`}>
                          {available}/{typeMachines.length}
                        </p>
                      </div>
                    );
                  })}
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <CreditCard className="w-4 h-4 text-purple-500" />
                      <span className="text-xs text-gray-600">Payment</span>
                    </div>
                    <p className="text-xs font-medium text-gray-700">
                      {facility.paymentMethods.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {facility.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-brand-bg text-brand-blue text-xs rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="flex-1 rounded-xl gap-2"
                    onClick={() => setSelectedFacility(selectedFacility?.id === facility.id ? null : facility)}
                  >
                    <WashingMachine className="w-4 h-4" />
                    {selectedFacility?.id === facility.id ? 'Hide Machines' : 'View Machines'}
                  </Button>
                  <Button 
                    className="flex-1 bg-brand-blue hover:bg-brand-dark-blue rounded-xl gap-2"
                    onClick={() => toast.info(`Getting directions to ${facility.name}...`)}
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </Button>
                </div>

                {/* Expanded Machine List */}
                {selectedFacility?.id === facility.id && (
                  <div className="mt-4 pt-4 border-t animate-fade-in">
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">Machine Status</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {facility.machines.map((machine) => {
                        const status = statusConfig[machine.status];
                        const StatusIcon = status.icon;
                        return (
                          <div 
                            key={machine.id} 
                            className={`p-3 rounded-lg border ${machine.status === 'available' ? 'border-green-200 bg-green-50' : machine.status === 'in-use' ? 'border-blue-200 bg-blue-50' : 'border-red-200 bg-red-50'}`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              {machine.type === 'washer' ? <Droplets className="w-4 h-4 text-blue-500" /> : <Wind className="w-4 h-4 text-amber-500" />}
                              <span className="text-xs font-medium">{machine.id}</span>
                            </div>
                            <div className={`flex items-center gap-1 text-xs ${status.textColor}`}>
                              <StatusIcon className="w-3 h-3" />
                              {machine.status === 'in-use' && machine.timeRemaining 
                                ? `${machine.timeRemaining} min left`
                                : status.text
                              }
                            </div>
                            <p className="text-xs text-gray-500 mt-1">${machine.price.toFixed(2)}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredFacilities.length === 0 && (
          <div className="text-center py-16">
            <WashingMachine className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No facilities found</h3>
            <p className="text-gray-500">Try adjusting your search</p>
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} defaultMode="signin" />
    </div>
  );
}
