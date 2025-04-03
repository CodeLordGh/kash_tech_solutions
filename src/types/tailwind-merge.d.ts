declare module 'tailwind-merge' {
  export function twMerge(...classLists: (string | undefined)[]): string;
  export function twJoin(...classLists: (string | undefined)[]): string;
  export function extendTailwindMerge(config: any): typeof twMerge;
}