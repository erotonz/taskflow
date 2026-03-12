import { useState, useLayoutEffect, useEffect, useRef } from 'react';

export default function Tooltip() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [useLayout, setUseLayout] = useState(false);
  const buttonRef = useRef(null);

  // Version useEffect — flash visible
  useEffect(() => {
    if (useLayout) return;
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 8, left: rect.left });
    }
  }, [useLayout]);

  // Version useLayoutEffect — pas de flash
  useLayoutEffect(() => {
    if (!useLayout) return;
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 8, left: rect.left });
    }
  }, [useLayout]);

  return (
    <div>
      <button
        onClick={() => {
          setPosition({ top: 0, left: 0 });
          setUseLayout((prev) => !prev);
        }}
      >
        Basculer : {useLayout ? 'useLayoutEffect' : 'useEffect'}
      </button>

      <div ref={buttonRef}>Survolez-moi</div>

      <div style={{ position: 'fixed', top: position.top, left: position.left }}>
        {position.top === 0 ? '⚡ FLASH (0,0)' : 'Info-bulle positionnée !'}
      </div>
    </div>
  );
}