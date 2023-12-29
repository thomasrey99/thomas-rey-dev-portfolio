declare module 'aos' {

    export function init(options?: AosOptions): void;

    export interface AosOptions {
      duration?: number;
      offset?: number;
      easing?: string;
    }

}