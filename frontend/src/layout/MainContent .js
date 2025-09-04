// MainContent.js
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Stack } from "@mui/material";


const MainContent = ({ appBarHeight }) => {
  // A typical Material-UI bottom navigation bar height is around 56px
  const bottomNavHeight = 56;
  
  return (
    <Stack
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: `${appBarHeight}px`,
        overflowY: "auto",
        // Use the CSS variable and the calculated heights
        maxHeight: `calc(var(--vh, 1vh) * 100 - ${appBarHeight + bottomNavHeight}px)`,
        // ... (rest of your styles)
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#1f2937",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#3C454A ",
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default MainContent;