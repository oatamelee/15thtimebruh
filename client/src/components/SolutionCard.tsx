import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Zap } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  powerOutput: string;
  svgContent: React.ReactNode;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  title, 
  description, 
  powerOutput,
  svgContent 
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="w-full h-48 bg-blue-100">
        {svgContent}
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="mr-2"><Zap className="h-4 w-4 text-accent" /></span>
          <span>{powerOutput}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
