import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fonts: {
      serif: string;
      sansSerif: string;
    };
    colors: {
      main: string;
      secondary: string;
    };
  }
}