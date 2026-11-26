import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const navLinks = ["Home", "Categories", "About", "Contact", "Privacy"];

const socials = [
  { icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
  { icon: <TwitterIcon fontSize="small" />, label: "Twitter" },
  { icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
  { icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#ffffff",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        {/* TOP ROW — brand • links • socials */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ py: 2 }}
        >
          {/* Brand */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: 1.5,
                background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                color: "white",
              }}
            >
              <MenuBookIcon sx={{ fontSize: 16 }} />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 800, color: "#1a1a2e", letterSpacing: -0.3 }}
            >
              Library
            </Typography>
          </Stack>

          {/* Links */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 3 }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {navLinks.map((label) => (
              <Link
                key={label}
                href="#"
                underline="none"
                sx={{
                  fontSize: "0.85rem",
                  color: "#6b6b85",
                  "&:hover": { color: "#1976d2" },
                }}
              >
                {label}
              </Link>
            ))}
          </Stack>

          {/* Socials */}
          <Stack direction="row" spacing={0.5}>
            {socials.map((s) => (
              <IconButton
                key={s.label}
                aria-label={s.label}
                size="small"
                sx={{
                  color: "#6b6b85",
                  "&:hover": {
                    color: "#1976d2",
                    bgcolor: "rgba(25, 118, 210, 0.08)",
                  },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>

        <Divider />

        {/* BOTTOM ROW — copyright */}
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            color: "#8a8aa3",
            py: 1.5,
          }}
        >
          © {new Date().getFullYear()} Library. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
