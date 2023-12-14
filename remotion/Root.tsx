import { Composition } from "remotion";
import {Main } from "./RunesComposition/Main";

export const RemotionRoot: React.FC = () => {
  return (
      <Composition
        id="Main"
        component={Main}
        durationInFrames={300}
        fps={30}
        width={1080}
        height={1080}
        defaultProps={{
          outProgress: 0,
        }}
      
      />
  );
};
