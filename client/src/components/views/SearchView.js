import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";


const SearchView = () => {
  return (
    <Container>
      <Navbar />
      <GridLayout
        left={
          <Stack spacing={2}>
            <PostBrowser createPost contentType="posts" />
          </Stack>
        }
       
      />
    </Container>
  );
};

export default SearchView;
