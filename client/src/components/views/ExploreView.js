import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

import GridLayout from "../GridLayout";

import Navbar from "../Navbar";

import PostBrowser from "../PostBrowser";

const ExploreView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={<PostBrowser createPost contentType="posts" />}
        
      />
    </Container>
  );
};

export default ExploreView;
