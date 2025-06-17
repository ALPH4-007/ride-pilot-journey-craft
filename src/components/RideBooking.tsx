
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, MapPin, Clock, DollarSign, Car, Users, Star } from 'lucide-react';

interface RideBookingProps {
  onClose: () => void;
}

const RideBooking: React.FC<RideBookingProps> = ({ onClose }) => {
  const [step, setStep] = useState<'destination' | 'vehicle' | 'confirm'>('destination');
  const [destination, setDestination] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const vehicleTypes = [
    {
      id: 'economy',
      name: 'RideEconomy',
      icon: Car,
      price: 15.50,
      eta: '3-5 min',
      capacity: 4,
      description: 'Affordable rides'
    },
    {
      id: 'comfort',
      name: 'RideComfort',
      icon: Car,
      price: 22.30,
      eta: '4-6 min',
      capacity: 4,
      description: 'Premium comfort'
    },
    {
      id: 'xl',
      name: 'RideXL',
      icon: Users,
      price: 28.90,
      eta: '5-8 min',
      capacity: 6,
      description: 'Extra space'
    }
  ];

  const handleDestinationNext = () => {
    if (destination.trim()) {
      setStep('vehicle');
    }
  };

  const handleVehicleSelect = (vehicleId: string) => {
    setSelectedVehicle(vehicleId);
    setStep('confirm');
  };

  const handleBookRide = () => {
    console.log('Booking ride:', { destination, selectedVehicle });
    // TODO: Implement actual booking logic
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center sm:justify-center">
      <Card className="w-full max-w-md mx-4 sm:mx-0 rounded-t-xl sm:rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {step === 'destination' && 'Where to?'}
            {step === 'vehicle' && 'Choose a ride'}
            {step === 'confirm' && 'Confirm booking'}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </CardHeader>
        
        <CardContent className="pb-6">
          {step === 'destination' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <Input value="Current Location" disabled className="bg-gray-50" />
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-red-500" size={12} />
                  <Input 
                    placeholder="Enter destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              
              {/* Recent destinations */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Recent</p>
                <div className="space-y-2">
                  {['Downtown Mall', 'Airport Terminal 1', 'Central Station'].map((place) => (
                    <div 
                      key={place}
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                      onClick={() => setDestination(place)}
                    >
                      <Clock size={16} className="text-gray-400" />
                      <span className="text-sm">{place}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={handleDestinationNext}
                disabled={!destination.trim()}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 'vehicle' && (
            <div className="space-y-4">
              <div className="space-y-3">
                {vehicleTypes.map((vehicle) => {
                  const IconComponent = vehicle.icon;
                  return (
                    <div
                      key={vehicle.id}
                      className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => handleVehicleSelect(vehicle.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{vehicle.name}</p>
                            <Badge variant="secondary" className="text-xs">
                              <Users size={10} className="mr-1" />
                              {vehicle.capacity}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">{vehicle.description}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {vehicle.eta}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star size={10} />
                              4.8
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${vehicle.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 'confirm' && selectedVehicle && (
            <div className="space-y-4">
              {(() => {
                const vehicle = vehicleTypes.find(v => v.id === selectedVehicle);
                if (!vehicle) return null;
                
                return (
                  <>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <vehicle.icon size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{vehicle.name}</p>
                          <p className="text-sm text-gray-500">{vehicle.eta} away</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">From:</span>
                          <span>Current Location</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">To:</span>
                          <span>{destination}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Distance:</span>
                          <span>8.2 km</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Estimated time:</span>
                          <span>15-20 min</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-t">
                      <div className="flex items-center gap-2">
                        <DollarSign size={20} className="text-green-600" />
                        <span className="font-medium">Total Fare</span>
                      </div>
                      <span className="text-xl font-bold text-green-600">${vehicle.price}</span>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleBookRide}>
                      Book {vehicle.name}
                    </Button>
                  </>
                );
              })()}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RideBooking;
