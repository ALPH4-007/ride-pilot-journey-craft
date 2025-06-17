
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Car } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'rider' | 'driver'>('rider');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    license: '',
    vehicle: ''
  });
  const [loading, setLoading] = useState(false);

  const { signUp, signIn, user } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      // Check if user is a driver or rider and redirect accordingly
      navigate(userType === 'driver' ? '/driver' : '/rider');
    }
  }, [user, navigate, userType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password);
        if (!error) {
          navigate(userType === 'driver' ? '/driver' : '/rider');
        }
      } else {
        const userData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          userType,
          license: formData.license,
          vehicle: formData.vehicle
        };

        const { error } = await signUp(formData.email, formData.password, userData);
        if (!error) {
          navigate(userType === 'driver' ? '/driver' : '/rider');
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
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
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    name="password"
                    type="password" 
                    placeholder="Enter your password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Loading...' : (isLogin ? 'Login as Rider' : 'Sign Up as Rider')}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="driver">
              <form onSubmit={handleAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-email">Email</Label>
                  <Input 
                    id="driver-email" 
                    name="email"
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="driver-password">Password</Label>
                  <Input 
                    id="driver-password" 
                    name="password"
                    type="password" 
                    placeholder="Enter your password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="driver-firstName">First Name</Label>
                      <Input 
                        id="driver-firstName" 
                        name="firstName"
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="driver-lastName">Last Name</Label>
                      <Input 
                        id="driver-lastName" 
                        name="lastName"
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="driver-phone">Phone Number</Label>
                      <Input 
                        id="driver-phone" 
                        name="phone"
                        type="tel" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="license">Driver's License</Label>
                      <Input 
                        id="license" 
                        name="license"
                        placeholder="License number" 
                        value={formData.license}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Vehicle Registration</Label>
                      <Input 
                        id="vehicle" 
                        name="vehicle"
                        placeholder="Vehicle registration number" 
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </>
                )}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Loading...' : (isLogin ? 'Login as Driver' : 'Sign Up as Driver')}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-4 text-center">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm"
              disabled={loading}
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
