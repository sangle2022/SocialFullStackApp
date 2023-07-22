import { Grid, Stack } from "@mui/material";
import React from "react";

const GridLayout = (props) => {
  const { left } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {left}
      </Grid>
     
    </Grid>
  );
};

export default GridLayout;
