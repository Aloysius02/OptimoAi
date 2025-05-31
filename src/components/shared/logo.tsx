export default function Logo() {
  return (
    <div style={ { color: 'hsl(141, 72%, 50%)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" fill="currentColor" className="w-[220px] h-auto">
        <g>
          {/* Symbol */}
          <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="4" fill="none" />
          <circle cx="30" cy="18" r="3" fill="currentColor" />
          <circle cx="42" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="42" r="3" fill="currentColor" />
          <circle cx="18" cy="30" r="3" fill="currentColor" />
          {/* Lines */}
          <line x1="30" y1="18" x2="42" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="42" y1="30" x2="30" y2="42" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="42" x2="18" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="18" y1="30" x2="30" y2="18" stroke="currentColor" strokeWidth="2" />
          {/* Text */}
          <text x="70" y="38" fontFamily="Segoe UI, sans-serif" fontSize="26" fontWeight="600" fill="currentColor">
            OptimoAI
          </text>
        </g>
      </svg>
    </div>
  );
}