import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'white' | 'red' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'white',
  size = 'md',
  showSubtitle = true
}) => {
  // Color configuration
  const isWhite = variant === 'white';
  const primaryColor = isWhite ? '#FFFFFF' : '#CE1126';
  const textColor = isWhite ? 'text-white' : 'text-neutral-900';
  const scriptColor = isWhite ? 'text-white' : 'text-[#CE1126]';

  // Dimension scaling
  const iconDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 46, height: 46 },
    lg: { width: 64, height: 64 },
    xl: { width: 92, height: 92 }
  }[size];

  const textSizes = {
    sm: { sub: 'text-[9px]', main: 'text-xs', alias: 'text-sm' },
    md: { sub: 'text-[11px]', main: 'text-sm sm:text-base', alias: 'text-base sm:text-lg' },
    lg: { sub: 'text-xs sm:text-sm', main: 'text-lg sm:text-xl', alias: 'text-xl sm:text-2xl' },
    xl: { sub: 'text-sm sm:text-base', main: 'text-2xl sm:text-3xl', alias: 'text-3xl sm:text-4xl' }
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Badge recreating the exact corporate heart + human figure + HP monogram */}
      <div
        className={`relative flex items-center justify-center shrink-0 transition-transform hover:scale-105 duration-200 ${
          variant === 'badge' ? 'p-2 bg-[#CE1126] rounded-2xl shadow-md' : ''
        }`}
      >
        <svg
          width={iconDimensions.width}
          height={iconDimensions.height}
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Fundación Social Henry Palacios Costa"
          className="drop-shadow-sm"
        >
          {/* Outer heart-shaped contour intertwined with human figure */}
          {/* Head of the human silhouette */}
          <circle cx="58" cy="38" r="14" fill={variant === 'badge' ? '#FFFFFF' : primaryColor} />

          {/* Left sweeping body/arm forming the left curve of the heart */}
          <path
            d="M 38 42 C 34 56 34 68 44 86 C 54 104 74 126 94 138 C 96 139 98 139 99 137 C 88 122 74 102 66 84 C 60 70 62 58 74 50 C 82 44 94 48 94 48 C 82 46 64 42 46 44 C 42 43 39 42 38 42 Z"
            fill={variant === 'badge' ? '#FFFFFF' : primaryColor}
          />

          {/* Right sweeping heart ribbon */}
          <path
            d="M 94 40 C 114 26 138 32 144 54 C 150 76 138 102 116 122 C 104 132 94 138 94 138 C 94 138 112 124 128 104 C 142 86 142 66 134 52 C 126 38 108 36 94 44 Z"
            fill={variant === 'badge' ? '#FFFFFF' : primaryColor}
          />

          {/* Central Monogram HP */}
          {/* Letter H */}
          <path
            d="M 62 60 L 76 60 L 76 76 L 96 76 L 96 60 L 110 60 L 110 114 L 96 114 L 96 90 L 76 90 L 76 114 L 62 114 Z"
            fill={variant === 'badge' ? '#FFFFFF' : primaryColor}
          />

          {/* Letter P stylized overlay with ribbon flourish */}
          <path
            d="M 96 60 C 118 60 134 70 134 84 C 134 98 118 106 98 106 C 94 106 88 105 84 103 L 84 91 C 88 93 92 94 96 94 C 108 94 118 89 118 83 C 118 77 108 72 96 72 Z"
            fill={variant === 'badge' ? '#FFFFFF' : primaryColor}
          />

          {/* Dynamic swoop connecting H and P */}
          <path
            d="M 92 88 C 102 88 114 92 114 102 C 114 116 98 126 84 128 C 92 122 100 114 100 106 C 100 98 94 94 88 94 Z"
            fill={variant === 'badge' ? '#FFFFFF' : primaryColor}
          />
        </svg>
      </div>

      {/* Typography Label */}
      {showSubtitle && (
        <div className="flex flex-col leading-tight">
          <span className={`uppercase font-semibold tracking-wider ${textSizes.sub} opacity-90 ${textColor}`}>
            Fundación Social
          </span>
          <span className={`font-black tracking-tight ${textSizes.main} ${textColor}`}>
            Henry Palacios
          </span>
          <span className={`font-script font-bold leading-none -mt-0.5 ${textSizes.alias} ${scriptColor}`}>
            “Costa”
          </span>
        </div>
      )}
    </div>
  );
};
