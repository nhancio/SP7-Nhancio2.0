import React from 'react';
import { Play } from 'lucide-react';

interface TavusVideoProps {
  title?: string;
  className?: string;
}

export default function TavusVideo({ title = "Welcome to Nhancio", className = "" }: TavusVideoProps) {
  const handlePlay = () => {
    // Here you would integrate with Tavus API
    console.log('Playing Tavus video');
  };

  return (
    <div className={`relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl overflow-hidden ${className}`}>
      {/* Video Placeholder */}
      <div className="aspect-video bg-black/20 flex items-center justify-center">
        <button
          onClick={handlePlay}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 transform hover:scale-105"
        >
          <Play className="w-8 h-8 ml-1" />
        </button>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm opacity-90">Personalized message from our team</p>
      </div>
    </div>
  );
}