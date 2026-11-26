import { Box, Container, Divider } from "@mui/material";
import BookCarousel from "./BookCarousel"; // Adjust path as needed

// --- SAMPLE DATA FOR MULTIPLE CAROUSELS ---

const sciFiBooks: Book[] = [
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    tag: "Science fiction",
    why: "Funny, tense, and deeply satisfying. You’ll keep saying “just one more chapter” until sunrise.",
    gradient: "linear-gradient(145deg, #7c2d12, #fb923c)",
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    author: "Blake Crouch",
    tag: "Sci-fi thriller",
    why: "A propulsive multiverse thriller with short chapters and constant cliffhangers.",
    gradient: "linear-gradient(145deg, #0f172a, #64748b)",
  },
];

const thrillerBooks: Book[] = [
  {
    id: "gone-girl",
    title: "Gone Girl",
    author: "Gillian Flynn",
    tag: "Psychological thriller",
    why: "The definition of unputdownable: sharp twists, unreliable people, and a plot that refuses to let go.",
    gradient: "linear-gradient(145deg, #064e3b, #34d399)",
  },
  {
    id: "silent-patient",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    tag: "Mystery thriller",
    why: "A quick, addictive read with a final twist that makes late-night reading worth it.",
    gradient: "linear-gradient(145deg, #713f12, #facc15)",
    coverTextColor: "#1c1917",
  },
];

const cozyBooks: Book[] = [
  {
    id: "cerulean-sea",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    tag: "Cozy fantasy",
    why: "Warm, funny, and quietly moving. Perfect for staying up late with a blanket and a mug of tea.",
    gradient: "linear-gradient(145deg, #831843, #fb7185)",
  },
];

export default function ReturnBooksPage() {
  return (
    <Box sx={{ bgcolor: "#f6f1ea", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="md">
        {/* 1. Original Carousel (Uses default title and default 8 books) */}
        <BookCarousel />

        <Divider sx={{ my: 6 }} />

        {/* 2. Sci-Fi Carousel (Custom title and custom books) */}
        <BookCarousel books={sciFiBooks} title="Out of this world Sci-Fi" />

        <Divider sx={{ my: 6 }} />

        {/* 3. Thriller Carousel */}
        <BookCarousel
          books={thrillerBooks}
          title="Keep the lights on Thrillers"
        />

        <Divider sx={{ my: 6 }} />

        {/* 4. Cozy Carousel */}
        <BookCarousel
          books={cozyBooks}
          title="Cozy fantasy to wind down"
          autoplay={true} // You can even enable autoplay on just this one
        />
      </Container>
    </Box>
  );
}
