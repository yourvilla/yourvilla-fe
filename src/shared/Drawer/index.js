import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "../../mockData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export const CustomDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const userData = useSelector((state) => state.userData);


  return (
    <>
      <div onClick={() => setOpen(!open)} className="text-white">
        <MenuIcon className="!m-3 !mr-6"/>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {navItems.map((item, index) => (
            <Link key={""} to={Object.keys(userData).length === 0 && item.to === "/profile"
                ? "/login"
                : item.to} onClick={() => setOpen(false)}>
              <ListItem key={item.id} className="!text-primary">
                <ListItemButton>
                  <ListItemIcon className="!text-primary">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.item} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};
