import { OrbPosition } from "@/types/DecorativeOrbTypes";

export default function DecorativeOrb({ position, size = "md", color }) {
  const positions = {
    [OrbPosition.TOP_LEFT]: "top-0 left-0",
    [OrbPosition.TOP_RIGHT]: "top-0 right-0",
    [OrbPosition.BOTTOM_LEFT]: "bottom-0 left-0",
    [OrbPosition.BOTTOM_RIGHT]: "bottom-0 right-0",
  };

  const sizes = {
    sm: "w-48 h-48",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  const baseClasses =
    "absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 dark:opacity-30 animate-pulse";

  return (
    <div
      className={`${baseClasses} ${positions[position]} ${sizes[size]} ${color}`}
    />
  );
}
