   // src/react-slick.d.ts
   declare module 'react-slick' {
    import { Component, ReactNode } from 'react';

    export interface SliderProps {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      arrows?: boolean;
      adaptiveHeight?: boolean;
      children?: ReactNode;
      // Add other props as needed
    }

    export default class Slider extends Component<SliderProps> {
        slickNext(): void;  
        slickPrev(): void;
    }
    
  }