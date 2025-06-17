
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, Clock, CreditCard, User, History } from 'lucide-react';
import MapComponent from '@/components/MapComponent';
import RideBooking from '@/components/RideBooking';

const RiderDashboard = () => {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="text-white" size={20} />
          </div>
          <div>
            <h1 className="font-semibold text-gray-800">Hello, John!</h1>
            <p className="text-sm text-gray-500">Where are you going?</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <History size={16} />
          </Button>
          <Button variant="outline" size="sm">
            <CreditCard size={16} />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        <MapComponent />
        
        {/* Destination Input */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <Input placeholder="Your location" className="border-0 bg-gray-50" />
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-red-500" size={12} />
                  <Input 
                    placeholder="Where to?" 
                    className="border-0 bg-gray-50"
                    onClick={() => setShowBooking(true)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Navigation className="mx-auto mb-2 text-blue-500" size={24} />
                <p className="text-sm font-medium">Home</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Clock className="mx-auto mb-2 text-green-500" size={24} />
                <p className="text-sm font-medium">Work</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <MapPin className="mx-auto mb-2 text-purple-500" size={24} />
                <p className="text-sm font-medium">Saved</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={() => setShowBooking(true)}
          >
            Book a Ride
          </Button>
        </div>
      </div>

      {/* Ride Booking Modal */}
      {showBooking && (
        <RideBooking onClose={() => setShowBooking(false)} />
      )}
    </div>
  );
};

export default RiderDashboard;
