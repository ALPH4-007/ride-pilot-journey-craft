
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Car, 
  DollarSign, 
  Navigation, 
  Clock, 
  Star, 
  Phone,
  MessageCircle,
  User
} from 'lucide-react';
import MapComponent from '@/components/MapComponent';

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [hasActiveRide, setHasActiveRide] = useState(false);

  const todayStats = {
    earnings: 245.50,
    trips: 12,
    hours: 8.5,
    rating: 4.8
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <Car className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-semibold text-gray-800">Driver Mode</h1>
              <div className="flex items-center gap-2">
                <Badge variant={isOnline ? "default" : "secondary"}>
                  {isOnline ? "Online" : "Offline"}
                </Badge>
                <Switch 
                  checked={isOnline} 
                  onCheckedChange={setIsOnline}
                />
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-2xl font-bold text-green-600">${todayStats.earnings}</p>
            <p className="text-sm text-gray-500">Today's Earnings</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 p-4">
        <Card>
          <CardContent className="p-3 text-center">
            <Navigation className="mx-auto mb-1 text-blue-500" size={20} />
            <p className="text-lg font-bold">{todayStats.trips}</p>
            <p className="text-xs text-gray-500">Trips</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <Clock className="mx-auto mb-1 text-orange-500" size={20} />
            <p className="text-lg font-bold">{todayStats.hours}h</p>
            <p className="text-xs text-gray-500">Online</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <Star className="mx-auto mb-1 text-yellow-500" size={20} />
            <p className="text-lg font-bold">{todayStats.rating}</p>
            <p className="text-xs text-gray-500">Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MapComponent />
        
        {/* Active Ride Card */}
        {hasActiveRide && (
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Trip to Downtown</CardTitle>
                    <p className="text-sm text-gray-500">John Smith • 4.9★</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">In Progress</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Estimated Fare</p>
                    <p className="text-xl font-bold text-green-600">$24.50</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">ETA</p>
                    <p className="text-lg font-semibold">12 min</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" variant="outline">
                    <Phone size={16} className="mr-2" />
                    Call
                  </Button>
                  <Button className="flex-1" variant="outline">
                    <MessageCircle size={16} className="mr-2" />
                    Chat
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">
                    Navigate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Go Online/Offline Button */}
        {!hasActiveRide && (
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <Button 
              className={`w-full ${isOnline ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
              onClick={() => setIsOnline(!isOnline)}
            >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;
