declare module '*.scss';

declare module '*.svg' {
  import React from 'react';
  const content: string;
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
