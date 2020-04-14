import React, { Component } from "react";
import { Grid, Divider, Typography } from "@material-ui/core";
import Avatar from "./Component/Avatar";
import WideBackground from "./Component/Background";
import Canvas from "./Component/Canvas";
import Tab from "./Component/Tab";

export class BodyPage extends Component {
  render() {
    return (
      <Grid item>
        <WideBackground />
        <Canvas>
          <Avatar />
          <Typography variant='h1' color="textPrimary">Daniele Fedeli</Typography>
          <Divider />
          <Tab />
        </Canvas>
      </Grid>
    );
  }
}

export default BodyPage;
