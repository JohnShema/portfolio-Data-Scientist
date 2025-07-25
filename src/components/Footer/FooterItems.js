import React from "react";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import footerConfig from "../../assets/configs/footerConfig";

const FooterItems = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 400,
        mx: "auto",
        gap: 1, // spacing between icons
        py: 2,
      }}
    >
      {footerConfig.icons.map((item) => (
        <IconButton
          key={item.id}
          component={item.isInternal ? Link : "a"}
          to={item.isInternal ? item.url : undefined}
          href={!item.isInternal ? item.url : undefined}
          sx={{
            color: "#c9d1d9",
            p: 1.5,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              backgroundColor: "#151030",
              transform: "translateY(-4px)",
            },
          }}
          target={item.target || (!item.isInternal ? "_blank" : undefined)}
          rel={!item.isInternal ? "noopener noreferrer" : undefined}
          aria-label={item.label || "footer-icon"} // Accessible label
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default FooterItems;
