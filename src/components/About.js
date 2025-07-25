import React from "react";
import { Card, CardHeader, CardContent, Typography, Box } from "@mui/material";

const About = (props) => {
  const { about } = props || {};
  const { start = "", exit = "" } = about || {};

  return (
    <Box id="about" sx={{ my: 4 }}>
      <Card sx={{ backgroundColor: "#263238", color: "#c9d1d9" }}>
        <CardHeader
          avatar={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="span"
                className="iconify"
                data-icon="emojione:red-circle"
                sx={{ mr: 1 }}
                role="img"
                aria-label="red status"
              />
              <Box
                component="span"
                className="iconify"
                data-icon="twemoji:yellow-circle"
                sx={{ mr: 1 }}
                role="img"
                aria-label="yellow status"
              />
              <Box
                component="span"
                className="iconify"
                data-icon="twemoji:green-circle"
                role="img"
                aria-label="green status"
              />
            </Box>
          }
        />
        <CardContent
          sx={{
            fontSize: { xs: "1rem", sm: "1.32rem" },
            lineHeight: "150%",
            backgroundColor: "#151030",
            color: "#c9d1d9",
            padding: "2rem",
          }}
        >
          <Typography variant="body1" paragraph>
            {start}
          </Typography>
          <Typography variant="body1">{exit}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;
