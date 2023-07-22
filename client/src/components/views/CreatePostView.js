import { Container } from "@mui/material";
import React from "react";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostEditor from "../PostEditor";


const CreatePostView = () => {
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout left={<PostEditor />}  />
    </Container>
  );
};

export default CreatePostView;
