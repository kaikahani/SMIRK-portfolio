/* components/Cursor/styles.js */
import styled, { css } from 'styled-components';

export const StyledCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(-50%, -50%, 0);
  pointer-events: none;
  z-index: 2147483647;
  will-change: transform;

  /* Default white circle (original look) */
  ${({ cursorType }) =>
    (!cursorType || cursorType === 'default') &&
    css`
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.06);
    `}

  ${({ bordered }) =>
    bordered &&
    css`
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.25);
    `}

  /* Play variant */
  ${({ cursorType }) =>
    cursorType === 'play' &&
    css`
      width: auto;
      height: auto;
      padding: 8px 10px;
      border-radius: 999px;
      background: transparent;
      box-shadow: none;
      mix-blend-mode: difference;
      font-weight: 700;
      font-size: 14px;
      color: #f5c242;
      &:after {
        content: 'Play ▶';
      }
    `}

  /* Close variant */
  ${({ cursorType }) =>
    cursorType === 'close' &&
    css`
      width: auto;
      height: auto;
      padding: 6px 10px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: none;
      font-weight: 700;
      font-size: 14px;
      color: #fff;
      &:after {
        content: 'Close ✕';
      }
    `}
`;
