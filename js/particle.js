// Full-size background particle motion system

class Particles {
  constructor() {
    // Create canvas that will hold the particles
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.className = 'particle-canvas';
    // Append canvas to body or a specific container
    document.body.appendChild(this.canvas);
    
    // Particle array and mouse interaction properties
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 100 };
    
    // Event listeners for mouse movement and window resizing
    window.addEventListener('mousemove', e => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    
    window.addEventListener('resize', this.init.bind(this));
    
    // Initialize and start animation
    this.init();
    this.animate();
  }
  
  init() {
    // Set canvas to full window size
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.particles = [];
    
    // Calculate number of particles based on screen area
    const particleCount = Math.floor(window.innerWidth * window.innerHeight / 5000);
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      
      this.particles.push({
        x, y, size,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 200) + 55}, 0.7)`
      });
    }
  }
  
  animate() {
    // Animation loop
    requestAnimationFrame(this.animate.bind(this));
    // Slightly fade the previous frame for trail effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (const p of this.particles) {
      // Update particle positions
      p.x += p.speedX;
      p.y += p.speedY;
      
      // Mouse interaction - particles move away from cursor
      if (this.mouse.x && this.mouse.y) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < this.mouse.radius) {
          p.x += dx * 0.05;
          p.y += dy * 0.05;
        }
      }
      
      // Boundary checks - wrap particles around edges
      if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;
      
      // Draw the particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.fill();
    }
  }
}

// Initialize particles when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  new Particles();
});
