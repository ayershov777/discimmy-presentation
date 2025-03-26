import { useRef } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Vision from './sections/Vision';
import Journey from './sections/Journey';
import Success from './sections/Success';
import HowItWorks from './sections/HowItWorks';
import Join from './sections/Join';
import './App.css';

// Define the main sections of the presentation
const sections = [
  { id: 'vision', label: 'Our Vision', component: Vision },
  { id: 'journey', label: 'Your Journey on Discimmy', component: Journey },
  { id: 'success', label: 'Success Stories', component: Success },
  { id: 'how-it-works', label: 'How Discimmy Works', component: HowItWorks },
  { id: 'join', label: 'Join Our Community', component: Join },
];

// Create a more cohesive theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Indigo
      light: '#757de8',
      dark: '#002984',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057', // Pink
      light: '#ff5983',
      dark: '#bb002f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      marginBottom: '0.75rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      marginBottom: '0.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  spacing: 8,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '2rem 0',
        },
      },
    },
  },
});

function App() {
  // Create refs for each section for scrolling
  const sectionRefs = {
    vision: useRef<HTMLDivElement>(null),
    journey: useRef<HTMLDivElement>(null),
    success: useRef<HTMLDivElement>(null),
    'how-it-works': useRef<HTMLDivElement>(null),
    join: useRef<HTMLDivElement>(null),
  };

  // Handle navigation by scrolling to the appropriate section
  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Always use a consistent offset for scrolling
      const offset = 60; // Fixed offset regardless of nav state

      // Calculate the target position
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;

      // Scroll to the target position
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="app-container">
        <Header onNavigate={handleNavigation} />
        <Navigation
          sections={sections}
          onNavigate={handleNavigation}
        />
        <Box component="main" className="content-container">
          {/* Render all sections with refs */}
          <div ref={sectionRefs.vision} id="vision">
            <Vision />
          </div>
          <div ref={sectionRefs.journey} id="journey">
            <Journey />
          </div>
          <div ref={sectionRefs.success} id="success">
            <Success />
          </div>
          <div ref={sectionRefs['how-it-works']} id="how-it-works">
            <HowItWorks />
          </div>
          <div ref={sectionRefs.join} id="join">
            <Join />
          </div>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;