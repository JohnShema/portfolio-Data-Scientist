import React from "react";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom"; // ✅ 1. Import Link
import footerConfig from "../../assets/configs/footerConfig";

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
          key={item.id}
          component={item.isInternal ? Link : "a"} // ✅ 2. Use Link for internal routes
          to={item.isInternal ? item.url : undefined} // ✅ 3. Set 'to' only if it's internal
          href={!item.isInternal ? item.url : undefined} // ✅ 4. Use 'href' if it's external
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
