import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
// Import the skills array
import skills from "../data/mySkills";
import tools from "../data/tools";
import expertise from "../data/expertise";
import certificates from "../data/certificates";

import background from "../assets/background.png";
import ExpertiseCard from "../components/ExpertiseCard";
import { Assignment } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import Linkdin from "../components/Linkdin";
import myData from "../data/myData";
const Home = () => {
  return (
    <Stack>
      
      <Linkdin />
      <Typography variant="h1" sx={{ mt: 8, mb: 4 }}>
        My Expertise
      </Typography>

      <Grid container spacing={2}>
        {expertise.map((expertise, index) => (
          <Grid item xl={4} md={12} sm={12} key={index}>
            <ExpertiseCard expertise={expertise} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h1" sx={{ mt: 8, mb: 4 }}>
        My Skills
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        gap={2}
        rowGap={2}
        sx={{ borderRadius: 4 }}
      >
        {skills.map((skill, index) => (
          <Paper
            component={Link}
            to={skill.link}
            key={index}
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Necessary for security
            sx={{
              textDecoration: "none",
              // maxWidth:'',
              gap: 1,
              margin: 0,
              marginLeft: "0 !important",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center", // Ensure items are vertically centered
              p: 1, // Add some padding for better appearance

              px: 1,
              pr: 2,
              borderRadius: 16,
              "&:hover": {
                backgroundColor: "hover",
                cursor: "pointer",
              },
            }}
          >
            <Avatar
              alt={skill.name}
              src={skill.img}
              sx={{ width: 28, height: 28 }}
            />
            <Typography variant="h4">{skill.name}</Typography>
          </Paper>
        ))}
      </Stack>

      <Typography variant="h1" sx={{ mt: 8, mb: 4 }}>
        Tools
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        rowGap={2}
        gap={2}
        sx={{ borderRadius: 4 }}
      >
        {tools.map((tool, index) => (
          <Paper
            component={Link}
            key={index}
            to={tool.link}
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Necessary for security
            sx={{
              // maxWidth:'',
              textDecoration: "none",
              gap: 1,
              display: "flex",
              justifyContent: "space-between",
              margin: 0,
              marginLeft: "0 !important",
              flexDirection: "row",
              alignItems: "center", // Ensure items are vertically centered
              p: 1, // Add some padding for better appearance

              px: 1,
              pr: 2,
              borderRadius: 16,
            }}
          >
            <Avatar
              alt={tool.name}
              src={tool.img}
              sx={{ width: 28, height: 28 }}
            />
            <Typography variant="h4">{tool.name}</Typography>
          </Paper>
        ))}
      </Stack>

      <Typography variant="h1" sx={{ mt: 8, mb: 4 }}>
        Certificates
      </Typography>
      <Grid container spacing={2}>
        {certificates.map((certificate, index) => (
          <Grid item xl={4} md={6} sm={12}>
            <Box
              key={index}
              sx={{
                gap: 2,
                display: "flex",
                //   justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center", // Ensure items are vertically centered
                p: 1, // Add some padding for better appearance

                px: 2,
              }}
            >
              <Avatar
                alt={certificate.name}
                sx={{
                  width: 68,
                  height: 60,
                  // border: "1px solid gray",
                  bgcolor: "white",
                }}
                variant="rounded"
                src={certificate.logo}
              />
              <Stack spacing={1}>
                <Typography
                  component={Link}
                  target="_blank" // Open link in new tab
                  rel="noopener noreferrer" // Necessary for security
                  to={certificate.url}
                  variant="h3"
                  color="text.primary"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  {certificate.name}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Id {certificate.id}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Home;
