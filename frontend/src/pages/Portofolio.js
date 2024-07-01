import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Grid, Stack, Typography } from "@mui/material";
import { mernStack } from "../data/portofolio";
console.log(mernStack)

const Portofolio = () => {
  return (
    <Stack>
      <Typography sx={{ mt: 4, mb: 4 }} variant="h1">
        Mern Stack
      </Typography>

      <Grid container spacing={4}>
        {mernStack.map((card) => (
          <Grid item xl={4} md={12} sm={12}>
            <ProjectCard card={card} />
          </Grid>
        ))}
      </Grid>

      {/* <Typography sx={{ mt: 8, mb: 4 }} variant="h1">
        UI/ UX
      </Typography>
      <Grid container spacing={4}>
        {array.map((card) => (
          <Grid item xl={4} md={12} sm={12}>
            <ProjectCard />
          </Grid>
        ))}
      </Grid> */}
    </Stack>
  );
};

export default Portofolio;
