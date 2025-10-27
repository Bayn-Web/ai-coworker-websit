// src/types/tube.d.ts
declare module "@/plugins/tube.mjs" {
  interface TubesConfig {
    tubes: {
      colors: string[];
      lights: {
        intensity: number;
        colors: string[];
      };
    };
    renderer?: {
      antialias?: boolean;
      alpha?: boolean;
      preserveDrawingBuffer?: boolean;
    };
  }

  interface TubesInstance {
    tubes: {
      setColors: (colors: string[]) => void;
      setLightsColors: (colors: string[]) => void;
    };
    dispose: () => void;
  }

  const TubesCursor: (canvas: HTMLCanvasElement, config: TubesConfig) => TubesInstance;

  export default TubesCursor;
}
