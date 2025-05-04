import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { initGame, startGame, resetGame } from '@/lib/game-engine';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AtmosphericEnergyGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [energy, setEnergy] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameInitializedRef = useRef(false);
  
  // Initialize the game once the component mounts
  useEffect(() => {
    if (canvasRef.current && !gameInitializedRef.current) {
      initGame(canvasRef.current, {
        onEnergyCollected: (newTotalEnergy) => {
          setEnergy(newTotalEnergy);
        },
        onGameOver: () => {
          setGameState('finished');
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
        }
      });
      gameInitializedRef.current = true;
    }
    
    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  const handleStartGame = () => {
    if (canvasRef.current) {
      setGameState('playing');
      setEnergy(0);
      setTimeLeft(60);
      
      startGame();
      
      // Start the countdown timer
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };
  
  const handleResetGame = () => {
    if (canvasRef.current) {
      resetGame();
      setGameState('idle');
      setEnergy(0);
      setTimeLeft(60);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };
  
  return (
    <Card className="bg-gray-100 rounded-xl shadow-lg w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Atmospheric Energy Harvest Game</CardTitle>
        <CardDescription className="text-center">
          Experience firsthand how our technology works by playing this interactive game. Collect humidity particles and convert them into electricity!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex flex-col items-center">
        <div 
          ref={gameContainerRef} 
          className="relative w-full max-w-3xl h-96 rounded-lg shadow-inner overflow-hidden bg-blue-900"
        >
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-10"
          />
          
          {/* Game UI Elements */}
          {gameState === 'playing' && (
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-white z-20">
              <div className="bg-black bg-opacity-30 px-3 py-1 rounded">
                <span>Energy: </span>
                <span id="energy-counter">{energy}</span>
                <span> watts</span>
              </div>
              <div className="bg-black bg-opacity-30 px-3 py-1 rounded">
                <span>Time: </span>
                <span id="time-counter">{timeLeft}</span>
                <span>s</span>
              </div>
            </div>
          )}
          
          {/* Start Screen */}
          {gameState === 'idle' && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button 
                onClick={handleStartGame} 
                variant="default"
                className="px-8 py-4 bg-accent text-neutral-dark font-heading font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-colors text-lg"
              >
                Start Game
              </Button>
            </motion.div>
          )}
          
          {/* Game Over Screen */}
          {gameState === 'finished' && (
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-2xl font-bold mb-2">Game Over!</h4>
              <p className="mb-4">You generated <span className="text-accent font-bold">{energy}</span> watts of electricity!</p>
              <Button 
                onClick={handleResetGame}
                variant="default"
                className="px-6 py-2 bg-accent text-neutral-dark font-heading font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
              >
                Play Again
              </Button>
            </motion.div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col">
        <div className="mt-8 max-w-3xl mx-auto">
          <h4 className="font-heading font-bold text-xl mb-3">How to Play:</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click or tap on water vapor particles (blue dots) to collect them</li>
            <li>Guide them to your nanowire collector in the center of the screen</li>
            <li>Convert the collected moisture into electricity</li>
            <li>Power up different devices as you generate more electricity</li>
            <li>See how much sustainable energy you can produce in 60 seconds!</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600 italic">
            This game simplifies the actual scientific process but demonstrates the core concept of our technology.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AtmosphericEnergyGame;
