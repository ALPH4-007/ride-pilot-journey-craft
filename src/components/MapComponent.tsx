
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const MapComponent = () => {
  // This is a placeholder map component
  // In a real app, you would integrate with Google Maps, Mapbox, or OpenStreetMap
  
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
      {/* Mock map background */}
      <div className="absolute inset-0">
        <svg 
          className="w-full h-full opacity-20" 
          viewBox="0 0 400 400"
          style={{ filter: 'blur(0.5px)' }}
        >
          {/* Mock roads */}
          <path d="M0,200 Q100,150 200,200 T400,200" stroke="#666" strokeWidth="3" fill="none" />
          <path d="M200,0 Q150,100 200,200 T200,400" stroke="#666" strokeWidth="3" fill="none" />
          <path d="M50,50 Q150,100 250,50 Q350,100 400,150" stroke="#666" strokeWidth="2" fill="none" />
          <path d="M0,350 Q100,300 200,350 Q300,300 400,350" stroke="#666" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      {/* Mock buildings */}
      <div className="absolute top-20 left-16 w-8 h-12 bg-gray-300 opacity-60 rounded-sm"></div>
      <div className="absolute top-32 right-24 w-6 h-8 bg-gray-400 opacity-60 rounded-sm"></div>
      <div className="absolute bottom-32 left-32 w-10 h-14 bg-gray-300 opacity-60 rounded-sm"></div>
      <div className="absolute bottom-20 right-16 w-8 h-10 bg-gray-400 opacity-60 rounded-sm"></div>
      
      {/* Current location marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-blue-500 opacity-20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
        </div>
      </div>
      
      {/* Mock destination marker */}
      <div className="absolute top-1/4 right-1/3 transform">
        <MapPin className="text-red-500 drop-shadow-md" size={32} />
      </div>
      
      {/* Mock nearby drivers (for rider view) */}
      <div className="absolute top-3/4 left-1/4">
        <div className="w-4 h-4 bg-green-500 rounded-sm transform rotate-45 shadow-md"></div>
      </div>
      <div className="absolute top-1/3 right-1/4">
        <div className="w-4 h-4 bg-green-500 rounded-sm transform rotate-45 shadow-md"></div>
      </div>
      
      {/* Navigation overlay */}
      <div className="absolute top-4 right-4">
        <div className="bg-white rounded-lg p-2 shadow-lg">
          <Navigation className="text-blue-500" size={20} />
        </div>
      </div>
      
      {/* Mock route line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path 
          d="M200,200 Q250,150 300,100" 
          stroke="#3B82F6" 
          strokeWidth="4" 
          fill="none" 
          strokeDasharray="10,5"
          className="animate-pulse"
        />
      </svg>
      
      {/* Map attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-80 px-2 py-1 rounded">
        © MapData
      </div>
    </div>
  );
};

export default MapComponent;
