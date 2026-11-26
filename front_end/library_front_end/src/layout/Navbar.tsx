import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = ["Home", "Categories", "New Arrivals", "About"];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        color: "#1a1a2e",
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(8px)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          px: { xs: 2, md: 4 },
          minHeight: { xs: 64, md: 72 },
        }}
      >
        {/* LEFT: Logo + Nav Links */}
        <Stack direction="row" spacing={4} alignItems="center">
          {/* Logo */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 2,
                background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                color: "white",
              }}
            >
              <MenuBookIcon sx={{ fontSize: 22 }} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 800,
                letterSpacing: -0.5,
                color: "#1a1a2e",
                fontSize: "1.25rem",
              }}
            >
              Library
            </Typography>
          </Stack>

          {/* Divider */}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", lg: "block" }, my: 2 }}
          />

          {/* Nav Links */}
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            {navLinks.map((label) => (
              <Button
                key={label}
                color="inherit"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#4a4a68",
                  px: 2,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "rgba(25, 118, 210, 0.08)",
                    color: "#1976d2",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>

        {/* CENTER: Search (desktop) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "#f4f6f8",
            borderRadius: 2,
            px: 2,
            py: 0.75,
            width: "35%",
            maxWidth: 480,
            border: "1px solid transparent",
            transition: "all 0.2s ease",
            "&:hover": { bgcolor: "#eef1f4" },
            "&:focus-within": {
              bgcolor: "#ffffff",
              borderColor: "#1976d2",
              boxShadow: "0 0 0 3px rgba(25, 118, 210, 0.12)",
            },
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "#8a8aa3", fontSize: 20 }} />
          <InputBase
            placeholder="Search books, authors, ISBN…"
            sx={{
              flex: 1,
              fontSize: "0.9rem",
              color: "#1a1a2e",
              "& input::placeholder": { color: "#9a9ab0", opacity: 1 },
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        {/* RIGHT: Actions */}
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Mobile-only search toggle */}
          <IconButton
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#4a4a68",
              "&:hover": { bgcolor: "rgba(25, 118, 210, 0.08)" },
            }}
            onClick={() => setShowSearch((s) => !s)}
            aria-label="toggle search"
          >
            <SearchIcon />
          </IconButton>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#1976d2",
              borderColor: "rgba(25, 118, 210, 0.4)",
              borderRadius: 2,
              px: 2,
              display: { xs: "none", sm: "inline-flex" },
              "&:hover": {
                borderColor: "#1976d2",
                bgcolor: "rgba(25, 118, 210, 0.04)",
              },
            }}
          >
            Sign up
          </Button>

          <Button
            variant="contained"
            startIcon={<LoginIcon sx={{ fontSize: 18 }} />}
            disableElevation
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              bgcolor: "#1976d2",
              borderRadius: 2,
              px: 2.5,
              py: 1,
              boxShadow: "0 2px 8px rgba(25, 118, 210, 0.3)",
              "&:hover": {
                bgcolor: "#1565c0",
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.4)",
              },
            }}
          >
            Sign in
          </Button>
        </Stack>
      </Toolbar>

      {/* Mobile search bar */}
      {showSearch && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            bgcolor: "#f4f6f8",
            borderTop: "1px solid",
            borderColor: "divider",
            px: 2,
            py: 1.5,
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "#8a8aa3", fontSize: 20 }} />
          <InputBase
            autoFocus
            placeholder="Search books, authors…"
            sx={{ flex: 1, fontSize: "0.9rem" }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      )}
    </AppBar>
  );
};

export default Navbar;
