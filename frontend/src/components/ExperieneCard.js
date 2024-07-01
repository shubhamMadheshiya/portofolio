import { Avatar, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExperieneCard = ({ experience }) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 4 }}>
      <Stack
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { sx: "column", lg: "row" },
        }}
      >
        <Avatar
          variant="rounded"
          alt={experience.company}
          sx={{ width: 40, height: 40, bgcolor: "white" }}
          src={experience.logo}
        />
        <Stack spacing={2} sx={{ width: "100%" }} m={0}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h2">{experience.title}</Typography>
            <Typography variant="h4">{experience.date}</Typography>
          </Stack>
          <Typography
            variant="h3"
            color="primary.main"
            target="_blank"
            rel="noopener noreferrer"
            component={Link}
            to={experience.website}
          >
           { `${experience.company} - ${experience.employmentType}`}
          </Typography>
          <Typography variant="h4">
           { `${experience.location} . (${experience.jobType})`}
          </Typography>

          <Typography variant="h3" color="text.secondary">
            {experience.dis}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ExperieneCard;
