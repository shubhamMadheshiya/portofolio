import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

// Wrap the component with React.forwardRef
const AnimatedBottomNav = React.forwardRef(({ ListData }, ref) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      ref={ref} // Now, the ref is correctly passed to the Box component
      sx={{
        display: {
          xs: "flex",
          sm: "none",
          // lg: "none",
        },
        // ... rest of your styles
      }}
      elevation={4}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{ width: "100%", height: "auto", p: 0.5, p: 1 }}
      >
        {ListData.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.name}
            value={item.name}
            icon={item.icon}
            component={Link}
            to={item.link}
            sx={{ pt: 1, pb: 1, borderRadius: 2, minWidth: "40px" }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
});

export default AnimatedBottomNav;
