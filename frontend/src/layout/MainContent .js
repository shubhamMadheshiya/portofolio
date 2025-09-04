import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Stack } from "@mui/material";

const MainContent = ({ bottomNavHeight, appBarHeight }) => {
  return (
    <Stack
      //   minHeight="100vh"
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        pt: `${appBarHeight + 24}px`,
        overflowY: "auto",
        // maxHeight: `${100-bottomNavHeight-appBarHeight}vh`,
        height: `calc(var(--vh, 1vh) * 100 - ${appBarHeight + bottomNavHeight}px)`,

        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#1f2937", // Dark blue background color
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#3C454A ", // Dark blue thumb color
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      {/* <DrawerHeader sx={{ display: { xs: "block", sm: "none" } }} /> */}

      <Outlet />
      <Footer />
    </Stack>
  );
};

export default MainContent;
