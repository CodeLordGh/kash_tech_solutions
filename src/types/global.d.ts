// Type definitions for libraries without proper TypeScript support

declare module 'aria-query' {
  const content: any;
  export default content;
}

declare module 'eslint' {
  const content: any;
  export default content;
}

declare module 'html-minifier-terser' {
  const content: any;
  export default content;
}

declare module 'prettier' {
  const content: any;
  export default content;
}

// @testing-library/jest-dom is handled in a separate declaration file