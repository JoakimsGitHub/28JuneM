import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyle.css";

import Header from "./hfsFolder/header";
import Footer from "./hfsFolder/footer";
import Sidebar from "./hfsFolder/sidebar";
import HomePage from "./pageFolder/homePage";
import SportPage from "./pageFolder/sportPage";
import JoinPage from "./pageFolder/joinPage";
import AboutPage from "./pageFolder/aboutPage";
import MemberPage from "./pageFolder/memberPage";
import NoPage from "./pageFolder/noPage";
import MetaTags from "./metaTags";
import { ContextProvider } from "./context/genericContext.jsx";

// Root of the component tree.
// The context provider component wraps around the consumer components.
function App() {
  const isSlugAvailable = window.location.pathname !== "/";
  return (
    <ContextProvider>
      <main>
        <BrowserRouter>
          <MetaTags />
          {isSlugAvailable ? (
            <>
              <Header />
              {/* <Sidebar /> */}
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/sport" element={<SportPage />} />
                <Route path="/join" element={<JoinPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/member" element={<MemberPage />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
              <Footer />
            </>
          ) : (
            <Routes>
              <Route path="*" element={<NoPage />} />
            </Routes>
          )}
        </BrowserRouter>
      </main>
    </ContextProvider>
  );
}

export default App;
