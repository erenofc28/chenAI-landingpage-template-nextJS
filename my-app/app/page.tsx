import Hero from "./components/Hero";
import Header from "./components/Header";
import Features from "./components/Features";
import FeaturesWhite from "./components/FeaturesWhite";
import Logos from "./components/Logos";
import Stats from "./components/Stats";
import ContentBoxes from "./components/ContentBoxes";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        title={
          <>
            Threats <br />
            evolve. Your defences <br />
            must too.
          </>
        }
        content="Digisecuritas detects what others miss and responds before damage spreads. Built for enterprises that refuse to compromise on speed or clarity."
        imgSrc={
          <>
            <svg
              className="w-16 h-16 md:w-24 md:h-24 text-white opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="7" cy="7" r="2" />
              <path d="M2 2h16v16H2V2zm2 2v12h12V4H4zm2 10l3-4 2 3 3-5 4 6H6z" />
            </svg>
          </>
        }
      />

      <Features />
      <Logos />
      <Stats />
      <ContentBoxes />
      <FeaturesWhite />
      <Hero
        title={<>Medium length heading goes here</>}
        content="Lorem ipsum dolor sit amet  ducimus placeat blanditiis, quod quae voluptate unde enim aliquid est."
        imgSrc={
          <>
            <svg
              className="w-16 h-16 md:w-24 md:h-24 text-white opacity-50"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="7" cy="7" r="2" />
              <path d="M2 2h16v16H2V2zm2 2v12h12V4H4zm2 10l3-4 2 3 3-5 4 6H6z" />
            </svg>
          </>
        }
      />

      <FAQSection />
      <Footer />
    </>
  );
}
