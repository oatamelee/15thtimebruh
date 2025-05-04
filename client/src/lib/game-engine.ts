interface GameCallbacks {
  onEnergyCollected: (energy: number) => void;
  onGameOver: () => void;
}

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  active: boolean;
  selected: boolean;
  color: string;
};

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let particles: Particle[] = [];
let gameActive = false;
let nanowireX = 0;
let nanowireY = 0;
let nanowireRadius = 40;
let totalEnergy = 0;
let callbacks: GameCallbacks | null = null;

export function initGame(gameCanvas: HTMLCanvasElement, gameCallbacks: GameCallbacks) {
  canvas = gameCanvas;
  callbacks = gameCallbacks;
  
  // Get the 2D rendering context
  ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas dimensions to match container
  resizeCanvas();
  
  // Initialize nanowire position
  nanowireX = canvas.width / 2;
  nanowireY = canvas.height / 2;
  
  // Add window resize listener
  window.addEventListener('resize', resizeCanvas);
  
  // Add click/touch event handler
  canvas.addEventListener('mousedown', handleCanvasClick);
  canvas.addEventListener('touchstart', handleCanvasTouchStart);
  
  // Initial drawing
  draw();
}

function resizeCanvas() {
  if (!canvas || !ctx) return;
  
  // Set the canvas dimensions to match its container
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  
  // Update nanowire position after resize
  nanowireX = canvas.width / 2;
  nanowireY = canvas.height / 2;
}

export function startGame() {
  if (!canvas || !ctx) return;
  
  // Reset variables
  particles = [];
  gameActive = true;
  totalEnergy = 0;
  
  // Create initial particles
  for (let i = 0; i < 20; i++) {
    createParticle();
  }
  
  // Start the game loop
  requestAnimationFrame(gameLoop);
}

export function resetGame() {
  gameActive = false;
  particles = [];
  totalEnergy = 0;
  
  // Clear the canvas
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function createParticle() {
  if (!canvas) return;
  
  // Randomly position the particle along the edges
  const side = Math.floor(Math.random() * 4);
  let x, y;
  
  switch(side) {
    case 0: // Top
      x = Math.random() * canvas.width;
      y = 0;
      break;
    case 1: // Right
      x = canvas.width;
      y = Math.random() * canvas.height;
      break;
    case 2: // Bottom
      x = Math.random() * canvas.width;
      y = canvas.height;
      break;
    case 3: // Left
      x = 0;
      y = Math.random() * canvas.height;
      break;
    default:
      x = 0;
      y = 0;
  }
  
  // Random size between 8 and 15
  const size = Math.random() * 7 + 8;
  
  // Random speed
  const speedX = (Math.random() - 0.5) * 2;
  const speedY = (Math.random() - 0.5) * 2;
  
  // Add to particles array
  particles.push({
    x,
    y,
    size,
    speedX,
    speedY,
    active: true,
    selected: false,
    color: 'rgba(66, 165, 245, 0.8)' // Light blue
  });
}

function handleCanvasClick(e: MouseEvent) {
  if (!canvas || !gameActive) return;
  
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  
  checkParticleClick(mouseX, mouseY);
}

function handleCanvasTouchStart(e: TouchEvent) {
  if (!canvas || !gameActive) return;
  e.preventDefault();
  
  const rect = canvas.getBoundingClientRect();
  const touchX = e.touches[0].clientX - rect.left;
  const touchY = e.touches[0].clientY - rect.top;
  
  checkParticleClick(touchX, touchY);
}

function checkParticleClick(x: number, y: number) {
  // Check if any particle was clicked
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    
    if (!particle.active || particle.selected) continue;
    
    const distance = Math.sqrt(
      Math.pow(particle.x - x, 2) + Math.pow(particle.y - y, 2)
    );
    
    if (distance < particle.size + 15) {
      particle.selected = true;
      particle.color = 'rgba(33, 150, 243, 1)'; // Brighter blue
      break;
    }
  }
}

function gameLoop() {
  if (!gameActive || !ctx || !canvas) return;
  
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the nanowire collector
  drawNanowire();
  
  // Update and draw particles
  updateParticles();
  
  // Add new particles occasionally
  if (Math.random() < 0.05 && particles.length < 30) {
    createParticle();
  }
  
  // Continue the game loop
  requestAnimationFrame(gameLoop);
}

function drawNanowire() {
  if (!ctx) return;
  
  // Draw the nanowire collector
  ctx.beginPath();
  ctx.arc(nanowireX, nanowireY, nanowireRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(76, 175, 80, 0.3)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(76, 175, 80, 0.8)';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Add text label
  ctx.fillStyle = 'white';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Nanowire Array', nanowireX, nanowireY + 5);
}

function updateParticles() {
  if (!ctx || !canvas) return;
  
  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];
    
    if (!particle.active) continue;
    
    if (particle.selected) {
      // Move towards nanowire
      const dx = nanowireX - particle.x;
      const dy = nanowireY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < nanowireRadius + particle.size) {
        // Collected by nanowire
        particleCollected(particle);
        continue;
      }
      
      // Move towards nanowire
      const angle = Math.atan2(dy, dx);
      particle.x += Math.cos(angle) * 3;
      particle.y += Math.sin(angle) * 3;
    } else {
      // Random movement
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off walls
      if (particle.x - particle.size <= 0 || particle.x + particle.size >= canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y - particle.size <= 0 || particle.y + particle.size >= canvas.height) {
        particle.speedY *= -1;
      }
    }
    
    // Draw the particle
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = particle.color;
    ctx.fill();
  }
}

function particleCollected(particle: Particle) {
  // Deactivate the particle
  particle.active = false;
  
  // Increase energy count
  totalEnergy += Math.round(particle.size);
  
  // Notify through callback
  if (callbacks) {
    callbacks.onEnergyCollected(totalEnergy);
  }
  
  // Create energy pulse effect
  createEnergyPulse();
}

function createEnergyPulse() {
  if (!ctx) return;
  
  // Draw a pulse animation
  const pulse = {
    x: nanowireX,
    y: nanowireY,
    radius: nanowireRadius,
    alpha: 0.7
  };
  
  const pulseAnimation = setInterval(() => {
    if (!ctx || !gameActive) {
      clearInterval(pulseAnimation);
      return;
    }
    
    pulse.radius += 2;
    pulse.alpha -= 0.05;
    
    if (pulse.alpha <= 0) {
      clearInterval(pulseAnimation);
      return;
    }
    
    // The pulse will be drawn on the next game loop frame
  }, 30);
}

function draw() {
  if (!gameActive || !ctx || !canvas) return;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw game elements
  drawNanowire();
  
  // Draw particles
  for (const particle of particles) {
    if (particle.active) {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
    }
  }
}
