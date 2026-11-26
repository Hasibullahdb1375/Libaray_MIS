import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ExploreTopBook from "./layout/ExpoloerTopBook";
import BookCarousel from "./layout/BookCarousel";
import ReturnBooksPage from "./layout/ReturnBooksPage";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box sx={{ flex: 1, bgcolor: "#f5f5f5", py: 4 }}>
        <Container maxWidth="lg">
          <ExploreTopBook />
          <BookCarousel />

          {/* rest of your content goes here */}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
