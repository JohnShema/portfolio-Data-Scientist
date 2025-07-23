import footerConfig from "../../assets/configs/footerConfig";
import React from "react";
import { Box, IconButton } from "@mui/material";

const FooterItems = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      {footerConfig.icons.map((item) => (
        <IconButton
          href={item.url}
          key={item.id}
          sx={{
            color: "#c9d1d9",
            padding: 2,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              backgroundColor: "#151030",
              transform: "translateY(-5px)",
            },
          }}
          target={item.target}
          rel="noopener noreferrer"
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default FooterItems;
