"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Player } from "@remotion/player";
import { SideMenu } from "@components/SideMenu/Menu";
import { RunesComposition } from "@components/Composition/Runes";

const Home = () => {
  const [inputText, setInputText] = useState<string>("Hello world!");
  const [inputColor, setInputColor] = useState<string>("#685e95");
  const [inputImage, setInputImage] = useState<string>("wolf");
  console.log(inputText, inputColor);

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={3} className="left-column">
        <SideMenu
          setVideoText={setInputText}
          setVideoColor={setInputColor}
          setVideoImage={setInputImage}
        />
      </Grid>
      <Grid item xs={12} md={9} className="right-column">
        <Player
          component={RunesComposition}
          inputProps={{
            inputText: inputText,
            inputColor: inputColor,
            inputImage: inputImage,
          }}
          durationInFrames={30 + 30 * inputText.split(" ").length}
          //Not the best way to do this, but I don't care, it is a demo
          compositionWidth={1920}
          compositionHeight={1080}
          style={{
            width: "100%",
            height: "100%",
          }}
          fps={30}
          controls
          loop
          autoPlay
        />
      </Grid>
    </Grid>
  );
};

export default Home;
