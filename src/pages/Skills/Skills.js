import React from "react";
import { Box, Typography } from "@mui/material";
import SkillsItems from "./SkillsItems";
import skillsConfig from "../../assets/configs/skillsConfig";

const Skills = () => {
  return (
    <section id="skills">
      <Box
        sx={{
          textAlign: "center",
          py: 4,
          backgroundColor: "#0e0b25",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(21, 16, 48, 255)",
          mb: 6,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 6px 30px rgba(21, 16, 48, 255)",
            cursor: "pointer",
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "#c9d1d9", py: 2 }}
        >
          <strong>Main Skills & Tools</strong>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <SkillsItems config={skillsConfig.mainSkills} />
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          py: 4,
          backgroundColor: "#0e0b25",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(21, 16, 48, 255)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 6px 30px rgba(21, 16, 48, 255)",
            cursor: "pointer",
          },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ color: "#c9d1d9", py: 2 }}
        >
          <strong>Complementary Skills & Tools</strong>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <SkillsItems config={skillsConfig.complementarySkills} />
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
