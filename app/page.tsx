"use client";
import Grid from '@mui/material/Grid';
import { Player } from "@remotion/player";
import { Main as MainComposition } from "@remotion/RunesComposition/Main"

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={4} className="left-column">
        <h1>Home</h1>
      </Grid>
      <Grid item xs={8} className="right-column">
        <Player
          component={MainComposition}
          durationInFrames={120}
          compositionWidth={1920}
          compositionHeight={1080}
          style={{
            width: "100%",
            height: "100%",
          }}
          fps={30}
          controls
          loop
          autoplay
        />
      </Grid> 
    </Grid>
  )
}

export default Home;
