import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export interface Book {
  id: string;
  title: string;
  author: string;
  tag: string;
  why: string;
  gradient: string;
  coverTextColor?: string;
}

const defaultBooks: Book[] = [
  {
    id: "midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    tag: "Speculative fiction",
    why: "A fast, emotional what-if story that makes you keep turning pages to see which life she chooses next.",
    gradient: "linear-gradient(145deg, #1e3a8a, #60a5fa)",
  },
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    author: "Andy Weir",
    tag: "Science fiction",
    why: "Funny, tense, and deeply satisfying. You’ll keep saying “just one more chapter” until sunrise.",
    gradient: "linear-gradient(145deg, #7c2d12, #fb923c)",
  },
  {
    id: "evelyn-hugo",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    tag: "Historical drama",
    why: "A gossipy, glamorous, emotionally charged novel that practically reads itself.",
    gradient: "linear-gradient(145deg, #4c1d95, #c084fc)",
  },
  {
    id: "gone-girl",
    title: "Gone Girl",
    author: "Gillian Flynn",
    tag: "Psychological thriller",
    why: "The definition of unputdownable: sharp twists, unreliable people, and a plot that refuses to let go.",
    gradient: "linear-gradient(145deg, #064e3b, #34d399)",
  },
  {
    id: "cerulean-sea",
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    tag: "Cozy fantasy",
    why: "Warm, funny, and quietly moving. Perfect for staying up late with a blanket and a mug of tea.",
    gradient: "linear-gradient(145deg, #831843, #fb7185)",
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    author: "Blake Crouch",
    tag: "Sci-fi thriller",
    why: "A propulsive multiverse thriller with short chapters and constant cliffhangers.",
    gradient: "linear-gradient(145deg, #0f172a, #64748b)",
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
  {
    id: "circe",
    title: "Circe",
    author: "Madeline Miller",
    tag: "Mythological fiction",
    why: "Lush, immersive, and dramatic. You’ll keep reading because the prose feels like a spell.",
    gradient: "linear-gradient(145deg, #172554, #38bdf8)",
  },
];

interface BookCarouselProps {
  books?: Book[];
  initialIndex?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  swipeThreshold?: number;
  title?: React.ReactNode;
}

export default function BookCarousel({
  books = defaultBooks,
  initialIndex = 0,
  autoplay = false,
  autoplayInterval = 5000,
  swipeThreshold = 50,
  title = ( // <-- ADD DEFAULT TITLE
    <>
      Find your next{" "}
      <Box
        component="span"
        sx={{ color: "secondary.main", fontStyle: "italic" }}
      >
        “I stayed up too late reading”
      </Box>{" "}
      book
    </>
  ),
}: BookCarouselProps) {
  const count = books.length;
  const [currentIndex, setCurrentIndex] = useState(
    count > 0 ? Math.min(initialIndex, count - 1) : 0,
  );

  const goToSlide = useCallback(
    (index: number) => {
      if (count === 0) return;
      setCurrentIndex(((index % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(
    () => goToSlide(currentIndex + 1),
    [currentIndex, goToSlide],
  );
  const prev = useCallback(
    () => goToSlide(currentIndex - 1),
    [currentIndex, goToSlide],
  );

  useEffect(() => {
    setCurrentIndex((i) => (count === 0 ? 0 : Math.min(i, count - 1)));
  }, [count]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => next(), autoplayInterval);
    return () => window.clearInterval(id);
  }, [autoplay, autoplayInterval, count, next]);

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < swipeThreshold) return;
    if (Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) next();
    else prev();
  };

  const handleTouchCancel = () => {
    touchStart.current = null;
  };

  if (count === 0) {
    return (
      <Typography align="center" color="text.secondary">
        No books to display.
      </Typography>
    );
  }

  return (
    <Box
      component="main"
      aria-roledescription="carousel"
      aria-label="Book recommendations"
      sx={{ width: "100%", maxWidth: 920, mx: "auto", position: "relative" }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{
          mb: 3,
          fontSize: { xs: "1.6rem", sm: "2.1rem" },
          lineHeight: 1.15,
        }}
      >
        Find your next{" "}
        <Box
          component="span"
          sx={{ color: "secondary.main", fontStyle: "italic" }}
        >
          “I stayed up too late reading”
        </Box>{" "}
        book
      </Typography>

      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "#fffdf9",
          backgroundImage: "none",
          boxShadow: "0 24px 60px rgba(60, 35, 20, 0.16)",
          width: "100%",
        }}
      >
        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchCancel}
          sx={{
            display: "flex",
            width: "100%", // FIX: Constrain track to window width
            transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: "transform",
            touchAction: "pan-y",
            userSelect: "none",
            WebkitUserSelect: "none",
            WebkitTouchCallout: "none",
            overscrollBehaviorX: "contain",
          }}
        >
          {books.map((book, index) => (
            <Box
              key={book.id}
              component="article"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}: ${book.title}`}
              sx={{
                flex: "0 0 100%",
                width: "100%", // FIX: Force slide width
                maxWidth: "100%", // FIX: Prevent bleeding
                minWidth: 0, // FIX: Critical for allowing text to wrap instead of expanding the slide
                boxSizing: "border-box", // FIX: Ensure padding is inside the 100% width
                display: "grid",
                // FIX: Use minmax(0, 1fr) to prevent long text from blowing out the grid columns
                gridTemplateColumns: {
                  xs: "minmax(0, 1fr)",
                  sm: "220px minmax(0, 1fr)",
                },
                gap: { xs: 2, sm: 4 },
                alignItems: "center",
                justifyItems: { xs: "center", sm: "stretch" },
                textAlign: { xs: "center", sm: "left" },
                p: { xs: 3, sm: 4.5 },
                minHeight: { sm: 380 },
              }}
            >
              <Box
                aria-hidden
                sx={{
                  flexShrink: 0, // FIX: Prevent cover from shrinking
                  width: { xs: 150, sm: 200 },
                  height: { xs: 225, sm: 300 },
                  borderRadius: 1.25,
                  display: "grid",
                  placeItems: "center",
                  p: 2.25,
                  color: book.coverTextColor ?? "#fff",
                  textAlign: "center",
                  fontWeight: 800,
                  fontSize: { xs: "0.85rem", sm: "1.05rem" },
                  lineHeight: 1.2,
                  background: book.gradient,
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 16px 30px rgba(0,0,0,0.22)",
                  transform: "rotate(-2deg)",
                }}
              >
                {book.title}
              </Box>

              <Box sx={{ minWidth: 0 }}>
                {" "}
                {/* FIX: Allow text container to shrink */}
                <Chip
                  label={book.tag}
                  size="small"
                  sx={{
                    mb: 1.25,
                    bgcolor: "#fef3c7",
                    color: "#92400e",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                />
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem" },
                    mb: 0.5,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {book.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  by {book.author}
                </Typography>
                <Typography
                  sx={{
                    maxWidth: "48ch",
                    lineHeight: 1.6,
                    mx: { xs: "auto", sm: 0 },
                  }}
                >
                  {book.why}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mt: 2.5, flexWrap: "wrap" }}
      >
        <Button
          variant="contained"
          startIcon={<ArrowBackRoundedIcon />}
          onClick={prev}
          aria-label="Previous book"
          sx={{
            bgcolor: "#1f1a17",
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 700,
            "&:hover": { bgcolor: "#9a3412" },
          }}
        >
          Previous
        </Button>

        <Box
          role="tablist"
          aria-label="Choose book"
          sx={{
            order: { xs: 3, sm: 0 },
            width: { xs: "100%", sm: "auto" },
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {books.map((book, index) => {
            const isActive = index === currentIndex;
            return (
              <Box
                key={book.id}
                component="button"
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to book ${index + 1}: ${book.title}`}
                onClick={() => goToSlide(index)}
                sx={{
                  position: "relative",
                  width: 10,
                  height: 10,
                  p: 0,
                  border: 0,
                  borderRadius: "50%",
                  cursor: "pointer",
                  bgcolor: isActive ? "#9a3412" : "#d6c7b8",
                  transform: isActive ? "scale(1.35)" : "none",
                  transition: "background-color .2s, transform .2s",
                  WebkitTapHighlightColor: "transparent",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: -7,
                    borderRadius: "50%",
                  },
                  "&:focus-visible": {
                    outline: "3px solid #fb923c",
                    outlineOffset: 3,
                  },
                }}
              />
            );
          })}
        </Box>

        <Button
          variant="contained"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={next}
          aria-label="Next book"
          sx={{
            bgcolor: "#1f1a17",
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 700,
            "&:hover": { bgcolor: "#9a3412" },
          }}
        >
          Next
        </Button>
      </Stack>

      <Box
        aria-live="polite"
        sx={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        Book {currentIndex + 1} of {count}: {books[currentIndex].title}
      </Box>
    </Box>
  );
}
