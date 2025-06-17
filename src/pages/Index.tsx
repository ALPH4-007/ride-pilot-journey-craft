
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Users, Star, MapPin, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Clock,
      title: 'Quick Rides',
      description: 'Get a ride in minutes with our fast matching system'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers and secure payment options'
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: 'Highly rated drivers and excellent service'
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time on the map'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Ride<span className="text-blue-600">Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your reliable ride-hailing service. Safe, fast, and affordable rides at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
              onClick={() => navigate('/auth')}
            >
              <Users className="mr-2" size={20} />
              Get a Ride
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 text-lg"
              onClick={() => navigate('/auth')}
            >
              <Car className="mr-2" size={20} />
              Drive & Earn
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">10M+</h3>
              <p className="text-gray-600">Happy Riders</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">50K+</h3>
              <p className="text-gray-600">Active Drivers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">100+</h3>
              <p className="text-gray-600">Cities Covered</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6">
            Join millions of users who trust RideHub for their daily commute
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
            onClick={() => navigate('/auth')}
          >
            Sign Up Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
