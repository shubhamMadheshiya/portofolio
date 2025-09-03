import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import myData from "../data/myData";

const NavHeader = () => {
  return (
    <Box
      sx={{
        // width: 300,
        // height: 200,
        // backgroundColor: 'rgba(254, 254, 254, 0.28)', // 50% transparency
        // border: '1px solid #ccc',
        p: 2, // padding
        // textAlign: 'center',
        // color: 'white',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: '1.5rem',
        // "&::before": {
        //   zIndex: -1,
        //   content: '""', // content must have a value, even if it's an empty string
        //   width: "100%",
        //   height: "100%",
        //   // position: "absolute",
        //   opacity: 0.3,
        //   backgroundColor: "rgba(255, 255, 255, 0.29)",
        //   backgroundColor: "transparent",
        // },
        zIndex:4,
        boxShadow: 3,
      }}
    >
      <Stack direction={"row"} gap={2} alignItems={"center"}>
        <Avatar src={myData.profilePic} />
        <Stack gap={0.5}>
          <Typography variant="h2">{myData.name}</Typography>
          <Typography variant="h5" color={"text.secondary"}>
            {myData.bio}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavHeader;
