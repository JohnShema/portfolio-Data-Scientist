import React from "react";
import { Box, Typography } from "@mui/material";

const SkillsItems = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {props.config.map((item) => (
        <Box
          key={item.id}
          sx={{
            color: "#c9d1d9",
            textAlign: "center",
            padding: "1.5rem",
            backgroundColor: "#151030",
            margin: "1.5rem",
            borderRadius: "15px",
            boxShadow: "0px 4px 20px rgba(, 0, 0, 0.1)",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0px 6px 30px rgba(21, 16, 48, 255)",
              cursor: "pointer",
            },
          }}
        >
          {item.icon}
          <Typography
            variant="body2"
            sx={{ marginTop: "0.6rem", fontWeight: "bold" }}
          >
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsItems;
