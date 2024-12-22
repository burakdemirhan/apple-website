import Features from "./components/Features";
import Hero from "./components/Hero";
import Highligths from "./components/Highligths";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";

import "./index.css";
import * as Sentry from "@sentry/react";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highligths />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
