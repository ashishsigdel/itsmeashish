import React, { PropsWithChildren } from "react";

export default function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="animate-spin [animation-duration:300s]"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div className="inline-flex animate-spin [animation-duration:60s]">
          {children}
        </div>
      </div>
    </div>
  );
}
