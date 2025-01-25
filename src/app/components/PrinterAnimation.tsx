import { ReactNode } from 'react';

type PrinterAnimationProps = {
  children: ReactNode;
};

export function PrinterAnimation({ children }: PrinterAnimationProps) {
  return (
    <div className="printer-container relative w-full h-full">
      {/* Printer SVG */}
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 z-10"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Printer Base */}
        <rect x="30" y="120" width="140" height="60" fill="#374151" />
        <rect x="40" y="130" width="120" height="40" fill="#1f2937" />
        
        {/* Printer Head */}
        <rect x="50" y="50" width="100" height="70" fill="#4b5563" />
        <rect x="60" y="60" width="80" height="50" fill="#374151" />
        
        {/* Extruder */}
        <circle cx="100" cy="120" r="8" fill="#f59e0b" className="extruder" />
        
        {/* Printing Platform */}
        <rect 
          x="40" 
          y="130" 
          width="120" 
          height="40" 
          fill="#1f2937" 
          className="platform"
        />
      </svg>

      {/* Content Container */}
      <div className="print-content relative z-20">
        {children}
      </div>
    </div>
  );
}
