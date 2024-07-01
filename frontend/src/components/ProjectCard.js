import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Avatar, Box, Paper, Stack, Tooltip } from "@mui/material";
import { GitHub } from "@mui/icons-material";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ProjectCard = ({card}) => {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardMedia
        component={Link}
        to="/portofolio/more"
        sx={{ height: 240 }}
        image={card.thumbnail}
        title={card.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div">
          {card.name}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {card.shortDis}
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap"
          spacing={1}
          rowGap={1}
          sx={{ borderRadius: 4, marginTop: 4 }}
        >
          {card.skills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                p: 1, // Add some padding for better appearance

                px: 1,
                pr: 2,
                border: "1px dashed grey",
                borderRadius: 16,
              }}
            >
              <Typography variant="h4">{skill}</Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ width: "100%", px: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              component={Link}
              target="_blank"
              rel="noopener noreferrer"
              to={card.liveLink}
            >
              View Live
            </Button>
            <Button size="small" component={Link} to="/portofolio/more">
              Learn More
            </Button>
          </Stack>
          <Stack direction="row">
            <Tooltip title="View source code">
              <Avatar
                alt=""
                component={Link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: "primary.contrastText",
                }}
                to={card.github}
              >
                <GitHub color="primary.contrastText" />
              </Avatar>
            </Tooltip>
          </Stack>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
