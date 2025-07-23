import React from "react";
import { ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import menuConfig from "../../assets/configs/menuConfig";

const NavBarItems = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}>
      {menuConfig.sidebarData.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.id}
          sx={{
            color: location.pathname === item.path ? "#c9d1d9" : "#c9d1d9",
            display: "flex",
            alignItems: "center",
            padding: 2,
            borderBottom:
              location.pathname === item.path ? "3px solid #c9d1d9" : "none",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              backgroundColor: "#0d1117",
              transform: "translateY(-5px)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#c9d1d9", minWidth: 40 }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </Box>
  );
};

export default NavBarItems;
