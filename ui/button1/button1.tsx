import React from 'react';
import type { ReactNode } from 'react';

export type Button1Props = {
  children?: ReactNode;
};

export function Button1({ children }: Button1Props) {
  return (
    <p className="text-gray-300">
      {children}
    </p>
  );
}
