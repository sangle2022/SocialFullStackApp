import { useTheme } from "@emotion/react";
import {
  
  IconButton,
  Stack,
 
  Typography,
  Button,
  
} from "@mui/material";

import React, { useEffect, useState } from "react";
import "react-icons/ai";
import "react-icons/ri";
import {
  AiFillFileText,
  AiFillHome,
 
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";

import HorizontalStack from "./util/HorizontalStack";


const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  

  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const mobile = width < 500;
  const navbarWidth = width < 600;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };

  

  return (
    <Stack mb={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 2,
          pb: 0,
        }}
        spacing={!mobile ? 2 : 0}
      >
        <HorizontalStack>
          <AiFillFileText
            size={33}
            color={theme.palette.primary.main}
            onClick={() => navigate("/")}
          />
          <Typography
            sx={{ display: mobile ? "none" : "block" }}
            variant={navbarWidth ? "h6" : "h4"}
            mr={1}
            color={theme.palette.primary.main}
          >
            {/* <Link to="/" color="inherit"> */}
              Social
            {/* </Link> */}
          </Typography>
        </HorizontalStack>

       

        <HorizontalStack>
         

          <IconButton component={Link} to={"/"}>
            <AiFillHome />
          </IconButton>
          {user ? (
            <>
              
             
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="text" sx={{ minWidth: 80 }} href="/signup">
                Sign Up
              </Button>
              <Button variant="text" sx={{ minWidth: 65 }} href="/login">
                Login
              </Button>
            </>
          )}
        </HorizontalStack>
      </Stack>
     
    </Stack>
  );
};

export default Navbar;
