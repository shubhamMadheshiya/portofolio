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
import myData from "../data/myData";
const Home = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Stack>
      <Paper sx={{ borderRadius: 4, p: 4 }}>
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            minHeight: "280px",
            zIndex: 0,
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent overlay
              zIndex: 1,
              borderRadius: 4,
            }}
          />
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "relative",
              zIndex: 2,
              minHeight: "100%",
              p: 8,
            }}
          >
            <Typography variant="h1" sx={{ mb: 4, color: "white" }}>
              Hello, Check This Out!
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="h3" color="primary">
                {"</div>"}
              </Typography>
              <Typography
                variant="h2"
                color="text.main"
                fontWeight={600}
                fontFamily="Helvetica Neue"
              >
                <ReactTyped
                  strings={myData.iAm}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  // style={{ color: theme.palette.primary.main }}
                />
              </Typography>
              <Typography variant="h3" color="primary">
                {"</div>"}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Paper>
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
                  border: "1px solid gray",
                  borderColor: "text.seconary",
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
