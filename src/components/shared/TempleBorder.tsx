interface TempleBorderProps {
  className?: string
}

export function TempleBorder({ className = '' }: TempleBorderProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer border */}
      <div
        className="absolute inset-0"
        style={{ border: '1px solid rgba(212,175,55,0.3)' }}
      />
      {/* Inner border */}
      <div
        className="absolute inset-2"
        style={{ border: '0.5px solid rgba(212,175,55,0.15)' }}
      />
      {/* Corner flourishes */}
      {[
        'top-0 left-0',
        'top-0 right-0 rotate-90',
        'bottom-0 left-0 -rotate-90',
        'bottom-0 right-0 rotate-180',
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-8 h-8`}>
          <svg viewBox="0 0 32 32" fill="none">
            <path
              d="M2 2 L14 2 L2 14 Z"
              fill="rgba(212,175,55,0.4)"
            />
            <path d="M2 2 L12 2" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />
            <path d="M2 2 L2 12" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  )
}
