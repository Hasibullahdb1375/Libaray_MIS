import React from "react";
import { Typography, Box, Chip, Paper, Stack } from "@mui/material";
import { version as muiVersion } from "@mui/material/package.json";

const Test = () => {
  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          color: "white",
          minWidth: 320,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            component="img"
            src="https://mui.com/static/logo.png"
            alt="MUI logo"
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Material UI
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Installed version
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="body1" fontWeight="bold">
            Version:
          </Typography>
          <Chip
            label={`v${muiVersion}`}
            color="success"
            size="small"
            sx={{ fontWeight: "bold", bgcolor: "white", color: "#1976d2" }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Test;
