import React from "react";
import { Chip, Box, useTheme, useMediaQuery } from "@mui/material";

const Tags = (props) => {
  const { tags, id } = props || {};
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        mt: 0.5,
        mb: 0.5,
      }}
    >
      {tags &&
        tags.map((tag, index) => (
          <Chip
            key={id + index}
            label={tag}
            size="small"
            sx={{
              fontSize: isSmallScreen ? "9px" : "11px",
              padding: isSmallScreen ? "3px 5px" : "5px 8px",
              letterSpacing: "1px",
              fontWeight: "lighter",
              color: "#fef3c7",
              backgroundColor: "#263238", // optional subtle background
            }}
          />
        ))}
    </Box>
  );
};

export default Tags;
