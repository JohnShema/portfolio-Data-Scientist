import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Galaxy from "../../components/Galaxy/Galaxy";
import DynamicTyping from "../../components/DynamicTyping";
import homeConfig from "../../assets/configs/homeConfig";

const HeroSection = () => {
  return (
    <Box position="relative" height="79vh" overflow="hidden">
      <Galaxy /> {/* Galaxy.jsx handles the animated background */}

      <Container
        maxWidth="xl"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#f5f5f5",
          zIndex: 2,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: { xs: "2em", md: "3.5em" } }}>
          {homeConfig.greeting}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <DynamicTyping titles={homeConfig.titles} />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;