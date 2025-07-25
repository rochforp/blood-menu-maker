import React from 'react';
import { Clock, Users, Star, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NutrientInfo {
  name: string;
  amount: string;
  dailyValue: number;
}

interface MealRecommendation {
  id: string;
  name: string;
  description: string;
  prepTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  image: string;
  nutrients: NutrientInfo[];
  benefits: string[];
  ingredients: string[];
}

interface MenuRecommendationsProps {
  recommendations: MealRecommendation[];
  className?: string;
}

export const MenuRecommendations: React.FC<MenuRecommendationsProps> = ({ 
  recommendations, 
  className 
}) => {
  return (
    <div className={cn("bg-card rounded-lg shadow-soft border border-border p-6", className)}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-card-foreground mb-2">
          Personalized Menu Recommendations
        </h2>
        <p className="text-muted-foreground">
          Meals tailored to your blood test results and nutritional needs
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((meal) => (
          <div
            key={meal.id}
            className="bg-gradient-subtle rounded-lg border border-border overflow-hidden hover:shadow-medium transition-smooth group"
          >
            <div className="aspect-video bg-accent-light/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary/20 flex items-center justify-center">
                <Utensils className="h-12 w-12 text-primary" />
              </div>
              <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                <Star className="h-3 w-3 text-accent fill-current" />
                <span className="text-xs font-medium">{meal.rating}</span>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                  {meal.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {meal.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{meal.prepTime}m</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>{meal.servings} servings</span>
                </div>
                <span className={cn(
                  "px-2 py-1 rounded text-xs font-medium",
                  meal.difficulty === 'Easy' && "bg-accent-light text-accent",
                  meal.difficulty === 'Medium' && "bg-primary/10 text-primary",
                  meal.difficulty === 'Hard' && "bg-destructive/10 text-destructive"
                )}>
                  {meal.difficulty}
                </span>
              </div>
              
              <div className="space-y-2">
                <div>
                  <h4 className="text-sm font-medium mb-1">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {meal.benefits.slice(0, 3).map((benefit, index) => (
                      <span
                        key={index}
                        className="text-xs bg-accent-light text-accent px-2 py-1 rounded"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Top Nutrients:</h4>
                  <div className="space-y-1">
                    {meal.nutrients.slice(0, 2).map((nutrient, index) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{nutrient.name}</span>
                        <span className="font-medium">{nutrient.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button variant="medical" className="w-full mt-4">
                View Recipe
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};