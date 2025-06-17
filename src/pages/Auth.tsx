
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Car } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'rider' | 'driver'>('rider');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log(`${isLogin ? 'Login' : 'Signup'} as ${userType}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            RideHub
          </CardTitle>
          <CardDescription>
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={userType} onValueChange={(value) => setUserType(value as 'rider' | 'driver')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="rider" className="flex items-center gap-2">
                <User size={16} />
                Rider
              </TabsTrigger>
              <TabsTrigger value="driver" className="flex items-center gap-2">
                <Car size={16} />
                Driver
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="rider">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>
                )}
                <Button type="submit" className="w-full">
                  {isLogin ? 'Login as Rider' : 'Sign Up as Rider'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="driver">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-email">Email</Label>
                  <Input id="driver-email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="driver-password">Password</Label>
                  <Input id="driver-password" type="password" placeholder="Enter your password" required />
                </div>
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="driver-phone">Phone Number</Label>
                      <Input id="driver-phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="license">Driver's License</Label>
                      <Input id="license" placeholder="License number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle Registration</Label>
                      <Input id="vehicle" placeholder="Vehicle registration number" required />
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full">
                  {isLogin ? 'Login as Driver' : 'Sign Up as Driver'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
