import React from "react";
import { Container, Box } from "@mui/material";
import HeroSection from "./HeroSection";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import Blogs from "../../pages/Blogs";
import homeConfig from "../../assets/configs/homeConfig";

const Home = () => {
  return (
    <section>
      <HeroSection />

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <About about={homeConfig.about} />
      </Container>

      <Container
        maxWidth="xl"
        className="resume-content"
        id="resume"
        sx={{ mt: 6 }}
      >
        <Box sx={{ width: "100%", maxWidth: "960px", mx: "auto" }}>
          <Timeline items={homeConfig.workTimeline} />
          <Blogs />
        </Box>
      </Container>
    </section>
  );
};

export default Home;
