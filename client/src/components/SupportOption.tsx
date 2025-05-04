import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface SupportOptionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  borderColor: 'primary' | 'secondary' | 'accent';
}

const SupportOption: React.FC<SupportOptionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  borderColor
}) => {
  let borderClass = "";
  let buttonVariant: "default" | "secondary" | "ghost" | "link" | "destructive" | "outline" = "default";
  
  switch(borderColor) {
    case 'primary':
      borderClass = "border-primary-top";
      buttonVariant = "default";
      break;
    case 'secondary':
      borderClass = "border-secondary-top";
      buttonVariant = "outline";
      break;
    case 'accent':
      borderClass = "border-accent-top";
      buttonVariant = "secondary";
      break;
  }
  
  return (
    <Card className={`p-6 transition-transform hover:scale-105 ${borderClass}`}>
      <CardContent className="p-0 mb-6">
        <h3 className={`font-heading text-xl font-bold text-${borderColor} mb-4`}>{title}</h3>
        <p className="mb-6">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-0">
        <Button 
          variant={buttonVariant} 
          className="w-full py-3"
          asChild
        >
          <Link href={buttonLink}>
            {buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SupportOption;
