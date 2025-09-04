import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Stack } from '@mui/material';

const MainContent = () => {
  return (
    <Stack
    //   minHeight="100vh"
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        mt: 8,
        overflowY: "auto",
        minHeight: "100vh",
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

export default MainContent 
