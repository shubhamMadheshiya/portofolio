import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const ExpertiseCard = ({ expertise }) => {
  return (
    <Paper sx={{ borderRadius: 4, p: 4, height: 296 }}>
      <Stack spacing={1}>
        <Typography variant="h2">{expertise.title}</Typography>
        <Typography variant="h3" color="text.secondary">
          {expertise.para}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ExpertiseCard;
