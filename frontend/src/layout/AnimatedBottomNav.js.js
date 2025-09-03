import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Home, Favorite, Search, Person } from "@mui/icons-material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

// const AnimatedAction = styled(BottomNavigationAction)(
//   ({ theme, selected }) => ({
//     transition: "all 0.3s ease",
//     backgroundColor: selected ? theme.palette.primary.main : "transparent",
//     color: selected ? theme.palette.common.white : theme.palette.text.secondary,
//     borderRadius: "12px",
//     margin: "2px",
//     '& .MuiSvgIcon-root': {
//     color: selected ? theme.palette.common.white : theme.palette.text.secondary,
//   },
//   })
// );

export default function AnimatedBottomNav({ ListData }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper
      sx={{
        display: {
          sm: "flex",
          sx: "flex",
          lg: "none",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // bgcolor: "red",
        color: "white",
        height: "60px",
        bottom: 0,
        left: 0,
        right: 0,
        gap: 0,
        position: "absolute",
      }}
      elevation={4}
    >
      <BottomNavigation value={value} onChange={handleChange}>

        {ListData.map((item, index) => (
          
          <BottomNavigationAction
          key={index}
          label={item.name}
          value={item.name}
          icon={item.icon}
          component={Link}
          to={item.link}
        />
        
        ))}
        {/* <AnimatedAction label="Home" icon={<Home />} selected={value === 0} />
        <AnimatedAction
          label="Favorites"
          icon={<Favorite />}
          selected={value === 1}
        />
        <AnimatedAction
          label="Search"
          icon={<Search />}
          selected={value === 2}
        />
        <AnimatedAction
          label="Profile"
          icon={<Person />}
          selected={value === 3}
        /> */}
      </BottomNavigation>
    </Paper>
  );
}
