export function createPaddle(): HTMLElement {
  const paddle = document.createElement('div');
  paddle.className = 'absolute inset-0 flex items-center justify-center opacity-100';
  paddle.innerHTML = `
    <svg viewBox="0 0 400 250" class="w-[800px] h-[500px]">
    <!-- Red Paddle -->
    <g transform="rotate(-20, 100, 100)">
      <!-- Shadow -->
      <circle cx="100" cy="100" r="55" fill="#b71c1c" />
      <!-- Paddle Face -->
      <circle cx="100" cy="100" r="50" fill="url(#redGradient)" stroke="#880e4f" stroke-width="6" />
      <!-- Highlight -->
      <circle cx="85" cy="85" r="10" fill="rgba(255,255,255,0.3)" />
      <!-- Handle -->
      <rect x="90" y="140" width="20" height="60" rx="5" fill="url(#woodGradient)" stroke="#4e342e" stroke-width="3" />
    </g>

    <!-- Blue Paddle -->
    <g transform="rotate(20, 300, 100)">
      <!-- Shadow -->
      <circle cx="300" cy="100" r="55" fill="#0d47a1" />
      <!-- Paddle Face -->
      <circle cx="300" cy="100" r="50" fill="url(#blueGradient)" stroke="#002171" stroke-width="6" />
      <!-- Highlight -->
      <circle cx="285" cy="85" r="10" fill="rgba(255,255,255,0.3)" />
      <!-- Handle -->
      <rect x="290" y="140" width="20" height="60" rx="5" fill="url(#woodGradient)" stroke="#4e342e" stroke-width="3" />
    </g>

    <!-- Gradients -->
    <defs>
      <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ef5350"/>
        <stop offset="100%" stop-color="#c62828"/>
      </linearGradient>
      <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#42a5f5"/>
        <stop offset="100%" stop-color="#1565c0"/>
      </linearGradient>
      <linearGradient id="woodGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#bcaaa4"/>
        <stop offset="100%" stop-color="#6d4c41"/>
      </linearGradient>
    </defs>
  </svg>`;

  paddle.style.userSelect = 'none';
  return paddle;
}