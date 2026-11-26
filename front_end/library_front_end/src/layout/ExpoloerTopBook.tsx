import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const ExploreTopBook = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #1976d2 0%, #42a5f5 60%, #64b5f6 100%)",
        color: "white",
        borderRadius: 3,
        py: { xs: 5, md: 7 },
        px: { xs: 3, md: 6 },
      }}
    >
      {/* Decorative background circles */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.08)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          right: 80,
          width: 180,
          height: 180,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.06)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          {/* Small eyebrow label */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{
              bgcolor: "rgba(255,255,255,0.15)",
              px: 2,
              py: 0.5,
              borderRadius: 5,
            }}
          >
            <AutoStoriesIcon sx={{ fontSize: 18 }} />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 600,
                letterSpacing: 1.2,
                textTransform: "uppercase",
              }}
            >
              Discover
            </Typography>
          </Stack>

          {/* Main heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            Find Your Next Adventure
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: 520,
              opacity: 0.9,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.7,
            }}
          >
            Dive into thousands of books across every genre — from timeless
            classics to modern bestsellers. Your next favorite story is one
            click away.
          </Typography>

          {/* CTA button */}
          <Button
            variant="contained"
            disableElevation
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 1,
              textTransform: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              bgcolor: "white",
              color: "#1976d2",
              px: 3.5,
              py: 1.3,
              borderRadius: 2,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              "&:hover": {
                bgcolor: "#e3f2fd",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                transform: "translateY(-1px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Explore Top Books
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ExploreTopBook;
