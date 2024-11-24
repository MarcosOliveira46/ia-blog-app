import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ImgApp from "src/Assets/ia-blog.png";
import { LayoutContentProps, PageProps } from "./types";

const LayoutContent = ({ children }: LayoutContentProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const pages: PageProps[] = [
    {label: "Início", route: "/"},
    {label: "Contato", route: "/contacts"},
    {label: "Sobre nós", route: "/aboutUs"},
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const optionActive = (navItem: string): boolean => {
    const currentLocation = location.pathname === navItem;
    return currentLocation
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <img src={ImgApp} alt="Logo do aplicativo" width={80} onClick={() => navigate("/")} style={{ cursor: "pointer" }}/>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, ml: 2, display: { sm: "none", md: "block" } }}
            >
              IA INFO
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: {md: "flex-start", sm: "center"},  }}>
              {pages.map((page) => (
                <S.NavBarItem
                  key={page.label}
                  active={optionActive(page.route)}
                  onClick={() => navigate(page.route)}
                >
                  {page.label}
                </S.NavBarItem>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {pages.map((page) => (
              <ListItem component="button" key={page.label}>
                <ListItemText primary={page.label} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 240,
          position: "fixed",
          top: 64,
          right: 0,
          bottom: 0,
          backgroundColor: "#f5f5f5",
          padding: 2,
        }}
      >
        <List>
          {pages.map((page) => (
            <ListItem component="button" key={page.label}>
              <ListItemText primary={page.label} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          padding: 2,
        }}
      >
        <S.Container>
          <S.Content>{children ? children : <Outlet />}</S.Content>
        </S.Container>
      </Box>
    </>
  );
};

export default LayoutContent;
