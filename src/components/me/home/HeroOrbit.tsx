import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroOrbit({
  children,
  size,
  rotation,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        style={{
          animationDuration: orbitDuration,
        }}
        className={twMerge(shouldOrbit === true && "animate-spin")}
      >
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            style={{
              animationDuration: spinDuration,
            }}
            className={twMerge(shouldSpin === true && "animate-spin")}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
