interface GoldDividerProps {
  className?: string
  width?: string
}

export function GoldDivider({ className = '', width = 'w-full max-w-xs' }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-2 mx-auto ${width} ${className}`} aria-hidden="true">
      <div
        className="h-px flex-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37)' }}
      />
      <div
        style={{
          width: 6,
          height: 6,
          background: '#D4AF37',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: 6,
          height: 6,
          background: 'rgba(212,175,55,0.5)',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: 6,
          height: 6,
          background: '#D4AF37',
          transform: 'rotate(45deg)',
          flexShrink: 0,
        }}
      />
      <div
        className="h-px flex-1"
        style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
      />
    </div>
  )
}
