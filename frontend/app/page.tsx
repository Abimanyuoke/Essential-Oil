import AboutLetter from "./components/AboutLetter";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5">
        <AboutLetter />
      </div>
    </div>
  );
}
