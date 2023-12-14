import { AbsoluteFill, useCurrentFrame } from "remotion";
 
export const Main = () => {
  const frame = useCurrentFrame();
 
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        backgroundColor: "white",
      }}
    >
      The current frame is {frame}.
    </AbsoluteFill>
  );
};