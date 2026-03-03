/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

// vite-imagetools query imports
declare module '*?format=webp' {
  const src: string;
  export default src;
}
declare module '*&format=webp' {
  const src: string;
  export default src;
}
declare module '*&as=srcset' {
  const srcset: string;
  export default srcset;
}
