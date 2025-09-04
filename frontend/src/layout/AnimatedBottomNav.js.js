import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

// Wrap the component with React.forwardRef
const AnimatedBottomNav = React.forwardRef(({ ListData }, ref) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      ref={ref} // Now, the ref is correctly passed to the Paper component
      sx={{
        display: {
          sm: "none",
          xs: "flex",
          lg: "none",
        },
        // ... rest of your styles
      }}
      elevation={4}
    >
      <BottomNavigation value={value} onChange={handleChange} sx={{width:'100%',}}>
        {ListData.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.name}
            value={item.name}
            icon={item.icon}
            component={Link}
            to={item.link}
            sx={{ p: 2, minWidth: 20 }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
});

export default AnimatedBottomNav;