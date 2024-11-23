import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import * as S from "./style";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ImgApp from "src/Assets/ia-blog.png";

interface LayoutContentProps {
  children?: ReactNode;
}

const LayoutContent = ({ children }: LayoutContentProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pages = ["início", "contato", "sobre nós"];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Navbar Horizontal */}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo e título */}
            <img src={ImgApp} alt="Logo do aplicativo" width={80} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              IA INFO
            </Typography>

            {/* Ícone do menu hamburguer (aparece em telas pequenas) */}
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

            {/* Botões do menu (aparecem em telas maiores) */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Menu Lateral (Drawer) */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", md: "none" }, // Apenas para telas pequenas
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
              <ListItem component="button" key={page}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Menu Vertical (fixo para telas maiores) */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 240,
          position: "fixed",
          top: 64, // Altura da navbar
          left: 0,
          bottom: 0,
          backgroundColor: "#f5f5f5",
          padding: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Menu
        </Typography>
        <List>
          {pages.map((page) => (
            <ListItem component="button" key={page}>
              <ListItemText primary={page} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Conteúdo Principal */}
      <Box
        sx={{
          marginLeft: { xs: 0, md: 240 }, // Adiciona margem para acomodar o menu lateral fixo
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
