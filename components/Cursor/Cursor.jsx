import React, { useEffect, useRef, useState } from 'react';
import { useCursorContext } from '../../context/cursor';
import { StyledCursor } from './styles';

const Cursor = ({ hidden }) => {
  const cursorRef = useRef();
  const [{ cursorStyle, position }] = useCursorContext();
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    if (hidden) return;

    const onMouseMove = event => {
      const x = position?.x ?? event.clientX;
      const y = position?.y ?? event.clientY;
      if (!Number.isFinite(x) || !Number.isFinite(y)) return;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      const target = document.elementFromPoint(x, y);
      const cursor = target?.closest?.('[data-cursor]');
      setCursorType(cursor?.dataset?.cursor || 'default');
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, [position, hidden]);

  if (hidden) return null;

  return (
    <StyledCursor
      ref={cursorRef}
      color={cursorStyle.color}
      bordered={cursorStyle.bordered}
      cursorType={cursorType}
      data-cursortype={cursorType}
    />
  );
};

export default React.memo(Cursor);
