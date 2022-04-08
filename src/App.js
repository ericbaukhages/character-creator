import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import BackgroundDecoration from "./components/BackgroundDecoration";

function App() {
  return (
    <>
      <BackgroundDecoration />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
