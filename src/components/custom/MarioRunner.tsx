import type { CSSProperties } from 'react';
import marioSprites from '@/assets/mario-sprites.png';

interface MarioRunnerProps {
  /** 0 = top of the timeline, 1 = bottom. Positions Mario along the track. */
  progress: number;
  /** Mario's legs only cycle while the user is scrolling down. */
  running: boolean;
}

// Sprite-sheet geometry (see src/assets/mario-sprites.png).
const SCALE = 2.5;
const FRAME_W = 30;
const FRAME_H = 32;
const SHEET_W = 443;
const SHEET_H = 550;
const RUN_ROW_Y = 240; // Row holding the 3-frame walk/run cycle.
const FRAME_COUNT = 3;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

const MarioRunner = ({ progress, running }: MarioRunnerProps) => {
  const y = clamp01(progress);

  const marioStyle: CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: `calc(${y} * (100% - ${FRAME_H * SCALE}px))`,
    width: FRAME_W * SCALE,
    height: FRAME_H * SCALE,
    transform: 'translateX(-50%)',
    backgroundImage: `url(${marioSprites})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${SHEET_W * SCALE}px ${SHEET_H * SCALE}px`,
    backgroundPositionX: 0,
    backgroundPositionY: `${-RUN_ROW_Y * SCALE}px`,
    imageRendering: 'pixelated',
    // Distance the run keyframe sweeps to cycle through all frames.
    ['--mario-frame-end' as string]: `${-FRAME_W * FRAME_COUNT * SCALE}px`,
  };

  return (
    <div
      className="relative h-56 w-full"
      role="img"
      aria-label="Mario running down the experience timeline"
    >
      {/* Vertical track Mario runs along. */}
      <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-foreground" />
      <div
        className={running ? 'animate-mario-run' : undefined}
        style={marioStyle}
      />
    </div>
  );
};

export default MarioRunner;
