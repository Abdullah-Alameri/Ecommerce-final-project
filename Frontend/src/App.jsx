import Header2 from "./Components/header/Header2"
import Header1 from "./Components/header/Header1"
import Header3 from "./Components/header/Header3"
import Hero from "./Components/hero/Hero";


import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./Components/scroll/ScrollToTop";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider 
// @ts-ignore
      value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
    <Header1/>
    <Header2/>
    <Header3/>

    <Box bgcolor={theme.
// @ts-ignore
    palette.bg.main}>
      <Hero/>
      <Main/>
    </Box>

    <Footer />

    <ScrollToTop/>

    </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}

export default App
